import { Low, JSONFile } from "lowdb";

async function testing(names) {
  const adapter = new JSONFile("./db.json");
  const db = new Low(adapter);

  await db.read();

  db.data = db.data || { message: [] };

  db.data.messages.push(`${names}`);
  console.log(db.data.messages);

  await db.write();
}

testing("JUst to test IT");

export default testing;
