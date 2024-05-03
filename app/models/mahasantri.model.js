module.exports = (sequelize, Sequelize) => {
  const Mahasantri = sequelize.define("mahasantri", {
    nama: {
      type: Sequelize.STRING,
    },
    asal: {
      type: Sequelize.STRING,
    },
    umur: {
      type: Sequelize.INTEGER,
    },
    telepon: {
      type: Sequelize.STRING,
    },
  });

  return Mahasantri;
};
