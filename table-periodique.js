/* fonctions pour l'exercice sur la table périodique */

window.addEventListener('load', function(){

    // Exercice 1
    // Question 2
    var elements = document.querySelectorAll('.elementChimique');
    var focus = document.querySelector('#focus');

    for(i = 0 ; i < elements.length ; i++)
    {
        elements[i].addEventListener('mouseover' , function(){

            while (focus.firstChild) {
                focus.removeChild(focus.firstChild);
            }

            var clone = this.cloneNode(true);
            focus.appendChild(clone);

            // Question 6
            affichage('#checkMasse', ".masseatomique");
            affichage('#checkCouches', ".coucheselectrons");
            affichage('#checkElectro', ".electronegativite");
        });
    }

    // Question 3
    function checkFocus(){
        var checkFocus = document.querySelector('#checkFocus');
        var focus = document.querySelector('#focus');

        checkFocus.addEventListener('change', function(){
            if(this.checked == true){
                focus.style.display = "block";
            }
            else {
                focus.style.display = "none";
            }
        });
    }

    checkFocus();

    // Question 4 && Question 5

    function affichage(elementId, elementClass)
    {
        var elements = document.querySelectorAll(elementClass);
        var check = document.querySelector(elementId);

        check.addEventListener('change', function(event){
            for(i = 0 ; i < elements.length ; i++){
                if(this.checked == true){
                    elements[i].style.display = "block";
                }
                else {
                    elements[i].style.display = "none";
                }
            }
        });
    }

    affichage('#checkMasse', ".masseatomique");
    affichage('#checkCouches', ".coucheselectrons");
    affichage('#checkElectro', ".electronegativite");

    // Question 7

    var tous = document.querySelector('#tous');
    var aucun = document.querySelector('#aucun');

    aucun.addEventListener('click', function(){
        console.log('aucun')
        checkMasse.checked = false;
        checkCouches.checked = false;
        checkElectro.checked = false;
    });

    tous.addEventListener('click', function(){
        console.log('tous')
        checkMasse.checked = true;
        checkCouches.checked = true;
        checkElectro.checked = true;
    });

});
