const arrayOfHealthWishes = [
"Бережи себе – здоров'я безцінне!",
"Будь активним – рух продовжує життя!",
"Усміхайся частіше – це зміцнює імунітет!",
"Харчуйся корисно – здоров'я в твоїх руках!",
"Пий більше води – твоє тіло подякує!",
"Відпочивай достатньо – сон лікує все!",
"Менше стресу – більше радості!",
"Дбай про своє серце – воно у тебе одне!",
"Гуляй на свіжому повітрі – це енергія життя!",
"Відмовся від шкідливих звичок – вибери здоров’я!",
"Роби зарядку – твоє тіло скаже «дякую»!",
"Дихай глибше – свіже повітря творить дива!",
"Будь позитивним – гарний настрій лікує!",
"Регулярно проходь медогляд – профілактика рятує!",
"Споживай вітаміни – природа знає, що потрібно!",
"Дотримуйся режиму дня – баланс важливий!",
"Мий руки – здоров'я починається з чистоти!",
"Оточуй себе добрими людьми – це теж ліки!",
"Медитуй та розслабляйся – душевний спокій важливий!",
"Люби себе – це найкраща турбота про здоров’я!",
]
let countOfPills = 5;
document.getElementById("count-of-tablets").innerText = "💊".repeat(countOfPills);

document.getElementById("btn_health_wishes").addEventListener("click", () => {
    let index = Math.floor(Math.random() * arrayOfHealthWishes.length);
    document.getElementById("p-health-wishes").innerText = arrayOfHealthWishes[index];
   
    countOfPills--;
    console.log(countOfPills);



document.getElementById("count-of-tablets").innerText =
    "💊".repeat(countOfPills) + "❌".repeat(5 - countOfPills);
console.log("💊".repeat(countOfPills) + "❌".repeat(5 - countOfPills));

if (countOfPills === 0) {
    console.log("countOfPills = 0");
    document.getElementById("btn_health_wishes").style.display = "none";
};
});
document.getElementById("btn-buy-tablets").addEventListener("click", () => {
    countOfPills = 5;
    console.log(countOfPills);
    document.getElementById("count-of-tablets").innerText = "💊".repeat(
        countOfPills
    );
    document.getElementById("btn_health_wishes").style.display = "inline-block";
});

/*gallery*/

let galleryImage = 1

document.getElementById("main-image").setAttribute('src',`img/gallery/${galleryImage}.jpg`)

document.getElementById('right-arrow').addEventListener('click',()=>{
    galletyImage++
    console.log(galleryImage)

    if(galleryImage == 3) galleryImage = 1

    document.getElementById("main-image").setAttribute('src',`img/gallery/${galleryImage}.jpg`)
})


document.getElementById("main-image").setAttribute('src',`img/gallery/${galleryImage}.jpg`)

document.getElementById('left-arrow').addEventListener('click',()=>{
    galletyImage++
    console.log(galleryImage)

    if(galleryImage == 1) galleryImage = 3

    document.getElementById("main-image").setAttribute('src',`img/gallery/${galleryImage}.jpg`)
})