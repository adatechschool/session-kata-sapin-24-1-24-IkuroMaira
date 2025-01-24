function afficherPointeSapin(hauteur) {

}

// afficherPointeSapin(4);

function afficherEtoiles(n) {
    // console.log(n);
    const etoile = "*"
    let nbrEnEtoiles = etoile.repeat(n);
    // console.log(nbrEnEtoiles);
    return nbrEnEtoiles
}

// afficherEtoiles(2);
// afficherEtoiles(5);

function afficherRectangle(hauteur, largeur) {
    for (let i = 0; i < hauteur ; i++) {
        let etages = afficherEtoiles(largeur);
        console.log(etages);
    }
}

// afficherRectangle(5,5);

function afficherTriangleDroite(n) {
    console.log(" \\");
    let j = 0;
    for (let i = 0; i < n-1; i++) {
        j++
        console.log(afficherEtoiles(j), "\\");
    }
}

afficherTriangleDroite(5);