function headingElement(id) {
    const heading = document.getElementById(id);
    return heading
}

function button(id) {
    const button = document.getElementById(id);
    return button;
}



button("button1").addEventListener('click', function () {
    const all = document.getElementsByClassName('heading')

    for (const alls of all) {
        alls.style.display = 'none';
     
    }



    headingElement('heading1').style.display = 'block';
    headingElement('heading1').style.backgroundColor = 'green';
    headingElement('heading1').innerText = "You have clicked the first button";

})
button("button2").addEventListener('click', function () {
    const all = document.getElementsByClassName('heading')
    for (const alls of all) {
        alls.style.display = 'none';
    
    }

    headingElement('heading2').style.display = 'block';
    headingElement('heading2').innerText = "You have clicked the second button";


})
button("button3").addEventListener('click', function () {
    const all = document.getElementsByClassName('heading')
    for (const alls of all) {
        alls.style.display = 'none';
    
    }

    headingElement('heading3').style.display = 'block';
    headingElement('heading3').innerText = "You have clicked the third button";

})
button("button4").addEventListener('click', function () {

    const all = document.getElementsByClassName('heading')
    for (const alls of all) {
        alls.style.display = 'none';
       
    }

    headingElement('heading4').style.display = 'block';
    headingElement('heading4').innerText = "You have clicked the fourth button";


})
button("button5").addEventListener('click', function () {


    const all = document.getElementsByClassName('heading')
    for (const alls of all) {
        alls.style.display = 'none';
    
    }

    headingElement('heading5').style.display = 'block';
    headingElement('heading5').innerText = "You have clicked the fifth button";


})


