document.getElementById('viewAsTableBtn').style.display = 'none';

document.getElementById('jobApplicationForm').onsubmit = function(event) {
    event.preventDefault(); 
    if (validateForm()) {
        showViewAsTableButton(true); 
    }
};

function validateForm() {
    var form = document.getElementById('jobApplicationForm');
    var elements = form.elements;
    var isValid = true;

    for (var i = 0; i < elements.length; i++) {
        if (elements[i].hasAttribute('required') && elements[i].value.trim() === '') {
            alert('Please fill in all required fields.');
            isValid = false;
            break;
        }
    }
    return isValid;
}

function showViewAsTableButton(show) {
    var button = document.getElementById('viewAsTableBtn');
    button.style.display = show ? 'block' : 'none';
}

document.getElementById('viewAsTableBtn').addEventListener('click', function(event) {
    event.preventDefault();
    viewApplicationsAsTable();
});

function viewApplicationsAsTable() {
    var formData = {};
    var headers = ['fisrtName', 'lastName', 'email', 'phoneNum', 'city', 'Resume', 'coverLetter']; 

    var form = document.getElementById('jobApplicationForm');
    var elements = form.elements;
    for (var i = 0; i < elements.length; i++) {
        formData[elements[i].name] = elements[i].value;
    }

    var table = document.createElement('table');
    table.id = 'applicationsTable';


    var headerRow = table.insertRow();
    headers.forEach(function(header) {
        var headerCell = document.createElement('th');
        headerCell.textContent = header.charAt(0).toUpperCase() + header.slice(1); 
        headerRow.appendChild(headerCell);
    });

    
    var newRow = table.insertRow();
    headers.forEach(function(header) {
        var newCell = newRow.insertCell();
        newCell.textContent = formData[header];
    });

    var applicationsTable = document.getElementById('applicationsTable');
    applicationsTable.innerHTML = ''; 
    applicationsTable.style.display = 'block'; 
    applicationsTable.appendChild(table);
}