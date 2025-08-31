


var total = 0;


var pdoasideexpresso;
var pdoasideexpressoduplo;
var pdoasideexpressotriplo;
var pdoasidecapuccino;
var pdoasidecapuccinocomcanela;
var pdoasidecapuccinodeavela;
var pdoasidelatte;
var pdoasidemacchiato;
var pdoasidecafecreme;
var pdoasideaffogato;
var pdoasidemochabreve;
var pdoasidemocha;
var pdoasidepetitgateau;
var pdoasidesorvetedecreme;
var pdoasidedonut;
var pdoasideminidonut;
var pdoasidemilkshakedecreme;
var pdoasidebrownie;
var pdoasidetortadecarameloecanela;
var pdoasidechurros;
var pdoasideflan;
var pdoasidetotal;

var precoxpresso;
var precoexpressoduplo;
var precoexpressotriplo;
var precocapuccino;
var precocapuccinocomcanela;
var precocapuccinodeavela;
var precolatte;
var precomacchiato;
var precocafecreme;
var precoaffogato;
var precomochabreve;
var precomocha;
var precopetitgateau;
var precosorvetedecreme;
var precodonut;
var precominidonut;
var precomilkshakedecreme;
var precobrownie;
var precotortadecarameloecanela;
var precochurros;
var precoflan;

var vezesrodadasexpresso=0;
var vezesrodadasexpressoduplo=0;
var vezesrodadasexpressotriplo=0;
var vezesrodadascapuccino=0;
var vezesrodadascapuccinocomcanela=0;
var vezesrodadascapuccinodeavela=0;
var vezesrodadaslatte=0;
var vezesrodadasmacchiato=0;
var vezesrodadascafecreme=0;
var vezesrodadasaffogato=0;
var vezesrodadasmochabreve=0;
var vezesrodadasmocha=0;
var vezesrodadaspetitgateau=0;
var vezesrodadassorvetedecreme=0;
var vezesrodadasdonut=0;
var vezesrodadasminidonut=0;
var vezesrodadasmilkshakedecreme=0;
var vezesrodadasbrownie=0;
var vezesrodadastortadecarameloecanela=0;
var vezesrodadaschurros=0;
var vezesrodadasflan=0;




function IntEMais(){

    total=parseFloat(total);

    vezesrodadasexpresso=parseInt(vezesrodadasexpresso);
    vezesrodadasexpressoduplo=parseInt(vezesrodadasexpressoduplo);
    vezesrodadasexpressotriplo=parseInt(vezesrodadasexpressotriplo);
    vezesrodadascapuccino=parseInt(vezesrodadascapuccino);
    vezesrodadascapuccinocomcanela=parseInt(vezesrodadascapuccinocomcanela);
    vezesrodadascapuccinodeavela=parseInt(vezesrodadascapuccinodeavela);
    vezesrodadaslatte=parseInt(vezesrodadaslatte);
    vezesrodadasmacchiato=parseInt(vezesrodadasmacchiato);
    vezesrodadascafecreme=parseInt(vezesrodadascafecreme);
    vezesrodadasaffogato=parseInt(vezesrodadasaffogato);
    vezesrodadasmochabreve=parseInt(vezesrodadasmochabreve);
    vezesrodadasmocha=parseInt(vezesrodadasmocha);
    vezesrodadaspetitgateau=parseInt(vezesrodadaspetitgateau);
    vezesrodadassorvetedecreme=parseInt(vezesrodadassorvetedecreme);
    vezesrodadasdonut=parseInt(vezesrodadasdonut);
    vezesrodadasminidonut=parseInt(vezesrodadasminidonut);
    vezesrodadasmilkshakedecreme=parseInt(vezesrodadasmilkshakedecreme);
    vezesrodadasbrownie=parseInt(vezesrodadasbrownie);
    vezesrodadastortadecarameloecanela=parseInt(vezesrodadastortadecarameloecanela);
    vezesrodadaschurros=parseInt(vezesrodadaschurros);
    vezesrodadasflan=parseInt(vezesrodadasflan);

    pdoasideexpresso = document.getElementById("pdoasideexpresso");
    pdoasideexpressoduplo = document.getElementById("pdoasideexpressoduplo");
    pdoasideexpressotriplo = document.getElementById("pdoasideexpressotriplo");
    pdoasidecapuccino = document.getElementById("pdoasidecapuccino");
    pdoasidecapuccinocomcanela = document.getElementById("pdoasidecapuccinocomcanela");
    pdoasidecapuccinodeavela = document.getElementById("pdoasidecapuccinodeavela");
    pdoasidelatte = document.getElementById("pdoasidelatte");
    pdoasidemacchiato = document.getElementById("pdoasidemacchiato");
    pdoasidecafecreme = document.getElementById("pdoasidecafecreme");
    pdoasideaffogato = document.getElementById("pdoasideaffogato");
    pdoasidemochabreve = document.getElementById("pdoasidemochabreve");
    pdoasidemocha = document.getElementById("pdoasidemocha");
    pdoasidepetitgateau = document.getElementById("pdoasidepetitgateau");
    pdoasidesorvetedecreme = document.getElementById("pdoasidesorvetedecreme");
    pdoasidedonut = document.getElementById("pdoasidedonut");
    pdoasideminidonut = document.getElementById("pdoasideminidonut");
    pdoasidemilkshakedecreme = document.getElementById("pdoasidemilkshakedecreme");
    pdoasidebrownie = document.getElementById("pdoasidebrownie");
    pdoasidetortadecarameloecanela = document.getElementById("pdoasidetortadecarameloecanela");
    pdoasidechurros = document.getElementById("pdoasidechurros");
    pdoasideflan = document.getElementById("pdoasideflan");
    pdoasidetotal = document.getElementById("pdoasidetotal");

}

/*----------------------------------------------------------------------------*/
/* EXPRESSO*/
function MostrarExpresso() {
    IntEMais();

    vezesrodadasexpresso++;
    pdoasideexpresso.innerHTML=("Expresso x" + vezesrodadasexpresso);

    total = total + 10;
    pdoasidetotal.innerHTML=("Total: R$ " + total);
}

/* EXPRESSO DUPLO*/
function MostrarExpressoDuplo() {
    IntEMais();

    vezesrodadasexpressoduplo++;
    pdoasideexpressoduplo.innerHTML=("Expresso Duplo x" + vezesrodadasexpressoduplo);

    total = total + 20;
    pdoasidetotal.innerHTML=("Total: R$ " + total);
}

/* EXPRESSO TRIPLO*/
function MostrarExpressoTriplo() {
    IntEMais();

    vezesrodadasexpressotriplo++;
    pdoasideexpressotriplo.innerHTML=("Expresso Triplo x" + vezesrodadasexpressotriplo);

    total = total + 30;
    pdoasidetotal.innerHTML=("Total: R$ " + total);
}

/*----------------------------------------------------------------------------*/
/* CAPUCCINO*/
function MostrarCapuccino() {
    IntEMais();

    vezesrodadascapuccino++;
    pdoasidecapuccino.innerHTML=("Capuccino x" + vezesrodadascapuccino);

    total = total + 13;
    pdoasidetotal.innerHTML=("Total: R$ " + total);
}

/* CAPUCCINO COM CANELA*/
function MostrarCapuccinoComCanela() {
    IntEMais();

    vezesrodadascapuccinocomcanela++;
    pdoasidecapuccinocomcanela.innerHTML=("Capuccino com canela x" + vezesrodadascapuccinocomcanela);

    total = total + 13.5;
    pdoasidetotal.innerHTML=("Total: R$ " + total);
}

/* CAPUCCINO DE AVELÃ*/
function MostrarCapuccinoDeAvela() {
    IntEMais();

    vezesrodadascapuccinodeavela++;
    pdoasidecapuccinodeavela.innerHTML=("Capuccino de avelã x" + vezesrodadascapuccinodeavela);

    total = total + 16;
    pdoasidetotal.innerHTML=("Total: R$ " + total);
}

/*----------------------------------------------------------------------------*/
/* LATTE*/
function MostrarLatte() {
    IntEMais();

    vezesrodadaslatte++;
    pdoasidelatte.innerHTML=("Latte x" + vezesrodadaslatte);

    total = total + 13;
    pdoasidetotal.innerHTML=("Total: R$ " + total);
}

/* MACCHIATO*/
function MostrarMacchiato() {
    IntEMais();

    vezesrodadasmacchiato++;
    pdoasidemacchiato.innerHTML=("Macchiato x" + vezesrodadasmacchiato);

    total = total + 11;
    pdoasidetotal.innerHTML=("Total: R$ " + total);
}

/* CAFÉ CREME*/
function MostrarCafeCreme() {
    IntEMais();

    vezesrodadascafecreme++;
    pdoasidecafecreme.innerHTML=("Café creme x" + vezesrodadascafecreme);

    total = total + 14;
    pdoasidetotal.innerHTML=("Total: R$ " + total);
}

/*-------------------*/

/* AFFOGATO*/
function MostrarAffogato() {
    IntEMais();

    vezesrodadasaffogato++;
    pdoasideaffogato.innerHTML=("Affogato x" + vezesrodadasaffogato);

    total = total + 14;
    pdoasidetotal.innerHTML=("Total: R$ " + total);
}

/* MOCHA BREVE*/
function MostrarMochaBreve() {
    IntEMais();

    vezesrodadasmochabreve++;
    pdoasidemochabreve.innerHTML=("Mocha breve x" + vezesrodadasmochabreve);

    total = total + 15.5;
    pdoasidetotal.innerHTML=("Total: R$ " + total);
}

/* MOCHA*/
function MostrarMocha() {
    IntEMais();

    vezesrodadasmocha++;
    pdoasidemocha.innerHTML=("Mocha x" + vezesrodadasmocha);

    total = total + 16;
    pdoasidetotal.innerHTML=("Total: R$ " + total);
}

/*----------------------------------------------------------------------------*/
/* PETIT GATEAU*/
function MostrarPetitGateau() {
    IntEMais();

    vezesrodadaspetitgateau++;
    pdoasidepetitgateau.innerHTML=("Petit gateau x" + vezesrodadaspetitgateau);

    total = total + 20;
    pdoasidetotal.innerHTML=("Total: R$ " + total);
}

/* SORVETE DE CREME*/
function MostrarSorveteDeCreme() {
    IntEMais();

    vezesrodadassorvetedecreme++;
    pdoasidesorvetedecreme.innerHTML=("Sorvete de creme x" + vezesrodadassorvetedecreme);

    total = total + 4;
    pdoasidetotal.innerHTML=("Total: R$ " + total);
}

/* DONUT*/
function MostrarDonut() {
    IntEMais();

    vezesrodadasdonut++;
    pdoasidedonut.innerHTML=("Donut x" + vezesrodadasdonut);

    total = total + 12;
    pdoasidetotal.innerHTML=("Total: R$ " + total);
}

/*-------------------*/

/* MINI DONUT*/
function MostrarMiniDonut() {
    IntEMais();

    vezesrodadasminidonut++;
    pdoasideminidonut.innerHTML=("Mini donut x" + vezesrodadasminidonut);

    total = total + 10;
    pdoasidetotal.innerHTML=("Total: R$ " + total);
}

/* MILKSHADE DE CREME*/
function MostrarMilkShakeDeCreme() {
    IntEMais();

    vezesrodadasmilkshakedecreme++;
    pdoasidemilkshakedecreme.innerHTML=("MilkShake de creme x" + vezesrodadasmilkshakedecreme);

    total = total + 18;
    pdoasidetotal.innerHTML=("Total: R$ " + total);
}

/* BROWNIE*/
function MostrarBrownie() {
    IntEMais();

    vezesrodadasbrownie++;
    pdoasidebrownie.innerHTML=("Brownie x" + vezesrodadasbrownie);

    total = total + 14;
    pdoasidetotal.innerHTML=("Total: R$ " + total);
}

/*-------------------*/

/* TORTA DE CARAMELO E CANELA*/
function MostrarTortadeCarameloECanela() {
    IntEMais();

    vezesrodadastortadecarameloecanela++;
    pdoasidetortadecarameloecanela.innerHTML=("Torta de caramelo e canela x" + vezesrodadastortadecarameloecanela);

    total = total + 16;
    pdoasidetotal.innerHTML=("Total: R$ " + total);
}

/* CHURROS*/
function MostrarChurros() {
    IntEMais();

    vezesrodadaschurros++;
    pdoasidechurros.innerHTML=("Churros x" + vezesrodadaschurros);

    total = total + 15;
    pdoasidetotal.innerHTML=("Total: R$ " + total);
}

/* FLAN*/
function MostrarFlan() {
    IntEMais();

    vezesrodadasflan++;
    pdoasideflan.innerHTML=("Flan x" + vezesrodadasflan);

    total = total + 12;
    pdoasidetotal.innerHTML=("Total: R$ " + total);
}
