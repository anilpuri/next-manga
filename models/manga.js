import { Schema, model, models } from "mongoose";

const MangaSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Manga Name is required."],
      unique: [true, "Manga Name already exists!"],
    },
    status: {
      type: String,
      enum: ["on-going", "completed", "cancelled"],
    },
    genre: {
      type: [String],
      default: [],
    },
    views: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
    },
    artists: {
      type: [String],
      default: [],
    },
    authors: {
      type: [String],
      default: [],
    },
    alternate_names: {
      type: [String],
      default: [],
    },
    summary: {
      type: String,
    },
    ratings: {
      type: [Number],
      default: [],
      validate: {
        validator: function (val) {
          return val.every((rating) => rating >= 0 && rating <= 5);
        },
        message: (props) =>
          `${props.value} is not a valid rating. Ratings must be between 0 and 5.`,
      },
    },
    latest_release: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Manga = models.Manga || model("Manga", MangaSchema);

export default Manga;
