const mongoose = require("mongoose");
const app = require("./app");

mongoose.set("strictQuery", false);

const {DB_HOST, PORT} = process.env;

mongoose.connect(DB_HOST).then(() => {
    console.log("Database connection's successful")
    app.listen(PORT)
}).catch((error)=>{
    console.log(error.message)
    process.exit(1)
});