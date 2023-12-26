const navigators = document.querySelectorAll(".navigators");

navigators.forEach(navigation => {
    navigation.addEventListener('click', () => {
        removeActiveClass();
        navigation.classList.add("active");
    })
})

function removeActiveClass(){
    navigators.forEach((navigation) => {
        navigation.classList.remove("active");
    })
}