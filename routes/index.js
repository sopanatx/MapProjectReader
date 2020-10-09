var express = require("express");
var router = express.Router();
const BinaryFile = require("binary-file");
const iconv = require("iconv-lite");
/* GET home page. */
router.get("/", async function (req, res, next) {
  const myBinaryFile = new BinaryFile("./file/t1_s1.prj", "r");
  try {
    await myBinaryFile.open();
    console.log("File opened");
    const string = await myBinaryFile.readString(50);
    console.log(`String: ${string}`);

    res.send(iconv.decode(Buffer.from(string), "EUCKR"));
    await myBinaryFile.close();
    console.log("File closed");
  } catch (err) {
    console.log(`There was an error: ${err}`);
  }
});

module.exports = router;
