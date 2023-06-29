const express = require("express");

const { bookRouter, userRouter, libraryRouter } = require("./routes");
const { initializeDB } = require("./config/dbconfig");

const PORT = 3000;
const app = express();
app.use(express.json());


app.use("/library", libraryRouter);
app.use("/book", bookRouter);
app.use("/user", userRouter);


app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Server running in ${PORT}`);
});