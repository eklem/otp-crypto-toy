const unicodeArr = []
let emoji = '👨🏿‍🦳'
console.log(emoji)

// convert emoji to array of unicodes
emoji = [...emoji]
emoji.forEach(unicode => {
  unicode = unicode.codePointAt(0).toString(16)
  unicodeArr.push('0x' + unicode)
  return unicodeArr
})
console.log(unicodeArr)

// convert array of unicodes back to emoji
emoji = String.fromCodePoint(...unicodeArr)
console.log(emoji)
