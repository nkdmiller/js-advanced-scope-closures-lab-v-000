function produceDrivingRange(maxBlocks){
  return function(blocks){
    if (blocks > maxBlocks){
      return false;
    }else {
      return true;
    }
  };
}