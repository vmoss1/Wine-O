const express = require("express");
const router = express.Router();
const { Wine } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");
const { singlePublicFileUpload } = require("../../awsS3");
const { singleMulterUpload } = require("../../awsS3");

//Get all wines
router.get("/", async (req, res, next) => {
  try {
    const Wines = await Wine.findAll();

    return res.json({ Wines });
  } catch (e) {
    next(e);
  }
});

//Get single wine
router.get("/:wineId", async (req, res, next) => {
  try {
    let { wineId } = req.params;
    wineId = +wineId;

    const singleWine = await Wine.findByPk(wineId);

    if (!singleWine) {
      return res.status(404).json({ message: "Wine does not exist" });
    }

    return res.json({ singleWine });
  } catch (e) {
    next(e);
  }
});

//Create single wine
router.post(
  "/new",
  singleMulterUpload("imageUrl"),
  requireAuth,
  async (req, res, next) => {
    try {
      const { name, vineyard, type, imageUrl } = req.body;
      const profileImageUrl = await singlePublicFileUpload(req.file);

      const newWine = await Wine.create({
        name,
        vineyard,
        type,
        imageUrl: profileImageUrl,
      });

      return res.json({ newWine });
    } catch (e) {
      next(e);
    }
  }
);

// Update Single Wine
router.put("/:wineId", requireAuth, async (req, res, next) => {
  try {
    let { wineId } = req.params;
    wineId = +wineId;

    const { name, vineyard, type, imageUrl } = req.body;

    const currentWine = await Wine.findByPk(wineId);
    if (!currentWine) {
      return res.status(404).json({ message: "Wine does not exist" });
    }

    if (name !== undefined) currentWine.name = name;
    if (vineyard !== undefined) currentWine.vineyard = vineyard;
    if (type !== undefined) currentWine.type = type;
    if (imageUrl !== undefined) currentWine.imageUrl = imageUrl;

    await currentWine.save();

    return res.json({
      id: currentWine.id,
      name: currentWine.name,
      vineyard: currentWine.vineyard,
      type: currentWine.type,
      imageUrl: currentWine.imageUrl,
    });
  } catch (e) {
    next(e);
  }
});

// Delete single wine
router.delete("/:wineId", requireAuth, async (req, res, next) => {
  try {
    let { wineId } = req.params;
    wineId = +wineId;

    const deletedWine = await Wine.findByPk(wineId);

    if (!deletedWine) {
      return res.status(404).json({ message: "Wine does not exist" });
    }

    await deletedWine.destroy();

    return res.json({ message: "Successfully Deleted" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
