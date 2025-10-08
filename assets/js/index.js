$(document).ready(function(){
    let explorerIsOpen = false;

        // Travel log explorer icon click logic
        const travelLogSections = {
            tlHome: `<h2 style="text-align: center;">My Very Epic Travel Log!</h2>
                                        <img id="yume-walk" src="assets/images/travel-log/yumenikki-walk.gif" alt="Yume Nikki Walk">
                                        <p>I'm also quite fond of exploring the real world, not just Minecraft! :P</p>
                                        <p>This is my Travel Log! A cute and convenient place to show and keep track of places that I have visited over the years.
                                            Besides being a simple archive, I also want to keep track of what I saw/did in each place and how I felt while being there, pictures and all.
                                            I also want to include sections like a map, a calendar, and a statistics list so I can step back and admire my travels as a whole (a girl loves her reminiscing!).
                                            This is also a good way to keep track of places I want to visit in the future.
                                        </p>
                                        <p>Bear in mind though, it will be a while before every single entry is fully fleshed out. I'll work on this on my free time.</p>
                                        <p>A good place to start would probably be the <b>country list</b>. The majority of entries are under Mexico and Germany, those being the countries I grew up in and currently live in respectively.</p>
                                        <p>As usual, thank you for reading! I hope you can learn something about the places I've been to, and maybe gotten ideas of places you'd like to visit yourself :3</p>
                                        <p>—Anja ♪</p>`,
            tlCountryList: `<h2 style="text-align: center;">~ Country List ~</h2>
                                         <p style="text-align: center;">Click on a country to view its entries.</p>
                                         <img src="assets/images/travel-log/train.gif" alt="Train" style="display: block; margin: 0px auto 20px auto; max-width: 100%; height: auto;">
                                        <div class="country-list-grid">
                                            <div class="country-card">
                                                <img src="assets/images/travel-log/flags/austria.webp" alt="Austria Flag" class="country-flag">
                                                <p>Austria</p>
                                            </div>
                                            <div class="country-card">
                                                <img src="assets/images/travel-log/flags/belgium.webp" alt="Belgium Flag" class="country-flag">
                                                <p>Belgium</p>
                                            </div>
                                            <div class="country-card">
                                                <img src="assets/images/travel-log/flags/canada.png" alt="Canada Flag" class="country-flag">
                                                <p>Canada</p>
                                            </div>
                                            <div class="country-card">
                                                <img src="assets/images/travel-log/flags/cuba.webp" alt="Cuba Flag" class="country-flag">
                                                <p>Cuba</p>
                                            </div>
                                            <div class="country-card">
                                                <img src="assets/images/travel-log/flags/czechia.webp" alt="Czechia Flag" class="country-flag">
                                                <p>Czechia</p>
                                            </div>
                                            <div class="country-card">
                                                <img src="assets/images/travel-log/flags/estonia.webp" alt="Estonia Flag" class="country-flag">
                                                <p>Estonia</p>
                                            </div>
                                            <div class="country-card">
                                                <img src="assets/images/travel-log/flags/finland.webp" alt="Finland Flag" class="country-flag">
                                                <p>Finland</p>
                                            </div>
                                            <div class="country-card">
                                                <img src="assets/images/travel-log/flags/france.webp" alt="France Flag" class="country-flag">
                                                <p>France</p>
                                            </div>
                                            <div class="country-card">
                                                <img src="assets/images/travel-log/flags/germany.webp" alt="Germany Flag" class="country-flag">
                                                <p>Germany</p>
                                            </div>
                                            <div class="country-card">
                                                <img src="assets/images/travel-log/flags/latvia.webp" alt="Latvia Flag" class="country-flag">
                                                <p>Latvia</p>
                                            </div>
                                            <div class="country-card">
                                                <img src="assets/images/travel-log/flags/lithuania.webp" alt="Lithuania Flag" class="country-flag">
                                                <p>Lithuania</p>
                                            </div>
                                            <div class="country-card">
                                                <img src="assets/images/travel-log/flags/luxembourg.webp" alt="Luxembourg Flag" class="country-flag">
                                                <p>Luxembourg</p>
                                            </div>
                                            <div class="country-card">
                                                <img src="assets/images/travel-log/flags/mexico.webp" alt="Mexico Flag" class="country-flag">
                                                <p>Mexico</p>
                                            </div>
                                            <div class="country-card">
                                                <img src="assets/images/travel-log/flags/netherlands.webp" alt="Netherlands Flag" class="country-flag">
                                                <p>Netherlands</p>
                                            </div>
                                            <div class="country-card">
                                                <img src="assets/images/travel-log/flags/portugal.webp" alt="Portugal Flag" class="country-flag">
                                                <p>Portugal</p>
                                            </div>
                                            <div class="country-card">
                                                <img src="assets/images/travel-log/flags/slovakia.webp" alt="Slovakia Flag" class="country-flag">
                                                <p>Slovakia</p>
                                            </div>
                                            <div class="country-card">
                                                <img src="assets/images/travel-log/flags/turkey.webp" alt="Turkey Flag" class="country-flag">
                                                <p>Turkey</p>
                                            </div>
                                            <div class="country-card">
                                                <img src="assets/images/travel-log/flags/usa.webp" alt="USA Flag" class="country-flag">
                                                <p>United States</p>
                                            </div>

                                        </div>`,
            tlCalendar: `<h2>Calendar</h2><div id='calendar-div'></div>`,
            tlMap: `<h2>Map</h2><p>Map content goes here.</p>`,
            tlStats: `<h2>Stats</h2><p>Stats content goes here.</p>`,
            tlFuturePlans: `<div style="align-items: center; justify-content: center; display: flex; margin-top: 32px;">
                                            <img src="assets/images/travel-log/clock.gif">
                                            <h2 style="text-align: center; margin: 0px 10px;">Future Plans</h2>
                                            <img src="assets/images/travel-log/clock.gif">
                                         </div>
                                         <p style="margin-bottom: 32px; margin-top: 24px;">These are some of the places I would like to visit in the future 
                                                when I have the time and resources to do so, grouped by country
                                                 and ordered roughly by priority.
                                            </p>
                                         <div class="future-plan-row">
                                            <img src="assets/images/travel-log/flags/germany.webp" alt="Germany" class="future-plan-flag">
                                            <div class="future-plan-text">
                                                <p><strong><u>Germany:</u></strong> I've already explored plenty of this beautiful country, as you may have read in its entry. But there's still so many places I have yet to visit in Germany. Because I live in the north, places in the south like Bavaria and the Black Forest are quite far from me and I haven't had the chance to visit them yet. I'd also like to visit the two largest cities in Saxony: Leipzig and Dresden. They seem very beautiful and quite my vibe.</p>
                                            </div>
                                         </div>
                                         <div class="future-plan-row">
                                            <img src="assets/images/travel-log/flags/poland.webp" alt="Poland" class="future-plan-flag">
                                            <div class="future-plan-text">
                                                <p><strong><u>Poland:</u></strong> For having lived in Germany for so long, I'm surprised I haven't been to neighboring Poland yet. I KNOW i'll love it, just have to set aside the time for it. I would love to see the architecture of cities like Gdansk, Wroclaw, and Krakow with my own eyes; I also have friends in the capital Warsaw so that's a guaranteed good time.</p>
                                            </div>
                                         </div>
                                         <div class="future-plan-row">
                                            <img src="assets/images/travel-log/flags/denmark.webp" alt="Denmark" class="future-plan-flag">
                                            <div class="future-plan-text">
                                                <p><strong><u>Denmark:</u></strong> Copenhagen seems like a very cute city, and it's only a 4-hour train ride from Hamburg! I've never actually been to Scandinavia, so this is definitely a good place to start. It's quite a small country, so I could definitely visit other cities like Aarhus or even Malmö in Sweden in the same trip.</p>
                                            </div>
                                         </div>
                                         <div class="future-plan-row">
                                            <img src="assets/images/travel-log/flags/cyprus.webp" alt="Cyprus" class="future-plan-flag">
                                            <div class="future-plan-text">
                                                <strong><u>Cyprus:</u></strong> Similarly to Poland, a close friend of mine is from here and has offered to show me around; this is very important because I'm sure I would miss out on a lot of important places and experiences if I went alone. I'd love to see the beaches, ruins, but above all I can't wait to try the food. What little Cypriot food I've had has been absolutely delightful.</p>
                                            </div>
                                         </div>
                                         <div class="future-plan-row">
                                            <img src="assets/images/travel-log/flags/romania.webp" alt="Romania" class="future-plan-flag">
                                            <div class="future-plan-text">
                                                <p><strong><u>Romania:</u></strong> Virtually every Romanian I've spoken to has told me I should come to Romania. I'm quite interested in this country's language and history and it's very easy to travel to, but it's definitely more of a weeklong trip rather than a weekend one. I want to give this country the time it deserves!</p>
                                            </div>
                                         </div>
                                        <div class="future-plan-row">
                                            <img src="assets/images/travel-log/flags/mexico.webp" alt="Mexico" class="future-plan-flag">
                                            <div class="future-plan-text">
                                                <p><strong><u>Mexico:</u></strong> Nineteen years in Mexico were not enough to explore all parts of my beautiful homeland. I'd love to visit the southernmost states (Chiapas, Oaxaca, Guerrero), which I've never been to. I hear a lot about their cuisine and precolumbian history. Since I visit my family back home once or twice a year, these are definitely strong candidates for family vacations.</p>
                                            </div>
                                         </div>
                                         <div class="future-plan-row">
                                            <img src="assets/images/travel-log/flags/colombia.webp" alt="Colombia" class="future-plan-flag">
                                            <div class="future-plan-text">
                                                <p><strong><u>Colombia:</u></strong> My dad used to travel to Colombia frequently for work. The stories of all the amazing people he met, places he saw, and food he ate in Bogotá and Cartagena really stuck with me, and I'd like to experience all of that myself. Not to mention, language wouldn't be a problem given that I speak Spanish!</p>
                                            </div>
                                         </div>`,
            tlSpecialThanks: `<div style="align-items: center; justify-content: center; display: flex; margin-top: 32px;">`
        };

        //$("#travel-log-main-content").html(travelLogSections.tlHome);

        $('#travel-log-explorer-icons .explorer-w-title').click(function() {
            const section = $(this).data('section');
            if(section === 'tlExplorer') {
                toggleTravelLogTreeTab();
                // After toggling, update country grid layout if present
                const $countryGrid = $(".country-list-grid");
                if($countryGrid.length) {
                    if(explorerIsOpen) {
                        $countryGrid.addClass("explorer-open");
                    } else {
                        $countryGrid.removeClass("explorer-open");
                    }
                }
                return;
            }
            $("#travel-log-main-content").html(travelLogSections[section] || "<p>Section not found.</p>");
            // If rendering country list, set grid columns based on explorer state
            if(section === "tlCountryList") {
                setTimeout(function() {
                    const $countryGrid = $(".country-list-grid");
                    if($countryGrid.length) {
                        if(explorerIsOpen) {
                            $countryGrid.addClass("explorer-open");
                        } else {
                            $countryGrid.removeClass("explorer-open");
                        }
                    }
                }, 0);
            }
            if(section === "tlCalendar") {
                if(typeof generateCalendar === 'function') generateCalendar("calendar-div");
            }
        });
    // Toggle travel log tree tab sidebar using a named function
    function toggleTravelLogTreeTab() {
        var $treeTab = $('#travel-log-tree-tab');
        $treeTab.toggle();
        explorerIsOpen = $treeTab.is(":visible");
    }

    setSectionBackground("home");

    $(".fake-screen").mouseenter(function(){
        $(this).css("border-color", "yellow");
    })

    $(".fake-screen").mouseleave(function(){
        $(this).css("border-color", "white");
    })
    
    $(".typeWriter").addClass("play");

    $(".about-page").hide();
    $(".minecraft-page").hide();
    $(".travel-page").hide();
    $(".blog-page").hide();
    $(".dream-diary-page").hide();
    $(".shrines-page").hide();
    $(".resources-page").hide();

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

    const track = document.getElementById("nexus-track");
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

    $("#nav-but-l").click(function(){
        currentIndex--;
        updateSlide();
        setTimeout(checkWrap, 400);
    });

    $("#nav-but-r").click(function(){
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

    $(".door-img").click(function(){
        const index = (currentIndex - 1 + slides.length) % slides.length;
        switch(index){
            case 0:
                setSectionBackground("home");
                $(".home-page").slideDown();
                $(".about-page").slideUp();
                $(".minecraft-page").slideUp();
                $(".travel-page").slideUp();
                $(".blog-page").slideUp();
                $(".dream-diary-page").slideUp();
                $(".shrines-page").slideUp();
                $(".resources-page").slideUp();
                break;
            case 1:
                setSectionBackground("about");
                $(".about-page").slideDown();
                $(".home-page").slideUp();
                $(".minecraft-page").slideUp();
                $(".travel-page").slideUp();
                $(".blog-page").slideUp();
                $(".dream-diary-page").slideUp();
                $(".shrines-page").slideUp();
                $(".resources-page").slideUp();
                break;
            case 2:
                setSectionBackground("minecraft");
                $(".minecraft-page").slideDown();
                $(".home-page").slideUp();
                $(".about-page").slideUp();
                $(".travel-page").slideUp();
                $(".blog-page").slideUp();
                $(".dream-diary-page").slideUp();
                $(".shrines-page").slideUp();
                $(".resources-page").slideUp();
                break;
            case 3:
                setSectionBackground("travel");
                $(".travel-page").slideDown();
                $(".home-page").slideUp();
                $(".about-page").slideUp();
                $(".minecraft-page").slideUp();
                $(".blog-page").slideUp();
                $(".dream-diary-page").slideUp();
                $(".shrines-page").slideUp();
                $(".resources-page").slideUp();
                break;
            case 4:
                setSectionBackground("blog");
                $(".blog-page").slideDown();
                $(".home-page").slideUp();
                $(".about-page").slideUp();
                $(".minecraft-page").slideUp();
                $(".travel-page").slideUp();
                $(".dream-diary-page").slideUp();
                $(".shrines-page").slideUp();
                $(".resources-page").slideUp();
                break;
            case 5:
                setSectionBackground("dream");
                $(".dream-diary-page").slideDown();
                $(".home-page").slideUp();
                $(".about-page").slideUp();
                $(".minecraft-page").slideUp();
                $(".travel-page").slideUp();
                $(".blog-page").slideUp();
                $(".shrines-page").slideUp();
                $(".resources-page").slideUp();
                break;

            case 6:
                setSectionBackground("shrines");
                $(".shrines-page").slideDown();
                $(".home-page").slideUp();
                $(".about-page").slideUp();
                $(".minecraft-page").slideUp();
                $(".travel-page").slideUp();
                $(".blog-page").slideUp();
                $(".dream-diary-page").slideUp();
                $(".resources-page").slideUp();
                break;
            case 7:
                setSectionBackground("resources");
                $(".resources-page").slideDown();
                $(".home-page").slideUp();
                $(".about-page").slideUp();
                $(".minecraft-page").slideUp();
                $(".travel-page").slideUp();
                $(".blog-page").slideUp();
                $(".shrines-page").slideUp();
                $(".dream-diary-page").slideUp();
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
        "3i.png",
        "antinft.gif",
        "aperture.jpg",
        "buttcertificate.gif",
        "chocoloaf.gif",
        "chrome-suck.gif",
        "cinna.gif",
        "college.gif",
        "companion.jpg",
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
        "gordon.gif",
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
        "n64.gif",
        "nclinux.gif",
        "newgrounds.gif",
        "newlambda.gif",
        "nintendo.gif",
        "noodle.gif",
        "nyan.gif",
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
        "trans.png",
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

    const stampImages = [
        "aperture.png",
        "backrooms.png",
        "bliss.png",
        "broccoli.png",
        "cocaine.png",
        "delicat.png",
        "eyes.png",
        "face.jpg",
        "gmod.png",
        "hate.png",
        "kitty.gif",
        "lain-dance.gif",
        "lainangy.gif",
        "lainstamp.png",
        "lazer.gif",
        "leek.gif",
        "love.png",
        "moon-stamp.png",
        "nyancat.gif",
        "palestine.gif",
        "pacman.webp",
        "physmed.png",
        "purin.webp",
        "purin2.gif",
        "purin3.gif",
        "rei.png",
        "reiblush.gif",
        "stars.gif",
        "terraria.gif",
        "tomato.png",
        "trans.gif",
        "trans2.png",
        "troll.gif",
        "undertale.gif",
        "vocaloid.webp",
        "wii.png",
        "yuri.png",
        "yuri2.png"
    ]

    shuffle(stampImages);
    const $stampTrack = $("#stamp-carousel-track");
    stampImages.forEach(img => {
        const $img = $(`<img src="assets/images/stamps/${img}" alt="${img}"/>`);
        $stampTrack.append($img);
    });

    stampImages.forEach(img => {
        const $img = $(`<img src="assets/images/stamps/${img}" alt="${img}"/>`);
        $stampTrack.append($img);
    });

    let stampScrollPos = 0;
    function autoScrollStampCarousel() {
      stampScrollPos += 1;
      if (stampScrollPos >= $stampTrack[0].scrollWidth / 2) stampScrollPos = 0;
      $stampTrack.css("transform", `translateX(-${stampScrollPos}px)`);
      requestAnimationFrame(autoScrollStampCarousel);
    }
    autoScrollStampCarousel();

    function syncMiddleHeight() {
        var leftHeight = $(".column.left").outerHeight();
        $(".column.middle").css("height", leftHeight + "px");
        $("#travel-log-window").css("max-height", leftHeight + "px");
    }
    $(window).on("load resize", syncMiddleHeight);


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

generateCalendar("calendar-div");

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}