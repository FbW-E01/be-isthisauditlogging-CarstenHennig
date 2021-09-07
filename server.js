import express from "express";
// import testing from "./testing";
import { Low, JSONFile } from "lowdb";

const app = express();

app.use(express.json());

async function testing(date, path, names) {
  const adapter = new JSONFile("./db.json");
  const db = new Low(adapter);

  await db.read();

  db.data = db.data || { messages: [] };

  db.data.messages.push({ date, path, names });
  console.log(db.data.messages);

  await db.write();
}

function myLog(req, res, next) {
  //   testing("Carsten was here");
  console.log("Request received " + req.method + " : " + req.path);
  next();
}

app.use("/:path", myLog);

app.get("/", (req, res) => {
  const currentDate = new Date().toUTCString();
  testing(currentDate, req.path, req.method);
});

app.post("/Carsten", (req, res) => {
  const currentDate = new Date().toUTCString();
  testing(currentDate, req.path, req.method);
});

app.post("/Date", (req, res) => {
  const currentDate = new Date().toUTCString();
  testing(currentDate, req.path, req.method);
});

app.listen(3000);
