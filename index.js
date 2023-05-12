var word = ""
$(document).keypress(function (e) { 
    word = $("#word").val()    
    if (e.which === 13 && word != "") {
        $.ajax({
            type: "get",
            url: "https://api.dictionaryapi.dev/api/v2/entries/en/" + word,
            success: function (response) {
                console.log(response[0].meanings[0].definitions[0].definition);
            },
            error: function (xhr, status, error) {
                console.log("Error:", error);
            }
        });
    }
});



















//<div class="response">
  //          <h6>Word title : <strong>Word</strong></h6>
  //          <h6>Meaning: <strong>Word</strong></h6>
  //          <div class="container">
  //              <audio src="audio-file.mp3" controls class="my-4"></audio>
  //            </div>
//</div>