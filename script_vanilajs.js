var buttonNewTask = document.getElementsByClassName('antc-text-button')[0]; //получаем элемент Кнопка добавить дело, первый в коллеции
var nameTask = document.getElementsByClassName('antc-text-nameNewTask')[0]; //получаем элемент поле с текстом для названия дела, первый в коллеции
var descriptionTask = document.getElementsByClassName('antc-main-field-label-description')[0]; //получаем элемент поле с описание названия дела,  первый в коллеции

buttonNewTask.onclick = function(){
  if ((nameTask.value !='') & (descriptionTask.value !=''))  //проверяем ввели ли название и описание
  {
      var containerTasks = document.getElementsByClassName('list-tasks-column')[0];//new 22 09 2020
      var ltcHeader = document.getElementsByClassName('ltc-header')[0]; // new 22 09 2020

      var listNameTasks = containerTasks.querySelectorAll('.ltc-nameTask'); // new 22 09 2020
      var listDescritionTasks = containerTasks.querySelectorAll('.ltc-descriptionTask'); // new 22 09 2020

      if (listNameTasks.length==0){  // нет задач
          var emptyBlock = document.getElementsByClassName('ltc-emptylist')[0];
          emptyBlock.remove();
          ltcHeader.insertAdjacentHTML('afterend',
            '<div class="ltc-task">' +
              '<div class="ltc-nameTask">'+ nameTask.value +'</div>'+
              '<button class="button-deleteTask" type="button" name="deleteTask"><img src="img/del-button.png" alt="delete"></button>'+
              '<button class="button-rowDown" type="button" name="rowDown"><img src="img/rect-down.png" alt="hide"></button>'+
            '</div>'+
            '<div class="ltc-descriptionTask">'+
              descriptionTask.value +
            '</div>');

          } else{  //есть задачи
              //берем последнюю задачу и добавлеям новую в конец
              listDescritionTasks[listNameTasks.length-1].insertAdjacentHTML('afterend',
                '<div class="ltc-task">' +
                  '<div class="ltc-nameTask">'+ nameTask.value +'</div>'+
                  '<button class="button-deleteTask" type="button" name="deleteTask"><img src="img/del-button.png" alt="delete"></button>'+
                  '<button class="button-rowDown" type="button" name="rowDown"><img src="img/rect-down.png" alt="hide"></button>'+
                '</div>'+
                '<div class="ltc-descriptionTask">'+
                  descriptionTask.value +
                '</div>');
          }




    }
    else {
          alert('Не заполнены все обязательные поля!');
    }
//     //удаляем Список пуст
//     $('.ltc-emptylist').remove();
//
//     //Добавляем задачу
// //     $('.list-tasks-column').append(
//       '<div class="ltc-task">'+
//         '<div class="ltc-nameTask">'+ $('.antc-text-nameNewTask').val() +'</div>'+
//         '<button class="button-deleteTask" type="button" name="deleteTask"><img src="img/del-button.png" alt="delete"></button>'+
//         '<button class="button-rowDown" type="button" name="rowDown"><img src="img/rect-down.png" alt="hide"></button>'+
//       '</div>'+
//       '<div class="ltc-descriptionTask">'+
//         $('.antc-text-descriptonNewTask').val()+
//       '</div>');
//
//     } else {
//       alert('Не заполнены все обязательные поля!');
//     }
// });


};
