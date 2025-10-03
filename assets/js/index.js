$(document).ready(function(){
    setSectionBackground("home");

    $(".fakeScreen").mouseenter(function(){
        $(this).css("border-color", "yellow");
    })

    $(".fakeScreen").mouseleave(function(){
        $(this).css("border-color", "white");
    })
    
    $(".typeWriter").addClass("play");

    $(".aboutPage").hide();
    $(".resourcesPage").hide();
    $(".minecraftPage").hide();
    $(".travelPage").hide();
    $(".blogPage").hide();
    $(".dreamDiaryPage").hide();
    $(".shrinesPage").hide();

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
        curr_track.onended = nextTrack;
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
        playpause_btn.innerHTML = '<button class="player-button"><img src="assets/images/musicplayer/pausebutton.png" class="controlimg"></i></button>';
    }

    // pauses track when pause button is pressed
    function pauseTrack() {
        curr_track.pause();
        isPlaying = false;

        // replace icon with the play icon
        playpause_btn.innerHTML = '<button class="player-button"><img src="assets/images/musicplayer/playpause.png" class="controlimg"></button>';
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
        else track_index = track_list.length - 1;
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
                setSectionBackground("home");
                $(".homePage").slideDown();
                $(".aboutPage").slideUp();
                $(".minecraftPage").slideUp();
                $(".travelPage").slideUp();
                $(".blogPage").slideUp();
                $(".dreamDiaryPage").slideUp();
                $(".shrinesPage").slideUp();
                $(".resourcesPage").slideUp();
                break;
            case 1:
                setSectionBackground("about");
                $(".aboutPage").slideDown();
                $(".homePage").slideUp();
                $(".minecraftPage").slideUp();
                $(".travelPage").slideUp();
                $(".blogPage").slideUp();
                $(".dreamDiaryPage").slideUp();
                $(".shrinesPage").slideUp();
                $(".resourcesPage").slideUp();
                break;
            case 2:
                setSectionBackground("minecraft");
                $(".minecraftPage").slideDown();
                $(".homePage").slideUp();
                $(".aboutPage").slideUp();
                $(".travelPage").slideUp();
                $(".blogPage").slideUp();
                $(".dreamDiaryPage").slideUp();
                $(".shrinesPage").slideUp();
                $(".resourcesPage").slideUp();
                break;
            case 3:
                setSectionBackground("travel");
                $(".travelPage").slideDown();
                $(".homePage").slideUp();
                $(".aboutPage").slideUp();
                $(".minecraftPage").slideUp();
                $(".blogPage").slideUp();
                $(".dreamDiaryPage").slideUp();
                $(".shrinesPage").slideUp();
                $(".resourcesPage").slideUp();
                break;
            case 4:
                setSectionBackground("blog");
                $(".blogPage").slideDown();
                $(".homePage").slideUp();
                $(".aboutPage").slideUp();
                $(".minecraftPage").slideUp();
                $(".travelPage").slideUp();
                $(".dreamDiaryPage").slideUp();
                $(".shrinesPage").slideUp();
                $(".resourcesPage").slideUp();
                break;
            case 5:
                setSectionBackground("dream");
                $(".dreamDiaryPage").slideDown();
                $(".homePage").slideUp();
                $(".aboutPage").slideUp();
                $(".minecraftPage").slideUp();
                $(".travelPage").slideUp();
                $(".blogPage").slideUp();
                $(".shrinesPage").slideUp();
                $(".resourcesPage").slideUp();
                break;

            case 6:
                setSectionBackground("shrines");
                $(".shrinesPage").slideDown();
                $(".homePage").slideUp();
                $(".aboutPage").slideUp();
                $(".minecraftPage").slideUp();
                $(".travelPage").slideUp();
                $(".blogPage").slideUp();
                $(".dreamDiaryPage").slideUp();
                $(".resourcesPage").slideUp();
                break;
            case 7:
                setSectionBackground("resources");
                $(".resourcesPage").slideDown();
                $(".homePage").slideUp();
                $(".aboutPage").slideUp();
                $(".minecraftPage").slideUp();
                $(".travelPage").slideUp();
                $(".blogPage").slideUp();
                $(".shrinesPage").slideUp();
                $(".dreamDiaryPage").slideUp();
                break;
        }
    });

    updateSlide(false);

    $("#rei-chiquita").click(function(){
        var factList = [
            "i have a dog ! his name is Iron and he is a pitbull.",
            "i am right-handed ! when i was little i really wanted to be ambidexterous, but i never committed to it.",
            "i know the lyrics to most beatles songs between 1965-1970 by heart !",
            "i hate math, but for some reason i'm kinda good at it !",
            "i drink my coffee black !",
            "i write the letter 'e' in the opposite direction as most people !",
            "according to my phone i sleep an average of 6 hours and 20 minutes every night !",
            "my signature emoji is the volcano (🌋) !",
            "the only bone i've ever broken is a tooth ! (i guess that counts)",
            "for pretty much my entire life my favorite color was blue. some months ago i decided to switch to green. not sure why.",
            "i can play the guitar, bass, saxophone, harmonica, drums, and keyboards !",
            "the nickname listed above is literally just my last name ! people find it catchy.",
            "i have very dark brown eyes ! it is really hard to see my pupils unless you shine a light directly at my eye.",
            "vaccines make me very anxious ! (not quite a phobia, but halfway there!)",
            "the first programming language i learned was Java ! :/",
            "my eyeglasses perscription is -4.25 !",
            "i collect postcards, vinyl records, foreign currency, manga, and miniature sculptures of buildings i like !",
            "my favorite ice cream flavor is vanilla ! very vanilla.",
            "when i was 19, i was briefly allergic to strawberries ! i have no idea why it went away.",
            "i have a hernia in my belly button, which makes it look like an actual button !",
            "yes, Mercutio is a reference to the Romeo & Juliet character !",
            "i have six piercings !",
            "i don't have a criminal record !",
            "i can skate !",
            "my RAADS score is 142 !"
        ];
        const randomInt2 = Math.floor(Math.random() * factList.length);
        $("#fun-fact").text(factList[randomInt2]);
    });

    const mcGalleryGroups = [
        {
            name: "Grug City",
            description: "Encompassing an area of over a million square meters, Grug City is the largest city and capital of the Minecraft world.",
            images: [
                { src: "assets/images/minecraft/grugcity1.png", alt: "Grug City 1" },
                { src: "assets/images/minecraft/grugcity2.png", alt: "Grug City 2" },
                { src: "assets/images/minecraft/grugcity3.png", alt: "Grug City 3" },
            ]
        },
        {
            name: "Sky City",
            description: "serp iguano",
            images: [
                { src: "assets/images/minecraft/skycity1.png", alt: "Sky City 1" },
                { src: "assets/images/minecraft/skycity2.png", alt: "Sky City 2" },
                { src: "assets/images/minecraft/skycity3.png", alt: "Sky City 3" },
            ]
        },
        {
            name: "Snowtown",
            description: "A cozy medieval city located in the southernmost part of of a large snow biome.",
            images: [
                { src: "assets/images/minecraft/snowtown1.png", alt: "Snowtown 1" },
                { src: "assets/images/minecraft/snowtown2.png", alt: "Snowtown 2" },
                { src: "assets/images/minecraft/snowtown3.png", alt: "Snowtown 3" },
            ]
        },
        {
            name: "Savannhattan",
            description: "The world's financial district; a grid city of impressive skyscrapers built on top of a savanna biome.",
            images: [
                { src: "assets/images/minecraft/savannhattan1.png", alt: "Savannhattan 1" },
                { src: "assets/images/minecraft/savannhattan2.png", alt: "Savannhattan 2" },
                { src: "assets/images/minecraft/savannhattan3.png", alt: "Savannhattan 3" },
            ]
        },
        {
            name: "Nieuwe Brugge",
            description: "A large island city known for its canals. Outside of the main square, the city is constructed exclusively out of blocks available in Minecraft Beta 1.7.3.",
            images: [
                { src: "assets/images/minecraft/nieuwebrugge1.png", alt: "Nieuwe Brugge 1" },
                { src: "assets/images/minecraft/nieuwebrugge2.png", alt: "Nieuwe Brugge 2" },
                { src: "assets/images/minecraft/nieuwebrugge3.png", alt: "Nieuwe Brugge 3" },
            ]
        },
        {
            name: "Cienfuegos",
            description: "A tropical coastal port city straddling both sides of a large bay.",
            images: [
                { src: "assets/images/minecraft/cienfuegos1.png", alt: "Cienfuegos 1" },
                { src: "assets/images/minecraft/cienfuegos2.png", alt: "Cienfuegos 2" },
                { src: "assets/images/minecraft/cienfuegos3.png", alt: "Cienfuegos 3" },
            ]
        },
        {
            name: "Schönebeck",
            description: "",
            images: [
                { src: "assets/images/minecraft/schonebeck1.png", alt: "Schönebeck 1" },
                { src: "assets/images/minecraft/schonebeck2.png", alt: "Schönebeck 2" },
                { src: "assets/images/minecraft/schonebeck3.png", alt: "Schönebeck 3" },
            ]
        },
        {
            name: "Himawari",
            description: "",
            images: [
                { src: "assets/images/minecraft/himawari1.png", alt: "Himawari 1" },
                { src: "assets/images/minecraft/himawari2.png", alt: "Himawari 2" },
                { src: "assets/images/minecraft/himawari3.png", alt: "Himawari 3" },
            ]
        },
        {
            name: "Winterfell",
            description: "A very large castle. Its fortifications are notoriously difficult to invade, especially during the winter months.",
            images: [
                { src: "assets/images/minecraft/winterfell1.png", alt: "Winterfell 1" },
                { src: "assets/images/minecraft/winterfell2.png", alt: "Winterfell 2" },
                { src: "assets/images/minecraft/winterfell3.png", alt: "Winterfell 3" },
            ]
        }
    ];

    let currentMCGroup = 0;
    let currentMCImage = 0;

    function renderMCImgGroup() {
        $("#mc-city-name").text(mcGalleryGroups[currentMCGroup].name);
        $("#mc-city-desc").text(mcGalleryGroups[currentMCGroup].description);
        currentMCImage = 0;
        renderMCImage();
    }

    function renderMCImage() {
        const imgData = mcGalleryGroups[currentMCGroup].images[currentMCImage];
        $("#mc-img").attr("src", imgData.src);
        $("#mc-img-caption").text(imgData.caption);
    }

    $("#mc-city-prev").click(function(){
        currentMCGroup = (currentMCGroup - 1 + mcGalleryGroups.length) % mcGalleryGroups.length;
        renderMCImgGroup();
    });

    $("#mc-city-next").click(function(){
        currentMCGroup = (currentMCGroup + 1) % mcGalleryGroups.length;
        renderMCImgGroup();
    });

    $("#mc-img-prev").click(function(){
        const images = mcGalleryGroups[currentMCGroup].images;
        currentMCImage = (currentMCImage - 1 + images.length) % images.length;
        renderMCImage();
    });

    $("#mc-img-next").click(function(){
        const images = mcGalleryGroups[currentMCGroup].images;
        currentMCImage = (currentMCImage + 1) % images.length;
        renderMCImage();
    });

    renderMCImgGroup();

    function setSectionBackground(section) {
        var body = $("body");
        var overlay = $("#bg-fade-overlay");
        var newBg = "";

        switch(section) {
            case "home":
                newBg = "url('assets/images/backgrounds/home-bg.gif')";
                break;
            case "about":
                newBg = "url('assets/images/backgrounds/about-bg.webp')";
                break;
            case "minecraft":
                newBg = "url('assets/images/backgrounds/minecraft-bg.png')";
                break;
            case "travel":
                newBg = "url('assets/images/backgrounds/travel-bg.jpg')";
                break;
            case "blog":
                newBg = "url('assets/images/backgrounds/blog-bg.jpg')";
                break;
            case "dream":
                newBg = "url('assets/images/backgrounds/dream-bg.jpg')";
                break;
            case "shrines":
                newBg = "url('assets/images/backgrounds/shrines-bg.jpg')";
                break;
            case "resources":
                newBg = "url('assets/images/backgrounds/resources-bg.webp')";
                break;
        }

        overlay.css("background-image", newBg);
        overlay.css("opacity", 1);

        setTimeout(function() {
            body.css("background-image", newBg);
            overlay.css("opacity", 0);
        }, 2000);
    }

    const buttonImages = [
        "antinft.gif",
        "buttcertificate.gif",
        "chocoloaf.gif",
        "chrome-suck.gif",
        "cinna.gif",
        "copland.png",
        "cssdif.gif",
        "ditchsocial.gif",
        "dream-chobits.gif",
        "dream-diary.gif",
        "drpepper.gif",
        "ds.jpg",
        "evangelion.gif",
        "eyes.gif",
        "flipnote.png",
        "geocitieswww.gif",
        "got_html.gif",
        "hatemac.jpg",
        "hellontheweb.gif",
        "homebrew.png",
        "insanity.gif",
        "lain.gif",
        "lain2.gif",
        "lurk-n-leech.gif",
        "mews.gif",
        "minecraft.gif",
        "nclinux.gif",
        "newgrounds.gif",
        "newlambda.gif",
        "noodle.gif",
        "pictochat.gif",
        "plasticlove.gif",
        "powered.gif",
        "powernavi.gif",
        "ralseismokingadart.gif",
        "rar_whit_move.gif",
        "rhc.gif",
        "scottgames.gif",
        "slava.gif",
        "sm_fever_button.gif",
        "stardew_valley.gif",
        "stockinganarchy.png",
        "temptationstairway.png",
        "train.gif",
        "vocaloid.gif",
        "wii.gif",
        "wikipedia_ru.gif",
        "wikipedia.gif",
        "windose.png",
        "yumenikki2.gif",
        "yumenikki3.gif"
    ]

    shuffle(buttonImages);
    const $track = $("#button-carousel-track");
    buttonImages.forEach(img => {
        const $img = $(`<img src="assets/images/buttons/${img}" alt="${img}"/>`);
        $track.append($img);
    });

    buttonImages.forEach(img => {
        const $img = $(`<img src="assets/images/buttons/${img}" alt="${img}"/>`);
        $track.append($img);
    });

    let scrollPos = 0;
    function autoScrollCarousel() {
      scrollPos += 1;
      if (scrollPos >= $track[0].scrollWidth / 2) scrollPos = 0;
      $track.css("transform", `translateX(-${scrollPos}px)`);
      requestAnimationFrame(autoScrollCarousel);
    }
    autoScrollCarousel();

    const purinCount = 11;
    const purinImages = [];
    for(let i = 1; i <= purinCount; i++) {
        purinImages.push(`assets/images/pompompurin/purin${i}.webp`);
    }
    shuffle(purinImages);
    let currentPurinIndex = 0;
    function showPurinImg() {
        $("#pompompurin-img").attr("src", purinImages[currentPurinIndex]);
    }

    setInterval(function() {
        currentPurinIndex = (currentPurinIndex + 1) % purinImages.length;
        showPurinImg();
    }, 3000);

    showPurinImg();

    const blogEntries = {
        welcome: {
            title: "Welcome to my Blog!",
            content: `<p>For someone who doesn't speak much, I do have a lot to say sometimes.</p>
                      <p>This section is a space for me to write longer thinkpieces about whatever is on my mind or whatever's been going on in my life lately. Not really a diary, since one entry won't correspond to one day, and it might take me mutiple days or weeks to finish an entry.</p>
                      <p>Use the table of contents on the left page to browse through my entries.</p>
                      <p>As always, thank you for reading! —Anja ~ ♪</p>`
        },
        entry1: {
            title: "My First Blog Post",
            content: "<p>Hello</p>"
        },
        entry2: {
            title: "My second entry",
            content: "<p>hola</p>"
        }
    };

    $("#blog-toc-list a").click(function(e) {
        e.preventDefault();
        const entryId = $(this).data("entry");
        const entry = blogEntries[entryId];
        if(entry) {
            $("#blog-entry-content").html(`<h4 style="text-align: center;">${entry.title}</h4>${entry.content}`);
        }
    })

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

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}