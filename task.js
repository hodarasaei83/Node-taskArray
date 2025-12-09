import { writeFile } from "fs/promises";

const TASK_COUNT = 10;

const STATUSES = ["todo", "doing", "done"];

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateTasks = (count) => {
  return Array.from({ length: count }, (_, i) => {
    const id = i + 1;
    const title = `Task ${id}`;
    const description = `Description for task ${id}`;
    const createdAt = new Date().toISOString();
    const status = STATUSES[random(0, STATUSES.length - 1)];

    return { id, title, description, createdAt, status };
  });
};

const tasks = generateTasks(TASK_COUNT);

const saveToFile = async (data) => {
  try {
    await writeFile("tasks.json", JSON.stringify(data, null, 2));
    console.log("tasks.json saved successfully");
  } catch (error) {
    console.error("Error writing file:", error);
  }
};

saveToFile(tasks);
