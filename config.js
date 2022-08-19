const fs = require("fs");
const chalk = require("chalk");

// Other
let gg = process.env.MODS;
if (!gg) {
  gg = "212705570169";
}

global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "none";
global.pgdb = process.env.DATABASE_URL || "none";
global.port = process.env.PORT || 8080;
(global.packname = process.env.PACKNAME || "𝘽𝙤𝙢𝙞𝙧𝙤 😁"),
  (global.prefix = process.env.PREFIX || "-"),
  (global.author = process.env.AUTHOR || "fin hny 🙂"),
  (global.sessionName = "arus"),
  (global.name = process.env.NAME || "𝐍𝐀𝐌𝐗𝟐𝟏𝟐𝐁𝐎𝐓"),
  (global.thumb = fs.readFileSync("./trash/info.jpeg"));

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
