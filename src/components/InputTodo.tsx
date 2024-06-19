import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import { Input, Button, Space } from "antd";

export default function InputTodo() {
  const [addTask, setAddTask] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  function handleClickAddTask() {
    setAddTask([...addTask, inputValue]);
  }
  function handleChangeValue(event: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(event.target.value);
  }
  console.log(inputValue, addTask);
  return (
    <>
      <Space.Compact style={{ width: "400px" }}>
        <Input placeholder="Task" onChange={handleChangeValue} />
        <Button type="primary" onClick={handleClickAddTask}>
          Add Task
        </Button>
      </Space.Compact>
      <TaskList todoList={addTask} />
    </>
  );
}
