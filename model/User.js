import mongoose from "mongoose";

const recipesSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'recipes' }]
});

const recipes =
  mongoose.models.user || mongoose.model("user", recipesSchema);

export default recipes;
