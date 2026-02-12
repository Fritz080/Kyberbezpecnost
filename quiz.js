const questions = [
    {
        text: "Čo je kyberbezpečnosť?",
        answers: [
            { text: "Súbor opatrení na ochranu informačných systémov, sietí a dát pred neoprávneným prístupom", correct: true },
            { text: "Proces optimalizácie výkonu počítačových sietí", correct: false },
            { text: "Správa používateľských účtov v online službách", correct: false },
            { text: "Zálohovanie dát v cloudovom prostredí", correct: false }
        ]
    },
    {
        text: "Ktoré tri základné princípy tvorí model CIA?",
        answers: [
            { text: "Dôvernosť, integrita, dostupnosť", correct: true },
            { text: "Kontrola, identifikácia, autentifikácia", correct: false },
            { text: "Certifikácia, implementácia, analýza", correct: false },
            { text: "Centralizácia, izolácia, autorizácia", correct: false }
        ]
    },
    {
        text: "Čo je kybernetická hrozba?",
        answers: [
            { text: "Potenciálna udalosť schopná narušiť dôvernosť, integritu alebo dostupnosť systému", correct: true },
            { text: "Bezpečnostná aktualizácia reagujúca na zraniteľnosť", correct: false },
            { text: "Mechanizmus na šifrovanie komunikácie", correct: false },
            { text: "Metóda zálohovania citlivých údajov", correct: false }
        ]
    },
    {
        text: "Čo je kybernetický útok?",
        answers: [
            { text: "Cielená aktivita útočníka smerujúca k narušeniu alebo zneužitiu informačného systému", correct: true },
            { text: "Testovanie bezpečnosti vykonané správcom siete", correct: false },
            { text: "Automatická synchronizácia dát medzi servermi", correct: false },
            { text: "Legitímne overenie identity používateľa", correct: false }
        ]
    },
    {
        text: "Čo je malware?",
        answers: [
            { text: "Softvér vytvorený s úmyslom poškodiť systém alebo získať neoprávnený prístup k údajom", correct: true },
            { text: "Program na monitorovanie výkonu zariadenia", correct: false },
            { text: "Nástroj na šifrovanie dát v organizácii", correct: false },
            { text: "Aplikácia na správu používateľských oprávnení", correct: false }
        ]
    },
    {
        text: "Ktorý z nasledujúcich patrí medzi typy malvéru?",
        answers: [
            { text: "Ransomvér", correct: true },
            { text: "Firewall novej generácie", correct: false },
            { text: "VPN klient", correct: false },
            { text: "Správca hesiel", correct: false }
        ]
    },
    {
        text: "Čo je phishing?",
        answers: [
            { text: "Podvodná technika zameraná na získanie citlivých údajov vydávaním sa za dôveryhodný subjekt", correct: true },
            { text: "Metóda šifrovania e-mailovej komunikácie", correct: false },
            { text: "Bezpečnostný protokol na ochranu webových stránok", correct: false },
            { text: "Proces viacfaktorovej autentifikácie", correct: false }
        ]
    },
    {
        text: "Ako sa najčastejšie realizuje phishing?",
        answers: [
            { text: "Prostredníctvom podvodnej elektronickej komunikácie obsahujúcej falošné odkazy", correct: true },
            { text: "Automatickou aktualizáciou bezpečnostných certifikátov", correct: false },
            { text: "Šifrovaným prenosom dát medzi servermi", correct: false },
            { text: "Inštaláciou oficiálnej aplikácie z overeného obchodu", correct: false }
        ]
    },
    {
        text: "Čo je sociálne inžinierstvo?",
        answers: [
            { text: "Manipulatívna technika využívajúca psychologické faktory na získanie informácií", correct: true },
            { text: "Analýza sociálnych sietí pomocou algoritmov", correct: false },
            { text: "Optimalizácia komunikácie v online komunitách", correct: false },
            { text: "Šifrovanie osobných správ medzi používateľmi", correct: false }
        ]
    },
    {
        text: "Čo je dvojfaktorová autentifikácia (2FA)?",
        answers: [
            { text: "Overenie identity kombináciou dvoch nezávislých autentifikačných faktorov", correct: true },
            { text: "Použitie dvoch rôznych hesiel pre jeden účet", correct: false },
            { text: "Zálohovanie prihlasovacích údajov na externé úložisko", correct: false },
            { text: "Automatická obnova zabudnutého hesla", correct: false }
        ]
    },
    {
        text: "Ktoré z nasledujúcich je príklad silného hesla?",
        answers: [
            { text: "T9$kL2!pQ7z", correct: true },
            { text: "Matko2008", correct: false },
            { text: "Bezpecnost123", correct: false },
            { text: "Qwerty2024!", correct: false }
        ]
    },
    {
        text: "Prečo je nebezpečné používať rovnaké heslo na viacerých stránkach?",
        answers: [
            { text: "Kompromitácia jedného účtu môže viesť k prieniku do ďalších služieb", correct: true },
            { text: "Znižuje to kompatibilitu medzi platformami", correct: false },
            { text: "Spôsobuje konflikty medzi autentifikačnými servermi", correct: false },
            { text: "Zvyšuje riziko straty internetového pripojenia", correct: false }
        ]
    },
    {
        text: "Čo je ransomvér?",
        answers: [
            { text: "Typ malvéru, ktorý zašifruje dáta a požaduje finančné výkupné", correct: true },
            { text: "Nástroj na bezpečné zálohovanie firemných dát", correct: false },
            { text: "Program na obnovu zabudnutých hesiel", correct: false },
            { text: "Bezpečnostný modul operačného systému", correct: false }
        ]
    },
    {
        text: "Ako sa môže malware dostať do počítača?",
        answers: [
            { text: "Spustením škodlivej prílohy alebo využitím zraniteľnosti softvéru", correct: true },
            { text: "Legálnou aktualizáciou operačného systému", correct: false },
            { text: "Použitím silného hesla", correct: false },
            { text: "Aktivovaním dvojfaktorovej autentifikácie", correct: false }
        ]
    },
    {
        text: "Čo je únik osobných údajov?",
        answers: [
            { text: "Neoprávnené sprístupnenie citlivých informácií tretím stranám", correct: true },
            { text: "Vymazanie používateľského účtu na sociálnej sieti", correct: false },
            { text: "Zmena nastavení ochrany súkromia", correct: false },
            { text: "Archivácia dát v zabezpečenom úložisku", correct: false }
        ]
    },
    {
        text: "Prečo sú aktualizácie softvéru dôležité?",
        answers: [
            { text: "Odstraňujú známe zraniteľnosti a zvyšujú odolnosť systému voči útokom", correct: true },
            { text: "Zvyšujú grafický výkon aplikácií", correct: false },
            { text: "Zjednodušujú prihlasovanie do systému", correct: false },
            { text: "Nahrádzajú potrebu antivírusového programu", correct: false }
        ]
    },
    {
        text: "Čo môže byť dôsledkom úspešného phishingového útoku?",
        answers: [
            { text: "Krádež identity alebo finančných prostriedkov", correct: true },
            { text: "Automatické šifrovanie e-mailovej komunikácie", correct: false },
            { text: "Zvýšenie úrovne zabezpečenia účtu", correct: false },
            { text: "Zlepšenie ochrany osobných údajov", correct: false }
        ]
    },
    {
        text: "Ktoré správanie je nebezpečné na internete?",
        answers: [
            { text: "Interakcia s neoverenými odkazmi a prílohami", correct: true },
            { text: "Používanie viacfaktorovej autentifikácie", correct: false },
            { text: "Pravidelné aktualizovanie systému", correct: false },
            { text: "Používanie správcu hesiel", correct: false }
        ]
    },
    {
        text: "Čo je cieľom edukačných portálov o kyberbezpečnosti?",
        answers: [
            { text: "Zvyšovať digitálnu gramotnosť a bezpečnostné povedomie používateľov", correct: true },
            { text: "Centralizovať správu antivírusových riešení", correct: false },
            { text: "Monitorovať aktivitu používateľov na internete", correct: false },
            { text: "Obmedzovať prístup k online službám", correct: false }
        ]
    },
    {
        text: "Ktorá skupina je obzvlášť zraniteľná v online priestore?",
        answers: [
            { text: "Deti a mladí ľudia s nižšou mierou skúseností", correct: true },
            { text: "Vývojári bezpečnostného softvéru", correct: false },
            { text: "Administrátori dátových centier", correct: false },
            { text: "Certifikačné autority", correct: false }
        ]
    }
];

/* zamiešanie */
function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

shuffle(questions);
questions.forEach(q => shuffle(q.answers));

let index = 0;
let score = 0;

const qEl = document.getElementById("question");
const aEl = document.getElementById("answers");
const pEl = document.getElementById("progress");

function render() {
    if (index >= questions.length) {
        document.getElementById("quiz-section").innerHTML = `
            <h4>🎉 Hotovo!</h4>
            <p>Skóre: <strong>${score} / ${questions.length}</strong></p>
        `;
        return;
    }

    const q = questions[index];
    pEl.textContent = `Otázka ${index + 1} z ${questions.length}`;
    qEl.textContent = q.text;
    aEl.innerHTML = "";

    q.answers.forEach(ans => {
        const div = document.createElement("div");
        div.className = "answer";
        div.textContent = ans.text;

        div.onclick = () => {
            if (ans.correct) {
                score++;
                div.classList.add("correct");
            } else {
                div.classList.add("wrong");
            }

            setTimeout(() => {
                index++;
                render();
            }, 600);
        };

        aEl.appendChild(div);
    });
}

render();

