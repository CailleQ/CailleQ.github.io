document.addEventListener("DOMContentLoaded", function() {
    // Load Header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('headerpage').innerHTML = data;
        })
        .catch(error => console.error('Error loading the header:', error));

    // Load Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footerpage').innerHTML = data;
        })
        .catch(error => console.error('Error loading the footer:', error));
});
