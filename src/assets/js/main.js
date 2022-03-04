window.onload = function (){
    let elements = document.querySelectorAll('aside .list-group-item');

    Array.from(elements).forEach((element) => {
        let isActive = element.children[0].classList.contains('router-link-active');

        if (isActive)
            element.classList.add('active')
        element.addEventListener('click', highlightActiveLink, false)
    });

    function highlightActiveLink() {
        let isActive = this.children[0].classList.contains('router-link-active');

        Array.from(elements).forEach((element) => {
            element.classList.remove('active')
        });

        if (isActive)
            this.classList.add('active');
    }
}