import mongoose from "mongoose"

const todoSchema=new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,

    },
    data: {
      type: Boolean,
      default: false

    },
    createdBy: {
      type: mongoose.Schema.types.ObjectId,
      ref: "User"
    },
    subTodos: [
      {
        type: mongoose.Schema.types.ObjectId,
        ref: "SubTodo"

      }
      //array of subtodos
    ]
    
     

  },
  {timestamps: true}

)
export const Todo=mongoose.model('Todo',todoSchema)