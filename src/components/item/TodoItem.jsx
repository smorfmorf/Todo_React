import React from "react";
import Check from "./Check";
import { BsFillTrashFill } from "react-icons/bs";
import cn from "classnames";
const TodoItem = ({ todo, changeTodo, removeTodo }) => {
    return (
        <div className="flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full">
            <button
                onClick={() => changeTodo(todo.id)}
                className="flex items-center "
            >
                <Check isCompleted={todo.isCompleted} />
                <span className={cn({ "line-through": todo.isCompleted })}>
                    {todo.title}
                </span>
            </button>
            <button onClick={() => removeTodo(todo.id)}>
                <BsFillTrashFill size={22} className="text-gray-500" />
            </button>
        </div>
    );
    // cn from classnames  cn(1 аргемент указываем классы которые всегда), {'класс который нужен':при каком условии срабатывает}
};

export default TodoItem;
