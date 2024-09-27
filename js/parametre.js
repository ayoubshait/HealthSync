document.addEventListener('DOMContentLoaded', function () {
    // Profile form submission
    document.getElementById('profileForm').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Profil mis à jour avec succès!');
    });

    // Notification form submission
    document.getElementById('notificationForm').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Préférences de notifications enregistrées!');
    });

    // Security form submission
    document.getElementById('securityForm').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Paramètres de sécurité mis à jour!');
    });

    // Adding a new device
    document.querySelector('.btn-success').addEventListener('click', function () {
        alert('Fonctionnalité pour ajouter un nouvel appareil à implémenter.');
    });

    // Checking for device updates
    document.querySelector('.btn-info').addEventListener('click', function () {
        alert('Vérification des mises à jour des dispositifs en cours...');
    });

    // Configuring emergency protocols
    document.querySelector('.btn-warning').addEventListener('click', function () {
        alert('Configuration des protocoles d\'urgence.');
    });

    // Accessing the protocol library
    document.querySelector('.btn-primary').addEventListener('click', function () {
        alert('Accès à la bibliothèque des protocoles.');
    });

    // Backup settings
    document.querySelector('.btn-secondary').addEventListener('click', function () {
        alert('Sauvegarde des paramètres en cours...');
    });

    // Restore settings
    document.querySelector('.btn-danger').addEventListener('click', function () {
        alert('Restauration des paramètres en cours...');
    });
});
