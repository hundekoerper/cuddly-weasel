var comepareProperties = function(usedproperties, database) {

  var matches = []
  ,   browser = "bb";

    for (var i = 0, x = usedproperties.length; i <= x; i++) {
        if (database.data.hasOwnProperty(usedproperties[i])) {
            matches.push(usedproperties[i]);
        }
    };

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

        switch(browser) {
          case "ie":
            console.log("Internet Explorer compatibilty:");
            break;
          case "edge":
            console.log("Edge compatibilty:");
            break;
          case "firefox":
            console.log("Firefox compatibilty:");
            break;
          case "chrome":
            console.log("Chrome compatibilty:");
            break;
          case "safari":
            console.log("Safari compatibilty:");
            break;
          case "opera":
            console.log("Opera compatibilty:");
            break;
          case "ios_saf":
            console.log("iOS Safari compatibilty:");
            break;
          case "op_mini":
            console.log("Opera Mini compatibilty:");
            break;
          case "android":
            console.log("Android Browser compatibilty:");
            break;
          case "bb":
            console.log("Blackberry Browser compatibilty:");
            break;
          case "op_mob":
            console.log("Opera Mobile compatibilty:");
            break;
          case "and_chr":
            console.log("Chrome for Android compatibilty:");
            break;
          case "and_ff":
            console.log("Firefox for Android compatibilty:");
            break;
          case "ie_mob":
            console.log("IE Mobile compatibilty:");
            break;
          case "and_uc":
            console.log("UC Browser for Android compatibilty:");
            break;
        };

        console.log("");

          for(var value in database.data[matches[i]].stats[browser]){
            if (database.data[matches[i]].stats[browser][value] === "y") {
              console.log("Version " + value + ": supported");
            } else if (database.data[matches[i]].stats[browser][value] === "n") {
              console.log("Version " + value + ": not supported");
            } else {
              console.log("Version " + value + ": partially supported");
            }
          };

        console.log("------------------");
        console.log("Additional Notes:");
        console.log("");
        console.log(database.data[matches[i]].notes);
        console.log("");

          for(var value in database.data[matches[i]].notes_by_num){
              console.log(database.data[matches[i]].notes_by_num[value]);
              console.log("");
          };

      }

  }
};

module.exports = comepareProperties;
