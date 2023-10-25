var Utilities = Utilities || (function () {

    //Cannot be called from outside this function
    const privateFunction = () => {
        const box = document.getElementById(Utilities.settings.wrapperId);
        console.log(Utilities.settings)
        console.log(box);
        box.innerHTML =
            '<object width="100%" type="text/html" data="./index.html"</object>';
    }

    //Return only what must be publicly accessible, in this
    //case only the show() method
    return {
        init: (userSettings) => {
            Utilities.settings = {...Utilities.settings, ...userSettings};
            privateFunction();
        }
    }
})();

Utilities.settings = {
    wrapperId: 'some',
}
