
let inp = document.getElementById('todoinput');
let btn = document.getElementById('btnNewTask');
let todoContainer = document.getElementById('todoContainer'); 
const taskArray = [];

let newTask = function () {
  let newTask = document.createElement('div');
  newTask.classList = "todolistTask";

  let newBtnChek = document.createElement('div');
  newBtnChek.classList = "сompleted"
  newBtnChek.innerHTML = "O";

  let newChecbox = document.createElement('div');
  newChecbox.classList = "checkboxInput"

  let newBtnDelet = document.createElement('div');
  newBtnDelet.classList = "deletTask";
  newBtnDelet.innerHTML = "X";

  let aroundP = document.createElement('div');
  aroundP.classList = "titlTask";

  let newP = document.createElement('p');
  newP.classList = "textIn";

  newBtnChek.appendChild(newChecbox);

  newTask.appendChild(newBtnChek);
  newTask.appendChild(aroundP);
  aroundP.appendChild(newP);
  newTask.appendChild(newBtnDelet);
  todoContainer.append(newTask);
  const newTaskId = taskArray.length + 1;
  let task = inp.value;
  taskArray.push({
    id: newTaskId,
    text: task,
    ischeck: false
  });
  newP.textContent += inp.value;
  inp.value = "";
}


let modalWindows = document.querySelector('.modelWindow')

//  АДД  ДОБАВЛЯЕТ НОВУ ЗАДАЧУ!!!!!!!
btn.onclick = function (e) {
  if (inp.value !== "" && inp.value.length <= 85) {
    newTask();

  } else {
    // modalWindows.style.opacity = '1';  
    let id = setInterval(animateSquare, 10);
  }

}

// УДАЛЕНИЕ И ПРОВЕРКА ЗАДАНИЯ!
todoContainer.addEventListener("click", function (e) {
  let target = e.target; // получаем кокретный таргет по которому мы нажаимаем.

  if (target.classList.contains('deletTask')) { 
    let item = target.parentElement;  
    item.remove(); 

  } else if (target.classList.contains('сompleted')) {
    let item = target.nextSibling.firstChild;   
    let checkDone = e.target
    checkDone.innerHTML = "V"
    item.style.textDecoration = 'line-through';
  } else {
    console.log('error')
  }
})



// ====================================================простенький Слайдер====================================================================================

let btnNext = document.getElementById('btnNext');
let btnBefore = document.getElementById('btnBefore');
let globalDiv = document.getElementById('globaldivforlisener');
let imgCollection = document.getElementsByTagName("img");
const sliderWalaper = document.querySelector(".slider-wrapper")
// let imgLenght = imgCollection.length-1;
let offset = 0;
console.log(offset)



globalDiv.addEventListener('click', function (e) {

  if (e.target == btnNext) {
    offset = offset + 700;
    if (offset > 2100) {
      offset = 0;
    }
    sliderWalaper.style.left = -offset + 'px';
  }

  if (e.target == btnBefore) {
    offset = offset - 700;
    if (offset < 0) {
      offset = 2100;
    }
    sliderWalaper.style.left = -offset + 'px';
  }

})

