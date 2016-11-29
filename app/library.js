module.exports={
	findMinMax: function(myArray){
    var result;
    var min=myArray[0], max=myArray[0];
    for (var i=0; i<myArray.length; i++){
      if(myArray[i]>max)
        max=myArray[i];
      if(myArray[i]<min)
        min=myArray[i];
    }
    if(max==min){
      result=[min];
      return result;
    }
    result=[min, max];
    return result;

  }
  
  
}

