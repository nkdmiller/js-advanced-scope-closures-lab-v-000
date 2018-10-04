function produceDrivingRange(maxBlocks){
  return function(blocks1, blocks2){
    let distance = Math.abs(blocks1.split('t')[0] - blocks2.split('th')[0]);
    if ( distance > maxBlocks){
      return `${distance} out of range`;
    }else {
      return `within range by ${distance}`;
      }
    };
  }