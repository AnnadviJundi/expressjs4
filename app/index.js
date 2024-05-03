// melakukan import
const express = require("express");
const cors = require("cors");

// membuat objek express
const app = express();

// membuat alamat website lokal
const port = 9000;

// membuat route presensi
const presensiRoute = require("./routes/presensi.router");
const mahasantriRoute = require("./routes/mahasantri.router");

// konfigurasi
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync({ alter: true });

// routing
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// route presensi
app.use("/api/presensi", presensiRoute);
app.use("/api/mahasantri", mahasantriRoute);

app.listen(port, () => {
  console.log(`Aplikasi ini berjalan pada ${port}`);
});
