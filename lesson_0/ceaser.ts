// 
// Створено Aserum
// для навчальних цілей
// 12.2016 в IHUB Vinnytsia
// 

 class Ceaser {
    impera(StrinG:string, key: number) {
        let outString: string='';
        for (let char of StrinG){
            if (this.isalpha(char)) {
                var base = this.isupper(char) ? 65 : 97;
                var newChar = base + (((char.charCodeAt(0) - base) + key) % 26);
                outString += String.fromCharCode(newChar);
                console.log('Була:', char, char.charCodeAt(0), '||| Стала newChar:', String.fromCharCode(newChar), newChar);
            }
            else outString += char;
        }
        return outString;
    }
    // Що робить isalpha?
    isalpha(char:string):boolean{
        if (char.search(/[a-zA-Z]/)+1) return true; //що значить +1?
        return false;
    }
    // Що робить isupper?
    isupper(char:string):boolean{
        if (char.search(/[A-Z]/)+1) return true; //чому тут лише A-Z в квадратних дужках?
        return false;
    }
}
// 
// HTML елементи та їх наповнення
// 
// Створюємо тло для нашої сторінки
document.body.style.backgroundImage ='url(ts.jpg)';
document.body.style.backgroundSize = 'cover';
document.body.style.fontSize = '50px';

// Обгортка для наших елементів
let box = document.createElement('div'); // створюємо її
box.style.marginLeft = 'calc(50% - 350px)'; //додаємо їй властивість для вирівнювання по центру сторінки
box.style.width ='650px'; // додаємо їй ширини у 650 пікселів
document.body.appendChild(box); // добавляємо box у контейнер body нашого document (сторінки, що загрузить цей скрипт)

// Поле вводу тексту
let text = document.createElement('textarea'); // створюємо його
text.rows=3; // додаємо йому властивість вертикального розміру у 3 стрічок
text.cols=25; // додаємо йому властивість горизонтального розміру у 25 символа
text.placeholder='Введіть Ваш текст'; // заповнювач пустого поля
text.style.fontSize = '50px';
box.appendChild(text); // добавляємо text у контейнер box

// Поле вводу ключа(у вигляді цифри)
let key = document.createElement('input'); // створюємо його
key.style.fontSize = '50px';
key.style.margin = '10px'; // додаємо йому властивість відступу розміром 10 пікселів
key.style.width = '80px'; // додаємо йому ширини розміром 80 пікселів
key.type = 'number'; // задаємо його тип "число"
key.max = '25'; // встановлюємо максимальне значення
key.min = '0'; // встановлюємо мінімальне значення
key.pattern ='[0-9]{,2}'; // встановлюємо обмеження на ввід символів, лише цифри
box.appendChild(key); // добавляємо key у контейнер box (після text)

// Кнопка "Шифруємо"
let button = document.createElement('button'); // створюємо її
button.style.margin = '10px'; // додаємо їй властивість відступу розміром 10 пікселів
button.textContent = 'Шифруємо'; // додаємо текст кнопки
button.onclick = () => { // задаємо виконання функції при клікові по кнопці 
    let csr = new Ceaser(); // створюємо екземпляр класу "Ceaser"
    Result.innerHTML=csr.impera(text.value, +key.value); //змінюємо вміст контейнеру Result
}
box.appendChild(button); // добавляємо button у контейнер box (після key)

// Вивід результату
let Result = document.createElement('div'); // створюємо його
Result.style.backgroundColor = 'green'; // додаємо йому зелений колір фону
Result.style.width = '700px'; // додаємо йому ширини розміром 315 пікселів
Result.style.wordWrap = 'break-word';
box.appendChild(Result); // добавляємо Result у контейнер box (після button)