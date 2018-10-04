function produceDrivingRange(maxBlocks){
  return function(blocks1, blocks2){
    if (Math.abs(blocks1.slice('t')[0] - blocks2.slice('th')[0]) > maxBlocks){
      return false;
    }else {
      return `within range by ${distance}`;
      }
    };
  }
}