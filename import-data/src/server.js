import sql from "mssql";
import dotenv from "dotenv";
import { CsvToArray } from "./csv.js";
import { parse } from "csv-parse";

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

const csvToArray = new CsvToArray();
const data = csvToArray.read(fileName);
console.log(await data);
