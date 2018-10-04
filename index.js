function produceDrivingRange(maxBlocks){
  return function(blocks){
    if (blocks > maxBlocks){
      return ;
    }else {
      return true;
    }
  };
}