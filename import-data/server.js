// import CsvToDb from "@batec2/csvtodb";
import CsvToDb from "../../CsvToDb/index.js";
import { circuitsTable } from "./src/tables.js";
import dotenv from "dotenv";
dotenv.config();

const fileName = "./f1-data/circuits.csv";
const config = {
  host: process.env.DB_ADDRESS,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB,
};

const parser = new CsvToDb(config);

parser.read(string,,2)
