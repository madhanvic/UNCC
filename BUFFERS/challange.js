//0100 1000 0110 1001 0010 0001
// 1 bytes 8 bits

const { Buffer } = require("buffer");

const buffer = Buffer.alloc(3, 0, "hex");

console.log(buffer);
console.log(buffer[0]);
console.log(buffer[1]);
console.log(buffer[2]);

buffer[0] = 0x48;
buffer[1] = 0x69;
buffer[2] = 0x21;

console.log(buffer);
console.log(buffer[0]);
console.log(buffer[1]);
console.log(buffer[2]);

console.log(buffer.toString("utf-8"));
