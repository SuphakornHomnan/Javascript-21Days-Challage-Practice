(() => {
  // function simulateAsyncAPI(text, time_out) {
  //   setTimeout(() => console.log(text), time_out);
  // }
  // simulateAsyncAPI("A", 1000);
  // simulateAsyncAPI("B", 500);
  // simulateAsyncAPI("C", 100);

  // const simulateAsyncAPI = (text, time_out, callback) => {
  //   setTimeout(() => {
  //     console.log(text);
  //     if (callback) {
  //       callback();
  //     }
  //   }, time_out);
  // };
  //Callback hell -> Promise มาแก้ไข
  // simulateAsyncAPI("A", 1000, () => {
  //   simulateAsyncAPI("B", 500, () => {
  //     simulateAsyncAPI("C", 100);
  //   });
  // });
  // function simulateAsyncAPI(text, time_out) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (text === "B") return reject("B got rejected");
  //       console.log(text);
  //       resolve();
  //     }, time_out);
  //   });
  // }
  // simulateAsyncAPI("A", 1000)
  //   .then(() => {
  //     return simulateAsyncAPI("B", 500);
  //   })
  //   .then(() => {
  //     return simulateAsyncAPI("C", 100);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  function simulateAsyncAPI(text, time_out) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // if (text === "B") return reject("B got rejected");
        console.log(text);
        resolve();
      }, time_out);
    });
  }

  async function run() {
    try {
      await simulateAsyncAPI("A", 1000);
      await simulateAsyncAPI("B", 1000);
      await simulateAsyncAPI("C", 1000);
    } catch (error) {
      console.log(error);
    }
  }
  run();
})();
