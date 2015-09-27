var _ = require("underscore")
,   chunks = []
,   properties = []
,   contents = "Dies ist eine { font-size: 2rem; font-weight: bold; margin-bottom: 1rem; } der test wird noch toller { font-size: 0; margin-bottom: 0; list-style: none; font-size: 1rem; margin: 0px;} drrt"
,   start
,   end;

var readChunks = function() {

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

};

var readProperties = function() {
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

};

var cleanupProperties = function() {
  properties = _.uniq(properties);
};

readChunks();
readProperties();
cleanupProperties();

// console.log(chunks);
console.log(properties);
