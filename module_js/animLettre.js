export class AnimLettre
{
    constructor(lesLettres, elmHeader, finAnim)
    {
        this.lesLettres = lesLettres;
        this.nbLettres = this.lesLettres.length;
        this.elmHeader = elmHeader;
        this.animerLettres();
    }
    animerLettres(){
        let elmMot = document.createElement("div");
        elmMot.classList.add("mot");
        this.elmHeader.appendChild(elmMot);
        let i = 0;
        for (let uneLettre of this.lesLettres){
            i++;
            let nouvelleLettre = document.createElement("span");
            nouvelleLettre.innerHTML = uneLettre;
            nouvelleLettre.style.animationDelay = (i * 0.15) + "s";
            nouvelleLettre.classList.add("classAnimLettre");
            elmMot.appendChild(nouvelleLettre);
		}
        /*for(let lettre of this.lesLettres){
            console.log(lettre);
        }*/
    }	
}

/**
    let nouvelleLettre = document.createElement("span");
    nouvelleLettre.innerHTML = uneLettre;
    this.elmMot.appendChild(nouvelleLettre);
 */