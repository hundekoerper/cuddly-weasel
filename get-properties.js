var readProperties = function(contents) {

  var _ = require("underscore")
  ,   chunks = []
  ,   properties = []
  ,   start
  ,   end;

  contents = contents.toLowerCase();

  outerLoop:
  for (var i = 0, x = contents.length; i <= x; i++) {
    if (contents.charAt(i) === "{") {
      start = i + 1;
      for (var j = start; j <= x; j++) {
        if (contents.charAt(j) === "}") {
            end = j;
            chunks.push(contents.slice(start,end).trim());
            continue outerLoop;
        }
      }
    }
  }

  chunks.unshift(";");
  chunks = chunks.join(" ");
  outerLoop:
  for (var i = 0, x = chunks.length; i <= x; i++) {
      if (chunks.charAt(i) === ":") {
        end = i;
        for (var j = end; j >= 0; j--) {
          if (chunks.charAt(j) === ";") {
            start = j + 1;
            properties.push(chunks.slice(start,end).trim());
            continue outerLoop
          }
        }
      }
  }

  properties = _.uniq(properties);
  return properties;
};

module.exports = readProperties;
