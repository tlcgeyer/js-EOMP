//Footer date
// debugger
document.querySelector('#currentYear').textContent =    
new Date().getUTCFullYear()

//linked manga products div to the js. 
let mangaTable = document.querySelector(`[data-my-manga]`);

//Products
let manga = JSON.parse(localStorage.getItem('products') ) ?
JSON.parse(localStorage.getItem('products') ) :
localStorage.setItem('products', 
JSON.stringify (
    [
        {
            "id": 1,
            "name": "Jujutsu Kaisen",
            "genre": "Shounen",
            "about": "Gege Akutami's Jujutsu Kaisen is an illustrated Japanese manga series that was first published in the Weekly Shonen Jump magazine in March 2018. It has since been collected and released in various volumes.",
            amount: 350,
            "image": "/images/Jujutsu Kaisen manga.jpg"
        },
        {
            "id": 2,
            "name": "Takane to Hana",
            "genre": "Shojo",
            "about": "Takane and Hana is a Japanese manga series written and illustrated by Yuki Shiwasu. The series has been serialized in Hana to Yume since 2014. The story follows the interactions of 16-year-old Hana Nonomura and 26-year-old Takane Saibara after Hana takes her sister's place in an arranged marriage meeting with Takane",
            amount: 280,
            "image": "/images/Takakne to hana.jpg"
        },
        {
            "id": 3,
            "name": "President is a Maid!",
            "genre": "Josei",
            "about": "Maid Sama! is a Japanese manga series by Hiro Fujiwara. It was serialized in Hakusensha's monthly shōjo magazine LaLa from December 2005 to September 2013, with its chapters collected in 18 tankōbon volumes. A 26-episode anime adaptation produced by J.C.Staff aired between April and September 2010.",
            amount: 280,
            "image": "/images/President is a maid.jpg"
        },
        {
            "id": 4,
            "name": "Berserk",
            "genre": "Seinen",
            "about": "Berserk is a Japanese manga series written and illustrated by Kentaro Miura. Set in a medieval Europe-inspired dark fantasy world, the story centers on the characters of Guts, a lone swordsman, and Griffith, the leader of a mercenary band called the 'Band of the Hawk' ",
            amount: 350,
            "image": "/images/berserk-volume-1.jpg"
        },
        {
            "id": 5,
            "name": "The way of a Household Husband",
            "genre": "Slice of Life",
            "about": "'Extreme Way of the Househusband') is a Japanese manga series written and illustrated by Kousuke Oono. Published in the online manga magazine Kurage Bunch since 2018, The Way of the Househusband follows an ex-yakuza member who retires from crime to become a househusband.",
            amount: 350,
            "image": "/images/the way of the household house.jpg"
        },
        {
            "id": 6,
            "name": "A Gatherer's Adventure in Isekai",
            "genre": "Isekai",
            "about": "Takeru the gatherer is diving deep into a kingdom of dwarves, and he's got a gruff dragonfolk and an airheaded elf joining him! This motley crew soon finds itself lost in a network of underground caverns, rumored to be rife with fearsome monsters…but who cares, when there's rare metals to be found? The saga enters a new chapter in Volume 4, full of crazy (and maybe even lethal) new things to find!",
            amount: 280,
            "image": "/images/a gatherers adven.jpg"
        },
        {
            "id": 7,
            "name": "Gundam",
            "genre": "Mecha",
            "about": "Gundam is a Japanese military science fiction media franchise. Created by Yoshiyuki Tomino and Sunrise, the franchise features giant robots, or mecha, with the name Gundam.",
            amount: 300,
            "image": "/images/gundam.jpg"
        },
        {
            "id": 8,
            "name": "Doraemon",
            "genre": "Kodomo(for kids)",
            "about": "Doraemon is a Japanese manga series written and illustrated by Fujiko F. Fujio. The manga was first serialized in December 1969. Its chapters were collected in 45 tankōbon volumes published by Shogakukan from 1974 to 1996.",
            amount: 200,
            "image": "/images/doraemon.jpg"
        },
        {
            "id": 9,
            "name": "One Punch Man",
            "genre": "Shounen",
            "about": "One-Punch Man is a Japanese superhero manga series created by One. It tells the story of Saitama, a superhero who, because he can defeat any opponent with a single punch, grows bored from a lack of challenge. One wrote the original webcomic manga version in early 2009.",
            amount: 350,
            "image": "/images/one-punch-man-vol-1.jpg"
        },
        {
            "id": 10,
            "name": "Fruits Basket",
            "genre": "Shojo",
            "about": "Fruits Basket, sometimes abbreviated Furuba or Fruba, is a Japanese manga series written and illustrated by Natsuki Takaya. It was serialized in the semi-monthly Japanese shōjo manga magazine Hana to Yume, published by Hakusensha, from 1998 to 2006.",
            amount: 280,
            "image": "/images/fruits-basket-collector-s-edition-vol-1.jpg"
        },
        {
            "id": 11,
            "name": "Nana",
            "genre": "Josei",
            "about": "Nana is a Japanese manga series written and illustrated by Ai Yazawa. It was serialized in the monthly shōjo manga magazine Cookie from May 2000 to May 2009 before going on hiatus",
            amount: 350,
            "image": "/images/nana-vol-7.jpg"
        },
        {
            "id": 12,
            "name":"Goblin Slayer",
            "genre": "Seinen",
            "about": "Goblin Slayer is a Japanese dark fantasy light novel series written by Kumo Kagyu and illustrated by Noboru Kannatsuki. A manga adaptation by Kōsuke Kurose is serialized in the Monthly Big Gangan magazine, and a second adaptation by Masahiro Ikeno runs in the same magazine.",
            amount: 350,
            "image": "/images/goblin-slayer-vol-1-manga.jpg"
        },
        {
            "id": 13,
            "name": "Nichijou",
            "genre": "Slice of Life",
            "about": "Nichijou is a Japanese manga series written and illustrated by Keiichi Arawi. The manga began serialization in the December 2006 issue of Kadokawa Shoten's manga magazine Shōnen Ace, and was also serialized in Comptiq between the March 2007 and July 2008 issues.",
            amount: 280,
            "image": "/images/nichijou.jpg"
        },
        {
            "id": 14,
            "name": "The Beginning After the End",
            "genre": "Isekai",
            "about": "The Beginning After The End (Korean: 끝이 아닌 시작, Japanese: 最強の王様、二度目の人生は何をする？, Mandarin: 三岁开始做王者) is a Tapas Original seasonal comic, based on the novel of the same name, is written by TurtleMe and illustrated by Fuyuki23. The release schedule is 3 times a month for Season 1 and weekly for Season 2 and Season 3. It's currently available in English, Korean, Japanese, Thai, Chinese Mandarin and French.",
            amount: 280,
            "image": "/images/the beginning after the end.jpg"
        },
        {
            "id": 15,
            "name": "Neon Genesis Evangelion",
            "genre": "Mecha",
            "about": "Neon Genesis Evangelion is a Japanese manga series written and illustrated by Yoshiyuki Sadamoto and published by Kadokawa Shoten. It began in Shōnen Ace in December 1994 and ended in June 2013. It consists of 14 volumes, each composed of several stages or chapters.",
            amount: 350,
            "image": "/images/NeonGenesisEvangelionManga1.jpg"
        },
        {
            "id": 16,
            "name": "Astro Boy",
            "genre": "Kodomo",
            "about": "Astro Boy, known in Japan by its original name Mighty Atom, is a Japanese manga series written and illustrated by Osamu Tezuka. It was serialized in Kobunsha's Shōnen from 1952 to 1968. The 112 chapters were collected into 23 tankōbon volumes by Akita Shoten. Dark Horse Comics published an English translation in 2002.",
            amount: 200,
            "image": "/images/astro boy.jpg"
        },
    ]
)
);

function displayProducts(daataa) {
    mangaTable.innerHTML = "";
    //Looping through the array
    if (daataa) {
        daataa.forEach( (item) => {
            mangaTable.innerHTML += `
         <div class="col-md-4 mb-4">
            <div class="card bg-black text-light">
               <img src="${item.image}" class="card-img-top" id="mangaPic" alt="${item.name}">
               <div class="card-body">
                  <h5 class="card-title" id="names">${item.name}</h5>
                  <p class="card-text">${item.about}</p>
                  <p class="card-text" id="names">${item.genre}</p>
                  <p class="card-text">R${item.amount}</p>
               </div>
               <button class="btn btn-primary" id="btn">Add to Cart</button>
            </div>
         </div>
         
      `;
    });
}

//displaying the spinner
else {
    mangaTable.innerHTML = `<div class="text-center">
    <div class="spinner-border" role="status">
      <span class="sr-only"></span>
    </div>
  </div>`;
}}
displayProducts(manga)

// Search button
let searchManga = document.querySelector(`[data-search-products]`);
searchManga.addEventListener(`keyup`, () => {
    let searchFilter = manga.filter((item) => {
        return item.genre
        .toLowerCase()
        .includes(searchManga.value.toLowerCase())
    });
    if (searchFilter.length != 0) {
        mangaTable.innerHTML = "";
        searchFilter.forEach((item) => {
             mangaTable.innerHTML += `
         <div class="col-md-4 mb-4">
            <div class="card bg-black text-light">
               <img src="${item.image}" class="card-img-top" id="mangaPic" alt="${item.name}">
               <div class="card-body">
                  <h5 class="card-title" id="names">${item.name}</h5>
                  <p class="card-text">${item.about}</p>
                  <p class="card-text" id="names">${item.genre}</p>
                  <p class="card-text">R${item.amount}</p>
               </div>
               <button class="btn btn-primary" id="btn">Add to Cart</button>
            </div>
         </div>
         
      `;
    });
        }else {
            mangaTable.innerHTML = `<div class="text-center">
            <div class="spinner-border" role="status">
              <span class="sr-only"></span>
            </div>
          </div>`;
        }
})


//Sorting button 

let productSort = document.querySelector('[data-sorted-products]')
let highest = false;
productSort.addEventListener('click', function(){
    mangaTable.innerHTML = ''
    highest = !highest;

    let prods = [];
    if(highest){
        prods = manga.sort(function(prod1, prod2) {
            return parseFloat(prod1.amount) - parseFloat(prod2.amount);
        } )
    } else {
        prods = manga.sort(function(prod1, prod2) {
            return parseFloat(prod2.amount) - parseFloat(prod1.amount)
        } );
    }
    prods.forEach( item => {
        mangaTable.innerHTML += `
         <div class="col-md-4 mb-4">
            <div class="card bg-black text-light">
               <img src="${item.image}" class="card-img-top" id="mangaPic" alt="${item.name}">
               <div class="card-body">
                  <h5 class="card-title" id="names">${item.name}</h5>
                  <p class="card-text">${item.about}</p>
                  <p class="card-text" id="names">${item.genre}</p>
                  <p class="card-text">R${item.amount}</p>
               </div>
               <button class="btn btn-primary" id="btn">Add to Cart</button>
            </div>
         </div>
         
      `;
    });})