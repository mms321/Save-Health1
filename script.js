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

const arrayOfImages = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "1.1.jpg"
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
    document.getElementById("btn_health_wishes").disabled = true;
};
});
document.getElementById("btn-buy-tablets").addEventListener("click", () => {
    countOfPills = 5;
    console.log(countOfPills);
    document.getElementById("count-of-tablets").innerText = "💊".repeat(
        countOfPills
    );
    document.getElementById("btn_health_wishes").disabled = false;
});

/*gallery*/

let galleryImage = 1

document.getElementById("main-image").setAttribute('src',`images/gallery/${arrayOfImages[galleryImage-1]}`)

document.getElementById('right-arrow').addEventListener('click',()=>{
    galleryImage++
    console.log(galleryImage)

    if (galleryImage > 4) galleryImage = 1;

    document.getElementById("main-image").setAttribute('src',`images/gallery/${arrayOfImages[galleryImage-1]}`)
})




document.getElementById('left-arrow').addEventListener('click',()=>{
    galleryImage--
    console.log(galleryImage)

    if (galleryImage < 1) galleryImage = 4;

    document.getElementById("main-image").setAttribute('src',`images/gallery/${arrayOfImages[galleryImage-1]}`)
})

/*VITAMINS*/


const arrayOfObjects = [
    {
        id:1,
        title:"Вітамін B3",
        photo:"",
        description:"",
        rating:"",
        type:"",
    },
    {
        id:2,
        title:"Омега-3",
        photo:"",
        description:"",
        rating:"",
        type:"",
    }, {
        id:3,
        title:"Магній",
        photo:"",
        description:"",
        rating:"",
        type:"",
    }, {
        id:4,
        title:"Вітамін С",
        photo:"",
        description:"",
        rating:"",
        type:"",
    }, {
        id:5,
        title:"Вітамін D",
        photo:"",
        description:"",
        rating:"",
        type:"",
    },
    {
        id:6,
        title:"Аеміт",
        photo:"",
        description:"",
        rating:"",
        type:"",
    },
]

console.log(arrayOfObjects)


arrayOfObjects.forEach((item) =>{
    console.log(item)

    let divVitamin = document.createElement('div')
    divVitamin.innerText = item.title
    divVitamin.classList.add('vitamin')

    document.getElementById("p-vitamins").appendChild(divVitamin)
})

