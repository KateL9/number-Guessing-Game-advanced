/*Кол-во попыток пользователя должно быть ограничено: 10
— если пользовательское число больше, то бот выводит "Загаданное число меньше, осталось попыток ..." и предлагает ввести новый вариант;
— если пользовательское число меньше, то бот выводит "Загаданное число больше, осталось попыток ..." и предлагает ввести новый вариант;
* — если пользователь вводит правильное число, то бот выводит "Поздравляю, Вы угадали!!! Хотели бы сыграть еще?",
* при нажатии ОК игра перезапускается (снова 10 попыток и новое загаданное число)
* — если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
* — если пользователь нажимает "Отмена", то игра выводит прощальное сообщение и завершается.
— если закончились попытки то программа сообщает: "Попытки закончились, хотите сыграть еще?"
Программа должны быть выполнена с помощью рекурсии, без единого цикла.
Загаданное число и оставшиеся кол-во попыток должно храниться «в замыкании»*/

let isNumber = function(n) {
    return !isNaN(parseFloat(n));
};

function startGame() {
    let guess = 60,
        counter = 10;
    guessNumber();

    function guessNumber() {
        let number = prompt('Угадай число от 1 до 100');
        if (number == guess) {
            if (confirm('Вы угадали!!! Хотели бы сыграть еще?')) counter = 10, guessNumber();
        } else if (!number) {
            alert('Игра окончена');
        } else if (counter <= 0) {
            if (confirm('Попытки закончились, хотите сыграть еще?')) counter = 10, guessNumber();
        } else if (!isNumber(number)) {
            alert("Введите число");
            guessNumber();
        } else if (number < guess && counter != 1) {
            alert(`Загаданное число меньше, осталось попыток ${counter-1}`);
            counter--;
            guessNumber();
        } else if (number > guess && counter != 1) {
            alert(`Загаданное число больше, осталось попыток ${counter-1}`);
            counter--;
            guessNumber();
        }
    }
};
startGame();