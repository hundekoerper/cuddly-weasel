var fs = require("fs")
    database = require("./data.json")
,   readProperties = require ("./get-properties")
,   compare = require("./compare")
,   profile = require("./profile.json");

fs.readFile(profile.cssfilepath, "utf-8", function(err, contents){
  if (err) {
    console.log(err);
  }
    compare(readProperties(contents), database, profile);
});
