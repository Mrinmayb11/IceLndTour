
function addSlideEffect() {
    let slide = document.getElementById('slide');
    let firstItem = slide.querySelector('.item'); 
    let clonedItem = firstItem.cloneNode(true); // Clone the first item
    slide.appendChild(clonedItem); // Append the cloned item
    firstItem.remove();

    // Restore classes for the new first item
    let newFirstItem = slide.querySelector('.item');
    let newFirstChild = newFirstItem.firstElementChild;

    if(newFirstChild !== null){
        newFirstChild.classList.add('Transparent-bg');
    }

    // Remove class from cloned element
    let clonedFirstChild = clonedItem.firstElementChild; // Select the cloned element
    if(clonedFirstChild !== null){
        clonedFirstChild.classList.remove('Transparent-bg');
    }
}

document.getElementById('next').onclick = addSlideEffect;

// Automatic effect
setInterval(addSlideEffect, 5000); // This will trigger every 3 seconds (adjust as needed)



function addSlideEffectTwo(){
    let slider = document.getElementById('img-slider-container-1');
    let firstItem = slider.querySelector('.slider-img');
    let secondslider = document.getElementById('img-slider-container-2');
    let clonedItem = firstItem.cloneNode(true);

    clonedItem.classList.add('small-img');
    clonedItem.classList.remove('large-img');
    clonedItem.firstElementChild.classList.remove('Transparent-bg-2');
    clonedItem.firstElementChild.classList.add('Transparent-bg-3');
    clonedItem.firstElementChild.lastElementChild.classList.add('display-none');
    clonedItem.firstElementChild.firstElementChild.classList.remove('h3-big');
    clonedItem.firstElementChild.firstElementChild.classList.add('h3-small');

    secondslider.appendChild(clonedItem);
    firstItem.remove();

    let secondsliderFirstItem = secondslider.firstElementChild;
    let clonedItemTwo = secondsliderFirstItem.cloneNode(true);

    clonedItemTwo.classList.add('large-img');
    clonedItemTwo.classList.remove('medium-img');
    clonedItemTwo.firstElementChild.classList.add('Transparent-bg-2');
    clonedItemTwo.firstElementChild.classList.remove('Transparent-bg-3');
    clonedItemTwo.firstElementChild.lastElementChild.classList.remove('display-none');
    clonedItemTwo.firstElementChild.firstElementChild.classList.add('h3-big');
    clonedItemTwo.firstElementChild.firstElementChild.classList.remove('h3-medium');
    slider.prepend(clonedItemTwo);
    secondsliderFirstItem.remove();

    let secondsliderFirstItemone = secondslider.firstElementChild;

    secondsliderFirstItemone.classList.add('medium-img');
    secondsliderFirstItemone.classList.remove('small-img');
    secondsliderFirstItemone.firstElementChild.firstElementChild.classList.remove('h3-small');
    secondsliderFirstItemone.firstElementChild.firstElementChild.classList.add('h3-medium');
}

document.getElementById('next-1').onclick = addSlideEffectTwo;
setInterval(addSlideEffectTwo, 5000);


let HamburgerMenu = document.getElementsByClassName('fa-bars')[0];

HamburgerMenu.onclick = () => {
    let NavItems = document.getElementById('nav-items');
    NavItems.classList.toggle('show-menu');
}
