const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',checkboxes)


checkboxes()

//function

function checkboxes() {
     triggerBottom = window.innerHeight /5 *4
// to decide where next box should enter in
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
// getBoundingClientRect is inbuilt element 
// used to dectect ehr is actual rectangle
// located on page
// here we want to loacte top of rect. 
//so we added .top after getBoundingClientRect
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }







        
    })
}