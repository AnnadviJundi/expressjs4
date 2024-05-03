const mahasantriController = require("../controllers/mahasantri.controller");
const router = require("express").Router();

router.post("/", mahasantriController.create);
router.get("/", mahasantriController.index);
router.delete("/:id", mahasantriController.delete);
router.put("/:id", mahasantriController.update);
router.get("/:id", mahasantriController.show);

module.exports = router;