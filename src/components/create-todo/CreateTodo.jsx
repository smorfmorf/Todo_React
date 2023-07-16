import React from "react";

const CreateTodo = ({ setTodos }) => {
    const [title, setTitle] = React.useState("");

    //*prev-предыдущее состояние
    const addTodo = (title) => {
        setTodos((prev) => [
            ...prev,
            { id: new Date(), title, isCompleted: false },
        ]);
        setTitle("");
    };

    return (
        <div className="flex items-center justify-between mb-4 rounded-2xl bg-gray-600 px-5 py-2 w-full mt-10">
            <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                type="text"
                onKeyPress={(e) => e.key === "Enter" && addTodo(title)}
                className="bg-transparent w-full border-none outline-none"
                placeholder="Enter Todo"
            />
        </div>
    );
};

export default CreateTodo;
