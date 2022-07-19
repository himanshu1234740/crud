
function Update(id) {
    let name = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    $.ajax({
        url: `/api/user/${id}`,
        method: 'PUT',
        data: { name, email, password }
    }).done(function (response) {
        window.location.href = '/';
    })

};




function Delete(id) {


    $.ajax({
        url: `/api/user/${id}`,
        method: 'DELETE',
    }).done(function (response) {
        window.location.href = '/';
    })


};

