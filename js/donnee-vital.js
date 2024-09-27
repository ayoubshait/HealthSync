document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    // Initialize Charts
    const heartRateChartCtx = document.getElementById('heartRateChart')?.getContext('2d');
    const bloodPressureChartCtx = document.getElementById('bloodPressureChart')?.getContext('2d');
    const oxygenSaturationChartCtx = document.getElementById('oxygenSaturationChart')?.getContext('2d');
    const bodyTemperatureChartCtx = document.getElementById('bodyTemperatureChart')?.getContext('2d');

    if (heartRateChartCtx) {
        new Chart(heartRateChartCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Fréquence Cardiaque (BPM)',
                    data: [],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 2,
                    fill: true
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 40,
                        max: 180
                    }
                }
            }
        });
    }

    // Initialize other charts (bloodPressureChart, oxygenSaturationChart, bodyTemperatureChart) similarly

    // Alert Handling
    function checkVitalSigns() {
        const alerts = [];
        const heartRate = parseInt(document.getElementById('heartRateValue').textContent, 10);
        if (heartRate < 60 || heartRate > 100) {
            alerts.push(`Fréquence cardiaque anormale: ${heartRate} BPM`);
        }

        // Add similar checks for blood pressure, oxygen saturation, etc.

        displayAlerts(alerts);
    }

    function displayAlerts(alerts) {
        const alertList = document.getElementById('alertList');
        if (alerts.length > 0) {
            alertList.classList.remove('d-none');
            alertList.innerHTML = alerts.join('<br>');
        } else {
            alertList.classList.add('d-none');
        }
    }

    // Example function to fetch the latest heart rate
    function getLatestHeartRate() {
        return Math.floor(Math.random() * (160 - 50 + 1)) + 50;
    }

    // Reset/Initialize the data
    function initializeData() {
        console.log("Initializing data...");
        document.getElementById('heartRateValue').textContent = "75";
        document.getElementById('bloodPressureValue').textContent = "120/80";
        document.getElementById('oxygenSaturationValue').textContent = "98";
        document.getElementById('bodyTemperatureValue').textContent = "37.0";
        document.getElementById('respiratoryRateValue').textContent = "16";
        checkVitalSigns();
    }

    // Event Listeners
    document.getElementById('calibrateSensorsBtn').addEventListener('click', function() {
        alert("Calibration des capteurs en cours...");
    });

    document.getElementById('syncDataBtn').addEventListener('click', function() {
        alert("Synchronisation des données...");
    });

    document.getElementById('initializeBtn').addEventListener('click', initializeData);

    // Check vital signs every 5 seconds (this interval can be adjusted)
    setInterval(checkVitalSigns, 5000);
});
