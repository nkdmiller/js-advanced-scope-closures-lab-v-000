function produceDrivingRange(maxBlocks){
  return function(blocks1, blocks2){
    let distance = blocks2.split('t')[0] - blocks1.split('th')[0];
    return distance
    if ( distance > maxBlocks){
      return `${distance} out of range`;
    }else {
      return `within range by ${distance}`;
      }
    };
  }