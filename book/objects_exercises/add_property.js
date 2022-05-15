let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

myObj.qux = 3;