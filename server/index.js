const express = require("express");
const app = express();
const database = require("./config/database")
const dotenv = require("dotenv");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

const cors = require("cors");

dotenv.config();
const PORT = process.env.PORT || 4000;

//databse connect
database.connect();

//middleware
app.use(express.json());
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)

//routes
app.use("/api/fritado/auth" , userRoutes);
app.use("/api/fritado/post" , postRoutes);
//app.use("/api/fritado/post" ,)

//default routes
app.get("/" , (req,res) =>{
    return res.json({
        success:true,
        message:"Your server is up and running...."
    });
});

app.listen(PORT , () =>{
    console.log(`App is listening at ${PORT}`);
})
