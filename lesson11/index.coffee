parent = ->
  name = 'parent_name'
  age = 13

  child = ->
    `var name`
    name = 'child_name'
    childAge = 0.3
    console.log name, age, childAge
    return

  child()
  console.log name, age, childAge
  return

parent()
