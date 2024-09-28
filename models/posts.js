import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    posts: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { Timestamp: true }
);


const Post = mongoose.model('Post', postSchema);

export default Post;