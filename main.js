var fs = require("fs")
    database = require("./data.json")
,   readProperties = require ("./get-properties")
,   compare = require("./compare")
,   cssfile = "test.css";

fs.readFile(cssfile, "utf-8", function(err, contents){
  if (err) {
    console.log(err);
  }
    compare(readProperties(contents), database);
});
