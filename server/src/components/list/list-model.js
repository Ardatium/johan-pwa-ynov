import mongoose from "mongoose"

const { Schema } = mongoose

const listSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
}, {
  timestamps: true
})

const list = mongoose.model('list', listSchema)

export default list