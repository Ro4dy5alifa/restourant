var submitbtn = document.getElementById('submit');
var form = document.getElementById('form');
var x = 0;
submitbtn.addEventListener('click', function(event) {
    event.preventDefault();
    var Name = document.getElementById('name').value;
    var Num = document.getElementById('phone').value;
    var item = document.getElementById('item').value;
    var quantity = document.getElementById('quantity').value;
    var nameerr = document.getElementById("nameerr");
    var phoneerr = document.getElementById("phoneerr");
    var namepat = /^[a-zA-Z\s]{1,20}$/;
    var phonepat = /^(010|011|012)\d{8}$/;

    if (!namepat.test(Name)) {
        nameerr.textContent = "Invalid name";
        return;
    } else {
        nameerr.textContent = "";
    }
    if (!phonepat.test(Num)) {
        phoneerr.textContent = "Invalid phone number";
        return;
    } else {
        phoneerr.textContent = "";
    }
    x++;
    var tbody = document.getElementById('tbody');
    tbody.style.fontSize = '25px';
    tbody.style.fontWeight = 'bold';
    tbody.style.color = 'black';
    tbody.style.textAlign = 'center';

    var uniqueId = 'row_' + x;
    var btn = '<button type="button" class="btn btn-danger" style="background-color: red; color: black; font-size: 20px; border-radius: 10px; width: 100px;" onclick="deleteRow(\'' + uniqueId + '\')">Remove</button>';
    var btn2 = '<button type="button" class="btn btn-danger" style="background-color: yellow; color: black; font-size: 20px; border-radius: 10px; width: 100px;" onclick="editRow(\'' + uniqueId + '\')">Edit</button>';
    tbody.innerHTML += '<tr id="' + uniqueId + '"><td>' + Name + '</td><td>' + Num + '</td><td>' + item + '</td><td>' + quantity + '</td><td>' + btn + '</td><td>'+ btn2+'</td></tr>';

    form.reset();

});
function editRow(uniqueId) {
    var row = document.getElementById(uniqueId);
    var cells = row.getElementsByTagName('td');
    document.getElementById('name').value = cells[0].textContent;
    document.getElementById('phone').value = cells[1].textContent;
    document.getElementById('item').value = cells[2].textContent;
    document.getElementById('quantity').value = cells[3].textContent;
    row.remove();
}

function deleteRow(uniqueId) {
    var row = document.getElementById(uniqueId);
    row.remove();
}