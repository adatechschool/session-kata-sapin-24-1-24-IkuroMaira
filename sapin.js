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
    let j = -1;
    for (let i = 0; i < n-1; i++) {
        j++
        console.log(afficherEtoiles(j), "\\");
    }
}

// afficherTriangleDroite(5);

function afficherTriangleGauche(n) {
    let j = -1;
    for (let i = 0; i < n; i++) {
        j++
        let etage = afficherEtoiles(j);
        let espace = " ";

        if (j === -1) {
            console.log(espace.repeat(n), "/");
        } else if (j > -1) {
            let k = n - j
            console.log(espace.repeat(k), "/",etage,);
        }
    }
}

afficherTriangleGauche(5);