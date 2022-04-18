
export var healthScore =  function avg_healthScore(array) {
  //extract health score
  var array_healthScore = array.map(function(elem) { return elem.healthScore; });
  var sum_healthScore = array_healthScore.reduce((x, y) => x + y, 0);
  var ArrayLen = array_healthScore.length;
  return sum_healthScore / ArrayLen;
};

export var preparationTime = function preparationTime(array) {
  var array_minutes = array.map(function(elem) { return elem.readyInMinutes; });
  //sum minutes
  var total_minutes = array_minutes.reduce((x, y) => x + y, 0);
  var hours = (total_minutes / 60);
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + ":" + rminutes + "hs";
 }

 export var totalAmount = function totalAmount(array) {
  var array_amount = array.map(function(elem) { return elem.pricePerServing; });
  //sum price
  var total_amount = array_amount.reduce((x, y) => x + y, 0);
  var ramount = parseFloat(total_amount);
  return total_amount;
 }