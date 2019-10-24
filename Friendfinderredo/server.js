const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("../routes/apiRoutes.js")(app);
require("../routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});