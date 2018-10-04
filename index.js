function produceDrivingRange(maxBlocks){
  return function(blocks){
    if (blocks > maxBlocks){
      return `${blocks}`;
    }else {
      return true;
    }
  };
}