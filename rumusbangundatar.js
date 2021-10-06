const PHI = 22 / 7;
// luas persegi
const luasPersegi = (s) => s ** 2;
// keliling persegi
const kelilingPersegi = (s) => 4 * s
// luas persegi panjang
const luasPersegiPanjang = (p, l) => p * l;
// keliling persegi panjang
const kelilingPersegiPanjang = (p, l) => 2 * (p + l)
// luas segitiga
const luasSegitiga = (alas,tinggi) => alas * tinggi / 2
// keliling segitiga
const kelilingSegitiga = (alas) => alas * 3
// luas belah ketupat
const luasBelahKetupat = (D1, D2) => (D1 * D2) / 2;
// keliling belah ketupat
const kelilingBelahKetupat = (s) => 4 * s;
// luas jajargenjang
const luasJajargenjang = (a,t) => a * t;
// keliling jajargenjang
const kelilingJajargenjang = (s) => 4 * s
// luas lingkaran
const luasLingkaran = (radius) => PHI * radius ** 2;
// keliling lingkaran
const kelilingLingkaran = (radius) => 2 * PHI * radius;
// luas trapesium siku-siku
const luasTrapesiumSiku = (a, b, t) => (a + b) * t / 2
//keliling trapesium siku siku
const kelilingTrapesiumSiku = (a, b, c, d) => a + b + c + d
// luas layang layang
const luasLayang2 = (di1,di2) => di1 * di2 / 2
//keliling layang layang
const kelilingLayang2 = (a,c) => 2 * (a+c)