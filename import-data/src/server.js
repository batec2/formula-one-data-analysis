import sql from "mssql";
import dotenv from "dotenv";
import { parse } from "csv-parse";
import { createReadStream } from "node:fs";

const fileName = "./f1-data/circuits.csv";

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
const dataArray = [];

const parser = parse({ delimiter: "," });
parser.on("readable", () => {
  let data = parser.read();
  while ((data = parser.read()) !== null) {
    dataArray.push(data);
  }
});
parser.on("error", (err) => {
  console.log(err);
});
parser.on("end", () => {
  console.log(dataArray);
});
// https://stackoverflow.com/questions/70556960/does-csv-parse-allow-you-to-read-from-file
try {
  createReadStream(fileName).pipe(parser);
} catch (e) {
  console.log(e);
}
