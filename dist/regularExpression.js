// let str = 'I am learning Javascript, We can build web app with Javascript'

// let pattern = /JavaScript/gi

// let result = str.replace(pattern,'Python')

// console.log(result)

// let str = `

//  Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.
//  `;

// let pattern = /\b(a|an|the)\b/gi
// let pattern = /\b(a|e|i|o|u)[a-z]+/gi
// let pattern = /\b[aeiou][a-z]+/gi
// let pattern = /\b[a-z]{5,}\b/gi

// let result = str.match(pattern)
// console.log(result)

// let str = 'the new passscode iis 9aB!x7@1 - keep it secret'

// let pattern = /\b([a-z]+|[A-Z]+){8}\b/

// let result = str.match(pattern)
// console.log(result)

function spinalCase(str) {
  let pattern = /(_|\s)/g;
  str = str.replaceAll(pattern, "-");
  return str.toLowerCase();
}

console.log(spinalCase("This is Spinal Tap"));
console.log(spinalCase("this_is_spinal_tap"));
