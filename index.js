import plugin from "./plugin/plugin";

var Utilities = Utilities || (function () {

    //Cannot be called from outside this function
    const privateFunction = () => {
        const box = document.getElementById(Utilities.settings.wrapperId);
        console.log(Utilities.settings)
        console.log(box);
        box.innerHTML =
            '<object width="100%" type="text/html" data="https://cdn.jsdelivr.net/gh/ivankoroldev/my-test-plugin-public/index.html"></object>';
    }

    //Return only what must be publicly accessible, in this
    //case only the show() method
    return {
        init: (userSettings) => {
            Utilities.settings = {...Utilities.settings, ...userSettings};
            plugin.loadPage(Utilities.settings.wrapperId);
            //privateFunction();
        }
    }
})();

Utilities.settings = {
    wrapperId: 'some',
}

export default Utilities;

