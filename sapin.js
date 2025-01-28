function afficherEtoiles(n) {
    // console.log(n);
    const etoile = "*"
    let nbrEnEtoiles = etoile.repeat(n);
    // console.log(nbrEnEtoiles);
    return nbrEnEtoiles
}

// afficherEtoiles(1); // Les nombres négatif marche par avec la méthode repeat
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

        if (j === 0) {
            console.log(espace.repeat(n), "/");
        } else if (j > 0) {
            let k = n - j
            console.log(espace.repeat(k), "/", etage);
        }
    }
}

// afficherTriangleGauche(5);

function afficherPointeSapin(n) {
    let j = 0;

    for (let i = 0; i < n; i++) {
        j++
        // console.log(j);

        let etage = afficherEtoiles(j);
        let espace = " ";

        if (j === 1) {
            console.log(espace.repeat(n-2), "+");
        } else if (j === 2) {
            let k = n - j
            console.log(`${espace.repeat(k)}/|\\`);
        } else if (j > 2) {
            let k = n - j
            // console.log(n, j, k);

            etage = etage.slice(2);
            console.log(`${espace.repeat(k)}/${etage}|${etage}\\`);
        }
    }
}

// CORRECTION COURS :
function afficherPointeSapin(hauteur) {
    for (let i = 0; i < hauteur; i++) {
        console.log(' '.repeat(hauteur) + "+");
        for (let ligne = 1; ligne < hauteur; ligne++) {
            let droite = '*'.repeat(ligne - 1) + '\\';
            let gauche = ' '.repeat(hauteur - ligne) + '/' + '*'.repeat(ligne - 1);
            console.log(gauche + '|' + droite);
        }
    }
}

// afficherPointeSapin(2);
// afficherPointeSapin(3);
// afficherPointeSapin(4);

function afficherEtage(hauteur, pointe_offset) {

}

afficherEtage(3, 0);
afficherEtage(3, 1);
afficherEtage(3, 2);