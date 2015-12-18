var parent;

parent = function() {
  var age, child, name;
  name = 'parent_name';
  age = 13;
  child = function() {
    var name;
    var childAge;
    name = 'child_name';
    childAge = 0.3;
    console.log(name, age, childAge);
  };
  child();
  console.log(name, age, childAge);
};

parent();
