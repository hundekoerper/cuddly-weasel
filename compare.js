var comepareProperties = function(usedproperties, database) {

  var matches = []
  ,   hurensohn = "";

    for (var i = 0, x = usedproperties.length; i <= x; i++) {
        if (database.data.hasOwnProperty(usedproperties[i])) {
            matches.push(usedproperties[i]);
        }
    }

  if (matches.length === 0){
    console.log("there are no known compatibilty issues in your css-file.")
  } else {
      for (var i = 0, x = matches.length; i < x; i++) {
        console.log("==================");
        console.log(matches[i]);
        console.log("------------------");
        console.log(database.data[matches[i]].title);
        console.log(database.data[matches[i]].description);
        console.log("------------------");
      }
  }
};

module.exports = comepareProperties;
