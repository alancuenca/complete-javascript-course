'use strict';
// https://restcountries.com/v3.1/name/united


const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
///////////////////////////////////////
const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1
};

const renderCountry = function (data, className = '') {
    let [languages] = Object.values([data.languages][0])
    let [currencies] = Object.values([data.currencies][0])
    // console.log(currencies.name);
    //curName = curName[0];
    // shortened currency name: USD, CAD...

    const html = `
    <article class="country ${className}" >
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${+data.population}</p>
        <p class="country__row"><span>🗣️</span>${languages}</p>
        <p class="country__row"><span>💰</span> ${currencies.name}</p>
        </div>
        </article>
        `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

const request2 = fetch(`https://restcountries.com/v3.1/name/united`)

const getJSON = async function (url, errMsg = 'Something went wrong') {
    const response = await fetch(url);
    if (!response.ok)
        throw new Error(`${response.status} ${errMsg}`);
    return await response.json();
};

const getCountryData = function (country) {
    // fetch(`https://restcountries.com/v3.1/name/${country}`)
    //     .then(response => {
    //         if (!response.ok)
    //             throw new Error(`${response.status} Country Not Found `)
    //         return response.json()
    //     })
    getJSON(
        `https://restcountries.com/v3.1/name/${country}`,
        `Country Not Found `
    )
        .then(data => {
            console.log(data);
            renderCountry(data[0])
            // get neighbour
            const neighbour = data[0].borders?.[0]
            if (!neighbour) throw new Error('No neighbor found');
            // neighbour country
            return getJSON(
                `https://restcountries.com/v3.1/alpha/${neighbour}`,
                `Country Not Found `
            )
        })
        .then(data => renderCountry(...data, 'neighbour'))
        .catch(err => {
            console.error(`${err}`);
            renderError(`${err.message}.`)
        })
        .finally(() => {
            countriesContainer.style.opacity = 1
        })
};

btn.addEventListener('click', function () {
    getCountryData('america')
});


// console.log('test start');
// setTimeout(() => console.log('0 sec timer', 0));
// Promise.resolve('Resolved promise 1').then(res => console.log(res))
// console.log('test end');

// const lotteryPromise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         if (Math.random() >= 0.5) {
//             resolve('YOU WIN!')
//         } else {
//             reject(new Error('You lost your money'))
//         }
//     }, 2000);

// });


// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err))
// // Promisifying setTimeout
// const wait = function (seconds) {
//     return new Promise(function (resolve){
//         setTimeout(resolve, seconds * 1000)
//     })
// };

// wait(2).then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1)
// }).then(() => console.log('i waited for 1 second'))

//52.508 13.381
// const whereAmI = async function (lat, lng) {
//     await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//         .then(response => {
//             if (!response.ok) throw new Error(`${response.status}`)
//             return response.json()
//         })
//         .then(data => {
//             console.log(`${data.city}, ${data.country}`)
//             return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
//         })
//         .then(response => {
//             if (!response.ok) throw new Error(`Country not found ${response.status}`)
//             return response.json();
//         })
//         .then(data => renderCountry(data[0]))
//         .catch(err => console.error(`${err} too many attempts`))
// };

// whereAmI(52.508, 13.381)
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
/*
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};
*/


// const getPosition = function () {
//     return new Promise(function (resolve, reject) {
//         // navigator.geolocation.getCurrentPosition(
//         //     position => resolve(position),
//         //     err => reject(err));
//         navigator.geolocation.getCurrentPosition(resolve, reject)
//     })
// };

// getPosition().then(pos => console.log(pos))

// const whereAmI = async function () {
//     getPosition().then(pos => {
//         const { latitude: lat, longitude: lng } = (pos.coords)
//         return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     })
//         .then(response => {
//             if (!response.ok) throw new Error(`${response.status}`)
//             return response.json()
//         })
//         .then(data => {
//             console.log(`You are in ${data.city}, ${data.country}`)
//             return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
//         })
//         .then(response => {
//             if (!response.ok) throw new Error(`Country not found ${response.status}`)
//             return response.json();
//         })
//         .then(data => renderCountry(data[0]))
//         .catch(err => console.error(`${err} too many attempts`))
// };

// btn.addEventListener('click', whereAmI)
/*
Build the image loading functionality that I just showed you on the screen.

Tasks are not super- descriptive this time, so that you can figure out some stuff on your own.Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input.
This function returns a promise which creates a new image(use document.createElement('img'))
and sets the.src attribute to the provided image path.When the image is done loading,
append it to the DOM element with the 'images' class, and resolve the promise.
The fulfilled value should be the image element itself.
In case there is an error loading the image('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

    PART 2
2. Comsume the promise using.then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image(set display to 'none'), and load a second image(HINT: Use the image element returned by the createImage promise to hide the current image.You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder.Test the error handler by passing a wrong image path.Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// const wait = function (seconds) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, seconds * 1000)
//     })
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//     return new Promise(function (resolve, reject) {
//         const img = document.createElement('img');
//         img.src = imgPath;

//         img.addEventListener('load', function () {
//             imgContainer.append(img);
//             resolve(img);
//         });

//         img.addEventListener('error', function () {
//             reject(new Error('image not found'))
//         })
//     })
// };

// let currentImg;

// createImage('img/img-1.jpg')
//     .then(img => {
//         currentImg = img;
//     console.log('img 1 loaded');
//     return wait(2)
// })
//     .then(() => {
//         currentImg.style.display = 'none';
//         return createImage('img/img-2.jpg')
//     })
//     .then(img => {
//         currentImg = img;
//         console.log('image 2 loaded');
//         return wait(2)
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//     })
//     .catch(err => console.error(err))
const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
};

const whereAmI = async function (country) {
    try {
        // Geolocation
        const pos = await getPosition();
        const { latitude: lat, longitude: lng } = pos.coords;
        // reverse geocoding
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        if (!resGeo.ok) throw new Error(`Problem getting location data`)
        const dataGeo = await resGeo.json();
        //country data
        const response = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
        if (!response.ok) throw new Error(`Problem getting country`)
        const data = await response.json();
        console.log(data);
        renderCountry(data[0])
        return `You are in ${dataGeo.city}, ${dataGeo.state} ${dataGeo.country}`
    } catch (err) {
        console.error(`${err}`);
        renderError(`Something went wrong. ${err.message}`)
    }
};
// whereAmI()
//     .then(city => console.log(city))
//     .catch(err => console.error(err.message))
// console.log(`2: finished getting location`);

// console.log('1: will get location');
// (async function () {
//     try {
//         const city = await whereAmI()
//         console.log(`${city}`);
//     } catch (error) {
//         console.error(`${error.message}`);
//     }
//     console.log(`3: finished getting location`);
// })();

// const get3Countries = async function (c1, c2, c3) {
//     try {
//         // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//         // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//         // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
//         const data = await Promise.all([
//             getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//             getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//             getJSON(`https://restcountries.com/v3.1/name/${c3}`)
//         ])
//         console.log(data)
//         console.log(data.map(each => each[0].capital));
//     } catch (error) {
//         console.error(error.message);
//     }
// };

// get3Countries('america', 'portugal', 'japan')

// (async function () {
//     const res = await Promise.race([
//         getJSON(`https://restcountries.com/v3.1/name/italy`),
//         getJSON(`https://restcountries.com/v3.1/name/egypt`),
//         getJSON(`https://restcountries.com/v3.1/name/america`)
//     ])
//     console.log(res[0].name.common);
// }());

// const timeout = function (sec) {
//     return new Promise(function (_, reject) {
//         setTimeout(function () {
//             reject(new Error('Request took too long'))
//         }, sec * 1000);
//     })
// };

// Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/italy`),
//     timeout(.14)
// ]).then(data => console.log(data[0].name.common)).catch(err => console.error(err))

// Promise.any([
//     Promise.resolve('success'),
//     Promise.reject('Error'),
//     Promise.resolve('another success')
// ]).then(res => console.log(res))


/*
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;
        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        });
        img.addEventListener('error', function () {
            reject(new Error('Image not found'));
        });
    });
};

let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// const loadNPause = async function () {
//     try {
//         let img = await createImage('img/img-1.jpg');
//         await wait(2);
//         img.style.display = 'none';
//         img = await createImage('img/img-2.jpg');
//         await wait(2);
//         img.style.display = 'none';
//     } catch (error) {
//         console.error(error.message);
//     }
// }

// loadNPause()

const loadAll = async function (img) {
    const allImgs = img.map(async jpg => await createImage(jpg))
    //const imgs = imgArr.map(async img => await createImage(img));
    const display = await Promise.all(allImgs)
    //imgsEl.forEach(img => img.classList.add('parallel'));
    display.forEach(imgs => imgs.classList.add('parallel'))
};

const imgList = new Array('img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg')
loadAll(imgList);

