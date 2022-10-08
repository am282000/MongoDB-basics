/*********Schemas ***********/

const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  address: {
    street: String,
    city: String,
  },
});

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email:String,
  createdAt: Date,
  updatedAt: Date,
  bestFriend: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  hobbies: [String],
  address: addressSchema,
});

userSchema.methods.sayHi= function(){
    console.log("Sayyyying hii");
}

userSchema.pre('save',function(next){
    this.sayHi()
    throw new Error("Mai fail ho gyaa")
    next()
})

module.exports = mongoose.model("User", userSchema);
