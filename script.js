//INI FUNGSINYA UNTUK MEMBUAT PILIHAM PLAYER DENGAN CARA MATH RANDOM
function getPilihanComputer() {
    let comp = Math.floor(Math.random() * 3) + 1;
    
    if(comp === 1) return 'gajah';
    if(comp === 2) return 'orang';
    return 'semut';
    
}


function getHasil(comp, player){
 
    // menentukan rules
    if(player == comp) return 'SERI';
    if(player == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH';
    if(player == 'orang') return (comp == 'gajah') ? 'KALAH' : 'MENANG';
    if(player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG';
   
}

function putar() {
    let imgComputer = document.querySelector('.img-komputer');
    let gambar = ['gajah', 'semut', 'orang'];
    let i = 0; 
    let waktuMulai = new Date().getTime(); //untuk mendapatkan waktu saat itu
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] +'.png')
        if(i == gambar.length) i = 0;
    },100)            // set interval fungsinya untuk melakukan secara berulang ulang selama interval waktu tertentu
}

// CARA MENGGUNAKAN PERULANGAN DAN LEBIH EFEKTIF
let pilihan = document.querySelectorAll('li img'); //pilih img yang berada pada element li
let win = 1;
let lose = 1;
pilihan.forEach(function(pil){ // untuk setiap img yang ada pada nodelist pilihan maka jalankan function berikut, forEach fungsinya untuk looping
    pil.addEventListener('click', function(){
        let pilihanComputer = getPilihanComputer();
        let pilihanPlayer = pil.className; //memanfaatkan classname
        let hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(function(){

            let imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
    
            let info = document.querySelector('.info');
            info.innerHTML = hasil;

            // menambahkan skor
            let skorKomputer = document.querySelector('.skorKomputer');
            let skorPlayer = document.querySelector('.skorPlayer');

            if(hasil == 'MENANG') skorPlayer.innerHTML = win++;
            if(hasil == 'KALAH') skorKomputer.innerHTML = lose++;
        },1000)

       

    })
})
// CARA BIASA DAN TIDAK TERLALU EFEKTIF
// let pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//    let pilihanComputer = getPilihanComputer();
//    let pilihanPlayer = pGajah.className; //memanfaatkan classname
//    let hasil = getHasil(pilihanComputer, pilihanPlayer);

//    let imgComputer = document.querySelector('.img-komputer');
//    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//    let info = document.querySelector('.info');
//    info.innerHTML = hasil;

// });

// let pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){
//    let pilihanComputer = getPilihanComputer();
//    let pilihanPlayer = pOrang.className; //memanfaatkan classname
//    let hasil = getHasil(pilihanComputer, pilihanPlayer);

//    let imgComputer = document.querySelector('.img-komputer');
//    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//    let info = document.querySelector('.info');
//    info.innerHTML = hasil;

// });


// let pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){
//    let pilihanComputer = getPilihanComputer();
//    let pilihanPlayer = pSemut.className; //memanfaatkan classname
//    let hasil = getHasil(pilihanComputer, pilihanPlayer);

//    let imgComputer = document.querySelector('.img-komputer');
//    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//    let info = document.querySelector('.info');
//    info.innerHTML = hasil;

// });


