var Utilities = Utilities || (function () {

    //Cannot be called from outside this function
    const privateFunction = () => {
        const box = document.getElementById(Utilities.settings.wrapperId);
        console.log(box);
    }

    //Return only what must be publicly accessible, in this
    //case only the show() method
    return {
        init: () => {
            privateFunction();
        }
    }
})();

Utilities.settings = {
    wrapperId: 'some'
}
