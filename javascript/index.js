$(document).ready(function(){
    $(".fakeScreen").mouseenter(function(){
        $(this).css("border-color", "yellow");
    })

    $(".fakeScreen").mouseleave(function(){
        $(this).css("border-color", "white");
    })
    $(function(){
        $(".typeWriter").addClass("play");
    })

    $(".aboutPage").hide();
    $(".resourcesPage").hide();

    const quoteList = [
        "What isn't remembered never happened.",
        "A perfect life only exists in dreams.",
        "Take care of yourself.",
        "You have to be a little delusional to get what you want."
    ]
    const randomInt = Math.floor(Math.random() * quoteList.length);
    $("#quote").text(quoteList[randomInt]);

    let track_name = document.querySelector(".songtitle");

    let playpause_btn = document.querySelector(".playpause-track");

    let seek_slider = document.querySelector(".seek_slider");
    let curr_time = document.querySelector(".current-time");
    let total_duration = document.querySelector(".total-duration");

    let track_index = 0;
    let isPlaying = false;
    let updateTimer;

    // create new audio element
    let curr_track = document.getElementById("music");

    let track_list = [
        {
            name:"All Night Radio - Ado",
            path:"https://files.catbox.moe/8d2y6y.mp3"
        },
        {
            name:"Nude - Radiohead",
            path:"https://files.catbox.moe/pkxvg8.mp3"
        },
        {
            name:"I'm Only Sleeping - The Beatles",
            path:"https://files.catbox.moe/jbcnb5.mp3"
        },
        {
            name:"Voyager - Daft Punk",
            path:"https://files.catbox.moe/l79xel.mp3"
        },
        {
            name:"Lost in Yesterday - Tame Impala",
            path:"https://files.catbox.moe/nhhaic.mp3"
        }
    ];

    // reset values
    function resetValues() {
        curr_time.textContent = "0:00";
        total_duration.textContent = "0:00";
        seek_slider.value = 0;
    }

    function loadTrack(track_index) {
        clearInterval(updateTimer);
        resetValues();

        // load a new track
        curr_track.src = track_list[track_index].path;
        curr_track.load();

        // update details of the track
        track_name.textContent = "Track " + (track_index + 1) + "/" + track_list.length + ": " + track_list[track_index].name;

        // set an interval of 1000 milliseconds for updating the seek slider
        updateTimer = setInterval(seekUpdate, 1000);

        // move to the next track if the current one finishes playing 
        curr_track.addEventListener("ended", nextTrack);
    }

    $(".playpause-track").click(function(){
        if(isPlaying){
            pauseTrack();
        } else {
            playTrack();
        }
    })
    $(".prev-track").click(function(){
        prevTrack();
    })
    $(".next-track").click(function(){
        nextTrack();
    })
    $(".seek_slider").change(function(){
        seekTo();
    })

    // plays track when play button is pressed
    function playTrack() {
        curr_track.play();
        isPlaying = true;

        // replace icon with the pause icon
        playpause_btn.innerHTML = '<button class="player-button"><img src="../images/pausebutton.png" class="controlimg"></i></button>';
    }

    // pauses track when pause button is pressed
    function pauseTrack() {
        curr_track.pause();
        isPlaying = false;

        // replace icon with the play icon
        playpause_btn.innerHTML = '<button class="player-button"><img src="../images/playpause.png" class="controlimg"></button>';
    }

    // moves to the next track
    function nextTrack() {
        if (track_index < track_list.length - 1)
            track_index += 1;
        else track_index = 0;
        loadTrack(track_index);
        playTrack();
    }

    // moves to the previous track
    function prevTrack() {
        if (track_index > 0)
            track_index -= 1;
        else track_index = track_list.length;
        loadTrack(track_index);
        playTrack();
    }

    // seeker slider
    function seekTo() {
        seekto = curr_track.duration * (seek_slider.value / 100);
        curr_track.currentTime = seekto;
    }

    function seekUpdate() {
        let seekPosition = 0;

        // check if the current track duration is a legible number
        if (!isNaN(curr_track.duration)) {
            seekPosition = curr_track.currentTime * (100 / curr_track.duration);
            seek_slider.value = seekPosition;

        // calculate the time left and the total duration
        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        // adding a zero to the single digit time values
        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
        }
    }

    // load the first track in the tracklist
    loadTrack(track_index);

    const track = document.getElementById("nexusTrack");
    const slides = document.querySelectorAll(".door-slide");
    const doorWidth = 88;
    const gap = 16;
    const totalWidth = doorWidth + gap;

    let currentIndex = 1;

    // Clone first and last slides
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);

    track.appendChild(firstClone);
    track.insertBefore(lastClone, track.firstChild);

    function updateSlide(animate = true) {
        if (!animate) track.style.transition = "none";
        else track.style.transition = "transform 0.4s ease-in-out";
        track.style.transform = `translateX(-${currentIndex * totalWidth}px)`;
    }

    $("#navButL").click(function(){
        currentIndex--;
        updateSlide();
        setTimeout(checkWrap, 400);
    });

    $("#navButR").click(function(){
        currentIndex++;
        updateSlide();
        setTimeout(checkWrap, 400);
    });

    function checkWrap() {
        if (currentIndex === 0) {
            currentIndex = slides.length; // real last slide
            updateSlide(false);
        } else if (currentIndex === slides.length + 1) {
            currentIndex = 1; // real first slide
            updateSlide(false);
        }
    }

    $(".doorImg").click(function(){
        const index = (currentIndex - 1 + slides.length) % slides.length;
        switch(index){
            case 0:
                $(".homePage").slideDown();
                $(".aboutPage").slideUp();
                $(".resourcesPage").slideUp();
                break;
            case 1:
                $(".aboutPage").slideDown();
                $(".homePage").slideUp();
                $(".resourcesPage").slideUp();
                break;
            case 6:
                $(".resourcesPage").slideDown();
                $(".homePage").slideUp();
                $(".aboutPage").slideUp();
                break;
        }
    });

    updateSlide(false);

})

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clockText').innerHTML =  h + ":" + m + ":" + s + " CEST";
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function generateCalendar(containerId) {
  const container = document.getElementById(containerId);
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth();

  const firstDay = new Date(year, month, 1).getDay(); // 0 = Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const today = now.getDate();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  container.innerHTML = `
    <div class="calendar-header">${monthNames[month]} ${year}</div>
    <div class="calendar-grid">
      <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
    </div>
  `;

  const grid = document.createElement("div");
  grid.className = "calendar-grid";

  // Empty divs for padding the first week
  for (let i = 0; i < firstDay; i++) {
    grid.appendChild(document.createElement("div"));
  }

  // Fill in the days
  for (let day = 1; day <= daysInMonth; day++) {
    const dayDiv = document.createElement("div");
    dayDiv.textContent = day;

    if (day === today) {
      dayDiv.classList.add("calendar-today");
    }

    grid.appendChild(dayDiv);
  }

  container.appendChild(grid);
}

generateCalendar("calendarDiv");
