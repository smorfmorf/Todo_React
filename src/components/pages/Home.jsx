import React from "react";
import TodoItem from "../item/TodoItem";
import CreateTodo from "../create-todo/CreateTodo";
const data = [
    { id: 0, title: "Первое дело", isCompleted: false },
    { id: 1, title: "Второе дело", isCompleted: false },
    { id: 2, title: "Третье дело", isCompleted: false },
];

const Home = () => {
    const [todos, setTodos] = React.useState(data);

    const changeTodo = (id) => {
        const copy = [...todos];
        const current = copy.find((t) => t.id === id);
        current.isCompleted = !current.isCompleted;
        setTodos(copy);
    };

    const removeTodo = (id) => {
        // setTodos([...todos].filter((item) => item.id !== id));
        const copy = [...todos].filter((item) => item.id !== id);
        setTodos(copy);
    };

    //! window.addTodo = addTodo;

    return (
        <div className=" text-white w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-8">Todo mazaka</h1>
            {todos.map((todo) => (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    changeTodo={changeTodo}
                    removeTodo={removeTodo}
                />
            ))}
            <CreateTodo setTodos={setTodos} />
        </div>
    );
};

export default Home;
