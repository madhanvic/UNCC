const { Buffer, constants } = require("buffer");

const b = Buffer.alloc(constants.MAX_LENGTH); // 1,000,000,000 bytes (1GB)

console.log(constants.MAX_LENGTH);
setInterval(() => {
  //   for (let i = 0; i < b.length; i++) {
  //     // b.length is the size of the buffer in bytes
  //     b[i] = 0x22;
  //   }
  b.fill(0x22);
}, 5000);
