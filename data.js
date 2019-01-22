'use strict';

const STORE = [
    //ST:TOS
    {
        image: 'https://theredlist.com/media/database/films/tv-series/fantasy-and-sci-fi/1960/star-trek-original/015-star-trek-theredlist.jpg',
        answers: [
            'Star Trek: Voyager',
            'Star Trek: Enterprise',
            'Babylon-5',
            'Star Trek: The Original Series',
            'Star Trek: The Next Generation'
        ],
        correctAnswerIndex: 3,
        altImage: 'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2016/05/gettyimages-156913467_1-h_2016.jpg',
        trivia: "Notable for being the first scripted American television show to display a kiss between black and white races, William Shatner (Kirk) and Nichelle Nichols (Uhura), in Star Trek: Plato's Stepchildren (1968) broadcast November 22, 1968 to considerable controversy.",
    },
    //ST:TNG
    {
        image: 'http://tng.trekcore.com/hd/albums/3x13/deja_q_hd_411.jpg',
        answers: [
            'Star Trek: Deep Space Nine',
            'Star Trek: Voyager',
            'Star Trek: The Next Generation',
            'Caprica',
            'Star Trek: Enterprise'
        ],
        correctAnswerIndex: 2,
        altImage: 'https://flipsidesf.files.wordpress.com/2013/09/locutus.jpg',
        trivia: "Sir Patrick Stewart (Captain Jean-Luc Picard) and Jonathan Frakes (Commander William T. Riker) are the only actors to appear in all one hundred seventy-eight episodes of the series.",
    },
    //Battlestar Galactica
    {
        image: 'https://timedotcom.files.wordpress.com/2014/04/battlestar-galactica-1.jpg',
        answers: [
            'Battlestar Galactica 1978',
            'Battlestar Galactica',
            'Caprica',
            'Stargate Universe',
            'Andromeda'
        ],
        correctAnswerIndex: 1,
        altImage: 'https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/54613c94e4b0e58fabd9ab2f/1415658655207/battlestar-galactica-is-even-more-badass-with-top-gun-music?format=1500w',
        trivia: "During the show's first season, it consistently remained Sci-Fi Channel's top-rated program, pulling in more than 3 million viewers. Its 10pm viewing even finished ahead of UPN's Star Trek: Enterprise (2001) which aired at 8pm on Fridays on a non-cable/satellite network.",
    },
    //Firefly
    {
        image: 'http://2.bp.blogspot.com/_pV3_R4ug6I0/TUrQ1TK0rGI/AAAAAAAASKU/LNC9TOACa5o/s1600/Firefly05_Wash.jpg',
        answers: [
            'Defiance',
            'Eureka',
            'Serenity',
            'Andromeda',
            'Firefly'
        ],
        correctAnswerIndex: 4,
        altImage: 'https://www.wallpaperup.com/uploads/wallpapers/2014/02/18/259509/30054d1b967004fe1a4dbfc979b8f70b.jpg',
        trivia: "The cast had a running gag where they would yell Summer Glau's name whenever they flubbed a line or messed up. It began after she forgot her line at the end of a particularly difficult scene. The gag continued through the filming of Serenity (2005).",
    },
    //Stargate SG-1
    {
        image: 'http://images.critictoo.com/wp-content/uploads/2017/07/Stargate-SG-1-Window-of-Opportunity.jpg',
        answers: [
            'Stargate SG-1',
            'Wormhole Extreme',
            'Continuum',
            'Travelers',
            'Sanctuary'
        ],
        correctAnswerIndex: 0,
        altImage: 'https://www.stripes.com/polopoly_fs/1.17571.1273608657!/image/237972465.jpg_gen/derivatives/landscape_900/237972465.jpg',
        trivia: "This was the only television series endorsed and supported by the United States Armed Forces (particularly the Air Force). They even had Air Force Chief of Staff, General John Jumper, play himself on the show.",
    },
    //Stargate Atlantis
    {
        image: 'https://vignette.wikia.nocookie.net/stargate/images/a/af/Harmony5.jpg/revision/latest?cb=20081005220548',
        answers: [
            'Sanctuary',
            'Stargate Universe',
            'Stargate Atlantis',
            'Travelers',
            'Falling Skies'
        ],
        correctAnswerIndex: 2,
        altImage: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette1.wikia.nocookie.net%2Fstargate%2Fimages%2F8%2F8b%2FStargate-shield.jpg%2Frevision%2Flatest%3Fcb%3D20110908203055&f=1',
        trivia: "Stargate's ring have 39 glyphs or chevrons. In this TV series as in Stargate SG-1 (1997) and SGU Stargate Universe (2009) its explained that the number of glyphs in a stargate depends on the galaxy where the stargate belongs.",
    },
    //The Expanse
    {
        image: 'https://2.bp.blogspot.com/-WiCduMucn6I/Wva6LWKh8VI/AAAAAAAAaXU/33yeSW48BDoENHE0mgUjz0MGsUKAUZ7KgCPcBGAYYCw/s1600/Capture%252B_2018-05-10-15-56-37.png',
        answers: [
            'Killjoys',
            'V',
            'LEXX',
            'Space: Above and Beyond',
            'The Expanse'
        ],
        correctAnswerIndex: 4,
        altImage: 'https://vignette.wikia.nocookie.net/expanse/images/0/04/S02E01corvetteclassroci-4m51s.jpg/revision/latest?cb=20181121215051',
        trivia: "The name of the ship, Rocinante, is the name of Don Quixote's horse from the novel Don Quixote by Miguel de Cervantes. The episode names Dulcinea and Windmills may also be allusions to the novel.",
    },
    //X-Files
    {
        image: 'https://www.themarysue.com/wp-content/uploads/2016/01/xfiles.jpg',
        answers: [
            'Fringe',
            'X-Files',
            'Twin Peaks',
            'Supernatural',
            'Grimm'
        ],
        correctAnswerIndex: 1,
        altImage: 'https://m.media-amazon.com/images/M/MV5BMTIzODAwOTM2MF5BMl5BanBnXkFtZTYwMzM1OTk1',
        trivia: "The famous echoing chord from the theme music was a fluke. Composer Mark Snow accidentally rested his elbow on his keyboard with the echo function on and he liked the resulting sound so much, he wrote the theme around it.",
    },
    //Babylon-5
    {
        image: 'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2018/05/mv5bzjy0nza4zjitmzzkzi00mte5lthjmdktm2i0mzy2otrkndmyxkeyxkfqcgdeqxvyotu1mzy0nw._v1_.jpg',
        answers: [
            'Terra Nova',
            'Battlestar Galactica 1978',
            'Babylon-5',
            'Space: Above and Beyond',
            'V'
        ],
        correctAnswerIndex: 2,
        altImage: 'http://rpggamer.org/uploaded_images/Babylon_5_9.jpg',
        trivia: "The Babylon 5 station is an \"O'Neill class space station\". Gerard K. O'Neill was a physicist and space visionary who suggested the use of large rotating cylindrical habitats for future space stations.",
    },
    //Doctor Who
    {
        image: 'https://images.immediate.co.uk/volatile/sites/3/2018/09/16179278-high_res-doctor-who-series-11-69bcdc4.jpg?quality=45&resize=620,413',
        answers: [
            'Doctor Who',
            'Sliders',
            'Continuum',
            'Colony',
            'Torchwood'
        ],
        correctAnswerIndex: 0,
        altImage: 'https://static.comicvine.com/uploads/original/0/6063/4816032-dl.jpg',
        trivia: "Doctor Who is the currently longest running Sci-Fi TV series, with the original show first airing on November 23rd, 1963.",
    },
    //Farscape
    {
        image: 'https://cdn-static.denofgeek.com/sites/denofgeek/files/styles/article_width/public/farscape_the_peacekeeper_wars_1.jpg?itok=eU63f00v',
        answers: [
            'Stargate SG-1',
            'Terra Nova',
            'Eureka',
            'Sanctuary',
            'Farscape'
        ],
        correctAnswerIndex: 4,
        altImage: 'http://howlmag.com/wp-content/uploads/comic-gigi-edgely-chiana-farscape.jpg',
        trivia: "Originally Gigi Edgley's character Chiana was supposed to be killed off after a few episodes. But the producers liked her so much they changed their minds and made her a regular cast member.",
    },
    //Dark Matter
    {
        image: 'https://www.syfy.com/sites/syfy/files/styles/syfy_hero_breakpoints_theme_syfy_tablet_wide_1x/public/DarkMatter_hero_watchvideo.jpg?itok=F1fBx6Kx',
        answers: [
            'Travelers',
            'Red Dwarf',
            'Continuum',
            'Dark Matter',
            'Andromeda'
        ],
        correctAnswerIndex: 3,
        altImage: 'https://aws.boxofficebuz.com/shows/video-images/5283-dark-matter-season-3-trailer-2.jpg',
        trivia: "Jodelle Ferland's character Emily Kolburn uses the ships vents to move around. Jodelle is the voice of the Little Sisters in Bioshock 2, who also uses vents to move around.",
    },
    //Stranger Things
    {
        image: 'https://s.yimg.com/ny/api/res/1.2/EN0qnpopUs0eqMwKyuwBUw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODUwO2g9NTAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/e31aabf782465ce09559623b10a886b9',
        answers: [
            'Fringe',
            'Under the Dome',
            'Grimm',
            'Eureka',
            'Stranger Things'
        ],
        correctAnswerIndex: 4,
        altImage: 'https://www.telegraph.co.uk/content/dam/on-demand/2016/08/01/composite-stranger-things-dress-xxlarge_trans++8EuVKQIuseo94-dKmHKl1XjjZp2Y6K8nbt-Aru5IwLA.jpg',
        trivia: "Eleven's (Millie Bobby Brown) outfit of the pink dress & blonde wig are similar and possibly a nod to E.T.'s disguise in the movie E.T. The Extra-Terrestrial (1982).",
    },
    //Star Trek: Deep Space Nine
    {
        image: 'http://media.hollywood.com/images/638x425/1772457.jpg',
        answers: [
            'Star Trek: Voyager',
            'Andromeda',
            'Star Trek: Deep Space Nine',
            'Warehouse 13',
            'Star Trek: Discovery'
        ],
        correctAnswerIndex: 2,
        altImage: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.psRek5piz3jp3PWJu7havQHaFp%26pid%3D15.1&f=1',
        trivia: "The character of Garak, a former spy who works as a tailor on the station, was inspired by certain John le Carré's spy novels, particularly \"Tinker, Tailor, Soldier, Spy\".",
    },
    //Westworld
    {
        image: 'https://cdn.vox-cdn.com/thumbor/OB6VHGhM1BMVQq0S3v_yASXV6ig=/0x0:5500x3667/1200x800/filters:focal(2439x322:3319x1202)/cdn.vox-cdn.com/uploads/chorus_image/image/59486611/fb63b49b84dec6ffedc59e9e54f4a855c339fb7e1e5450fd8c64cb11c7af3e01.0.jpg',
        answers: [
            'Humans',
            'Counterpart',
            'Westworld',
            'Fringe',
            'Defiance'
        ],
        correctAnswerIndex: 2,
        altImage: 'https://townsquare.media/site/442/files/2016/11/westworld_town.jpg?w=960&h=402&q=75',
        trivia: "When you see the original gunslinger in the basement, the background music and noise is from Westworld (1973).",
    },
];