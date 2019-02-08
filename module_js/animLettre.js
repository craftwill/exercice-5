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
        console.log(this.elmHeader);
        let i = 0;
        for (let uneLettre of lesLettres){
            //this.elmHeader
            //uneLettre.classList.add("animNoel");
			//uneLettre.style.animationDelay = (i * 0.5) + "s";
		}
        /*for(let lettre of this.lesLettres){
            console.log(lettre);
        }*/
    }	
}