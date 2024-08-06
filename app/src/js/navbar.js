
/**
 * Fonction pour créer une navbar.
 * @param {string} containerId - L'ID de l'élément conteneur où la navbar sera insérée.
 * @param {Array} data - Tableau d'objets représentant les liens de la navbar. Chaque objet doit avoir les propriétés 'text' et 'href'.
 */
 async function createNavbar(data, containerId) {
    console.log("satred ")
    const container = document.getElementById(containerId);
    const content = document.getElementById('content');

    const list = document.createElement('ul');
    list.classList.add('navbar');

    // Ajouter les liens à la navbar
    data.forEach(item => {
        const itemList = document.createElement('li');
        itemList.innerHTML = item.text;
        itemList.classList = "event";
        setlistenerEventClick(itemList, content, `app/src/ui/${item.link}`);
        list.appendChild(itemList);
    });
   // Ajouter la navbar au conteneur
    container.appendChild(list);
}




/**
 *  Fonction charge les données depuis le fichier menu json ensuite fait appel  à la fonction createNavbar
 * @param {*} url 
 * @param {*} tagId 
 * @param {*} callback 
 */
 function loadMenu(url, tagId ,callback){
    console.log(url)
    fetch(url)
    .then( res => res.json())
    .then( data => callback(data, tagId))
    .catch( err => console.log(`Error loading data fron json file ${ err }`))
}

/**
 * Fonction qui mis un event clique sur chaque element de menu
 * 
 * @param {*} item : un element de la liste
 * @param {*} content : le contenant visualisé lors du click sur un item
 * @param {*} routehtml : la route vers le contenant à afficher sur content
 */
function setlistenerEventClick(item, content, routehtml){
    item.onclick = () => {
        document.querySelectorAll('.event').forEach( item => item.classList.remove('clicked'));
        fetch(routehtml)
          .then( res => res.text())
          .then( container => {
              content.innerHTML = container;
              item.classList.add('clicked');
          })
    };

}

const routeFile = "app/ressources/menu.json"
/**
 *   Déclancer la fonction loadMenu une fois le contenu du DOM chargé completement
 */
document.addEventListener('DOMContentLoaded', () => {    
    loadMenu(routeFile, 'navbar-container', createNavbar);
    console.log(" Menu loaded ...");


})




