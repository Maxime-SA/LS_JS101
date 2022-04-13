function smallerNumbersThanCurrent(array) {

  return array.map(number => {

    let valuesCompared = [];

    return array.filter(element => {

      if (valuesCompared.includes(element)) {
        return false;
      }

      valuesCompared.push(element);

      return number > element;

    }).length

  })

}

console.log(smallerNumbersThanCurrent([5,5,4,8]))