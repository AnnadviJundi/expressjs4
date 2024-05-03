module.exports = (sequelize, Sequelize) => {
  const Presensi = sequelize.define("presensi", {
    idmhs: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Presensi;
};
