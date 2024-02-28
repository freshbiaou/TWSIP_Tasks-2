// Attend que tout le contenu de la page soit chargé
window.addEventListener("load", function () {
    // Cache le préchargeur
    var preloader = document.getElementById("preloader");
    preloader.style.display = "none";
  
    // Affiche le contenu principal
    var mainContent = document.getElementById("main-content");
    mainContent.style.display = "block";
  });
  