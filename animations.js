$(document).ready(function(){
  // Populate the background html dynamically
  let htmlString = "";
  let chars = "..//{#(;%)!};..:''" //"@%#*+=-:.   ";
  let height = $(".contentContainer").height() + 200,
      width = $("#ocean").width() / 14,
      res = 50,
      frame = 0,
      fps = 10;

  $("#ocean").height(height);

  for (let i = 0; i < height / 27; i++) {
    htmlString += `<p id="bg-row-${i}" class="bg-row"></p>`;
  }

  $("#ocean").html(htmlString);

  noise.seed(Math.random());

  $( window ).on( "resize", function() {
    height = $(".contentContainer").height() + 200;
    width = $("#ocean").width() / 14
    $("#ocean").height(height);
  } );

  // Generate the 2d array of characters
  const interval = setInterval(() => {
    for (var i = 0; i < height / 27; i++) {
      let row = [];
      for (var j = 0; j < width; j++) {
        // All noise functions return values in the range of -1 to 1.
        var value = noise.perlin3(i / res, j / res, frame / res);
        row[j] = chars.charAt(Math.abs(value) * chars.length); 
      }
      row = row.join('');

      // Manuall insert html tag for options
      const manualTexts = [
        {
          htmlTag: "<b class='landingText'>HI! I'M KANE</b>",
          textLength: 12
        },
        {
          htmlTag: "<b class='landingText'>Software Engineer</b>",
          textLength: 17
        },
        {
          htmlTag: "<b class='landingText'>Mechatronics Eng /</b>",
          textLength: 18
        },
        {
          htmlTag: "<b class='landingText'>Computer Science, UNSW</b>",
          textLength: 22
        }
        
      ]

      if (i === 5) {
        row = row.slice(0, Math.floor(width/2 - manualTexts[0].textLength/2)) 
            + manualTexts[0].htmlTag 
            + row.slice(Math.floor(width/2 + manualTexts[0].textLength/2), width-1);
      } else if (i === 8) {
        row = row.slice(0, Math.floor(width/2 - manualTexts[1].textLength/2)) 
            + manualTexts[1].htmlTag 
            + row.slice(Math.floor(width/2 + manualTexts[1].textLength/2), width-1);
      } else if (i === 11) {
        row = row.slice(0, Math.floor(width/2 - manualTexts[2].textLength/2)) 
            + manualTexts[2].htmlTag 
            + row.slice(Math.floor(width/2 + manualTexts[2].textLength/2), width-1);
      } else if (i === 12) {
        row = row.slice(0, Math.floor(width/2 - manualTexts[3].textLength/2)) 
            + manualTexts[3].htmlTag 
            + row.slice(Math.floor(width/2 + manualTexts[3].textLength/2), width-1);
      }

      $(`#bg-row-${i}`).html(row);
    }
    frame++;
  }, 1000 / fps)
});
