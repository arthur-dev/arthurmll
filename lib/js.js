/**
 * Created by arthur on 24/09/15.
 */


/*
$(".navscroll").click(function($this){

   // alert($this.attr("data-id"));
    alert(JSON.stringify($this));

    switch()
     {

     }

    $('body').scrollTo('#inter1',600);
});
*/


$("#nav1").click(function($this){
    $('body').scrollTo('#inter1',600);
});

$("#nav2").click(function($this){


    $('body').scrollTo($('#page2').position().top-$('#princ').height() ,600);
});

$("#nav3").click(function($this){
    $('body').scrollTo($('#page3').position().top-$('#princ').height() ,600);
});

$("#nav4").click(function($this){
    $('body').scrollTo($('#page4').position().top-$('#princ').height() ,600);
});

$("#nav5").click(function($this){
    $('body').scrollTo($('#page5').position().top-$('#princ').height() ,600);
});

$("#nav6").click(function($this){
    $('body').scrollTo($('#inter5').position().top-$('#princ').height() ,600);
});


$('#card1').click(function(){

    $(".portfolio").fadeOut();
    setTimeout(function(){
        $('#textportfolio').html("Hoper est une société de mise en relation entre des particuliers et des aides ménagers à domicile incubé à la Blue Factory (ESCP Europe)<br><br>- Amélioration graphique et corrections de bugs<br>- Amélioration du back office pour gérer les réservations<br>  - Gestions des paiements et des bugs de réservations<br>- Mise en place de processus pour les mises en production et la livraison continue<br><br>Technologies: HTML 5, CSS 3, PHP 5, Symfony 2, Bootstrap sur serveur mutualisé");
        $('#imageportfolio').attr('src',"pics/portfolio/hoper1.jpg");
        $('#portfoliolink').attr('href',"http://myhoper.com/");
    }, 400);
    $(".portfolio").fadeIn();
});
$('#card2').click(function(){
    $(".portfolio").fadeOut();
    setTimeout(function(){
    $('#textportfolio').html(" CHAIRE ENTREPREUNARIALE ESCP EUROPE :<br><br>- Création du site internet de la chaire entrepreneuriale<br>- Back office pour gérer le contenu<br>- Générateur de Landing page pour les événements et les différentes formations proposées par la Chaire<br>- Evénementiel et différentes mission pour promouvoir l'entreprenariat<br><br>Technologies: HTML 5, CSS 3, PHP 5, Symfony 2, Bootstrap sur serveur mutualisé<br><br>En ligne d'ici la fin du mois (url à venir) !");
    $('#imageportfolio').attr('src',"pics/portfolio/chaire.jpg");
    $('#portfoliolink').attr('href',"http://s582438182.onlinehome.fr/");
    }, 400);
    $(".portfolio").fadeIn();
});
$('#card4').click(function(){
    $(".portfolio").fadeOut();
    setTimeout(function(){
    $('#textportfolio').html(" SOYEZBCBG :<br><br>Création d'une plateforme de réservation de pressing à domicile.<br>Vue client + back office ( pour la gestion des reservations)");
    $('#imageportfolio').attr('src',"pics/portfolio/bcbg.jpg");
    $('#portfoliolink').attr('href',"http://55.soyezbcbg.fr/");
    }, 400);
    $(".portfolio").fadeIn();
});
$('#card5').click(function(){
    $(".portfolio").fadeOut();
    setTimeout(function(){
    $('#textportfolio').html("UNNITEDDONNATIONS :<br><br>Réalisation de missions ponctuelles pour améliorer l'ergonomie du site");
    $('#imageportfolio').attr('src',"pics/portfolio/unnited.jpg");
    $('#portfoliolink').attr('href',"http://uniteddonations.eu/fr/home");
    }, 400);
    $(".portfolio").fadeIn();
});


$('#button_contact').click(function(){
    $('#myModal').modal('show');
});

$('#blockcontact').click(function(){
    $('#myModal').modal('show');
});

$('.click').click(function(){
    $('#myModal').modal('show');
});

$('.servicecard').click(function(){
    $('#myModal').modal('show');
});

setTimeout(function(){
    $('#myModal').modal('show');
},12000);

$('#sendbt').click(function(){
    $('#forms').submit();
});