self.addEventListener('message', function(e) {
  var data = e.data;
  switch (data.cmd) {
    case 'average':
      var result = calculateAverage(data.data);
      self.postMessage(result);
      break;
    default:
      self.postMessage('Unknown command');
  }
}, false);

function calculateAverage(data) {
  var average = 0.0;
  for (var i = 0; i < data.length; i++) {
    average += data[i];
  }
  average /= data.length;
  return average;
}
