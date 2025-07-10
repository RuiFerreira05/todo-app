"use client";

import { useRef } from "react";

export default function AddTodo() {
  const inputRef = useRef(null);

  const handleTodo = (e) => {
    e.preventDefault();
    const todoText = inputRef.current.value.trim();
  };

  return (
    <form
      onSubmit={handleTodo}
      className="border-2 p-2 flex justify-between w-100"
    >
      <input
        className="outline-none"
        type="text"
        placeholder="Enter todo"
        ref={inputRef}
      />
      <button className="border-2 p-2 rounded-2xl w-20" type="submit">
        Add
      </button>
    </form>
  );
}
