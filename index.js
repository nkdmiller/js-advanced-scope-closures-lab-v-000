function produceDrivingRange(maxBlocks){
  let distance = 0;
  return function(blocks1, blocks2){
    distance = parseInt(blocks2.split('t')[0]) - parseInt(blocks1.split('t')[0]);
    if ( distance > maxBlocks){
      return `out of range`;
    }else {
      return `within range by ${distance}`;
      }
    };
  }