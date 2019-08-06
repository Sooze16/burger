// Make sure we wait to attach our handlers until the DOM is fully loaded.
console.log("javascript loaded")

$(function() {

    $("#addburger").on("click", function(event) {


        event.preventDefault();
        console.log("click on addburger")
            // var yourBurger = $("#yourburger").val()
            // var regBurger = $("#newburger").val().trim()



        var newBurger = {
            burgerName: $("#newburger").val().trim(),

            devoured: false
        };
        console.log(newBurger);


        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".eatBurger").on("click", function(event) {
        console.log("eat");
        var id = $(this).data("id");
        var devouredState = {
            devoured: true
        };

        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: devouredState


        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        });

    });

    $(".delete-burger").on("click", function(event) {


        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});