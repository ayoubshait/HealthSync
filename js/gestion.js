// JavaScript for Gestion de Données page

document.getElementById('patientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate saving data
    alert('Les données du patient ont été enregistrées avec succès.');
});

// Patient Search Functionality
document.getElementById('searchBtn').addEventListener('click', function() {
    const searchValue = document.getElementById('searchPatient').value;
    alert(`Recherche pour le patient: ${searchValue}`);
});

// Export Data Functionality
document.getElementById('exportBtn').addEventListener('click', function() {
    // Example data to export as CSV
    const data = [
        ['Nom du Patient', 'Âge du Patient', 'Sexe', 'Contact', 'Historique Médical'],
        ['John Doe', 30, 'M', '123456789', 'No known allergies']
    ];
    
    let csvContent = "data:text/csv;charset=utf-8," 
        + data.map(e => e.join(",")).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "patients_data.csv");
    document.body.appendChild(link);

    link.click(); // Trigger the download
    document.body.removeChild(link); // Cleanup
});

// Import Data Functionality
document.getElementById('importBtn').addEventListener('click', function() {
    // Trigger the hidden file input click
    document.getElementById('importFileInput').click();
});

// Handle file selection
document.getElementById('importFileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    alert(`Fichier sélectionné: ${file.name}`);
    // Further processing of the file can be done here
});

// Simulate data visualization with Chart.js
const ctx = document.getElementById('patientDataChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Poids du Patient (kg)',
            data: [70, 72, 71, 69, 73, 74],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});
