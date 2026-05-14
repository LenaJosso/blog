function loadPage(pageName) {
    const container = document.getElementById('articles-container');
    const title = document.querySelector('.title-section');

    // Petit effet de fondu lors du changement
    container.style.opacity = 0;

    setTimeout(() => {
        switch(pageName) {
            case 'tendances':
                title.innerText = "Tendances de la saison";
                container.innerHTML = "<p>Ici s'afficheront les dernières tendances mode...</p>";
                break;
            case 'tech':
                title.innerText = "La Technologie & La Mode";
                container.innerHTML = "<p>Découvrez comment le numérique transforme la couture...</p>";
                break;
            case 'propos':
                title.innerText = "À propos de nous";
                container.innerHTML = "<p>Bienvenue sur notre blog dédié à la couture numérique.</p>";
                break;
            default:
                // Retour à l'accueil / articles
                location.reload();
        }
        container.style.opacity = 1;
    }, 200);
}