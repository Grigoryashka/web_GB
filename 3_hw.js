function film(n, m) {
    while (n != m) {
        n = prompt ("Вы не угадали, попробуйте еще раз");
    }
        return alert ("Вы угадали");
}
//best_film = "Law Abiding Citizen/Законопослушный гражданин";
var best_film = "Законопослушный гражданин", entry_film = prompt("Какой ваш любимый фильм?");
film(entry_film, best_film);
console.log("hello world");
//confirm("shdzfjha");