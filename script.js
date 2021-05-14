/*****----------------------------------*****
 *****      Seção - Elétrica            *****
 *****----------------------------------*****/
var bequantidade    = $('div#beListas ul').length;
var belimite        = (bequantidade * 276) * -1; 
var belargura       = belimite + 276;
var beview_largura  = $('section#eletrica div#boardEletrica div#beCentro').width();

//$('div#teste').html(quantidade);
//$('div#teste').html(belimite);
//$('div#teste').html(largura);
//$('div#teste').html(view_largura);

//$('div#beListas').css('width',limite*-1);

/*$('div#beDireita').click( function() {
$('div#teste').html('Direito');
});

$('div#beEsquerda').click( function() {
$('div#teste').html('Esquerda');
});*/

$('div#beDireita').click(function() {
    beposicao_atual   = $('div#beListas').position().left;
    benova_posicao    = beposicao_atual - beview_largura;
    //$('div#teste').html(benova_posicao);    
    if (belimite < beposicao_atual - beview_largura) {
        $('div#beListas').animate({left:benova_posicao},1000);
    }
    if (belimite > (benova_posicao - beview_largura)) {
        $('div#beDireita ion-icon').css('opacity',0.5);
        $('div#beDireita ion-icon').css('cursor','not-allowed');        
    }
    $('div#beEsquerda ion-icon').css('opacity',1);
    $('div#beEsquerda ion-icon').css('cursor','pointer');
})

$('div#beEsquerda').click(function() {
    beposicao_atual   = $('div#beListas').position().left;
    if(beposicao_atual > 0){
        beposicao_atual = benova_posicao = 0;
    }
    //$('div#teste').html(benova_posicao);
    if (beposicao_atual + beview_largura <= 1) {
        benova_posicao = beposicao_atual + beview_largura;
        $('div#beListas').animate({left:benova_posicao},1000);
    }
    if (benova_posicao == 0 ) {
        $('div#beEsquerda ion-icon').css('opacity',0.5);
        $('div#beEsquerda ion-icon').css('cursor','not-allowed');        
    }
    $('div#beDireita ion-icon').css('opacity',1);
    $('div#beDireita ion-icon').css('cursor','pointer');     
})

/*****----------------------------------*****
 *****      Seção - Eletrônica          *****
 *****----------------------------------*****/
var betquantidade      = $('div#betListas ul').length;
var betlimite          = (betquantidade * 276) * -1; 
var betlargura         = betlimite + 276;
var betview_largura    = $('section#eletronica div#boardEletronica div#betCentro').width();

$('div#betDireita').click(function() {
    betposicao_atual   = $('div#betListas').position().left;
    betnova_posicao    = betposicao_atual - betview_largura;   
    if (betlimite < betposicao_atual - betview_largura) {
        $('div#betListas').animate({left:betnova_posicao},1000);
    }
    if (betlimite > (betnova_posicao - betview_largura)) {
        $('div#betDireita ion-icon').css('opacity',0.5);
        $('div#betDireita ion-icon').css('cursor','not-allowed');        
    }
    $('div#betEsquerda ion-icon').css('opacity',1);
    $('div#betEsquerda ion-icon').css('cursor','pointer');
})

$('div#betEsquerda').click(function() {
    betposicao_atual   = $('div#betListas').position().left;
    if(betposicao_atual > 0){
        betposicao_atual = betnova_posicao = 0;
    }
    if (betposicao_atual + betview_largura <= 1) {
        betnova_posicao = betposicao_atual + betview_largura;
        $('div#betListas').animate({left:betnova_posicao},1000);
    }
    if (betnova_posicao == 0) {
        $('div#betEsquerda ion-icon').css('opacity',0.5);
        $('div#betEsquerda ion-icon').css('cursor','not-allowed');        
    }
    $('div#betDireita ion-icon').css('opacity',1);
    $('div#betDireita ion-icon').css('cursor','pointer');     
})

/*****----------------------------------*****
 *****      Seção - Matemática          *****
 *****----------------------------------*****/
var bmquantidade      = $('div#betListas ul').length;
var bmlimite          = (bmquantidade * 276) * -1; 
var bmlargura         = bmlimite + 276;
var bmview_largura    = $('section#eletronica div#boardEletronica div#betCentro').width();

$('div#betDireita').click(function() {
    bmposicao_atual   = $('div#betListas').position().left;
    bmnova_posicao    = bmposicao_atual - bmview_largura;   
    if (bmlimite < bmposicao_atual - bmview_largura) {
        $('div#betListas').animate({left:bmnova_posicao},1000);
    }
    if (bmlimite > (bmnova_posicao - bmview_largura)) {
        $('div#betDireita ion-icon').css('opacity',0.5);
        $('div#betDireita ion-icon').css('cursor','not-allowed');        
    }
    $('div#betEsquerda ion-icon').css('opacity',1);
    $('div#betEsquerda ion-icon').css('cursor','pointer');
})

$('div#betEsquerda').click(function() {
    bmposicao_atual   = $('div#betListas').position().left;
    if(bmposicao_atual > 0){
        bmposicao_atual = bmnova_posicao = 0;
    }
    if (bmposicao_atual + bmview_largura <= 1) {
        bmnova_posicao = bmposicao_atual + bmview_largura;
        $('div#betListas').animate({left:bmnova_posicao},1000);
    }
    if (bmnova_posicao == 0) {
        $('div#betEsquerda ion-icon').css('opacity',0.5);
        $('div#betEsquerda ion-icon').css('cursor','not-allowed');        
    }
    $('div#betDireita ion-icon').css('opacity',1);
    $('div#betDireita ion-icon').css('cursor','pointer');     
})

/*----------------------------
        Seção - footer
----------------------------*/
//Códigos para links das redes sociais
$("ion-icon#facebook").click(function(){
window.open("https://www.facebook.com/joseantonio.sancheslapaz", "_blank");
})

$("ion-icon#instagram").click(function(){
    window.open("https://www.instagram.com/joseantoniosancheslapaz/", "_blank");
})

$("ion-icon#yuotube").click(function(){
    window.open("http://www.youtube.com/channel/UCluEJ6pxIcIamwrdbhMvT8w", "_blank");
})

$("ion-icon#linkedin").click(function(){
    window.open("https://www.linkedin.com/in/jos%C3%A9-antonio-sanches-lapaz-27157032/", "_blank");
})

/*****----------------------------------*****
 *****          Seção - Animação        *****
 *****----------------------------------*****/
$('div#beListas ul:eq(0)').css('opacity', 0);
$('div#beListas ul:eq(1)').css('opacity', 0);
$('div#beListas ul:eq(2)').css('opacity', 0);
$('div#betListas ul:eq(0)').css('opacity', 0);
$('div#betListas ul:eq(1)').css('opacity', 0);
$('div#betListas ul:eq(2)').css('opacity', 0);
$('div#bmListas ul:eq(0)').css('opacity', 0);
$('div#bmListas ul:eq(1)').css('opacity', 0);
$('div#bmListas ul:eq(2)').css('opacity', 0);

$('section#boardApresentacao').waypoint( function(direcao) {
    if (direcao == 'down'){
        $('section#boardApresentacao h2').removeClass('animate__animated animate__fadeOutDown');
        $('div.cursoOpcao').removeClass('animate__animated animate__bounceOut animate__slow');
        $('section#boardApresentacao h2').addClass('animate__animated animate__fadeInDown');
        $('div.cursoOpcao').addClass('animate__animated animate__bounceIn animate__slow');
    }
    if (direcao == 'up'){
        $('section#boardApresentacao h2').addClass('animate__animated animate__fadeOutDown');
        $('div.cursoOpcao').addClass('animate__animated animate__bounceOut animate__slow');
    }
},{
    offset: '0px;'
})

$('section#eletrica').waypoint( function(direcao) {
    if (direcao == 'down'){
        $('div#beListas ul:eq(0)').removeClass('animate__animated animate__fadeOutLeft animate__slow');
        $('div#beListas ul:eq(1)').removeClass('animate__animated animate__fadeOutDown');
        $('div#beListas ul:eq(2)').removeClass('animate__animated animate__fadeOutRight animate__slow');
        $('div#beListas ul:eq(0)').addClass('animate__animated animate__fadeInLeft animate__slow');
        $('div#beListas ul:eq(1)').addClass('animate__animated animate__fadeInDown');
        $('div#beListas ul:eq(2)').addClass('animate__animated animate__fadeInRight animate__slow');
    }
    if (direcao == 'up'){
        $('div#beListas ul:eq(0)').addClass('animate__animated animate__fadeOutLeft animate__slow');
        $('div#beListas ul:eq(1)').addClass('animate__animated animate__fadeOutDown');
        $('div#beListas ul:eq(2)').addClass('animate__animated animate__fadeOutRight animate__slow');
    }
},{
    offset: '50px;'
})

$('section#eletronica').waypoint( function(direcao) {
    if (direcao == 'down'){
        $('div#betListas ul:eq(0)').removeClass('animate__animated animate__fadeOutLeft animate__slow');
        $('div#betListas ul:eq(1)').removeClass('animate__animated animate__fadeOutUp');
        $('div#betListas ul:eq(2)').removeClass('animate__animated animate__fadeOutRight animate__slow');
        $('div#betListas ul:eq(0)').addClass('animate__animated animate__fadeInLeft animate__slow');
        $('div#betListas ul:eq(1)').addClass('animate__animated animate__fadeInUp');
        $('div#betListas ul:eq(2)').addClass('animate__animated animate__fadeInRight animate__slow');
    }
    if (direcao == 'up'){
        $('div#betListas ul:eq(0)').addClass('animate__animated animate__fadeOutLeft animate__slow');
        $('div#betListas ul:eq(1)').addClass('animate__animated animate__fadeOutUp');
        $('div#betListas ul:eq(2)').addClass('animate__animated animate__fadeOutRight animate__slow');
    }
},{
    offset: '50px;'
})

$('section#matematica').waypoint( function(direcao) {
    if (direcao == 'down'){
        $('div#bmListas ul:eq(0)').removeClass('animate__animated animate__fadeOutLeft animate__slow');
        $('div#bmListas ul:eq(1)').removeClass('animate__animated animate__fadeOutDown');
        $('div#bmListas ul:eq(2)').removeClass('animate__animated animate__fadeOutRight animate__slow');
        $('div#bmListas ul:eq(0)').addClass('animate__animated animate__fadeInLeft animate__slow');
        $('div#bmListas ul:eq(1)').addClass('animate__animated animate__fadeInDown');
        $('div#bmListas ul:eq(2)').addClass('animate__animated animate__fadeInRight animate__slow');
    }
    if (direcao == 'up'){
        $('div#bmListas ul:eq(0)').addClass('animate__animated animate__fadeOutLeft animate__slow');
        $('div#bmListas ul:eq(1)').addClass('animate__animated animate__fadeOutDown');
        $('div#bmListas ul:eq(2)').addClass('animate__animated animate__fadeOutRight animate__slow');
    }
},{
    offset: '50px;'
})

/*****----------------------------------*****
 *****          Navegador do Site       *****
 *****----------------------------------*****/
$('header h1').waypoint(function(direcao){
    if(direcao == 'down'){
        $('nav').addClass("navStatic")
        $('nav div').addClass("logoStatic")
        $('nav ul').addClass("menuStatic")
        $('nav ul li a').addClass("itemStatic")  
    }
    else{
        $('nav').removeClass("navStatic")
        $('nav div').removeClass("logoStatic")
        $('nav ul').removeClass("menuStatic")
        $('nav ul li a').removeClass("itemStatic")
    }
},{
    offset: "150px;"
})

/*****----------------------------------*****
 *****  Ações de navegação do Site      *****
 *****----------------------------------*****/
$('nav div').click(function(){
    $('html,body').animate({scrollTop:$('header').offset().top},1000)
})

$('nav ul li:eq(0)').click(function(){
    $('html,body').animate({scrollTop:$('section#boardApresentacao').offset().top},1000)
})

$('nav ul li:eq(1)').click(function(){
    $('html,body').animate({scrollTop:$('section#eletrica').offset().top},1000)
})

$('nav ul li:eq(2)').click(function(){
    $('html,body').animate({scrollTop:$('section#eletronica').offset().top},1000)
})

$('nav ul li:eq(3)').click(function(){
    $('html,body').animate({scrollTop:$('section#matematica').offset().top},1000)
})

$('nav ul li:eq(4)').click(function(){
    $('html,body').animate({scrollTop:$('section#boardApresentacao').offset().top},1000)
})

/*****----------------------------------*****
 *****  layout Tablete ajustes via JS   *****
 *****----------------------------------*****/