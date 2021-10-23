var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["projectcode"] = document.getElementById("projectcode").value;
    formData["projectdate"] = document.getElementById("projectdate").value;
    formData["status"] = document.getElementById("status").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.projectcode;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.projectdate;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.status;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.perPrice;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('projectcode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('projectdate').value = selectedRow.cells[1].innerHTML;
    document.getElementById('status').value = selectedRow.cells[2].innerHTML;
    document.getElementById('perPrice').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.projectcode;
    selectedRow.cells[1].innerHTML = formData.projectdate;
    selectedRow.cells[2].innerHTML = formData.status;
    selectedRow.cells[3].innerHTML = formData.perPrice;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}


//Reset the data
function resetForm(){
    document.getElementById('projectCode').value = '';
    document.getElementById('projectdate').value = '';
    document.getElementById('status').value = '';
    document.getElementById('perPrice').value = '';
}
