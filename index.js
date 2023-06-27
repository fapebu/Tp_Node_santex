const express = require("express");

const { bookRouter, userRouter, libraryRouter } = require("./routes");
//const loggingMdw = require("./middleware/logging");
const { initializeDB } = require("./config/dbconfig");

const PORT = 3000;
//const bookFile = "book.json";

const app = express();

// Application Middlewares
app.use(express.json());

//app.use(loggingMdw);

/*app.get("/user", (req, res) => {
  console.log("User", req.user);

  res.send("<h1>Hello World</h1>");
});*/

app.use("/library", libraryRouter);
app.use("/book", bookRouter);
app.use("/user", userRouter);

/*const errorHandler = (err, req, res, next) => {
  if (err.message === "File Exists") {
    res.status(500);
    res.json({ message: `File ${bookFile} exists` });
  } else {
    res.status(500);
    res.json({ message: err.message });
  }
};

app.use(errorHandler);*/

app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Server running in ${PORT}`);
});