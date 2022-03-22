"use strict";

async function appendData() {
    const response = await fetch("data.json");
    const data = await response.json();
    console.log(data.content);

    let htmlTemplate = "";
    let content = data.content;
    for (const item of content) {
        htmlTemplate += `
        <section class="accordion-item">
            <div class="header">
                <h2 class="heading language">${item.language}</h2>
                <button class="btn btn-open">+</button>
            </div>
            <div class="content">
                <h2 class="heading subject">${item.title}</h2>
                <button class="btn btn-close">-</button>
                <p class="text">${item.text}</p>
            </div>
        </section>
        `
    }
    document.getElementById("container").innerHTML = htmlTemplate;
}

async function accordion(){
    const items = document.querySelectorAll(".accordion-item");
    const content = document.querySelectorAll(".content");
    const btnsOpen = document.querySelectorAll(".btn-open");
    const btnsClose = document.querySelectorAll(".btn-close");
    
    for(let i = 0; i < items.length; i++) {
        console.log(items[i]);
        btnsOpen[i].addEventListener("click", () => {
            if(i )
            console.log("Open content");
            content[i].classList.add("open");
        });
        btnsClose[i].addEventListener("click", () => {
            console.log("Close content");
            content[i].classList.remove("open");
        });
    }
}

async function init(){
    await appendData();
    await accordion();
}

init();
