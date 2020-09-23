var buttonNewTask = document.getElementsByClassName('antc-text-button')[0]; //получаем элемент Кнопка добавить дело, первый в коллеции
var nameTask = document.getElementsByClassName('antc-text-nameNewTask')[0]; //получаем элемент поле с текстом для названия дела, первый в коллеции
var descriptionTask = document.getElementsByClassName('antc-text-descriptonNewTask')[0]; //получаем элемент поле с описание названия дела,  первый в коллеции

buttonNewTask.onclick = function(){
  if ((nameTask.value !='') & (descriptionTask.value !=''))  //проверяем ввели ли название и описание
  {
      var containerTasks = document.getElementsByClassName('list-tasks-column')[0];
      var ltcHeader = document.getElementsByClassName('ltc-header')[0];

      var listNameTasks = containerTasks.querySelectorAll('.ltc-nameTask');
      var listDescritionTasks = containerTasks.querySelectorAll('.ltc-descriptionTask');
      if (listNameTasks.length==0){  // нет задач
          var emptyBlock = document.getElementsByClassName('ltc-emptylist')[0];
          emptyBlock.remove();
          ltcHeader.insertAdjacentHTML('afterend',
          '<div class="taskContainer">'+
            '<div class="ltc-task">' +
              '<div class="ltc-nameTask">'+ nameTask.value +'</div>'+
              '<button class="button-deleteTask" type="button" name="deleteTask"></button>'+
              '<button class="button-rowDown" type="button" name="rowDown"></button>'+
            '</div>'+
            '<div class="ltc-descriptionTask">'+
              descriptionTask.value +
            '</div>'+
          '</div>');

          } else{  //есть задачи
              //берем последнюю задачу и добавлеям новую в конец
              listDescritionTasks[listNameTasks.length-1].insertAdjacentHTML('afterend',
              '<div class="taskContainer">'+
                '<div class="ltc-task">' +
                  '<div class="ltc-nameTask">'+ nameTask.value +'</div>'+
                  '<button class="button-deleteTask" type="button" name="deleteTask"></button>'+
                  '<button class="button-rowDown" type="button" name="rowDown"></button>'+
                '</div>'+
                '<div class="ltc-descriptionTask">'+
                  descriptionTask.value +
                '</div>'+
              '</div>');
          }
    }
    else {
          alert('Не заполнены все обязательные поля!');
    }
};



document.body.addEventListener("click", function(event) { //ловим все нажатия кнопки
  if (event.target.classList.contains('button-deleteTask')){ //нажата кнопка удалить
      event.target.parentNode.nextSibling.remove();//удаляем описание задачи
      event.target.parentNode.remove();//удаляем задачу

      var containerTasks = document.getElementsByClassName('list-tasks-column')[0];
      var listNameTasks = containerTasks.querySelectorAll('.ltc-nameTask');
      if (listNameTasks.length==0){//последняя задача
        var ltcHeader = document.getElementsByClassName('ltc-header')[0];
        ltcHeader.insertAdjacentHTML('afterend',//добавляем слова Список пуст
            '<div class="ltc-emptylist">Список пуст...</div>');
      }
  }

  // var listNameTasks = containerTasks.querySelectorAll('.ltc-nameTask');
  if (event.target.classList.contains('button-rowDown')){
      event.target.parentNode.nextSibling.classList.toggle("hide-block");
      event.target.parentNode.classList.toggle("add-marginbottom-20px");
      event.target.classList.toggle('add-backgroundimage-rect-down-right');

  }
});
