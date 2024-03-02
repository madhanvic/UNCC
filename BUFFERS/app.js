const { Buffer } = require("buffer");

 const memorycontainer = Buffer.alloc(4);
console.log(memorycontainer);
console.log(memorycontainer[0]);
console.log(memorycontainer[1]);
console.log(memorycontainer[2]);
console.log(memorycontainer[3]);
memorycontainer[0] = 0x14;
memorycontainer[1] = 0x13;
memorycontainer.writeInt8(-34, 2);
memorycontainer[3] = 0x14;
console.log(memorycontainer);
console.log(memorycontainer[0]);
console.log(memorycontainer[1]);
console.log(memorycontainer.readInt8(2));
console.log(memorycontainer[3]);
console.log(memorycontainer.toString("hex"));


 const buff = Buffer.from([0x48, 0x69, 0x21]);
console.log(buff.toString("utf-8"));




 const buff0 = Buffer.from("486921", "hex");
console.log(buff0.toString("utf-8"));

const buff1 = Buffer.from("Hi!", "utf-8");
console.log(buff1.toString("hex"));

