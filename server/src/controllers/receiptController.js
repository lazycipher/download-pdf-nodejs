const createError = require("http-errors");
const generatePdf = require("../helpers/generatePdf");

const dummyItems = [
  {
    name: "Phone",
    price: 9999,
  },
  {
    name: "Phone 2",
    price: 9995,
  },
  {
    name: "Phone 2",
    price: 9990,
  },
  {
    name: "Laptop",
    price: 99999,
  },
];

module.exports = {
  getAllReceipts: async (req, res, next) => {
    next();
  },

  downloadReceipt: async (req, res, next) => {
    const orderId = req.params.id;
    const link = await generatePdf.pdfGenerator(orderId, {
      orderId,
      items: dummyItems,
    });
    res.json({ download_link: link });
  },
};
