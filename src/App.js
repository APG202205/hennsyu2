import React, { useState } from "react";

export const App = () => {
  const [input, setInput] = useState("");
  const [todoLists, setTodoLists] = useState([]);

  const handleOnSubmit = () => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      value: input
    };
    if (input !== "") setTodoLists([...todoLists, newTodo]);
    setInput("");
  };

  const addTodo = (e) => {
    e.preventDefault();
    handleOnSubmit();
  };

  const deleteListButton = (id) => {
    const newArray = todoLists.filter((todoLists) => todoLists.id !== id);
    setTodoLists(newArray);
  };

  return (
    <>
      <h1 className="text-center text-3xl font-bold mt-10">
        Todo List Practice
      </h1>
      <p>変更テスト</p>
      <div className="text-center mt-7">
        <form onSubmit={addTodo}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="タスクを入力"
            className=" p-3 w-4/5 border-2"
          />
          <button
            type="submit"
            className="bg-indigo-700 font-semibold text-white py-2 px-4 rounded m-6 w-3/4 container mx-auto"
          >
            追加
          </button>
        </form>
        <div className="mt-3 container mx-auto">
          {todoLists.map((todoList) => {
            return (
              <>
                <ul className="flex justify-between mx-20">
                  <li key={todoList.id}>{todoList.id}</li>
                  <li>{todoList.value}</li>
                  <li>
                    <button onClick={() => deleteListButton(todoList.id)}>
                      削除
                    </button>{" "}
                  </li>
                </ul>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
