const express = require("express");
const router = express.Router();
const ReceiptController = require("../controllers/receiptController");

//Get a list of all receipts available
router.get("/", ReceiptController.getAllReceipts);

//Download a receipt
router.post("/:id", ReceiptController.downloadReceipt);

module.exports = router;
