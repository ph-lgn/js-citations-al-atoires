// capturer mes éléments et créer mon tableau d'objets (attention avec la syntaxe des objets comme dans API)

const bouton = document.querySelector('button');
const container = document.querySelector('.container');
const tableau = [
    {
        citation : "« Les gagnants trouvent des moyens, les perdants des excuses. »"
    },
    {citation:"« Il n’existe rien de constant si ce n’est le changement. »"
    },
    {  citation:"« Quand la vie te donne une centaine de raisons de pleurer, montre-lui que tu en as mille de sourires. »"
    },
    {citation:"« Quand on ose, on se trompe souvent. Quand on n’ose pas, on se trompe toujours. »"
    },
    {citation:"« Il n’y a qu’une façon d’échouer c’est d’abandonner avant d’avoir réussi. »"
    },
    {citation:"« La vie ce n’est pas d’attendre que les orages passent, c’est d’apprendre à danser sous la pluie »"
    },
    {citation:"« Se donner du mal pour les petites choses, c’est parvenir aux grandes, avec le temps. »"
    },
    {citation:"« Au milieu de toute difficulté se trouve cachée une opportunité. »"
    },
    {citation:"« L’obstination est le chemin de la réussite. »"
    }
    ]


function randomCitations() {
    // renvoyer ma valeur!
    return Math.floor(Math.random()*9) 
}


bouton.addEventListener('click', (e) => {
    // associer le random à ma citation!!!
    var random = randomCitations()
    // mettre valeur random dans le tableau
    var citations = tableau[random].citation
        container.innerHTML = `
        <span>${citations}</span>`
   
});

            
        

   


      
