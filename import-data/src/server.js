import sql from "mssql";
import dotenv from "dotenv";
import { CsvToArray } from "./csv.js";
import { parse } from "csv-parse";
import { circuitsTable } from "./tables.js";

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

const insertData = async (fileName, tableFunction) => {
  const csvToArray = new CsvToArray();
  const data = await csvToArray.read(fileName);
  const table = tableFunction();
  for (let i = 1; i < data.length; i++) {
    // console.log(data[i]);
    table.rows.add(...data[i]);
  }
  console.log(table);
};

insertData(fileName, circuitsTable);
