function startComputation() {
  worker.postMessage({'cmd': 'average', 'data': [1, 2, 3, 4]});
}

var worker = new Worker('worker.js');

worker.addEventListener('message', function(e) {
  console.log(e.data);
}, false);
