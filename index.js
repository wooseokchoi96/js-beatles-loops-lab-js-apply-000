// add solution here
function theBeatlesPlay (musicians, instruments) {
  var my_array = [];
  var counter;
  if (musicians.length === instruments.length) {
    for (counter = 0; counter < musicians.length; counter++) {
      my_array.push(`${musicians[counter]} plays ${instruments[counter]}`);
    }
  }
  return my_array
}

function johnLennonFacts (my_facts) {
  var counter = 0;
  while (counter < my_facts.length) {
    my_facts[counter] = my_facts[counter] + '!!!';
    counter++;
  }
  return my_facts
}

function iLoveTheBeatles (my_number) {
  var my_array = []
  var counter = 1;
  if (my_number < 15) {
      do {
        my_array.push("I love the Beatles!")
        counter++
      } while (counter < my_number);
  }  
  return my_array
}