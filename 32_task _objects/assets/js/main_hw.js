/*с урока, к первой задаче по объектам(автомобиль)*/

let userBob = {
    name:'Bob',
    age:18,
    gender:'male',
    edu:'high',
    phone:'+3809912345678',
    email:'user@domain.com',
    fax:'+380512123456',
};

function myFunc(user){
    let r = '<dl>';
    for(let klutch in user){
        r += `<dt>${klutch}</dt>
        <dd>${user[klutch]}</dd>`;
    }
    r += '</dl>';
    document.getElementById('userdata').innerHTML = r;
}

myFunc(userBob);