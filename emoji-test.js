import fetch from 'node-fetch'

let emoji = '👨🏿‍🦳👩🏾‍❤️‍👩🏽'
console.log(emoji)

// convert emoji to array of unicodes
emoji = [...emoji]
console.log(emoji)

// const map1 = array1.map(x => x * 2);
const unicodeArr = emoji.map(emojiPart => '0x' + emojiPart.codePointAt(0).toString(16))
console.log(...unicodeArr)

// convert array of unicodes back to emoji
emoji = String.fromCodePoint(...unicodeArr)
console.log(emoji)

fetch('https://unicode.org/emoji/charts-14.0/emoji-ordering.txt')
  .then(res => res.text())
  // .then(content => console.log(content))
  .catch(err => console.error(err))

// Make an array for each line
// Create a processof for extracting emoji, name and code
// Hash an ID from code
const exampleObject = {
  '😀': {
    id: '123456',
    slug: 'grinning_face',
    code: ['0x1f600']
  }
}

console.log(exampleObject)
