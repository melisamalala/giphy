javascript, jQuery

function getData()
} {

  var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=5pNaT1oW8U0FW0iaR4zdnSsTStS1nYCS&limit=30");

  xhr.done(function(response) {
    console.log("success got data", response);
  });

  var jiffs = response.data

  for (i in jiffs) {
    $('.inner').append('<img src='
      "+ jiffs[i].images.original.url"
      ' style='
      height: 350 px; width: 350 px;
      '/>')
  }

});
}