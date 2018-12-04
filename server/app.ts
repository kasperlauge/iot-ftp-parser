import { connectToDb, registerSchemas, disconnectFromDb } from "./database/db";
import ftpParser from "./bll/ftp_dataimporter";
// import ftpParser from "./bll/ftp_dataimporter";

connectToDb().then(() => {
  console.log("It should be connected here");
  const model = registerSchemas();
  // FTP stuff here
  ftpParser(model).then(() => {
    disconnectFromDb();
  });

});
