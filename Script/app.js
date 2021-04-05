// IIFE Immedately Invorked Function Expression

(function()
{
    // initialisation function
    function Start()
    {
        console.log("App started");
    }

    // event listener
    window.addEventListener("load", Start)
})();