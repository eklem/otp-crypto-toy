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
