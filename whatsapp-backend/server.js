import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import  cors  from "cors";


//app config
const app = express();
const port = 9000;

const pusher = new Pusher({
  appId: "1645780",
  key: "d9feccc5c48d410834b4",
  secret: "42168487c0d7d75c1744",
  cluster: "us3",
  useTLS: true,
});


//middleware
app.use(express.json());

app.use(cors());

//db config
const connection_url =
  "mongodb+srv://admin:ooq2c0K8aS3AWtee@cluster0.x254xfo.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
});

//to check if database connected
const db = mongoose.connection;

db.once("open", () => {
  console.log("DB connected");

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log("Change happened", change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;

      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp:messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("Pusher has encountered an error");
    }
  });
});
//api routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/messages/sync", (req, res) => {
  Messages.find().then((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessages = req.body;

  Messages.create(dbMessages).then((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      req.status(201).send(data);
    }
  });
});
//listen
app.listen(port, () => console.log("Listening on localhost"));
