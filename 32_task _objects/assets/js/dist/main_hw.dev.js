"use strict";

/*с урока, к первой задаче по объектам(автомобиль)*/
var userBob = {
  name: 'Bob',
  age: 18,
  gender: 'male',
  edu: 'high',
  phone: '+3809912345678',
  email: 'user@domain.com',
  fax: '+380512123456'
};

function myFunc(user) {
  var r = '<dl>';

  for (var klutch in user) {
    r += "<dt>".concat(klutch, "</dt>\n        <dd>").concat(user[klutch], "</dd>");
  }

  r += '</dl>';
  document.getElementById('userdata').innerHTML = r;
}

myFunc(userBob);