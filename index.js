//Importing the auth routes module
const auth = require("./src/routes/auth.routes");

//using the auth route 
app.use("/api/auth", auth)
