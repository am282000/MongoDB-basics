const mongoose = require("mongoose");
const User = require("./User");
mongoose.connect(
  "mongodb://localhost/testDB"
);

async function run() {
  try {
    const user = await User.findOne({name:"Sally"})
    console.log("Data saved", user);   
    await user.save() 
    console.log(user);
    
  } catch (e) {
    console.log("Error occured :", e.message);
  }
}
run();
