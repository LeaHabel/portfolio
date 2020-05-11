const data = [
    {
        firstPic: "../Assets/giventake.jpg",
        title: "giventake",
        subtitle: "Prototypische Implementierung zur Übersicht von Second-Hand-Geschäften in Karlsruhe",
        done: "Konzeptentwicklung <br> Branding<br> UI- und UX-Design<br> Prototyping<br> Durchführung von User Tests<br> Organisatorische Aufgaben<br> Implementierung<br>",
        origin: "Studienleistung & Bachelorarbeit bei der Hochschule Karlsruhe, 2019-2020 <br> Werkstudentin bei der Exxeta AG, 2020",
        headNextTo: "Kontext",
        textNextTo: "In vielen Städten besteht das Problem, dass die meisten Second-Hand-Geschäfte zwar auf Google zu finden sind, jedoch ist es nur schwer herauszufinden ob man dort auch findet, was man braucht. Beispielsweise findet man in Karlsruhe über die Google-Suchmaschine nicht heraus, welche Second-Hand-Kleidungsgeschäfte auch Männermode führen, in wie vielen Läden man tatsächlich Bücher finden kann oder wo Schallplatten verkauft werden. <strong>giventake ist eine Webanwendung, die das Filtern über bestimmte Kategorien von Second - Hand - Geschäften in Karlsruhe ermöglicht.</strong>",
        pic1: "../Assets/1_1.jpg",
        caption1: "Die klickbaren Prototypen visualisieren das Konzept und sollen eine Idee vermitteln, wie die Anwendung tatsächlich aussehen könnte.",
        pic2: "../Assets/1_2.jpg",
        caption2: "",
        pic2a: "../Assets/1_2a.jpg",
        caption2a: "Die Implementierung der Webseite zeigt reale Second-Hand-Geschäfte in Karlsruhe und ermöglicht dem Nutzer nach Kategorien zu filtern. Außerdem lassen sich Informationen über die Geschäfte abrufen.",
        pic3: "../Assets/1_3.jpg",
        caption3: "Meine Bachelorarbeit thematisiert in Bezug auf die Klimakrise, dass Design nicht nur die Probleme erklären sollte, sondern nach Lösungen suchen sollte. Die Implementierung der Webanwendung ist ein praxisbezogener Vorschlag hierfür.",
        pic4: "",
        caption4: "",
        head1: "Verlauf",
        text1: "<strong>Das Projekt begleitet mich nun seit ein und halb Jahren. Ich hoffe darauf, giventake bald wieder fortzuführen und für Nutzer zur Verfügung zu stellen. </strong>Die Idee fand seinen Ursprung im Wahlfach „interaktive Projekte“ an der Hochschule Karlsruhe. Das Studienfach wurde von Uwe Thimel geleitet, welcher als Art Director, an der IT-Consulting Firma EXXETA, tätig ist. Durch die positive Zusammenarbeit wurde eine Fortführung des Projektes an der EXXETA AG ermöglicht. Hier führte ich als Werkstudentin das Projekt fort. Vier Monate später wurde giventake zum praxisbezogenen Teil meiner Bachelorarbeit. Diese ist hier zu finden. Daraufhin wurde mit Unterstützung der EXXETA die Veröffentlichung der Webseite im September 2020 geplant. Leider musste das Projekt aufgrund der Corona-Krise im April 2020 pausiert werden. Der Release der Webseite für den Raum Karlsruhe ist dennoch weiterhin geplant.",
        head2: "Aufgaben",
        text2: "<strong>Meine Aufgaben reichten von der Idee, Konzept, Branding, UI/UX-Design, User Tests, Absprache mit Kooperations-Partnern bis hin zur Implementierung. </strong>Anfangs wurde im Wahlfach Interaktive Projekte das Konzept für eine Plattform entwickelt, die dem Nutzer/der Nutzerin es ermöglicht, übersichtlich und intuitiv das Second-Hand-Angebot einer Stadt erfassen zu können. Außerdem wurde das UI-Design und ein klickbarer Prototyp entwickelt. In diesem ersten Axure-Prototyp werden die Nutzer durch ein Punktesammelsystem dazu motiviert, die Webseite und das Second-Hand-Angebot der eigenen Stadt zu nutzen.<br><br>In meiner Bachelorarbeit befasste ich mich mit dem Thema, wie Design genutzt werden kann, um umweltfreundliches Handeln vom Nutzer zu fördern. Mit diesem Wissen wurde das Konzept giventake nochmals überprüft und überarbeitet. Diese Neuerungen wurden mit Hilfe von Prototypen und User Tests iterativ ausgebessert. Zudem wurde das Minimal Viable Product (MVP) ermittelt, um ein wertschaffendes Produkt und gleichzeitig einen realistischen Arbeitsaufwand für die Implementierung zu finden. Durch eine Kooperation mit der Forschungsinitative „Quartier Zukunft“, wurden mir der Datensatz zu den einzelnen Geschäften freigegeben. Nach einer Einarbeitung in das JavaScript-Framework React, folgte die Implementierung der Webseite. Aus rechtlichen Gründen ist die Veröffentlichung der Webseite noch nicht möglich.",
        head3: "",
        text3: "",
        head4: "",
        text4: "",
    },
    {
        firstPic: "",
        title: "",
        subtitle: "",
        done: "",
        origin: "",
        headNextTo: "",
        textNextTo: "",
        pic1: "",
        caption1: "",
        pic2: "",
        caption2: "",
        pic2a: "",
        caption2a: "",
        pic3: "",
        caption3: "",
        pic4: "",
        caption4: "",
        head1: "",
        text1: "",
        head2: "",
        text2: "",
        head3: "",
        text3: "",
        head4: "",
        text4: "",



    }
]

function firstPic(data) {
    return `
    <div class="firstPicBox">
        <div class="anotherFirstPicBox">
            <img class="firstPic  " src="${data.firstPic}">
        </div>
    </div>
    `
}

function box(data) {
    return `
  
            <div class="borderBox borderColorGivenTake width2 floatLeft">
                <h2>${data.title}</h2>
                <h4 class="">${data.subtitle}</h4>
                <div class="line marginLine bgColorGivenTake width2"></div>
                <h6 class="txFtHead marginHead colorGivenTake">Leistungen</h6>
                <p> <strong> ${data.done ? data.done : ''} </strong> </p>
                <div class="line marginLine bgColorGivenTake width2"></div>
                <p class="txOrigin">${data.origin ? data.origin : ''}</p>
            </div>
    `
}
function textNextTo(data) {
    return `
    <div class="textDetail textNextTo ">
        <h6 class="txFtHead marginHead">${data.headNextTo ? data.headNextTo : ''}</h6>
        <p>${data.textNextTo ? data.textNextTo : ''}</p>
    </div>
    `
}


function pic1(data) {
    return `
    <img class="width100 paddingTop40" src="${data.pic1 ? data.pic1 : ''}">
    <p><em>${data.caption1 ? data.caption1 : ''}</em> </p>
    `
}
function pic2(data) {
    return `
    <img class="width100 paddingTop40" src="${data.pic2 ? data.pic2 : ''}">
    <p><em>${data.caption2 ? data.caption2 : ''}</em> </p>
    `
}
function pic2a(data) {
    return `
    <img class="width100 paddingTop40" src="${data.pic2a ? data.pic2a : ''}">
    <p><em>${data.caption2a ? data.caption2a : ''}</em> </p>
    `
}
function pic3(data) {
    return `
    <img class="width100 paddingTop40" src="${data.pic3 ? data.pic3 : ''}">
    <p><em>${data.caption3 ? data.caption3 : ''}</em> </p>
    `
}
function pic4(data) {
    return `
    <img class="width100 paddingTop40" src="${data.pic4 ? data.pic4 : ''}">
    <p><em>${data.caption4 ? data.caption4 : ''}</em> </p>
    `
}

function text1(data) {
    return `
    <div class="textDetail textAlone ">
        <h6 class="txFtHead marginHead">${data.head1 ? data.head1 : ''}</h6>
        <p>${data.text1 ? data.text1 : ''}</p>
    </div>
    `
}
function text2(data) {
    return `
    <div class="textDetail textAlone ">
        <h6 class="txFtHead marginHead">${data.head2 ? data.head2 : ''}</h6>
        <p>${data.text2 ? data.text2 : ''}</p>
    </div>
    `
}
function text3(data) {
    return `
    <div class="textDetail textAlone ">
        <h6 class="txFtHead marginHead">${data.head3 ? data.head3 : ''}</h6>
        <p>${data.text3 ? data.text3 : ''}</p>
    </div>
    `
}



let counter = 1;
for (let x = 1; x <= data.length + 1; x++) {
    if (document.getElementById(counter)) {
        document.getElementById(counter).innerHTML = `
            ${data.map(firstPic).join('')}
            <div class="background">
            <div class="layoutWrapper">
            ${data.map(box).join('')}
            ${data.map(textNextTo ? textNextTo : '').join('')}
            ${data.map(pic1 ? pic1 : '').join('')}
            ${data.map(text1 ? text1 : '').join('')}
            ${data.map(pic2 ? pic2 : '').join('')}
            ${data.map(pic2a ? pic2a : '').join('')}
            ${data.map(text2 ? text2 : '').join('')}
            ${data.map(pic3 ? pic3 : '').join('')}
            ${data.map(text3 ? text3 : '').join('')}
            ${data.map(pic4 ? pic4 : '').join('')}
            <h1>${data[counter - 1].title} </h1>
            </div>
            </div>
    `
    }
    counter++;
}


