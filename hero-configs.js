collections = [
    {
        name: 'Ashen Verdict',
        heroes: ['Eadric the Pure', 'Darion Mograine', 'Thassarian', 'Koltira Deathweaver', 'Father Kamaros', 'Aliocha Segard'],
        quests: ["Anub'arak Encounter", 'Argent Tournament', 'Shadow Vault'],
    },
    {
        name: 'Explorers & Hunters',
        heroes: ['Brann Bronzebeard', 'Harrison Jones', 'Hemet Nesingwary'],
    },
    {
        name: 'Keepers of Ulduar',
        heroes: ['Freya', 'Hodir', 'Mimiron', 'Thorim'],
    },
    {
        name: 'Kirin Tor',
        heroes: ['Aethas Sunreaver', 'Jaina Proudmoore', 'Rhonin', 'Vereesa Windrunner'],
        quests: ['Dalaran']
    },
    {
        name: 'Mainland Reinforcements',
        heroes: ['Broll Bearmantle', 'Cairne Bloodhoof', 'Elite Tauren Chieftain', 'Gelbin Mekkatorque', "Lor'themar Theron", 'Magni Bronzebeard', 'Nathanos Blightcaller', 'Valeera Sanguinar', 'Velen'],
    },
    {
        name: 'Northend Creatures',
        heroes: ['Gymer', 'Kilix', "Oacha'noa", 'Roanauk Icemist'],
    },
    {
        name: 'Scarlet Crusade',
        heroes: ['James Vishas', 'Lilian Voss', 'Sally Whitemane'],
        quests: ['Onslaught Harbor'],
    },
    {
        name: 'The Wrathgate',
        heroes: ['Bolvar Fordragon', 'Dranosh Saurfang', 'Putress'],
        quests: ['The Wrathgate']
    },
    {
        name: 'Wyrmrest Accord',
        heroes: ['Alexstrasza', 'Chromie', 'Kalecgos', 'Nalice'],
        quests: ['Wyrmrest Temple'],
    },
    {
        name: 'Others',
        heroes: ['Garrosh Hellscream', 'Halford Wyrmbane', 'King Mrgl-Mrgl', 'Rokhan', 'Varok Saurfang', 'Vindicator Maraad'],
        quests: ['Azjol-Nerub', "Drak'tharon Keep", 'Grizzlemaw', "Temple City of En'kilah", "Utgarde Keep"]
    },
]

heroConfigs = [
    {
        "faction": "horde",
        "heroName": "Aethas Sunreaver",
        "heroTitle": "Archmage",
        "heroQuote": "\"We must overcome the mistakes of the past.\"",
        "heroImageUrl": "img/aethas-sunreaver.jpg",
        "heroImagePosition": "1px -52px",
        "heroImageSize": "100%",
        "health": 7,
        "startingLocation": "DALARAN",
        "startingZone": "green",
        "power1Name": "Fireball",
        "power1DescPrefix": "Free Action: ",
        "power1DescSuffix": "Remove 1 ghoul from your space. Limit once per turn.",
        "power2Name": "Blink",
        "power2DescPrefix": "Free Action: ",
        "power2DescSuffix": "Move to a connected space. Limit once per turn."
    },
    {
        "faction": "wyrmrest",
        "heroName": "Alexstrasza",
        "heroTitle": "The Life-Binder",
        "heroQuote": "\"Life itself is with you.\"",
        "heroImageUrl": "img/alexstrasza.png",
        "heroImagePosition": "-5px -24px",
        "heroImageSize": "104%",
        "health": 8,
        "startingLocation": "WYRMREST TEMPLE",
        "startingZone": "purple",
        "power1Name": "Gift of Life",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "One hero in your region heals 3, and you suffer 1 damage. Limit once per turn.",
        "power2Name": "Flame Buffet",
        "power2DescPrefix": "Free Action: ",
        "power2DescSuffix": "Remove 1 ghoul from your space and move up to 1 enemy to a connected space. Limit once per turn."
    },
    {
        "faction": "argent",
        "heroName": "Aliocha Segard",
        "heroTitle": "Argent Crusade Quartermaster",
        "heroQuote": "\"Wear the tabard of the Argent Crusade with pride and honor!\"",
        "heroImageUrl": "img/aliocha-segard.jpg",
        "heroImagePosition": "0px 0px",
        "heroImageSize": "108%",
        "health": 7,
        "startingLocation": "ARGENT TOURNAMENT",
        "startingZone": "green",
        "power1Name": "Veteran Crusader",
        "power1DescPrefix": "",
        "power1DescSuffix": "Ignore all damage during the  'Activate Abomination' step.",
        "power2Name": "Quartermaster",
        "power2DescPrefix": "",
        "power2DescSuffix": "Your hand limit is 8 cards."
    },
    {
        "faction": "alliance",
        "heroName": "Bolvar Fordragon",
        "heroTitle": "Highlord",
        "heroQuote": "\"I don't know what awaits us.\"",
        "heroImageUrl": "img/bolvar-fordragon.jpg",
        "heroImagePosition": "0px -32px",
        "heroImageSize": "100%",
        "health": 7,
        "startingLocation": "VALIANCE KEEP",
        "startingZone": "red",
        "power1Name": "Crusader Strike",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "Remove up to 2 ghouls from your space. Limit once per turn.",
        "power2Name": "Fordragon's Resolve",
        "power2DescPrefix": "",
        "power2DescSuffix": "Heroes on your space have +🛡️ when they fight."
    },
    {
        "faction": "alliance",
        "heroName": "Broll Bearmantle",
        "heroTitle": "Champion of the Crimson Ring",
        "heroQuote": "\"We fight as we are.\"",
        "heroImageUrl": "img/broll-bearmantle.jpg",
        "heroImagePosition": "-2px -20px",
        "heroImageSize": "100%",
        "health": 7,
        "startingLocation": "Grizzlemaw",
        "startingZone": "purple",
        "power1Name": "Swipe",
        "power1DescPrefix": "Free Action: ",
        "power1DescSuffix": "Remove up to 2 ghouls from your space. Limit once per turn.",
        "power2Name": "Mangle",
        "power2DescPrefix": "Free Action: ",
        "power2DescSuffix": "Remove 1 ghoul from your space. Limit once per turn."
    },
    {
        "faction": "explorers",
        "heroName": "Brann Bronzebeard",
        "heroTitle": "Leader of the Explorers' League",
        "heroQuote": "\"The answers are here, I can feel it.\"",
        "heroImageUrl": "img/brann-bronzebeard.png",
        "heroImagePosition": "-10px -4px",
        "heroImageSize": "104%",
        "health": 6,
        "startingLocation": "TEMPLE OF STORMS",
        "startingZone": "green",
        "power1Name": "Survey",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "+✊🏼 on your next quest action this turn. Limit once per turn.",
        "power2Name": "Historian",
        "power2DescPrefix": "",
        "power2DescSuffix": "When you quest, you may contribute the top card of the hero discard as if it were in your hand."
    },
    {
        "faction": "horde",
        "heroName": "Cairne Bloodhoof",
        "heroTitle": "High Chieftain",
        "heroQuote": "\"For honor!\"",
        "heroImageUrl": "img/cairne-bloodhoof.jpg",
        "heroImagePosition": "-1px -33px",
        "heroImageSize": "100%",
        "health": 7,
        "startingLocation": "WARSONG HOLD",
        "startingZone": "red",
        "power1Name": "Thunderclap",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "Remove up to 2 ghouls from your space and move up to 1 ghoul to a connected space. Limit once per turn.",
        "power2Name": "Bloodhoof Runespear",
        "power2DescPrefix": "",
        "power2DescSuffix": "When you fight, treat all 🛡️ as ✊🏼."
    },
    {
        "faction": "wyrmrest",
        "heroName": "Chromie",
        "heroTitle": "Ambassador of the Bronze Dragonflight",
        "heroQuote": "\"Is this the first time we've met?\"",
        "heroImageUrl": "img/chromie.jpg",
        "heroImagePosition": "-2px -20px",
        "heroImageSize": "100%",
        "health": 8,
        "startingLocation": "WYRMREST TEMPLE",
        "startingZone": "purple",
        "power1Name": "Rewind",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "Move the top card from the hero discard into your hand. Limit once per turn.",
        "power2Name": "See the Future",
        "power2DescPrefix": "Free Action: ",
        "power2DescSuffix": "Peek at the top card of the Scourge deck."
    },
    {
        "faction": "ebon-blade",
        "heroName": "Darion Mograine",
        "heroTitle": "Leader of The Knights of the Ebon Blade",
        "heroQuote": "\"The Knights of the Ebon Blade will not falter.\"",
        "heroImageUrl": "img/darion-mograine.png",
        "heroImagePosition": "-81px -2px",
        "heroImageSize": "156%",
        "health": 7,
        "startingLocation": "SHADOW VAULT",
        "startingZone": "green",
        "power1Name": "Dark Command",
        "power1DescPrefix": "Free Action: ",
        "power1DescSuffix": "Roll 1 die, remove 1 ghoul on your space for each rolled ✊🏼. Limit once per turn.",
        "power2Name": "Corpse Explosion",
        "power2DescPrefix": "",
        "power2DescSuffix": "For every 2 enemies that die on your space during your actions, deal 1 damage among enemies on connected spaces."
    },
    {
        "faction": "horde",
        "heroName": "Dranosh Saurfang",
        "heroTitle": "Commander of the Kor'kron Vanguard",
        "heroQuote": "\"Blood and glory await us!\"",
        "heroImageUrl": "img/dranosh-saurfang.png",
        "heroImagePosition": "-26px 0px",
        "heroImageSize": "112%",
        "health": 6,
        "startingLocation": "THE WRATHGATE",
        "startingZone": "red",
        "power1Name": "Charge",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "Move to a connected space and fight on that space. Limit once per turn.",
        "power2Name": "Enrage",
        "power2DescPrefix": "",
        "power2DescSuffix": "+✊🏼 when you fight if you have 4 health or less."
    },
    {
        "faction": "argent",
        "heroName": "Eadric the Pure",
        "heroTitle": "Grand Champion of the Argent Crusade",
        "heroQuote": "\"We must all be strong in the presence of the Scourge.\"",
        "heroImageUrl": "img/eadric-the-pure.jpg",
        "heroImagePosition": "1px -58px",
        "heroImageSize": "100%",
        "health": 7,
        "startingLocation": "ARGENT TOURNAMENT",
        "startingZone": "green",
        "power1Name": "Holy Light",
        "power1DescPrefix": "Free Action: ",
        "power1DescSuffix": "Another hero on your space heals 1 or remove 1 ghoul from your space. Limit once per turn.",
        "power2Name": "Divine Shield",
        "power2DescPrefix": "Free Action: ",
        "power2DescSuffix": "You take no damage during your next action this turn. Limit once per turn."
    },
    {
        "faction": "horde",
        "heroName": "Elite Tauren Chieftain",
        "heroTitle": "Rock God",
        "heroQuote": "\"I am Murloc!\"",
        "heroImageUrl": "img/elite-tauren-chieftain.jpg",
        "heroImagePosition": "-87px -2px",
        "heroImageSize": "140%",
        "health": 7,
        "startingLocation": "The Nexus",
        "startingZone": "red",
        "power1Name": "Mosh Pit",
        "power1DescPrefix": "Free Action: ",
        "power1DescSuffix": "Remove up to 2 ghouls from your space. Heroes on your space suffer 1 damage each. Limit once per turn.",
        "power2Name": "Pumped Up!",
        "power2DescPrefix": "",
        "power2DescSuffix": "Heroes on your space have +🛡️ when they quest."
    },
    {
        "faction": "argent",
        "heroName": "Father Kamaros",
        "heroTitle": "",
        "heroQuote": "\"Fight the Scourge with all the strength you can muster.\"",
        "heroImageUrl": "img/father-kamaros.jpg",
        "heroImagePosition": "0px 0px",
        "heroImageSize": "100%",
        "health": 6,
        "startingLocation": "The Avalanche",
        "startingZone": "green",
        "power1Name": "Benediction",
        "power1DescPrefix": "Free Action: ",
        "power1DescSuffix": "1 hero on your space heals 1. Limit once per turn.",
        "power2Name": "Power Word: Fortitude",
        "power2DescPrefix": "Free Action: ",
        "power2DescSuffix": "Each hero on your space heals 1. Limit once per turn."
    },
    {
        "faction": "hs",
        "heroName": "Freya",
        "heroTitle": "Keeper",
        "heroQuote": "\"I can see clearly once more.\"",
        "heroImageUrl": "img/freya.jpg",
        "heroImagePosition": "-4px -2px",
        "heroImageSize": "108%",
        "health": 8,
        "startingLocation": "ULDUAR",
        "startingZone": "green",
        "power1Name": "Touch of Eonar",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "One hero in your region heals 2. Limit once per turn.",
        "power2Name": "Attuned to Nature",
        "power2DescPrefix": "",
        "power2DescSuffix": "Heroes in your region have +✊🏼 when they rest."
    },
    {
        "faction": "horde",
        "heroName": "Garrosh Hellscream",
        "heroTitle": "Overlord of the Warsong Offensive",
        "heroQuote": "\"Show them no mercy.\"",
        "heroImageUrl": "img/garrosh-hellscream.jpg",
        "heroImagePosition": "-5px -12px",
        "heroImageSize": "104%",
        "health": 6,
        "startingLocation": "WARSONG HOLD",
        "startingZone": "red",
        "power1Name": "Bloodthirst",
        "power1DescPrefix": "Free Action: ",
        "power1DescSuffix": "Remove 1 ghoul from your space and heal 1. Limit once per turn.",
        "power2Name": "Armor Up",
        "power2DescPrefix": "",
        "power2DescSuffix": "+🛡️ for each 2 missing health points when you fight or quest."
    },
    {
        "faction": "alliance",
        "heroName": "Gelbin Mekkatorque",
        "heroTitle": "King of Gnomes",
        "heroQuote": "\"Pick on someone your own size!\"",
        "heroImageUrl": "img/gelbin-mekkatorque.jpg",
        "heroImagePosition": "0px -5px",
        "heroImageSize": "100%",
        "health": 6,
        "startingLocation": "VALIANCE KEEP",
        "startingZone": "red",
        "power1Name": "Spare Parts",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": 'Discard a "Fight" card and remove 1 ghoul from your space and each of 3 connected spaces, or discard a "Defend" card and heal 3.',
        "power2Name": "Super Shrink Ray",
        "power2DescPrefix": "Action: ",
        "power2DescSuffix": "Remove 1 abomination from your space and spawn 1 ghoul. Limit once per turn."
    },
    {
        "faction": "hs",
        "heroName": "Gymer",
        "heroTitle": "King of Storm Giants",
        "heroQuote": "\"I will crush you all!\"",
        "heroImageUrl": "img/gymer.jpg",
        "heroImagePosition": "-3px -1px",
        "heroImageSize": "116%",
        "health": 8,
        "startingLocation": "Thrym's End",
        "startingZone": "purple",
        "power1Name": "Smash",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "Remove up to 3 ghouls from your space.",
        "power2Name": "Throw",
        "power2DescPrefix": "Free Action: ",
        "power2DescSuffix": "Move 1 ghoul from your space to another space in your region. Limit once per turn."
    },
    {
        "faction": "alliance",
        "heroName": "Halford Wyrmbane",
        "heroTitle": "7th Legion High Commander",
        "heroQuote": "\"The first strike belongs to us.\"",
        "heroImageUrl": "img/halford-wyrmbane.jpg",
        "heroImagePosition": "0px 0px",
        "heroImageSize": "112%",
        "health": 7,
        "startingLocation": "NAXXRAMAS",
        "startingZone": "purple",
        "power1Name": "Crushing Leap",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "Move to a connected space and remove 1 ghoul from that space. Limit once per turn.",
        "power2Name": "Rage",
        "power2DescPrefix": "",
        "power2DescSuffix": "+✊🏼 when you fight for every 2 enemies on your space."
    },
    {
        "faction": "hs",
        "heroName": "Harrison Jones",
        "heroTitle": "Dr.",
        "heroQuote": "\"Stay behind me and you'll be fine.\"",
        "heroImageUrl": "img/harrison-jones.jpg",
        "heroImagePosition": "-180px -3px",
        "heroImageSize": "196%",
        "health": 6,
        "startingLocation": "GRIZZLEMAW",
        "startingZone": "purple",
        "power1Name": "Quick Escape",
        "power1DescPrefix": "Free Action: ",
        "power1DescSuffix": "After a quest action, move to a connected space. Limit once per turn.",
        "power2Name": "Archeologist\n",
        "power2DescPrefix": "",
        "power2DescSuffix": "At the start of your turn, flip the top card of the hero deck faceup; you may contribute it when you quest as if it were in your hand."
    },
    {
        "faction": "hs",
        "heroName": "Hemet Nesingwary",
        "heroTitle": "The Great Game Hunter",
        "heroQuote": "\"Eat lead!\"",
        "heroImageUrl": "img/hemet-nesingwary.jpg",
        "heroImagePosition": "-2px -17px",
        "heroImageSize": "100%",
        "health": 6,
        "startingLocation": "RIVER'S HEART",
        "startingZone": "red",
        "power1Name": "Big Game Hunter",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "Remove 1 abomination from your space or a connected space. Limit once per turn.",
        "power2Name": "Explosive Trap",
        "power2DescPrefix": "Free Action: ",
        "power2DescSuffix": "Remove 1 ghoul from your space. Limit once per turn."
    },
    {
        "faction": "hs",
        "heroName": "Hodir",
        "heroTitle": "Father of Giants",
        "heroQuote": "\"Winds of the north consume you!\"",
        "heroImageUrl": "img/hodir.jpg",
        "heroImagePosition": "1px -65px",
        "heroImageSize": "100%",
        "health": 8,
        "startingLocation": "ULDUAR",
        "startingZone": "green",
        "power1Name": "Frost Fortitude",
        "power1DescPrefix": "",
        "power1DescSuffix": "+🛡️🛡️ when you fight.",
        "power2Name": "Protective Gaze",
        "power2DescPrefix": "",
        "power2DescSuffix": "Other heroes in your region have +🛡️ when they quest."
    },
    {
        "faction": "alliance",
        "heroName": "Jaina Proudmoore",
        "heroTitle": "Archmage",
        "heroQuote": "\"You asked for it.\"",
        "heroImageUrl": "img/jaina-proudmoore.png",
        "heroImagePosition": "0px -9px",
        "heroImageSize": "104%",
        "health": 6,
        "startingLocation": "VALIANCE KEEP",
        "startingZone": "red",
        "power1Name": "Blizzard",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "Remove up to 2 ghouls from a connected space. Each hero on that space suffers 1 damage. Limit once per turn.",
        "power2Name": "Ice Armor",
        "power2DescPrefix": "",
        "power2DescSuffix": "+🛡️ when you quest."
    },
    {
        "faction": "scarlet",
        "heroName": "James Vishas",
        "heroTitle": "Interrogator of the Scarlet Crusade",
        "heroQuote": "\"Tell me... tell me everything!\"",
        "heroImageUrl": "img/james-vishas.jpg",
        "heroImagePosition": "0px 0px",
        "heroImageSize": "100%",
        "health": 6,
        "startingLocation": "ONSLAUGHT HARBOR",
        "startingZone": "red",
        "power1Name": "Naughty Secrets\n",
        "power1DescPrefix": "Free Action: ",
        "power1DescSuffix": "Remove 1 ghoul from your space. Limit once per turn.",
        "power2Name": "Shadow Word: Pain",
        "power2DescPrefix": "Free Action: ",
        "power2DescSuffix": "Remove 1 ghoul from a connected space. Limit once per turn."
    },
    {
        "faction": "wyrmrest",
        "heroName": "Kalecgos",
        "heroTitle": "Ambassador of the Blue Dragonflight",
        "heroQuote": "\"The fate of the world hangs in the balance.\"",
        "heroImageUrl": "img/kalecgos.png",
        "heroImagePosition": "-24px 0px",
        "heroImageSize": "156%",
        "health": 8,
        "startingLocation": "WYRMREST TEMPLE",
        "startingZone": "purple",
        "power1Name": "Blazing Shadows",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "Move up to 2 spaces. Remove 1 ghoul from each space you exit. Limit once per turn.",
        "power2Name": "Kalecgos' Teleport",
        "power2DescPrefix": "Action: ",
        "power2DescSuffix": "Move another hero on your space to any space in your region. Limit once per turn."
    },
    {
        "faction": "hs",
        "heroName": "Kilix",
        "heroTitle": "The Unraveler",
        "heroQuote": "\"This is no place for the meek.\"",
        "heroImageUrl": "img/kilix.jpg",
        "heroImagePosition": "1px -24px",
        "heroImageSize": "100%",
        "health": 6,
        "startingLocation": "AZJOL-NERUB",
        "startingZone": "red",
        "power1Name": "Web",
        "power1DescPrefix": "Free Action: ",
        "power1DescSuffix": "+🛡️ during your next fight action this turn. Limit once per turn.",
        "power2Name": "Azjol-anak Battleguards",
        "power2DescPrefix": "",
        "power2DescSuffix": "+✊🏼 and +🛡️ when you fight."
    },
    {
        "faction": "hs",
        "heroName": "King Mrgl-Mrgl",
        "heroTitle": "D.E.H.T.A.",
        "heroQuote": "\"I recently came here to observe the Winterfin murlocs.\"",
        "heroImageUrl": "img/king-mrgl-mrgl.jpg",
        "heroImagePosition": "1px -25px",
        "heroImageSize": "100%",
        "health": 6,
        "startingLocation": "RIVER'S HEART",
        "startingZone": "red",
        "power1Name": "Wrath",
        "power1DescPrefix": "Free Action: ",
        "power1DescSuffix": "Remove 1 ghoul from your space or a connected space. Limit once per turn.",
        "power2Name": "Rejuvenation",
        "power2DescPrefix": "Free Action: ",
        "power2DescSuffix": "1 hero on your space or a connected space heals 1. Limit once per turn."
    },
    {
        "faction": "horde",
        "heroName": "Koltira Deathweaver",
        "heroTitle": "Knight of the Ebon Blade",
        "heroQuote": "\"Come and learn what it takes to slay an elf.\"",
        "heroImageUrl": "img/koltira-deathweaver.png",
        "heroImagePosition": "-18px 1px",
        "heroImageSize": "112%",
        "health": 7,
        "startingLocation": "AZJOL-NERUB",
        "startingZone": "red",
        "power1Name": "Byfrost",
        "power1DescPrefix": "",
        "power1DescSuffix": "After you fight, heal 1 for every 2 enemies killed.",
        "power2Name": "Bloodmist",
        "power2DescPrefix": "",
        "power2DescSuffix": 'Whenever you play a "Travel" card, you can move 1 additional space.'
    },
    {
        "faction": "scarlet",
        "heroName": "Lilian Voss",
        "heroTitle": "Scarlet Crusader",
        "heroQuote": "\"Get away from me, you abomination!\"",
        "heroImageUrl": "img/lilian-voss-alive.jpg",
        "heroImagePosition": "-12px -69px",
        "heroImageSize": "104%",
        "health": 6,
        "startingLocation": "ONSLAUGHT HARBOR",
        "startingZone": "red",
        "power1Name": "Sprint",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "Move up to 2 spaces. Limit once per turn.",
        "power2Name": "Stealth Skip",
        "power2DescPrefix": "Action: ",
        "power2DescSuffix": "While on a quest space, advance progress marker to the next space."
    },
    {
        "faction": "horde",
        "heroName": "Lor'themar Theron",
        "heroTitle": "Regent Lord of Quel'Thalas",
        "heroQuote": "\"The blood elves will endure any hardship.\"",
        "heroImageUrl": "img/lorthemar-theron.jpg",
        "heroImagePosition": "-76px -24px",
        "heroImageSize": "176%",
        "health": 7,
        "startingLocation": "DALARAN",
        "startingZone": "green",
        "power1Name": "Cleave",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "Remove exactly 1 enemy from your space and up to 1 ghoul from a connected space. Limit once per turn.",
        "power2Name": "Mass Charm",
        "power2DescPrefix": "",
        "power2DescSuffix": "Abominations always follow you during the 'Activate Abominations' step."
    },
    {
        "faction": "alliance",
        "heroName": "Magni Bronzebeard",
        "heroTitle": "Lord of Ironforge",
        "heroQuote": "\"Feel the fury of the mountain!\"",
        "heroImageUrl": "img/magni.jpg",
        "heroImagePosition": "-4px -10px",
        "heroImageSize": "100%",
        "health": 7,
        "startingLocation": "FROSTHOLD",
        "startingZone": "green",
        "power1Name": "Avatar",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "+🛡️ when you fight or quest this turn. Limit once per turn.",
        "power2Name": "Thunderous Charge",
        "power2DescPrefix": "Action: ",
        "power2DescSuffix": "Move to a connected space and remove up to 2 ghouls from that space. Limit once per turn."
    },
    {
        "faction": "hs",
        "heroName": "Mimiron",
        "heroTitle": "The Grand Architect",
        "heroQuote": "\"Time for some science!\"",
        "heroImageUrl": "img/mimiron.png",
        "heroImagePosition": "0px -27px",
        "heroImageSize": "100%",
        "health": 7,
        "startingLocation": "ULDUAR",
        "startingZone": "green",
        "power1Name": "Self Repair",
        "power1DescPrefix": "Free Action: ",
        "power1DescSuffix": "Discard 1 hero card and heal to full health. Limit once per turn.",
        "power2Name": "Destabilization Matrix",
        "power2DescPrefix": "",
        "power2DescSuffix": "Heroes on your space and connected spaces have +🛡️ when they fight."
    },
    {
        "faction": "wyrmrest",
        "heroName": "Nalice",
        "heroTitle": "Ambassador of the Black Dragonflight",
        "heroQuote": "\"The presence of a Black Dragon makes you nervous?",
        "heroImageUrl": "img/nalice.jpg",
        "heroImagePosition": "-58px 1px",
        "heroImageSize": "140%",
        "health": 8,
        "startingLocation": "WYRMREST TEMPLE",
        "startingZone": "purple",
        "power1Name": "Breathe",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "Remove 1 ghoul from your space and 1 ghoul from a connected space. Limit once per turn.",
        "power2Name": "Fly",
        "power2DescPrefix": "Action: ",
        "power2DescSuffix": "Move up to 3 spaces. Limit once per turn."
    },
    {
        "faction": "horde",
        "heroName": "Nathanos Blightcaller",
        "heroTitle": "Champion of the Banshee Queen",
        "heroQuote": "\"Good boy! Now put it back on the bone pile.\"",
        "heroImageUrl": "img/nathanos-blightcaller.jpg",
        "heroImagePosition": "0px 0px",
        "heroImageSize": "124%",
        "health": 7,
        "startingLocation": "VENGEANCE LANDING",
        "startingZone": "purple",
        "power1Name": "Psychic Scream",
        "power1DescPrefix": "Free Action: ",
        "power1DescSuffix": "Move 1 ghoul from a connected space to another space connected to it. Limit once per turn.",
        "power2Name": "Blighthounds",
        "power2DescPrefix": "",
        "power2DescSuffix": "+✊🏼 when you fight."
    },
    {
        "faction": "hs",
        "heroName": "Oacha'noa",
        "heroTitle": "Goddess of the Depths",
        "heroQuote": "\"Why do you call me forth?\"",
        "heroImageUrl": "img/oachanoa.jpg",
        "heroImagePosition": "0px 0px",
        "heroImageSize": "124%",
        "health": 8,
        "startingLocation": "VENGEANCE LANDING",
        "startingZone": "purple",
        "power1Name": "Deep Sea Dweller",
        "power1DescPrefix": "",
        "power1DescSuffix": "You can only be at Onslaught Harbor, Vengeance Landing, or Argent Tournament, and can move directly between them as one action.",
        "power2Name": "Compulsion",
        "power2DescPrefix": "",
        "power2DescSuffix": "Heroes in your region have +✊🏼 during their actions."
    },
    {
        "faction": "horde",
        "heroName": "Putress",
        "heroTitle": "Grand Apothecary",
        "heroQuote": "\"Did you think we had forgotten?\"",
        "heroImageUrl": 'img/putress.jpg',
        "heroImagePosition": "0px -4px",
        "heroImageSize": "100%",
        "health": 6,
        "startingLocation": "THE WRATHGATE",
        "startingZone": "red",
        "power1Name": "New Plague",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "Deal up to 3 damage on a connected space. All heroes on that space die. Limit once per turn.",
        "power2Name": "Coup Plotter",
        "power2DescPrefix": "",
        "power2DescSuffix": "You cannot use hero card effects on other heroes."
    },
    {
        "faction": "kirin-tor",
        "heroName": "Rhonin",
        "heroTitle": "Leader of the Kirin Tor",
        "heroQuote": "\"Citizens of Dalaran!\"",
        "heroImageUrl": "img/rhonin.png",
        "heroImagePosition": "-10px -4px",
        "heroImageSize": "104%",
        "health": 6,
        "startingLocation": "DALARAN",
        "startingZone": "green",
        "power1Name": "Arcane Explosion",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "Remove up to 2 ghouls among your space and connected spaces. Limit once per turn.",
        "power2Name": "Dalaran Summon",
        "power2DescPrefix": "Action: ",
        "power2DescSuffix": "Move a hero in your region to Dalaran. Limit once per turn."
    },
    {
        "faction": "horde",
        "heroName": "Roanauk Icemist",
        "heroTitle": "High Chieftain of the Taunka",
        "heroQuote": "\"For my Taunka brothers and sisters!\"",
        "heroImageUrl": "img/roanauk-icemist.jpg",
        "heroImagePosition": "1px 0px",
        "heroImageSize": "116%",
        "health": 7,
        "startingLocation": "AZJOL-NERUB",
        "startingZone": "red",
        "power1Name": "Icemist's Blessing",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "+✊🏼✊🏼 during your next fight action this turn. Limit once per turn.",
        "power2Name": "Acclimatized to Cold",
        "power2DescPrefix": "",
        "power2DescSuffix": "+✊🏼 when you rest."
    },
    {
        "faction": "horde",
        "heroName": "Rokhan",
        "heroTitle": "Scout",
        "heroQuote": "\"Death be a real trip man!\"",
        "heroImageUrl": "img/rokhan.jpg",
        "heroImagePosition": "-25px -3px",
        "heroImageSize": "136%",
        "health": 7,
        "startingLocation": "THE WRATHGATE",
        "startingZone": "red",
        "power1Name": "Serpent Totem",
        "power1DescPrefix": "Free Action: ",
        "power1DescSuffix": "Roll 1 die and remove 1 ghoul per rolled ✊🏼 from your space. Limit once per turn.",
        "power2Name": "Sinkhole Totem",
        "power2DescPrefix": "Free Action: ",
        "power2DescSuffix": "Choose a connected space, roll 1 die and remove 1 ghoul per rolled ✊🏼 and 🛡️. Limit once per turn."
    },
    {
        "faction": "scarlet",
        "heroName": "Sally Whitemane",
        "heroTitle": "High Inquisitor of the Scarlet Crusade",
        "heroQuote": "\"The light has spoken!\"",
        "heroImageUrl": "img/sally-whitemane.jpg",
        "heroImagePosition": "-11px -35px",
        "heroImageSize": "104%",
        "health": 6,
        "startingLocation": "ONSLAUGHT HARBOR",
        "startingZone": "red",
        "power1Name": "Divine Reckoning",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "Fight and heal 1 hero on your space 1 for each rolled 🛡️. Limit once per turn.",
        "power2Name": "Searing Lash",
        "power2DescPrefix": "Free Action: ",
        "power2DescSuffix": "Remove 1 ghoul from your space and move up to 1 ghoul to a connected space. Limit once per turn."
    },
    {
        "faction": "alliance",
        "heroName": "Thassarian",
        "heroTitle": "Knight of the Ebon Blade",
        "heroQuote": "\"Sometimes lessons are painful, aren't they?\"",
        "heroImageUrl": "img/thassarian.jpg",
        "heroImagePosition": "0px -18px",
        "heroImageSize": "100%",
        "health": 7,
        "startingLocation": "VALIANCE KEEP",
        "startingZone": "red",
        "power1Name": "Skybreaker Ride",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "When on a space connected to Icecrown Citadel, move directly to another space also connected to Icecrown Citadel.",
        "power2Name": "Frost Presence",
        "power2DescPrefix": "",
        "power2DescSuffix": "+🛡️ when you quest."
    },
    {
        "faction": "hs",
        "heroName": "Thorim",
        "heroTitle": "Stormlord",
        "heroQuote": "\"You call down the vengeance of THUNDER!\"",
        "heroImageUrl": "img/thorim.jpg",
        "heroImagePosition": "0px 0px",
        "heroImageSize": "100%",
        "health": 8,
        "startingLocation": "TEMPLE OF STORMS",
        "startingZone": "green",
        "power1Name": "Krolmir's Fury",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "Roll 2 dice, and remove 1 ghoul for each rolled ✊🏼 among your space and a connected space. Limit once per turn.",
        "power2Name": "Titanic Storm",
        "power2DescPrefix": "",
        "power2DescSuffix": "Heroes in your region have +✊🏼 when they fight."
    },
    {
        "faction": "alliance",
        "heroName": "Valeera Sanguinar",
        "heroTitle": "Champion of the Crimson Ring",
        "heroQuote": "\"Respect my people, or pay the price!\"",
        "heroImageUrl": "img/valeera-sanguinar.png",
        "heroImagePosition": "0px -9px",
        "heroImageSize": "104%",
        "health": 6,
        "startingLocation": "VALIANCE KEEP",
        "startingZone": "red",
        "power1Name": "Eviscerate",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "Remove 1 abomination from your space. Limit once per turn.",
        "power2Name": "Poisoned Blades",
        "power2DescPrefix": "",
        "power2DescSuffix": "+✊🏼 when you fight."
    },
    {
        "faction": "horde",
        "heroName": "Varok Saurfang",
        "heroTitle": "High Overlord",
        "heroQuote": "\"No matter how dire the battle, never forsake it.\"",
        "heroImageUrl": "img/varok-saurfang.jpg",
        "heroImagePosition": "1px -41px",
        "heroImageSize": "100%",
        "health": 7,
        "startingLocation": "WARSONG HOLD",
        "startingZone": "red",
        "power1Name": "Whirlwind",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "Deal up to 3 damage on your space. Limit once per turn.",
        "power2Name": "Terrifying Roar",
        "power2DescPrefix": "Free Action: ",
        "power2DescSuffix": "Move 1 ghoul from your space to a connected space. Limit once per turn."
    },
    {
        "faction": "alliance",
        "heroName": "Velen",
        "heroTitle": "Prophet",
        "heroQuote": "\"Salvation, young one. It waits for us all.\"",
        "heroImageUrl": "img/velen.jpg",
        "heroImagePosition": "-51px -5px",
        "heroImageSize": "132%",
        "health": 7,
        "startingLocation": "VALIANCE KEEP",
        "startingZone": "red",
        "power1Name": "Holy Nova",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "Deal 1 damage on your space and each connected space. Limit once per turn.",
        "power2Name": "Prayer of Healing",
        "power2DescPrefix": "Action: ",
        "power2DescSuffix": "Each hero on your space and connected spaces heals 1. Limit once per turn."
    },
    {
        "faction": "alliance",
        "heroName": "Vereesa Windrunner",
        "heroTitle": "Ranger-General of the Silver Covenant",
        "heroQuote": "\"We have all lost so much.\"",
        "heroImageUrl": "img/vereesa-windrunner.jpg",
        "heroImagePosition": "-1px -68px",
        "heroImageSize": "100%",
        "health": 6,
        "startingLocation": "DALARAN",
        "startingZone": "green",
        "power1Name": "Multi-Shot",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "Deal up to 3 damage among your space and connected spaces. Limit once per turn.",
        "power2Name": "Track",
        "power2DescPrefix": "",
        "power2DescSuffix": "At the start of your turn, flip the top card of the hero deck faceup."
    },
    {
        "faction": "alliance",
        "heroName": "Vindicator Maraad",
        "heroTitle": "Hammer of the Light",
        "heroQuote": "\"The Light may have infinite patience, but I do not.\"",
        "heroImageUrl": "img/vindicator-maraad.jpg",
        "heroImagePosition": "-4px -26px",
        "heroImageSize": "100%",
        "health": 6,
        "startingLocation": "THE BREACH",
        "startingZone": "green",
        "power1Name": "Divine Storm",
        "power1DescPrefix": "Action: ",
        "power1DescSuffix": "Discard 1 'Fight' card and remove up to 4 ghouls among yours and connected spaces. Limit once per turn.",
        "power2Name": "Hammer of the Naaru",
        "power2DescPrefix": "",
        "power2DescSuffix": "+✊🏼✊🏼 when you fight and there's an abomination on your space."
    }
]
