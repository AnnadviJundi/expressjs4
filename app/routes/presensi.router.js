const presensiController = require("../controllers/presensi.controller");
const router = require("express").Router();

router.post("/", presensiController.create);
router.get("/", presensiController.index);
router.get("/:id", presensiController.show);
router.delete("/:id", presensiController.destroy);
router.put("/:id", presensiController.update);

router.get("/:id/Mhs", presensiController.Mhs);


module.exports = router;
