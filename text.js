// const account = {
//     owner: 'k cash',
//     movements: [500, 400, 800, 500, 1200],

//     getLastEL() {
//         console.log(this.movements.slice(-1).pop())
//     },

//     setFirstEl(mov) {
//         this.movements.unshift(mov)
//     }
// }
// account.getLastEL()
// account.setFirstEl(500);
// console.log(account.movements);


const currentPosition = navigator.geolocation.getCurrentPosition(
    (position) => {
        console.log(position);
        const lng = position.coords.longitude;
        const lat = position.coords.latitude;

        console.log(lng, lat)
        console.log(`https://www.google.com/maps/@${lng},${lat},14z`)
    },
    (err) => { console.error(err) }
)
console.log(currentPosition)