// const EventEmitter = require("node:events");
// const { errorMonitor } = require("node:events");

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();

/**on method is inherited from EventEmitter instance it attach the <event> to our object creating use MyEmitter class which extends from EventEmitter Instance  **/
// myEmitter.on("event", () => {
//   console.log("an event occured!");
// });

// myEmitter.emit("event");

/** passing experssion function as a arugment and the this key word point to MyEmitter Class*/
// myEmitter.on("event", function (name) {
//   console.log("This is: " + name);
//   console.log("this is reffered to:");
//   console.log(this);
// });

// myEmitter.emit("event", "Vignesh");

/** passing arrow function as a arugment and the this key word point to empty {}*/
// myEmitter.on("event", (name) => {
//   console.log("This is: " + name);
//   console.log("this is reffered to:");
//   console.log(this);
// });

// myEmitter.emit("event", "Vignesh");

/**Event emit at sequence in order */
// myEmitter.on("event", () => {
//   console.log("an event1 occured!");
// });

// myEmitter.on("event", () => {
//   console.log("an event2 occured!");
// });

// myEmitter.on("event", () => {
//   console.log("an event3 occured!");
// });

// myEmitter.emit("event");

/**When using setImmediate or procces.nextTick methods you can convert the callback to asynchronous mode*/
/**When using process.nextTick method run the call back before the setImmediate method */
// myEmitter.on("event", () => {
//   console.log("an event1 occured!");
// });

// myEmitter.on("event", () => {
//   setImmediate(() => {
//     console.log("an event2 occured!");
//   });
// });

// myEmitter.on("event", () => {
//   process.nextTick(() => {
//     console.log("an event2(1) occured!");
//   });
// });

// myEmitter.on("event", () => {
//   console.log("an event3 occured!");
// });

// myEmitter.emit("event");

// myEmitter.on("event", () => {
//   console.log("an event1 occured!");
// });

// myEmitter.emit("event");
// myEmitter.emit("event");
// myEmitter.emit("event");

// myEmitter.once("event", () => {
//   console.log("an event1 occured!");
// });

// myEmitter.emit("event");
// myEmitter.emit("event");
// myEmitter.emit("event");

// myEmitter.on("event", () => {
//   console.log("an event1 occured!");
// });

// myEmitter.emit("error", new Error("Whoops!"));
// myEmitter.emit("event");

// myEmitter.on("event", () => {
//   console.log("an event1 occured!");
// });

// myEmitter.on("error", (err) => {
//   console.log("Bro shit happens: " + err);
// });

// myEmitter.emit("error", new Error("Whoops!"));
// myEmitter.emit("event");

// myEmitter.on(errorMonitor, (err) => {
//   console.log(err);
// });
// myEmitter.emit("error", new Error("Whoops!"));

// myEmitter.on("something", async (value) => {
//   console.log("something");
// });

// myEmitter.emit("something");

// myEmitter.on("something", async (value) => {
//   throw new Error("Kaboom");
// });

// myEmitter.emit("something");

// const myEmitter = new MyEmitter({ captureRejections: true });

// myEmitter.on("something", async (value) => {
//   throw new Error("Kaboom");
// });

// myEmitter.on("error", console.log);

// const myEmitter = new MyEmitter({ captureRejections: true });

// myEmitter.on("something", async (value) => {
//   throw new Error("Kaboom");
// });
// myEmitter.emit("something");
// myEmitter[Symbol.for("nodejs.rejection")] = console.log;

// const EventEmitter = require("node:events");
// const ee1 = new EventEmitter({ captureRejections: true });
// ee1.on("something", async (value) => {
//   throw new Error("kaboom");
// });

// ee1.on("error", (some, some1) => {
//   console.log(some);
//   console.log(some1);
// });

// const ee2 = new EventEmitter({ captureRejections: true });
// ee2.on("something", async (value) => {
//   throw new Error("kaboom");
// });

// ee2[Symbol.for("nodejs.rejection")] = console.log;

// const events = require("node:events");
// events.captureRejections = true;
// const ee1 = new events.EventEmitter();
// ee1.on("something", async (value) => {
//   throw new Error("kaboom");
// });

// ee1.on("error", console.log);
// ee1.emit("error", "hello");

// const EventEmitter = require("node:events");
// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();

// myEmitter.once("newListener", (event, listener) => {
//   myEmitter.on("event", () => {
//     console.log("B");
//   });
//   myEmitter.on("event1", () => {
//     console.log("event1");
//   });
// });
// myEmitter.on("event", () => {
//   console.log("A");
// });
// myEmitter.on("event", () => {
//   console.log("C");
// });
// myEmitter.on("event", () => {
//   console.log("D");
// });
// myEmitter.on("event", () => {
//   console.log("E");
// });
// myEmitter.emit("event");

// const EventEmitter = require("node:events");

// const myEE = new EventEmitter();
// myEE.on("foo", () => {
//   console.log("HI");
// });
// myEE.on("foo", () => {});
// myEE.on("bar", () => {});

// const sym = Symbol("symbol");
// myEE.on(sym, () => {});

// console.log(myEE.eventNames());
// console.log(myEE.getMaxListeners());
// console.log(myEE.listenerCount("foo"));
// console.log(myEE.listeners("foo"));

// const EventEmitter = require("node:events");
// const ee = new EventEmitter();

// function pong() {
//   console.log("pong");
// }

// ee.on("ping", pong);
// ee.once("ping", pong);
// ee.removeListener("ping", pong);

// ee.emit("ping");
// ee.emit("ping");

// const EventEmitter = require("node:events");
// const emitter = new EventEmitter();
// emitter.once("log", () => console.log("log once"));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
// const listeners = emitter.rawListeners("log");
// const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
// logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
// logFnWrapper();

// emitter.on("log", () => console.log("log persistently"));
// Will return a new Array with a single function bound by `.on()` above
// const newListeners = emitter.rawListeners("log");

// Logs "log persistently" twice
// newListeners[0]();
// emitter.emit("log");

// const { EventEmitter, captureRejectionSymbol } = require("node:events");

// class MyClass extends EventEmitter {
//   [captureRejectionSymbol](err, event, ...args) {
//     console.log("rejection happened for", event, "with", err, ...args);
//     this.destroy(err);
//   }
// }

// const myClass = new MyClass({ captureRejections: true });

// myClass.on("something", () => {
//   throw new Error("whoops");
// });

// myClass.emit("error");

const { once, EventEmitter } = require("node:events");

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit("myevent", () => {
      console.log("some things");
    });
  });

  const [value] = await once(ee, "myevent");
  console.log(value);

  const err = new Error("kaboom");
  process.nextTick(() => {
    ee.emit("error", err);
  });

  try {
    await once(ee, "myevent");
  } catch (err) {
    console.error("error happened", err);
  }
}

run();
