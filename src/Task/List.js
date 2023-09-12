import React from 'react';
import ListItem from './ListItem';

const List = () => {
    const plan= [
    {id:1, name:"Пройти курс react"},
    {id:1, name:"Написать компонент ToDo"},
    {id:1, name:"Сдать задание"},
    {id:1, name:"Радоваться жизни"}
];
    return (
        <div>
            <ListItem plan ={plan}/>
        </div>
    );
}
export default List;