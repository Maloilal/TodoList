import { List, Checkbox, Typography } from "antd";
import { useState } from "react";
import type { GetProp } from "antd";

interface ITaskList {
  todoList: string[];
}

export default function TaskList({ todoList }: ITaskList) {
  const [finishTask, setFinishTask] = useState<number[]>([]);

  const handleChangeCheckbox = (
    index: number,
    isChecked: boolean,
    task: string
  ) => {
    if (isChecked) {
      setFinishTask([...finishTask, index]);
      return;
    }
    setFinishTask(finishTask.filter((item, i) => i !== index));
  };

  return (
    <>
      <List
        size="small"
        style={{ width: "400px", margin: "auto", marginTop: "10px" }}
        bordered
        dataSource={todoList}
        renderItem={(item: string, index: number) => {
          if (finishTask.includes(index)) {
            return <></>;
          }
          return (
            <List.Item key={index}>
              <Typography.Text> {item}</Typography.Text>
              <Checkbox
                onChange={(event) => setFinishTask([...finishTask, index])}
                style={{ float: "right" }}
              />
            </List.Item>
          );
        }}
      ></List>
      <List
        size="small"
        style={{ width: "400px", margin: "auto", marginTop: "10px" }}
        bordered
        dataSource={todoList}
        renderItem={(item: string, index: number) => {
          if (!finishTask.includes(index)) {
            return <></>;
          }
          return (
            <List.Item
              key={index}
              style={{
                background: "#f2a2a2",
                textDecoration: "line-through",
              }}
            >
              <Typography.Text> {item}</Typography.Text>
              <Checkbox
                checked={true}
                onChange={(event) =>
                  setFinishTask(finishTask.filter((item) => item !== index))
                }
                style={{ float: "right" }}
              />
            </List.Item>
          );
        }}
      ></List>
    </>
  );
}
