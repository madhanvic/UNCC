const EventEmitter = require("events");

class Emitter extends EventEmitter {}

const myE = new Emitter();

myE.on("foo", () => {
  console.log("An event occurred 2.");
});

myE.on("foo", () => {
  console.log("An event occurred 1.");
});

myE.on("foo", (x) => {
  console.log("An event occurred 3 with a parameter:" + x);
});

// myE.on("bar", () => {
//   console.log("An event occured for bar");
// });
myE.once("bar", () => {
  console.log("An event occured for bar");
});
// myE.emit("bar");
// myE.emit("foo");
// myE.emit("foo", "some text instead of undefined");

myE.emit("bar");
myE.emit("bar");
myE.emit("bar");
myE.emit("bar");
