const loadPage = (id) => {
    const box = document.getElementById(id);

    fetch('plugin.html')
        .then(response => response.text())
        .then(html => {
            box.innerHTML = html;
        })
        .catch(error => {
            console.log(error);
        });
}

export const plugin = {
    loadPage
}
