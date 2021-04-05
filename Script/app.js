// IIFE Immedately Invorked Function Expression

(function()
{
    // initialisation function
    function Start()
    {
        console.log("App started");
        // $("#clickMeButton").on("click", function() {
        //     console.log("Button clicked");
        // });
        let clickMeButton = document.getElementById("clickMeButton");
        clickMeButton.addEventListener("click", () => {
            console.log("Button clicked again");
        });
    }

    // event listener
    window.addEventListener("load", Start)
})();