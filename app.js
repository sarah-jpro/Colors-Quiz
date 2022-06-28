let blocCouleur = document.getElementById("couleur");
let score = document.getElementById("score");
let reponses = [...document.getElementsByClassName("reponse")];

let compteurScore = 0;
let rgbADeviner;


const genrererEntierPourRgb = () => {
   return Math.floor(Math.random()*256); // 0, 255
};

const genenrerRgb = () => {
    let r = genrererEntierPourRgb ();
    let g = genrererEntierPourRgb ();
    let b = genrererEntierPourRgb ();

    return `rgb(${r},${g},${b})`; 
};


const initialiser = () => {
    score.textContent = compteurScore;
    let reponseCorrecte =  Math.floor(Math.random() * 4); // 0 et 3
    reponses.forEach((rep) =>(rep.textContent = genenrerRgb()));
    rgbADeviner = reponses[reponseCorrecte].textContent;

    blocCouleur.style.backgroundColor = rgbADeviner;
          
};

const verifierReponse = (e) => {
    let valeurCliquee = e.target.textContent;

    if (valeurCliquee != rgbADeviner){
        window.alert(`Vous avez perdu ! La réponse était ${rgbADeviner}`);
        compteurScore = 0;
        return initialiser();
    }

    compteurScore++;
    initialiser();

};

reponses.forEach((rep) => {
    rep.addEventListener ("click", verifierReponse);
});

initialiser();