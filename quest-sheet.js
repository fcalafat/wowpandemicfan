const questConfigs = [
    {
        "location": "Loge Ambrepine",
        "effect": "Tant que cette quête est active, tous les héros ont -✊🏼 lorsqu'ils se reposent.",
        "damage": "2",
        "bossName": "Réapprovisionner le Magasin",
        "region": "purple",
        "spots": "ttffddttffhhh",
        "bossImageUrl": "img/replenish-the-storehouse.jpg",
        "bossImagePosition": "7px 11px",
        "bossImageSize": "96%"
    },
    {
        "location": "Rencontre Anub'arak",
        "effect": "Après avoir terminé cette quête, les héros sur cet espace peuvent se déplacer vers Dalaran.",
        "damage": "1",
        "bossName": "Anub'arak",
        "region": "green",
        "spots": "tdfhdfhdfhdfh",
        "bossImageUrl": "img/anubarak-by-d-franco.jpg",
        "bossImagePosition": "center",
        "bossImageSize": "116%"
    },
    {
        "location": "Tournoi d'Argent",
        "effect": "Lorsque cette quête est terminée, remplacez-la par Rencontre Anub'arak. (Ne tirez pas encore la récompense.)",
        "damage": "2",
        "bossName": "Épreuve du Croisé",
        "region": "green",
        "spots": "ffhhdddffddhhh",
        "bossImageUrl": "img/trial-of-the-crusader.jpg",
        "bossImagePosition": "-16px -26px",
        "bossImageSize": "116%"
    },
    {
        "location": "Azjol-Nérub",
        "effect": "Les effets des cartes de héros ne peuvent pas être utilisés sur cet espace.",
        "damage": "2",
        "bossName": "Héraut Volazj",
        "region": "red",
        "spots": "hhttddhhhttff",
        "bossImageUrl": "img/herald-volazj.jpg",
        "bossImagePosition": "0px 0px",
        "bossImageSize": "100%"
    },
    {
        "location": "Dalaran",
        "effect": "Avant chaque action de quête ici, lancez 1 dé et reculez le marqueur de quête de 1 par ✊🏼 et 🛡️ obtenus.",
        "damage": "2",
        "bossName": "Le Fort Pourpre",
        "region": "green",
        "spots": "ffddffhhddfff",
        "bossImageUrl": "img/the-violet-hold.jpg",
        "bossImagePosition": "-11px -34px",
        "bossImageSize": "120%"
    },
    {
        "location": "Dalaran",
        "effect": "Annulez tous les 🛡️ obtenus et reculez d'autant dans la progression de la quête avant d'avancer.",
        "damage": "2",
        "bossName": "Segacedi",
        "region": "green",
        "spots": "ffddffhhddfff",
        "bossImageUrl": "img/segacedi.png",
        "bossImagePosition": "0px 0px",
        "bossImageSize": "100%"
    },
    {
        "location": "Dalaran",
        "effect": "Aucune carte ne peut être contribué à cette quête.",
        "damage": "2",
        "bossName": "Les Tréfonds",
        "region": "green",
        "spots": "ttttttttttttt",
        "bossImageUrl": "img/the-underbelly.jpg",
        "bossImagePosition": "0px 0px",
        "bossImageSize": "152%"
    },
    {
        "location": "Dalaran",
        "effect": "Pendant les actions de quête ici, annulez tous les ✊🏼 obtenus.",
        "damage": "2",
        "bossName": "Marché Souterrain",
        "region": "green",
        "spots": "tftdthtftdtht",
        "bossImageUrl": "img/underground-market.jpg",
        "bossImagePosition": "0px 0px",
        "bossImageSize": "116%"
    },
    {
        "location": "Donjon de Drak'Tharon",
        "effect": "Après chaque action de quête ici, choisissez 2 espaces connectés et apparaissez 1 goule sur chacun.",
        "damage": "2",
        "bossName": "Le Prophète Tharon'ja",
        "region": "purple",
        "spots": "hhhffttttddff",
        "bossImageUrl": "img/the-prophet-tharon-ja-seta-triandi.jpg",
        "bossImagePosition": "6px 10px",
        "bossImageSize": "96%"
    },
    {
        "location": "Gris-du-Nord",
        "effect": "Après avoir terminé cette quête, défaussez 3 cartes parmi les héros sur cet espace.",
        "damage": "2",
        "bossName": "Ursoc Corrompu",
        "region": "purple",
        "spots": "tttdddhhhffff",
        "bossImageUrl": "img/ursoc.jpg",
        "bossImagePosition": "9px 3px",
        "bossImageSize": "96%"
    },
    {
        "location": "Gris-du-Nord",
        "effect": "Après chaque action de quête ici, lancez 1 dé et subissez 1 dégât par ✊🏼 obtenu.",
        "damage": "2",
        "bossName": "Syreian la Sculptrice d'Os",
        "region": "purple",
        "spots": "tttdddhhhffff",
        "bossImageUrl": "img/syreian-the-bonecarver.jpg",
        "bossImagePosition": "1px -21px",
        "bossImageSize": "112%"
    },
    {
        "location": "Kolramas",
        "effect": "Après chaque action de quête ici, lancez 1 dé et apparaissez 1 goule sur cet espace par ✊🏼 obtenu.",
        "damage": "2",
        "bossName": "Malas le Corrupteur",
        "region": "purple",
        "spots": "ttfffddtthhdd",
        "bossImageUrl": "img/malas-the-corrupter.jpg",
        "bossImagePosition": "0px 31px",
        "bossImageSize": "100%"
    },
    {
        "location": "Kolramas",
        "effect": "Après chaque action de quête ici, lancez 1 dé et apparaissez 1 goule sur 1 espace connecté par ✊🏼 obtenu.",
        "damage": "2",
        "bossName": "Ombre d'Arugal",
        "region": "purple",
        "spots": "ttfffddtthhdd",
        "bossImageUrl": "img/shade-of-arugal.jpg",
        "bossImagePosition": "0px 0px",
        "bossImageSize": "100%"
    },
    {
        "location": "Port de l'Assaut",
        "effect": "Lorsqu'un héros entre dans cet espace, il subit 2 dégâts.",
        "damage": "3",
        "bossName": "Mal'Ganis",
        "region": "red",
        "spots": "dddfftthhhddd",
        "bossImageUrl": "img/malganis.jpg",
        "bossImagePosition": "-138px 18px",
        "bossImageSize": "224%"
    },
    {
        "location": "Le Cœur du Fleuve",
        "effect": "Pendant les actions de combat dans les espaces connectés, subissez 1 dégât supplémentaire.",
        "damage": "3",
        "bossName": "Poulet en Fuite",
        "region": "red",
        "spots": "tttdddfttfhhh",
        "bossImageUrl": "img/chicken.jpg",
        "bossImagePosition": "0px 0px",
        "bossImageSize": "100%"
    },
    {
        "location": "Donjon des Ombres",
        "effect": "Pendant les actions de quête ici, les autres héros ne peuvent pas contribuer de cartes.",
        "damage": "2",
        "bossName": "Thane Ufrang le Puissant",
        "region": "green",
        "spots": "ttddffddhhhtt",
        "bossImageUrl": "img/thane-ufrang-the-mighty.jpg",
        "bossImagePosition": "-1px 15px",
        "bossImageSize": "100%"
    },
    {
        "location": "Ville du Temple d'En'kilah",
        "effect": "Pendant l'action de quête ici, annulez tous les 🛡️ obtenus et subissez 1 dégât pour chaque ✊🏼 obtenu.",
        "damage": "0",
        "bossName": "Prince Valanar",
        "region": "red",
        "spots": "fdhttfdhttfdh",
        "bossImageUrl": "img/prince-valanar.jpg",
        "bossImagePosition": "8px -27px",
        "bossImageSize": "96%"
    },
    {
        "location": "Temple de la Lune",
        "effect": "Pendant les actions de quête ici, tous les autres héros perdent 1 point de vie par ✊🏼 et 🛡️ obtenus.",
        "damage": "2",
        "bossName": "Blaumeux",
        "region": "purple",
        "spots": "tttddhhdftfhh",
        "bossImageUrl": "img/blaumeux.jpg",
        "bossImagePosition": "4px 11px",
        "bossImageSize": "96%"
    },
    {
        "location": "Tirisfal",
        "effect": "Si aucun héros n'est ici après chaque action de quête, défaussez 1 carte de héros parmi les héros ici.",
        "damage": "2",
        "bossName": "Retour de Kel'Thuzad",
        "region": "purple",
        "spots": "tdfftdhhddfff",
        "bossImageUrl": "img/kelthuzad.jpg",
        "bossImagePosition": "7px -1px",
        "bossImageSize": "96%"
    },
    {
        "location": "Fort Pourpre",
        "effect": "Lorsque cette quête est terminée, remplacez-la par Rencontre de Malygos (Ne tirez pas encore la récompense).",
        "damage": "3",
        "bossName": "Rencontre de Malygos",
        "region": "purple",
        "spots": "ttfthhtdhtfth",
        "bossImageUrl": "img/malygos.jpg",
        "bossImagePosition": "0px 0px",
        "bossImageSize": "100%"
    }
];

class QuestSheet {
    constructor(config, element) {
        this.config = config;
        this.element = element;
    }

    updateElements() {
        let config = this.config;
        if (config.location != null) this.setElementText('.quest-location [contenteditable=true]', config.location);
        if (config.effect != null) this.setElementInnerHtml('.quest-text [contenteditable=true]', config.effect);
        if (config.damage != null) this.setElementText('.quest-damage [contenteditable=true]', config.damage);
        if (config.bossName != null) this.setElementText('.boss-name [contenteditable=true]', config.bossName);
        if (config.region != null) this.setRegion(config.region);
        if (config.spots) this.setSpots(config.spots);
        if (config.bossImageUrl != null) this.setBossImageUrl(config.bossImageUrl);
        if (config.bossImagePosition != null) this.element.querySelector('.boss-image').style.backgroundPosition = config.bossImagePosition;
        if (config.bossImageSize != null) this.element.querySelector('.boss-image').style.backgroundSize = config.bossImageSize;
        return this;
    }

    enableEdition() {
        let questSheet = this.element;
        new UploadableImage(questSheet.querySelector('.uploadable-image'));

        // dispatch click events to clickable images
        questSheet.addEventListener('click', function(event) {
            let clickableImages = questSheet.querySelectorAll('.quest-spot');
            var changeQuestColor = true;
            clickableImages.forEach((element) => {
                if (isEventInsideElement(event, element)) {
                    changeQuestColor = false;
                    element.dispatchEvent(new event.constructor(event.type, event));
                    event.stopPropagation();
                }
            });
            if (changeQuestColor) {
                let additionalPossiblyConflictingDivs = questSheet.querySelectorAll('.uploadable-image');
                additionalPossiblyConflictingDivs.forEach((element) => {
                    if (isEventInsideElement(event, element)) {
                        changeQuestColor = false;
                    }
                });
                if (changeQuestColor) {
                    let questSheetFrame = questSheet.querySelector('.quest-sheet-frame');
                    const prevImage = window.getComputedStyle(questSheetFrame).getPropertyValue('background-image');
                    const colors = ['green', 'purple', 'red'];
                    const nextImage = prevImage.replace(/green|purple|red/g, (match) => {
                        const currentIndex = colors.indexOf(match);
                        const nextIndex = (currentIndex + 1) % colors.length;
                        return colors[nextIndex];
                    });
                    questSheetFrame.style.backgroundImage = nextImage;
                }
            }
        });

        // rotate quest spot images
        questSheet.querySelectorAll('.quest-spot').forEach((element) => {
            new RotatableImage(element, ['fight', 'defence', 'heal', 'travel']);
        });

        // auto-select-all for quest damage
        questSheet.querySelectorAll('.quest-damage [contenteditable=true]').forEach(
            questDamageEditableDiv => questDamageEditableDiv.addEventListener('click', () => {
                // Create a new Range object
                const range = document.createRange();

                // Select the entire contents of the editable div
                range.selectNodeContents(questDamageEditableDiv);

                // Get the Selection object and add the Range to it
                const selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);

                event.stopPropagation();
            })
        );

        // configure content-editable elements
        questSheet.querySelectorAll('[contenteditable=true]').forEach((ele) => {
            // paste text without formatting
            ele.addEventListener('paste', (event) => {
                event.preventDefault();
                const text = event.clipboardData.getData('text/plain');
                document.execCommand('insertText', false, text);
            });
            // stop event propagation to avoid conflicts with an uploadable image
            uploadableImageEventNames.forEach((eventName) => {
                ele.addEventListener(eventName, (event) => {
                    event.stopPropagation();
                });
            });
            // stop event propagation on click
            ele.addEventListener('click', () => event.stopPropagation())
        });

        return this;
    }

    setElementText(selector, text, matchIdx = 0) {
        this.element.querySelectorAll(selector)[matchIdx].innerText = text;
    }

    setElementInnerHtml(selector, innerHml, matchIdx = 0) {
        this.element.querySelectorAll(selector)[matchIdx].innerHTML = innerHml;
    }

    setRegion(region) {
        this.element.querySelector('.quest-sheet-frame').style.backgroundImage = 'url("img/quest-' + region + '-13.png")';
    }

    setSpots(spots) {
        const expandedName = {'f': 'fight', 'd': 'defence', 'h': 'heal', 't': 'travel'};
        var spotElements = this.element.querySelectorAll('.quest-spot');
        for (var i = 0; i < Math.min(spots.length, spotElements.length); i++) {
            spotElements[i].style.backgroundImage = 'url("img/quest-' + expandedName[spots[i]] + '.png")';
        }
    }

    setBossImageUrl(bossImageUrl) {
        if (!bossImageUrl.startsWith('url(') && !bossImageUrl.startsWith('data('))
            bossImageUrl = 'url("' + bossImageUrl + '")'
        this.element.querySelector('.boss-image').style.backgroundImage = bossImageUrl;
    }
}

function addQuest(questId, parentElement) {
    // clone ref sheet
    let refSheet = document.querySelector('.quest-sheet');
    let newSheet = refSheet.cloneNode(true);

    // display new sheet
    newSheet.style.display = '';
    newSheet.setAttribute('data-quest-id', questId);
    parentElement.appendChild(newSheet);

    // bind sheet
    new QuestSheet(questConfigs[questId], newSheet)
        .updateElements()
        .enableEdition();
}

window.addEventListener('load', function() {
    grid.createMenuItems(
        'quest',
        questConfigs,
        (i, j) => questConfigs[i].region.localeCompare(questConfigs[j].region),
        c => c.location,
        c => c.location,
        c => c.region
    );
    grid.enableEdition();
    grid.displayFromUrl('quests', questConfigs, 'location', addQuest);
    grid.displayAll(questConfigs, addQuest);
    if (grid.isEmpty()) {
        grid.displayRandom(questConfigs, addQuest);
        grid.displayRandom(rewardCardConfigs, addRewardCard);
    }
});
