import sql from "mssql";

/**
 *
 * @returns {sql.Table}
 */
export const circuitsTable = () => {
  const table = new sql.Table("circuits");
  table.columns.add("circuitId", sql.SmallInt, {
    nullable: false,
    primary: true,
  });
  table.columns.add("circuitRef", sql.VarChar(50), { nullable: false });
  table.columns.add("name", sql.VarChar(50), { nullable: false });
  table.columns.add("location", sql.VarChar(50), { nullable: false });
  table.columns.add("lat", sql.Decimal(12, 9), { nullable: false });
  table.columns.add("lng", sql.Decimal(12, 9), { nullable: false });
  table.columns.add("alt", sql.SmallInt, { nullable: false });
  table.columns.add("url", sql.VarChar(100), { nullable: false });
  return table;
};
