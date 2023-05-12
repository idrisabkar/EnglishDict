var word = "";

$(document).keypress(function (e) { 
    word = $("#word").val();    
    if (e.which === 13 && word !== "") {
        $(".response").text("searching...");
        $.ajax({
            type: "get",
            url: "https://api.dictionaryapi.dev/api/v2/entries/en/" + word,
            success: function (response) {
                var meaning = response[0].meanings[0].definitions[0].definition;
                var url = response[0].phonetics[0].audio;
                $(".response").html(
                    '<div class="response">' +
                        '<h6>Word title : <strong>' + word + '</strong></h6>' +
                        '<h6>Meaning: <strong>' + meaning + '</strong></h6>' +
                        '<div class="container">' +
                            '<audio src="' + url + '" controls class="my-4"></audio>' +
                        '</div>' +
                    '</div>'
                );
            },
            error: function (xhr, status, error) {
                console.log("Error:", error);
            }
        });
    }
});
