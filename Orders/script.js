var submitbtn = document.getElementById('submit');
var form = document.getElementById('form');

submitbtn.addEventListener('click',function (event) 
{
    event.preventDefault();
    var Name = document.getElementById('name').value;
    var Num = document.getElementById('phone').value;
    var item = document.getElementById('item').value;
    var quantity = document.getElementById('quantity').value;
    var nameerr = document.getElementById("nameerr");
    var phoneerr= document.getElementById("phoneerr");
    var namepat = /^[a-zA-Z\s]{1,20}$/;
    var phonepat = /^(010|011|012)\d{8}$/;

    if (!namepat.test(Name))
    {
        nameerr.textContent = "Invalid name";
        return;
    }
    else
    { 
        nameerr.textContent = "";
    }
    if (!phonepat.test(Num))
    {
        phoneerr.textContent = "Invalid phone number";
       return;
    }
    else
    { 
        phoneerr.textContent = "";
    }

    var tbody = document.getElementById('tbody');
    tbody.style.fontSize = '25px';
    tbody.style.fontWeight = 'bold';
    tbody.style.color = 'black';
    tbody.style.textAlign = 'center';

    tbody.innerHTML += '<tr><td>' + Name + '</td><td>' + Num + '</td><td>' + item + '</td><td>' + quantity + '</td></tr>';



    form.reset();
});
