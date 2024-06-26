document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('produit').addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5500/page2.html';
    });

    document.getElementById('collections').addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5500/Project.html';
    });

    document.getElementById('idees-cadeaux').addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5500/#idee-cadeaux';
    });

    document.getElementById('personnaliser').addEventListener('click', () => {
        alert('Cette page sera disponible d\'ici fin juillet');
    });

    document.getElementById('contacter').addEventListener('click', () => {
        document.getElementById('contact-form').style.display = 'block';
    });
});
