import { Console, error } from "console";

const fs = require("fs-extra");

try{
    fs.ensureDir("test-results");
    fs.emptyDir("test-results");

}catch(erro){ 
    console.log("Folder Not created!" +error);
}