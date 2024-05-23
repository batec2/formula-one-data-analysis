DROP TABLE circuits;
CREATE TABLE circuits(
  circuitId INT PRIMARY KEY,
  circuitRef VARCHAR(20),
  name VARCHAR(50),
  location,
  country,
  lat,
  lng,
  alt
  url
);