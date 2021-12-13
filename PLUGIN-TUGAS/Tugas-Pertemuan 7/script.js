// Objek Array (Array of Object) adalah suatu variable yang dapat memuat beberapa nilai secara berurutan atau seri.
// Artinya variable yang dideklarasikan sebagai array isinya tidak satu.

// berikut cotoh penerapannya
const dataFilm = [
    { judul: 'Doctor Strange', durasi: '2 Jam', genre: 'Action', tahun: 2018},
    { judul: 'Iron Man 1', durasi: '2 Jam', genre: 'Action', tahun: 2008},
    { judul: 'End Game', durasi: '3 Jam', genre: 'Action', tahun: 2019 },
    { judul: 'Infinity War', durasi: '2 Jam', genre: 'Action', tahun: 2019},
    { judul: 'Captain Marvel', durasi: '2 Jam', genre: 'Action', tahun: 2018}
  ];

// misal kita akan mencari data diatas dengan durasi 2 jam  
// dan tahun 2018 dan 2008.
  
  function FilteringFilm (){
      // buat fungsi, yang didalamnya melakukkan method filter
    let newData = dataFilm.filter(function(a){
        return a.durasi === '2 Jam' && a.tahun === 2008||a.tahun === 2018
        // a digunakkan sebagai penginisialisasi array dataFilm
        // kemudian panggil nama properti yang ingin kita filter
    
    })
    return newData;
  }
console.log(FilteringFilm())
// maka akan tercetak data dimana durasi 2 jam, tahun 2008 dan 2018 dari array dataFilm ===




