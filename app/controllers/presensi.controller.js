const db = require("../models");
const Presensi = db.presensis;
const Mahasantri = db.mahasantris;


exports.index = (req, res) => {
  Presensi.findAll()
    .then((data) => {
      res.json({
        message: "Data presensi ditemukan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Data presensi tidak ditemukan",
      });
    });
};

exports.create = (req, res) => {
  const presensi = {
    idmhs: req.body.idmhs,
    status: req.body.status,
  };

  Presensi.create(presensi)
    .then((data) => {
      res.json({
        message: "Data presensi berhasil ditambahkan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Gagal ditambahkan",
      });
    });
};

// Membuat function untuk menghapus data presensi
exports.destroy = (req, res) => {
  const id = req.params.id;
  Presensi.destroy({
    where: { id: id },
  })
    .then((data) => {
      res.json({
        message: "Data presensi berhasil dihapus",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Gagal dihapus",
      });
    });
};

// Membuat function untuk mengupdate data presensi
exports.update = (req, res) => {
  const id = req.params.id;
  Presensi.update(req.body, {
    where: { id: id },
  })
    .then((data) => {
      res.json({
        message: "Data presensi berhasil diupdate",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Gagal diupdate",
      });
    });
};

// function untuk menampilkan data presensi
exports.show = (req, res) => {
  const id = req.params.id;
  Presensi.findByPk(id)
    .then((data) => {
      res.json({
        message: "Data presensi ditemukan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Data presensi tidak ditemukan",
      });
    });
};

exports.Mhs = (req, res) => {
  const id = req.params.id;

  Presensi.findByPk(id)
    .then((presensi) => {
      if (!presensi) {
        return res.status(404).json({ message: "Data presensi tidak ditemukan" });
      }

      Mahasantri.findByPk(presensi.idmhs)
        .then((mahasantri) => {
          if (!mahasantri) {
            return res.status(404).json({ message: "Data mahasantri tidak ditemukan" });
          }

          const presensiInfo = {
            idmhs: presensi.idmhs,
            status: presensi.status,
            nama: mahasantri.nama,
            asal: mahasantri.asal,
            umur: mahasantri.umur,
            telepon: mahasantri.telepon,
          };

          res.json({
            message: "Data presensi ditemukan",
            data: presensiInfo,
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: err.message || "Terjadi kesalahan saat mencari data mahasantri",
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Terjadi kesalahan saat mencari data presensi",
      });
    });
};
