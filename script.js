/*

TOUT COPIER DANS LA PARTI "JS"

*/

document.addEventListener('goalLoad', function(obj) {

  console.log(obj.detail);
  
  let OBJECTIF = obj.detail.amount.target
  let VALUE = obj.detail.amount.current

  setSpinnerValue(VALUE, OBJECTIF);

  function setSpinnerValue(value, objectif) {

    if(value > objectif){ value = objectif }  
    const circle = document.querySelector('.spinner-circle');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const progress = value / objectif;
    const dashoffset = circumference * (1 - progress);
    circle.style.strokeDashoffset = dashoffset;
    circle.parentNode.setAttribute('data-value', value);

  }
  
  
});

document.addEventListener('goalEvent', function(obj) {

  console.log(obj.detail);

});