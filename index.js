function produceDrivingRange(maxBlocks){
  return function(blocks1, blocks2){
    let distance = parseInt(blocks2.split('t')[0]) - parseInt(blocks1.split('t')[0]);
    if ( distance > maxBlocks){
      return `${distance} out of range`;
    }else {
      return `within range by ${distance}`;
      }
    };
  }