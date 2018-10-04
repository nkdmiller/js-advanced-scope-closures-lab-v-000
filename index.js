function produceDrivingRange(maxBlocks){
  return function(blocks){
    if (blocks > maxBlocks){
      return `${Math.abs(blocks - maxBlocks} out of range`;
    }else {
      return true;
    }
  };
}