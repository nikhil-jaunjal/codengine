const router = require("express").Router();
const Kpi = require("./kpi_matrix.controller");

router.get("/",Kpi.getAllKpiMatrix);
router.get("/:id", Kpi.getKpiMatrix);
router.post("/", Kpi.saveKpiMatrix);
router.put("/:id", Kpi.updateKpiMatrix);
router.delete("/:id",Kpi.deleteKpiMatrix);

module.exports = router;