import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("Index");
});

const IndexRouter = router;

export default IndexRouter;
