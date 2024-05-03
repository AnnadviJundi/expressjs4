const db = require("../models");
const Mahasantri = db.mahasantris; // Perhatikan penulisan model Mahasantri

exports.index = (req, res) => {
  Mahasantri.findAll()
    .then((data) => {
      res.status(200).json({
        success: true,
        message: "Data Mahasantri ditemukan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message || "Gagal ditemukan",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Mahasantri.update(req.body, {
    where: { id: id },
  })
    .then((result) => {
      if (result[0] === 1) {
        res.status(200).json({
          success: true,
          message: "Data Mahasantri berhasil diperbarui",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Data Mahasantri tidak ditemukan",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message || "Gagal diperbarui",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Mahasantri.destroy({
    where: { id: id },
  })
    .then((result) => {
      if (result === 1) {
        res.status(200).json({
          success: true,
          message: "Data Mahasantri berhasil dihapus",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Data Mahasantri tidak ditemukan",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message || "Gagal dihapus",
      });
    });
};

exports.show = (req, res) => {
  const id = req.params.id;
  Mahasantri.findByPk(id)
    .then((data) => {
      if (data) {
        res.status(200).json({
          success: true,
          message: "Data Mahasantri ditemukan",
          data: data,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Data Mahasantri tidak ditemukan",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message || "Gagal ditemukan",
      });
    });
};

exports.create = (req, res) => {
  // Validasi input
  if (!req.body.nama || !req.body.asal || !req.body.umur || !req.body.telepon) {
    return res.status(400).json({
      success: false,
      message: "Nama, asal, umur, dan telepon harus diisi",
    });
  }

  const newMahasantri = {
    nama: req.body.nama,
    asal: req.body.asal,
    umur: req.body.umur,
    telepon: req.body.telepon,
  };

  Mahasantri.create(newMahasantri)
    .then((data) => {
      res.status(201).json({
        success: true,
        message: "Data Mahasantri berhasil ditambahkan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message || "Gagal ditambahkan",
      });
    });
};