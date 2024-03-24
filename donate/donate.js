const amount_field = document.querySelector('#enter');
const money_picture = document.querySelector('.feed__button');
const error_message = document.createElement('p'); // Создаем элемент для вывода сообщения об ошибке
error_message.style.color = 'red'; // Устанавливаем цвет текста сообщения об ошибке
error_message.style.marginTop = '5px'; // Устанавливаем отступ сверху для сообщения об ошибке
error_message.style.textAlign = 'center'; // Выравниваем текст по центру
money_picture.parentNode.insertBefore(error_message, money_picture.nextSibling); // Вставляем сообщение об ошибке после кнопки

amount_field.value = "";

function toggleButtonState(isValid) {
    if (!isValid) {
        money_picture.setAttribute('disabled', true); // Делаем кнопку некликабельной, если значение неверное
        error_message.textContent = "Invalid value"; // Отображаем сообщение об ошибке
        document.querySelector('.donate__container').style.height = 'calc(100% + 15px)'; // Увеличиваем высоту контейнера на 10 пикселей
    } else {
        money_picture.removeAttribute('disabled'); // Делаем кнопку кликабельной, если значение верное
        error_message.textContent = ""; // Очищаем сообщение об ошибке
        document.querySelector('.donate__container').style.height = ''; // Сбрасываем установленную высоту контейнера
    }
    money_picture.style.cursor = isValid ? 'pointer' : 'not-allowed'; // Устанавливаем стиль курсора
}

amount_field.addEventListener("input", e => {
    let input_text = e.target.value;
    if (input_text.length === 0) {
        amount_field.style.borderColor = 'rgb(254, 143, 24)';
        toggleButtonState(false); // Вызываем функцию для управления состоянием кнопки
        return;
    }
    let isValid = /^\d+$/.test(input_text);
    amount_field.style.borderColor = (isValid ? 'green' : 'red');
    toggleButtonState(isValid); // Вызываем функцию для управления состоянием кнопки
});



let progress_bar_points = document.querySelector('.pick_and_feed__progress_bar-points');
let progress_bar_prices = document.querySelector('.pick_and_feed__progress_bar-prices');
let selected_index = -1;
progress_bar_points.addEventListener('click', e=>{
    if(!e.target.classList.contains('pick_and_feed__progress_bar-point') && !e.target.classList.contains('pick_and_feed__progress_bar-point-inner')) return;
    let parent = e.target.parentNode, child=e.target;
    if(parent.classList.contains('pick_and_feed__progress_bar-point')){
        child = parent;
        parent=parent.parentNode;
    }
    let selected_index_next = Array.prototype.indexOf.call(parent.children, child);
    if(selected_index_next!==selected_index){
        if(selected_index!==-1){
            progress_bar_prices.children[selected_index].classList.toggle('pick_and_feed__progress_bar-price-selected');
            progress_bar_points.children[selected_index].classList.toggle('pick_and_feed__progress_bar-point-selected');
        }
        selected_index=selected_index_next;
        child.classList.toggle('pick_and_feed__progress_bar-point-selected');
        progress_bar_prices.children[selected_index].classList.toggle('pick_and_feed__progress_bar-price-selected');
    }
})
progress_bar_prices.addEventListener('click', e=>{
    if(!e.target.classList.contains('pick_and_feed__progress_bar-price')) return;
    let parent = e.target.parentNode, child=e.target;
    let selected_index_next = Array.prototype.indexOf.call(parent.children, child);
    if(selected_index_next!==selected_index){
        if(selected_index!==-1){
            progress_bar_prices.children[selected_index].classList.toggle('pick_and_feed__progress_bar-price-selected');
            progress_bar_points.children[selected_index].classList.toggle('pick_and_feed__progress_bar-point-selected');
        }
        selected_index=selected_index_next;
        child.classList.toggle('pick_and_feed__progress_bar-price-selected');
        progress_bar_points.children[selected_index].classList.toggle('pick_and_feed__progress_bar-point-selected');
    }
})

const donate_field = document.getElementById('pick_and_feed__custom-donation-field');
const donate_button = document.querySelector('.pick_and_feed__button-feed');
const donate_regex = /^[1-9][0-9]*$/g
donate_field.value="";

donate_button.disabled=true;
donate_button.style.cursor='not-allowed';
donate_button.style.background='gray';
donate_field.style.borderColor='rgb(254, 143, 24)';

donate_field.addEventListener("input", e=>{
    let input_text = e.target.value;
    if(input_text.length===0){
        donate_button.disabled=true;
        donate_button.style.cursor='not-allowed';
        donate_field.style.borderColor='rgb(254, 143, 24)';
        return;
    }
    let isValid = input_text.match(donate_regex);
    donate_button.disabled=!isValid;
    donate_field.style.borderColor = (isValid?'green':'red');
    donate_button.style.cursor=(isValid?'pointer':'not-allowed');
    donate_button.style.background='';

})


