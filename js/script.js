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
        photo:"vitamin.png",
        description:"Вітамін B3 (ніацин) важливий для обміну речовин і підтримки здоров'я шкіри.",
        rating:"4",
        type:"Водорозчинний",
    },
    {
        id:2,
        title:"Омега-3",
        photo:"omega-3.png",
        description:"Омега-3 жирні кислоти сприяють здоров'ю серця і мозку.",
        rating:"5",
        type:"Жирні кислоти",
    }, {
        id:3,
        title:"Магній",
        photo:"magnesium.png",
        description:"Магній підтримує роботу м'язів, нервової системи і кісток.",
        rating:"4",
        type:"Мінерал",
    }, {
        id:4,
        title:"Вітамін С",
        photo:"vitamin-c.png",
        description:"Вітамін C зміцнює імунітет і сприяє здоров'ю шкіри.",
        rating:"5",
        type:"Водорозчинний",
    }, {
        id:5,
        title:"Вітамін D",
        photo:"vitamin-d.png",
        description:"Вітамін D допомагає засвоювати кальцій і зміцнює кістки.",
        rating:"5",
        type:"Жиророзчинний",
    },
    {
        id:6,
        title:"Вітамін А",
        photo:"vitamin-a.png",
        description:"Вітамін A підтримує зір, імунну систему та здоров'я шкіри.",
        rating:"5",
        type:"Жиророзчинний",
    },
]
fetch('js/vitamins.json')
    .then(response => response.json())
    .then(data => {
        data.forEach((item, index) => {
                    //console.log(" елемент №, index, item")
    let divVitamin = document.createElement('div')
    divVitamin.classList.add('vitamin')

    document.getElementById("p-vitamins").appendChild(divVitamin)
    divVitamin.innerHTML =`
            <p>${item.id}<p>
            <h3>${item.title}</h3>
            <hr>
            <img src="images/vitamins/${item.photo}" alt="">
            <p>${item.description}</p>

            <div>
              <p>${'💚'.repeat(item.rating)+'🤍'.repeat(5-item.rating)}</p>
              <p>${item.type}</p>
            </div>
    `
        document.getElementById("p-vitamins").appendChild(divVitamin)
        })
    })
.catch(error =>
     {console.error('Помилка при завантаженні JSON:', error);});
