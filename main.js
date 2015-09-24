var fs = require("fs")
,   compare = require("./compare")
,   chunks = []
,   properties = []
,   cssfile = "test.css";

fs.readFile(cssfile, "utf-8", function(err, contents){
  if (err) {
    console.log(err);
  } else {

    function(contents) {

      contents.toLowerCase();
      for (var i = 0, x = contents.length; i < x; i++) {
        if (contents.charAt(i) === "{") {
          for (var j = i, j < x; j++){        // x lokal oder global?
            if (contents.charAt(j) === "}")
              chunks.push(contents.slice(i,j));
          }
        }
      }

    };
  }
});
