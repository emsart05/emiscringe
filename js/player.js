
/* Play random sound when clicking Konata */
var konata = document.getElementById("konata-gif")
var clickers = [new Audio("audio/clicks/close_002.ogg"), new Audio("audio/clicks/close_003.ogg"), new Audio("audio/clicks/close_004.ogg"), new Audio("audio/clicks/confirmation_001.ogg"), new Audio("audio/clicks/confirmation_002.ogg"), new Audio("audio/clicks/confirmation_003.ogg"), new Audio("audio/clicks/confirmation_004.ogg"), new Audio("audio/clicks/drop_004.ogg"), new Audio("audio/clicks/error_003.ogg"), new Audio("audio/clicks/error_005.ogg"), new Audio("audio/clicks/error_006.ogg"), new Audio("audio/clicks/error_007.ogg"), new Audio("audio/clicks/maximize_001.ogg"), new Audio("audio/clicks/maximize_004.ogg"), new Audio("audio/clicks/maximize_005.ogg"), new Audio("audio/clicks/minimize_005.ogg"), new Audio("audio/clicks/close_002.ogg"), new Audio("audio/clicks/open_003.ogg"), new Audio("audio/clicks/open_004.ogg"), new Audio("audio/clicks/question_001.ogg"), new Audio("audio/clicks/question_002.ogg"), new Audio("audio/clicks/question_003.ogg"), new Audio("audio/clicks/question_004.ogg"), new Audio("audio/clicks/select_004.ogg"), new Audio("audio/clicks/select_005.ogg"), new Audio("audio/clicks/select_006.ogg"), new Audio("audio/clicks/switch_004.ogg"), new Audio("audio/clicks/switch_005.ogg"), new Audio("audio/clicks/switch_007.ogg"), ]

function konataClick() {
    var selected = Math.floor(Math.random() * clickers.length)
    clickers[selected].play()
}


/* Popup button */
var lyrics = ["Can we lose our minds and call it love?", "Give me your heart and your hand and we can run", "I didn't mean to burden you with love in my condition",
    "When I burn to your fingertips you can throw what's left", "Sharpen your teeth and bite as hard as you want", "I guess I never should have loved you, but I do forever cause you loved me.",
    "Sometimes love, love dies, love dies, like a dog", "True love comes from more than just the heart", 
    "Don't just say it, you should sing my name. Pretend that it's a song cause forever it's yours", "She could make hell feel just like home, so I'm never leaving her alone",
    "I promise you one day we'll tell ourselves 'oh my god this is paradise'", "Maybe we're meant to lose the ones we love, but I'll fight for you til then"
]

function b1Click() {
    /* If the popup is still on display */
    if (document.getElementById('popup')) {
        console.log("already exists")
        return
    }

    /* If it is not */
    else {
        /* Create and style the popup */
        var popup = document.createElement("p")
        var holder = document.getElementById("hidden")
        holder.style.display = "flex"
        holder.style.position = "fixed"
        holder.style.top = "10%"
        holder.style.left = "0px"
        holder.style.width = "100%"
        holder.style.justifyContent = "center"
        popup.id = "popup"
        popup.style.width = "200px"
        popup.style.alignItems = "center"
        popup.style.backgroundColor = "#aef5af"
        popup.style.border = "3px ridge #8fd990"
        popup.style.boxShadow = "0px 0px 15px 4px rgb(125, 167, 76)"
        popup.style.borderRadius = "15px"
        popup.style.padding = "10px"

        var lyric = Math.floor(Math.random() * lyrics.length)
        popup.innerHTML = lyrics[lyric]

        holder.appendChild(popup)
        popup.style.alignSelf = "center"

        /* Fade in */
        popup.animate([
            // key frames
            {opacity: 0, },
            {opacity: 100}
          ], {
            // sync options
            duration: 1000,
            iterations: 1
          });

        /* Wait 2 seconds before removing popup */
        setTimeout(function() {
            /* Fade out */
            popup.animate([
                // key frames
                {opacity: 100},
                {opacity: 0}
              ], {
                // sync options
                duration: 1000,
                iterations: 1
              });
            popup.remove()
            holder.style.display = "hidden"
        }, 5000)
    }
}

var iframe = document.getElementById("player")
function stylePlayer() {
  iframe.style.boxShadow = "0px 0px 14px 8px rgb(255, 135, 199)"
}

function submit() {
    var vidId = document.getElementById("video-id").value
    if (vidId == "") {
      return
    }
    else {
      iframe.setAttribute("src", "https://www.youtube.com/embed/"+ vidId +"?si=yH2sl6NMSzw1B9rg")
      stylePlayer()
    }
}
