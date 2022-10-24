const express = require("express");
const morgan = require("morgan");
const app = express();

app.get("/", (req, res) => res.send("Hello everybody!"));
app.use(morgan("dev"));

const PORT =2000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
