let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let newArray = [];

Object.values(obj).forEach(item => {

  if (item['type'] === 'fruit') {
    newArray.push(item['colors'].map(string => string[0].toUpperCase() + string.slice(1).toLowerCase()));
  } else if (item['type'] === 'vegetable') {
    newArray.push(item['size'].toUpperCase());
  }

});

console.log(newArray);