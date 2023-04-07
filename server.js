const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const loginRoute = require("./routes/login");
const cardRoute = require("./routes/card");
const deskRoute = require("./routes/desk");
const likeRoute = require("./routes/like");
const commentRoute = require("./routes/comment");
const historyRoute = require("./routes/history");
const notiRoute = require("./routes/notification");
const rateRoute = require("./routes/rate");

const PORT = 5000;

const DB_URL = `mongodb+srv://giakinh:giakinh@project2023.ehqvjgq.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
app.use(cors());
app.use(express.json());
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));

app.use("/", loginRoute);
app.use("/", cardRoute);
app.use("/", deskRoute);
app.use("/", likeRoute);
app.use("/", commentRoute);
app.use("/", historyRoute);
app.use("/", notiRoute);
app.use("/", rateRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
