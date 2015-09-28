var comepareProperties = function(usedproperties, database, profile) {

  var _ = require("underscore")
      chalk = require("chalk")
  ,   matches = []
  ,   browser = []
  ,   browsername = "";

  for (var bsr in profile.browsers) {
    if (profile.browsers[bsr] !== 0) {
      browser.push(bsr);
    }
  }


  for (var i = 0, x = usedproperties.length; i <= x; i++) {
    if (database.data.hasOwnProperty(usedproperties[i])) {
      matches.push(usedproperties[i]);
    }
  };

  if (matches.length === 0){
    console.log("==================");
    console.log(chalk.green("there are no known compatibility issues in your css-file."));
    console.log("==================");
    console.log("");
  } else if (browser.length === 0){
    console.log("==================");
    console.log(chalk.red("please select at least one browser in the profile.json."));
    console.log("==================");
    console.log("");
  } else {
    for(var i = 0, x = matches.length; i < x; i++) {
      console.log("==================");
      console.log(chalk.bold(matches[i]));
      console.log("==================");
      console.log(database.data[matches[i]].title);
      console.log("");
      console.log(database.data[matches[i]].description);
      console.log("");

      for (var j = 0, y = browser.length; j < y; j++){

        console.log("");
        switch(browser[j]) {
          case "ie":
          browsername = "Internet Explorer";
          break;
          case "edge":
          browsername = "Edge";
          break;
          case "firefox":
          browsername = "Firefox";
          break;
          case "chrome":
          browsername = "Chrome";
          break;
          case "safari":
          browsername = "Safari";
          break;
          case "opera":
          browsername = "Opera";
          break;
          case "ios_saf":
          browsername = "iOS Safari";
          break;
          case "op_mini":
          browsername = "Opera Mini";
          break;
          case "android":
          browsername = "Android Browser";
          break;
          case "bb":
          browsername = "Blackberry Browser";
          break;
          case "op_mob":
          browsername = "Opera Mobile";
          break;
          case "and_chr":
          browsername = "Chrome for Android";
          break;
          case "and_ff":
          browsername = "Firefox for Android";
          break;
          case "ie_mob":
          browsername = "IE Mobile";
          break;
          case "and_uc":
          browsername = "UC Browser for Android";
          break;

        };
        console.log(chalk.underline(browsername + " compatibilty:"));
        console.log("");

        for (var value in database.data[matches[i]].stats[browser[j]]) {
            if (database.data[matches[i]].stats[browser[j]][value] === "y") {
              console.log("Version " + value + ": " + chalk.green("supported"));
            } else if (database.data[matches[i]].stats[browser[j]][value] === "n") {
              console.log("Version " + value + ": " + chalk.red("not supported"));
            } else {
              console.log("Version " + value + ": " + chalk.yellow("partially supported"));
            }
        };

      };

      console.log("");
      console.log(chalk.underline("Additional Notes:"));
      console.log("");
      console.log(database.data[matches[i]].notes);
      console.log("");

      for (var value in database.data[matches[i]].notes_by_num){
        console.log(database.data[matches[i]].notes_by_num[value]);
        console.log("");
      };

    }

  }
};

module.exports = comepareProperties;
