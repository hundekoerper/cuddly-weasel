var comepareProperties = function(usedproperties, database) {

  var matches = [];

    for (var i = 0, x = usedproperties.length; i <= x; i++) {
        if (database.data.hasOwnProperty(usedproperties[i])) {
            matches.push(usedproperties[i]);
        }
    }

  if (matches.length === 0){
    console.log("==================");
    console.log("there are no known compatibility issues in your css-file.")
    console.log("==================");
    console.log("");
  } else {
      for (var i = 0, x = matches.length; i < x; i++) {
        console.log("==================");
        console.log(matches[i]);
        console.log("==================");
        console.log(database.data[matches[i]].title);
        console.log("");
        console.log(database.data[matches[i]].description);
        console.log("------------------");
        console.log("Internet Explorer compatibilty:");
        console.log("");
          for(var value in database.data[matches[i]].stats.ie){
            if (database.data[matches[i]].stats.ie[value] === "y") {
              console.log("Version " + value + ": supported");
            } else if (database.data[matches[i]].stats.ie[value] === "n") {
              console.log("Version " + value + ": not supported");
            } else {
              console.log("Version " + value + ": partially supported");
            }
          }
        console.log("------------------");
        console.log("Additional Notes:");
        console.log("");
        console.log(database.data[matches[i]].notes);
        console.log("");
      }



  }
};

module.exports = comepareProperties;
