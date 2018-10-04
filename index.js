function produceDrivingRange(maxBlocks){
  let distance = 0;
  return function(blocks1, blocks2){
    distance = parseInt(blocks2.split('t')[0]) - parseInt(blocks1.split('t')[0]);
    if ( distance > maxBlocks){
      return `${Math.abs(maxBlocks - distance)} blocks out of range`;
    }else {
      return `within range by ${distance}`;
      }
    };
  }
function produceTipCalculator(rate){
  return function(total){
    return total * rate;
  };
}

function createDriver(){
  let driverId = 0;
  
  return class Driver {
    constructor(driverId){
      this.driverId = ++driverId;
    }
  };
}