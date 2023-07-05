import React, { useRef, useState } from "react";
import "./styles.css";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}
const InputFiled = ({ todo, setTodo, handleAddTodo }: props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAddTodo(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="input"
        ref={inputRef}
        placeholder="Enter a task"
        className="input_box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input_submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputFiled;
