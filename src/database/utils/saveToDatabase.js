const fs = require("fs");
const saveToDatabase = (DB) => {
  try{
  fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });
} catch (error) {
  throw { status: 500, message: error };
}
};


module.exports = { saveToDatabase };