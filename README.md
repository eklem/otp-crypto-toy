# OTP encryption/decryption toy
Toy for kids to encrypt/decrypt messages with one time pads (OTP). Or OTP done playfully easy.

Goal: To make it harder for corporations to aggregate kids user knowledge and police/authoroties to invade their privacy. But also teaching kids about keeping safe will be a win I think.

## Core functionality

### Encryption/decryption
To encrypt a message and send it via some message tool, Messenger, SMS or something else. And receive and decrypt.

### Generation and distribution of one-time pads
For usage of one-time pad encryptio/decryption to be easy, the distribution of one-time pads is they key. The toy will take care of creating and distributing one-time pads and make sure pads are erased after use and that the length of the message is not longer than the key.

### Emojis 😜
Emojis are a part of our digital language now, so the toy will be able to encrypt and decrypt all unicode emojis (1800 + skin tone variations on some of them).

## Library
This will be the web application (for phones), and the core libraries will be found at [otp-encryption-decryption-lib](https://github.com/eklem/otp-encryption-decryption-lib)
