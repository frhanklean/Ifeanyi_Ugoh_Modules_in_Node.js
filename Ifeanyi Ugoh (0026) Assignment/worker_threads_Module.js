// .................WORKER THREADS MODULE....................

/*
DESCRIPTION:    The worker_threads module in Node.js allows you to
                run JavaScript code in separate threads, providing a way
                to perform CPU-intensive tasks without blocking the main
                thread of execution.
*/

//EXAMPLE:

const { Worker, isMainThread } = require('worker_threads');

if (isMainThread) {
  // This is the main thread of execution
  console.log(`Running in the main thread with thread id ${process.threadId}`);

  // Create a new worker thread
  const worker = new Worker(__filename);

  // Listen for messages from the worker thread
  worker.on('message', (message) => {
    console.log(`Received message from worker: ${message}`);
  });

  // Send a message to the worker thread
  worker.postMessage('start');
} else {
  // This is the worker thread
  console.log(`Running in the worker thread with thread id ${process.threadId}`);

  // Perform a CPU-intensive task (calculating prime numbers)
  function calculatePrimes(max) {
    const primes = [];
    for (let i = 2; i < max; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(i);
      }
    }
    return primes;
  }

  // Listen for messages from the main thread
  process.on('message', (message) => {
    if (message === 'start') {
      console.log('Starting CPU-intensive task...');
      const primes = calculatePrimes(100000);
      console.log('Task completed.');
      process.send(primes);
    }
  });
}
















