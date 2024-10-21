function reverseArray (array) {
    const lengthArray = array.length;
    let reverseArray = [];
    for (let i = lengthArray - 1; i >= 0; i-- ){
      reverseArray.push(array[i]);
    };
    return reverseArray;
  };
  
  const sentence = ['sense.','make', 'all', 'will', 'This'];

  console.log(reverseArray(sentence));  

  