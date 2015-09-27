var chunks = []
,   properties = []
,   contents = "Dies ist eine { tolle test sache } der test wird noch toller { und testiger } drrt"
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

}


readChunks();

// nur zum debuggen
// console.log(start);
// console.log(end);
// console.log(contents.charAt(start) + "-> zeichen bei i // " + contents.charAt(end) + "-> zeichen bei j");
console.log(chunks);
