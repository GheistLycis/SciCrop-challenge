const router = require("express").Router()
const Controller = require("../controllers/Controller")

router.get("/", Controller.get)
router.post("/", Controller.post)

module.exports = router