var fs = require("fs")
,   compare = require("./compare")
,   cssfile = "test.css";

fs.readFile(cssfile, "utf-8", function(err, contents){
  if (err) {
    console.log(err);
  } else {
    // call compare function
    console.log("test?")
});
