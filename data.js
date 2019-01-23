'use strict';

const BACKGROUND_STORE = {
    mountains: { height: ['-700px', '-539px', '0'], opacity: [0, 1, 1] },
    stars: { height: ['50%', 'calc(50%+400px)', 'calc(50%+800px)'], opacity: [1, 1, 0] },
    length: ['1000', '2000', '5000'],
}

const STORE = [
    //ST:TOS
    {
        image: { src: 'https://theredlist.com/media/database/films/tv-series/fantasy-and-sci-fi/1960/star-trek-original/015-star-trek-theredlist.jpg', alt: 'Spock, Kirk and Scotty aiming their phasers in the engine room.' },
        answers: [
            'Star Trek: Voyager',
            'Star Trek: Enterprise',
            'Babylon-5',
            'Star Trek: The Original Series',
            'Star Trek: The Next Generation'
        ],
        correctAnswer: 'Star Trek: The Original Series',
        altImage: { src: 'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2016/05/gettyimages-156913467_1-h_2016.jpg', alt: 'Kirk and Uhura about to kiss in greek period costumes.' },
        trivia: "Notable for being the first scripted American television show to display a kiss between black and white races, William Shatner (Kirk) and Nichelle Nichols (Uhura), in Star Trek: Plato's Stepchildren (1968) broadcast November 22, 1968 to considerable controversy.",
    },
    //ST:TNG
    {
        image: { src: 'http://tng.trekcore.com/hd/albums/3x13/deja_q_hd_411.jpg', alt: 'Q and a mariachi band playing infront of an exasperated Picard.' },
        answers: [
            'Star Trek: Deep Space Nine',
            'Star Trek: Voyager',
            'Star Trek: The Next Generation',
            'Caprica',
            'Star Trek: Enterprise'
        ],
        correctAnswer: 'Star Trek: The Next Generation',
        altImage: { src: 'https://flipsidesf.files.wordpress.com/2013/09/locutus.jpg', alt: 'Picard appears to the enterprise crew, assimilated, for the first time.' },
        trivia: "Sir Patrick Stewart (Captain Jean-Luc Picard) and Jonathan Frakes (Commander William T. Riker) are the only actors to appear in all one hundred seventy-eight episodes of the series.",
    },
    //Battlestar Galactica
    {
        image: { src: 'https://timedotcom.files.wordpress.com/2014/04/battlestar-galactica-1.jpg', alt: 'Tired pilots in a briefing' },
        answers: [
            'Battlestar Galactica 1978',
            'Battlestar Galactica',
            'Caprica',
            'Stargate Universe',
            'Andromeda'
        ],
        correctAnswer: 'Battlestar Galactica',
        altImage: { src: 'https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/54613c94e4b0e58fabd9ab2f/1415658655207/battlestar-galactica-is-even-more-badass-with-top-gun-music?format=1500w', alt: 'A Human and Cylon ship flying next to each other in a battle' },
        trivia: "During the show's first season, it consistently remained Sci-Fi Channel's top-rated program, pulling in more than 3 million viewers. Its 10pm viewing even finished ahead of UPN's Star Trek: Enterprise (2001) which aired at 8pm on Fridays on a non-cable/satellite network.",
    },
    //Firefly
    {
        image: { src: 'http://2.bp.blogspot.com/_pV3_R4ug6I0/TUrQ1TK0rGI/AAAAAAAASKU/LNC9TOACa5o/s1600/Firefly05_Wash.jpg', alt: '"Wash" playing with toy dinosaurs on the bridge of the Serenity'},
        answers: [
            'Defiance',
            'Eureka',
            'Serenity',
            'Andromeda',
            'Firefly'
        ],
        correctAnswer: 'Firefly',
        altImage: { src: 'https://www.wallpaperup.com/uploads/wallpapers/2014/02/18/259509/30054d1b967004fe1a4dbfc979b8f70b.jpg', alt: 'Summer Glau as she appears in the role of River Tam in Firefly' },
        trivia: "The cast had a running gag where they would yell Summer Glau's name whenever they flubbed a line or messed up. It began after she forgot her line at the end of a particularly difficult scene. The gag continued through the filming of Serenity (2005).",
    },
    //Stargate SG-1
    {
        image: { src: 'http://images.critictoo.com/wp-content/uploads/2017/07/Stargate-SG-1-Window-of-Opportunity.jpg', alt: 'Jack and Teal\'c playing golf in the episode \'Window of Opportunity\''},
        answers: [
            'Stargate SG-1',
            'Wormhole Extreme',
            'Continuum',
            'Travelers',
            'Sanctuary'
        ],
        correctAnswer: 'Stargate SG-1',
        altImage: { src: 'https://www.stripes.com/polopoly_fs/1.17571.1273608657!/image/237972465.jpg_gen/derivatives/landscape_900/237972465.jpg', alt: 'A backstage photo of General John Jumper as he appears on the show Stargate SG-1' },
        trivia: "This was the only television series endorsed and supported by the United States Armed Forces (particularly the Air Force). They even had Air Force Chief of Staff, General John Jumper, play himself on the show.",
    },
    //Stargate Atlantis
    {
        image: { src: 'https://vignette.wikia.nocookie.net/stargate/images/a/af/Harmony5.jpg/revision/latest?cb=20081005220548', alt: 'A painting of McKay vailiantly firing his P90 while Sheppard cowers in the background, from the episode \'Harmony\''},
        answers: [
            'Sanctuary',
            'Stargate Universe',
            'Stargate Atlantis',
            'Travelers',
            'Falling Skies'
        ],
        correctAnswer: 'Stargate Atlantis',
        altImage: { src: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette1.wikia.nocookie.net%2Fstargate%2Fimages%2F8%2F8b%2FStargate-shield.jpg%2Frevision%2Flatest%3Fcb%3D20110908203055&f=1', alt: 'The stargate located in Atlantis with its shield raised' },
        trivia: "Stargate's ring have 39 glyphs or chevrons. In this TV series as in Stargate SG-1 (1997) and SGU Stargate Universe (2009) its explained that the number of glyphs in a stargate depends on the galaxy where the stargate belongs.",
    },
    //The Expanse
    {
        image: { src: 'https://2.bp.blogspot.com/-WiCduMucn6I/Wva6LWKh8VI/AAAAAAAAaXU/33yeSW48BDoENHE0mgUjz0MGsUKAUZ7KgCPcBGAYYCw/s1600/Capture%252B_2018-05-10-15-56-37.png', alt: 'A protomolecule create sits in a horizontal tank while a scientist and Jules-Pierre Mao stare at it' },
        answers: [
            'Killjoys',
            'V',
            'LEXX',
            'Space: Above and Beyond',
            'The Expanse'
        ],
        correctAnswer: 'The Expanse',
        altImage: { src: 'https://vignette.wikia.nocookie.net/expanse/images/0/04/S02E01corvetteclassroci-4m51s.jpg/revision/latest?cb=20181121215051', alt: 'The ship \'Rocinante\' flying through space with the subtitle: \'Rocinante in the Belt\'' },
        trivia: "The name of the ship, Rocinante, is the name of Don Quixote's horse from the novel Don Quixote by Miguel de Cervantes. The episode names Dulcinea and Windmills may also be allusions to the novel.",
    },
    //X-Files
    {
        image: { src: 'https://www.themarysue.com/wp-content/uploads/2016/01/xfiles.jpg', alt: 'Scully and Mulder look at the camera' },
        answers: [
            'Fringe',
            'X-Files',
            'Twin Peaks',
            'Supernatural',
            'Grimm'
        ],
        correctAnswer: 'X-Files',
        altImage: { src: 'https://m.media-amazon.com/images/M/MV5BMTIzODAwOTM2MF5BMl5BanBnXkFtZTYwMzM1OTk1', alt: 'Composer Mark Snow holding an award' },
        trivia: "The famous echoing chord from the theme music was a fluke. Composer Mark Snow accidentally rested his elbow on his keyboard with the echo function on and he liked the resulting sound so much, he wrote the theme around it.",
    },
    //Babylon-5
    {
        image: { src: 'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2018/05/mv5bzjy0nza4zjitmzzkzi00mte5lthjmdktm2i0mzy2otrkndmyxkeyxkfqcgdeqxvyotu1mzy0nw._v1_.jpg', alt: "Londo Mollari and G'kar standing together" },
        answers: [
            'Terra Nova',
            'Battlestar Galactica 1978',
            'Babylon-5',
            'Space: Above and Beyond',
            'V'
        ],
        correctAnswer: 'Babylon-5',
        altImage: { src: 'http://rpggamer.org/uploaded_images/Babylon_5_9.jpg', alt: 'The babylon 5 station in orbit' },
        trivia: "The Babylon 5 station is an \"O'Neill class space station\". Gerard K. O'Neill was a physicist and space visionary who suggested the use of large rotating cylindrical habitats for future space stations.",
    },
    //Doctor Who
    {
        image: { src: 'https://images.immediate.co.uk/volatile/sites/3/2018/09/16179278-high_res-doctor-who-series-11-69bcdc4.jpg?quality=45&resize=620,413', alt: 'A woman messes with some technical device while 3 others look on' },
        answers: [
            'Doctor Who',
            'Sliders',
            'Continuum',
            'Colony',
            'Torchwood'
        ],
        correctAnswer: 'Doctor Who',
        altImage: { src: 'https://static.comicvine.com/uploads/original/0/6063/4816032-dl.jpg', alt: 'Daleks surround a man on the original Doctor Who show' },
        trivia: "Doctor Who is the currently longest running Sci-Fi TV series, with the original show first airing on November 23rd, 1963.",
    },
    //Farscape
    {
        image: { src: 'https://cdn-static.denofgeek.com/sites/denofgeek/files/styles/article_width/public/farscape_the_peacekeeper_wars_1.jpg?itok=eU63f00v', alt: 'John Crichton, Chiana and Ka D\'argo from the Peacekeepers' },
        answers: [
            'Stargate SG-1',
            'Terra Nova',
            'Eureka',
            'Sanctuary',
            'Farscape'
        ],
        correctAnswer: 'Farscape',
        altImage: { src: 'http://howlmag.com/wp-content/uploads/comic-gigi-edgely-chiana-farscape.jpg', alt: 'Chiana holding two weapons and posing' },
        trivia: "Originally Gigi Edgley's character Chiana was supposed to be killed off after a few episodes. But the producers liked her so much they changed their minds and made her a regular cast member.",
    },
    //Dark Matter
    {
        image: { src : 'https://www.syfy.com/sites/syfy/files/styles/syfy_hero_breakpoints_theme_syfy_tablet_wide_1x/public/DarkMatter_hero_watchvideo.jpg?itok=F1fBx6Kx', alt: 'Six threatening the Android with a shotgun' },
        answers: [
            'Travelers',
            'Red Dwarf',
            'Continuum',
            'Dark Matter',
            'Andromeda'
        ],
        correctAnswer: 'Dark Matter',
        altImage: { src: 'https://aws.boxofficebuz.com/shows/video-images/5283-dark-matter-season-3-trailer-2.jpg', alt: 'Five, also known as Emily Kolburn' },
        trivia: "Jodelle Ferland's character Emily Kolburn uses the ships vents to move around. Jodelle is the voice of the Little Sisters in Bioshock 2, who also uses vents to move around.",
    },
    //Stranger Things
    {
        image: { src: 'https://s.yimg.com/ny/api/res/1.2/EN0qnpopUs0eqMwKyuwBUw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODUwO2g9NTAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/e31aabf782465ce09559623b10a886b9', alt: "Dustin Henderson wearing swim goggles with a bandana around his mounth"},
        answers: [
            'Fringe',
            'Under the Dome',
            'Grimm',
            'Eureka',
            'Stranger Things'
        ],
        correctAnswer: 'Stranger Things',
        altImage: { src: 'https://www.telegraph.co.uk/content/dam/on-demand/2016/08/01/composite-stranger-things-dress-xxlarge_trans++8EuVKQIuseo94-dKmHKl1XjjZp2Y6K8nbt-Aru5IwLA.jpg', alt: "Both eleven and ET in a dress" },
        trivia: "Eleven's (Millie Bobby Brown) outfit of the pink dress & blonde wig are similar and possibly a nod to E.T.'s disguise in the movie E.T. The Extra-Terrestrial (1982).",
    },
    //Star Trek: Deep Space Nine
    {
        image: { src:'http://media.hollywood.com/images/638x425/1772457.jpg', alt: "Odo and Benjamin Sisko standing on the bridge" },
        answers: [
            'Star Trek: Voyager',
            'Andromeda',
            'Star Trek: Deep Space Nine',
            'Warehouse 13',
            'Star Trek: Discovery'
        ],
        correctAnswer: 'Star Trek: Deep Space Nine',
        altImage: { src: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.psRek5piz3jp3PWJu7havQHaFp%26pid%3D15.1&f=1', alt: "Gul Dukat smiling"}, 
        trivia: "The character of Garak, a former spy who works as a tailor on the station, was inspired by certain John le Carré's spy novels, particularly \"Tinker, Tailor, Soldier, Spy\".",
    },
    //Westworld
    {
        image: { src: 'https://cdn.vox-cdn.com/thumbor/OB6VHGhM1BMVQq0S3v_yASXV6ig=/0x0:5500x3667/1200x800/filters:focal(2439x322:3319x1202)/cdn.vox-cdn.com/uploads/chorus_image/image/59486611/fb63b49b84dec6ffedc59e9e54f4a855c339fb7e1e5450fd8c64cb11c7af3e01.0.jpg', alt: 'Bernard Lowe standing incredulously' },
        answers: [
            'Humans',
            'Counterpart',
            'Westworld',
            'Fringe',
            'Defiance'
        ],
        correctAnswer: 'Westworld',
        altImage: { src: 'https://townsquare.media/site/442/files/2016/11/westworld_town.jpg?w=960&h=402&q=75', alt: "Yul Brynner standing in a classic gunslinger pose from Westworld(1973)" },
        trivia: "When you see the original gunslinger in the basement, the background music and noise is from Westworld (1973).",
    },
];