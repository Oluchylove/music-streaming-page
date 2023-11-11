const playlist = document.getElementById("playlist-main");
console.log(playlist);

const button = document.getElementById("bnt");

const wrapper = document.getElementById("playlistform-wrapper");
   console.log(wrapper);

function show(){
   wrapper.style.display = "block";
   
}

const update = document.getElementById("update");
console.log(update);


function updateIcon() {
    // Get the input value from the form
    var inputValue = document.getElementById("playlistform").value;
  
    if (inputValue) {
      // Create a new div element
      var newDiv = document.createElement("div");
      newDiv.className = "styled-div"; // Add the CSS class
    
  
      // Create an icon element (you can customize the icon)
      var icon = document.createElement("i");
      icon.className = "bi bi-play-circle styled-icon"; // Add the CSS class
      

      var newTextSpan = document.createElement("span");
    newTextSpan.className = "styled-text"; // Add the CSS class
    newTextSpan.textContent = inputValue;
  
    newDiv.appendChild(icon);
    newDiv.appendChild(newTextSpan);
  
      // Append the new div to the container
      document.getElementById("display").appendChild(newDiv);
      // Append the icon to the new div
     
  
      // Clear the input field
      document.getElementById("playlistform").value = "";
       // Insert a line break after each newDiv
    var lineBreak = document.createElement("br");
    document.getElementById("container").appendChild(lineBreak);
    }
  }
  const bookmarkwrapper = document.querySelectorAll("#bookmark-wrapper > div");
  console.log(bookmarkwrapper);

  const length = bookmarkwrapper.length;
  console.log(length);

  const library = document.querySelectorAll(".library");
  const playing = document.getElementById("music");
  library.forEach(function(item){
   item.addEventListener("click", function(){
      var musicSource=this.getAttribute('data-src');
      playing.src=musicSource;
      
   })
  })

  function hideIcon(){
   const Theplaylist =document.getElementById('playlistform');
   const clear = document.getElementById('playlistform-wrapper');
   Theplaylist.value = "";
   clear.style.display = "none";
  }






const toggleButton = document.getElementById('load');
const myDiv = document.getElementById('bookmark-sub');
const initialText = toggleButton.innerHTML;
toggleButton.addEventListener('click', function() {
  if (myDiv.classList.contains('hidden')) {
    myDiv.classList.remove('hidden');
    toggleButton.innerHTML = 'Show Less'; // Change button text when showing the div
  } else {
    myDiv.classList.add('hidden');
    toggleButton.innerHTML = initialText; // Restore the initial text when hiding the div
  }
});


  const trendingSongs = document.querySelectorAll(".trendingSongs");
  const playingnow = document.getElementById("Mymusic");
  trendingSongs.forEach(function(item){
   item.addEventListener("click", function(){
      var MymusicSource=this.getAttribute('data-src');
      playingnow.src=MymusicSource;
      
   })
  })

  
  // const library = document.querySelectorAll(".library");
  // const playing = document.getElementById("music");
  // library.forEach(function(item){
  //  item.addEventListener("click", function(){
  //     var musicSource=this.getAttribute('data-src');
  //     playing.src=musicSource;
      
  //  })
  // })