const express = require("express");
const morgan = require("morgan");
const postBank = require("./postBank");
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  const posts = postBank.list();

  const html = `<!DOCTYPE html>
  <html>
  <head>
  <h1>Wizard News</h1>
  </head>
  <body>
  <ul>
  ${posts.map((post) => `<li>${post.name}</li>`)}
  </ul>
  </body>
  </html>`;

  res.send(html);
});

const PORT = 2000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
