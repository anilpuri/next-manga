import { Schema, model, models } from "mongoose";

const ChapterSchema = new Schema(
  {
    manga: { type: Schema.Types.ObjectId, ref: "Manga" },
    no: { type: Number, required: [true, "Chapter No is required."] },
    name: {
      type: String,
      required: [true, "Chapter Name is required."],
    },
    images: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Chapter = models.Chapter || model("Chapter", ChapterSchema);

export default Chapter;
