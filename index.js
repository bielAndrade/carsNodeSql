require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes/router");
const port = process.env.PORT;

const app = express();
app.use(cors());
app.use("/cars", routes);



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
