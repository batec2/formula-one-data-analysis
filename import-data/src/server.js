import sql from "mssql";
import dotenv from "dotenv";
import { parse } from "csv-parse";
import { readFile } from "node:fs/promises";

dotenv.config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

try {
  const data = await readFile("./f1-data/circuits.csv", "utf8");
  console.log(data);
} catch (e) {
  console.log(e);
}

const dataArray = [];

const parser = parse({ delimiter: "," });
parser.on("readable", () => {
  const data = parser.read();
  dataArray.push(data);
});
parser.on("error", (err) => {
  console.log(err);
});
parser.on("end", () => {
  console.log(data);
});
