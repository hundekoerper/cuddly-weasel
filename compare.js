var comepareProperties = function(usedproperties, database) {

  console.log(usedproperties);
  console.log(database);


    for (var i = 0, x = usedproperties.length; i <= x; i++) {
        if (database.data.hasOwnProperty(usedproperties[i])) {
            console.log("relevanter scheiss gefunden!");
            console.log(usedproperties[i]);
        } else {
            console.log("kein relevanter scheiss benutzt!")
        }
    }

};

module.exports = comepareProperties;
