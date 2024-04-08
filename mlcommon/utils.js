const process = require('process');
const utils = {}

utils.displayProgress = (count, max) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);

  process.stdout.write(count+"/"+max+" ("+formatPercent(
    count/max
  ) + "%" + ")")
} 

function formatPercent (num) {
  return (num * 100).toFixed(2)
}

module.exports = utils