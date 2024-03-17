import { Schema, model, models } from "mongoose";

const GenreSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Genre Name is required."],
    },
  },
  {
    timestamps: true,
  }
);

const Genre = models.Genre || model("Genre", GenreSchema);

export default Genre;
