import React, { useState } from "react";

function ListItem() {
  const [done, setDone]=useState(false);

const handleClick = ()=>{
  setDone(!done);
    return(
      <div onClick={handleClick}
      style={{
        textDecoration: done ? "line-through" : 'unset'
      }}>
        <ul>
        <li>Пройти курс react</li>
    <li>Написать компонент ToDo</li>
    <li>Сдать задание</li>  
    <li>Радоваться жизни</li>
        </ul>
      </div>
    )
  } }
  export default ListItem;
  /*1) Добавить в компонент ListItem state с использование хука useState 

2) Назвать состояние done.

3) При клике на элемент списка менять состояние.

4) Используя это состояние добавлять или убирать стиль на компоненте при клике.

style={{
      textDecoration: done ? "line-through" : 'unset'
    }}
5) Проверить как реагирует компонента на клик.

6) Просмотреть компонент в react developers tools проверить как меняется состояние в свойствах.

*/