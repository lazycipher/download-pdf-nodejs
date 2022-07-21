const pdf = require("pdf-creator-node");
const fs = require("fs");

const options = {
  format: "A3",
  orientation: "portrait",
  border: "10mm",
  header: {
    height: "45mm",
    contents:
      '<div style="text-align: center;">Online Receipt - Himanshu Singh</div>',
  },
  footer: {
    height: "28mm",
    contents:
      '<div style="text-align: center;">Online Receipt - Himanshu Singh</div>',
  },
};

module.exports = {
  pdfGenerator: async (fileName, data) => {
    const html = fs.readFileSync("src/templates/receipt.html", "utf8");
    const document = {
      html: html,
      data: data,
      path: `src/files/${fileName}.pdf`,
      type: "stream",
    };
    const stream = await pdf.create(document, options);
    // TODO: upload to aws/firebase using sdk, then return download link.
  },
};
