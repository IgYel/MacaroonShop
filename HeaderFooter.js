document.addEventListener('DOMContentLoaded', function() {

    fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));

    // Загрузка footer
    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        let footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = data;
        } else {

            fetch('footerRegister.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer-placeholderReg').innerHTML = data;
            })
            .catch(error => console.error('Error loading footerRegister:', error));
        }
    })
    .catch(error => console.error('Error loading footer:', error));
});