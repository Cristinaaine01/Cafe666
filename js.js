


/*
var expresso;
var expressoduplo;
var expressotriplo;
var capuccino;
var capuccinocomcanela;
var capuccinodeavela;
var latte;
var macchiato;
var cafecreme;
var affogato;
var mochabreve;
var mocha;
var petitgateau;
var sorvetedecreme;
var donut;
var minidonut;
var milkshakedecreme;
var brownie;
var tortadecarameloecanela;
var churros;
var flan;
*/

/*
expresso
expressoduplo
expressotriplo
capuccino
capuccinocomcanela
capuccinodeavela
latte
macchiato
cafecreme
affogato
mochabreve
mocha
petitgateau
sorvetedecreme
donut
minidonut
milkshakedecreme
brownie
tortadecarameloecanela
churros
flan
*/


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

var quantidadeexpresso;
var quantidadeexpressoduplo;
var quantidadeexpressotriplo;
var quantidadecapuccino;
var quantidadecapuccinocomcanela;
var quantidadecapuccinodeavela;
var quantidadelatte;
var quantidademacchiato;
var quantidadecafecreme;
var quantidadeaffogato;
var quantidademochabreve;
var quantidademocha;
var quantidadepetitgateau;
var quantidadesorvetedecreme;
var quantidadedonut;
var quantidademinidonut;
var quantidademilkshakedecreme;
var quantidadebrownie;
var quantidadetortadecarameloecanela;
var quantidadechurros;
var quantidadeflan;

var precexpresso;
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

function IntEMais(){
    quantidadeexpresso=parseInt(quantidadeexpresso);
    quantidadeexpressoduplo=parseInt(quantidadeexpressoduplo);
    quantidadeexpressotriplo=parseInt(quantidadeexpressotriplo);
    quantidadecapuccino=parseInt(quantidadecapuccino);
    quantidadecapuccinocomcanela=parseInt(quantidadecapuccinocomcanela);
    quantidadecapuccinodeavela=parseInt(quantidadecapuccinodeavela);
    quantidadelatte=parseInt(quantidadelatte);
    quantidademacchiato=parseInt(quantidademacchiato);
    quantidadecafecreme=parseInt(quantidadecafecreme);
    quantidadeaffogato=parseInt(quantidadeaffogato);
    quantidademochabreve=parseInt(quantidademochabreve);
    quantidademocha=parseInt(quantidademocha);
    quantidadepetitgateau=parseInt(quantidadepetitgateau);
    quantidadesorvetedecreme=parseInt(quantidadesorvetedecreme);
    quantidadedonut=parseInt(quantidadedonut);
    quantidademinidonut=parseInt(quantidademinidonut);
    quantidademilkshakedecreme=parseInt(quantidademilkshakedecreme);
    quantidadebrownie=parseInt(quantidadebrownie);
    quantidadetortadecarameloecanela=parseInt(quantidadetortadecarameloecanela);
    quantidadechurros=parseInt(quantidadechurros);
    quantidadeflan=parseInt(quantidadeflan);

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
}

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

function MarcarExpresso() {
    if (vezesrodadasexpresso==0){

    }
    else{
        quantidadeexpresso=vezesrodadasexpresso+1;
    }
}
