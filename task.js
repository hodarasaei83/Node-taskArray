import { writeFile } from "fs/promises";

const TASK_COUNT = 10;

const STATUSES = ["todo", "doing", "done"];

const TITLES = [
  "Review pull request",
  "Fix login bug",
  "Design dashboard UI",
  "Write unit tests",
  "Optimize API performance",
  "Update documentation",
  "Refactor task module",
  "Implement authentication",
  "Handle error states",
  "Deploy to production"
];

const DESCRIPTIONS = [
  "Review the assigned pull request and provide feedback.",
  "Investigate and fix the issue preventing users from logging in.",
  "Create a clean and responsive design for the dashboard page.",
  "Write unit tests to cover critical business logic.",
  "Improve API response time and reduce unnecessary queries.",
  "Update project documentation to reflect recent changes.",
  "Refactor the task module to improve readability and maintainability.",
  "Add authentication flow using access and refresh tokens.",
  "Handle edge cases and error states properly across the app.",
  "Deploy the latest stable version to the production environment."
];

const randomIndex = (arr) => Math.floor(Math.random() * arr.length);

const generateTasks = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: TITLES[randomIndex(TITLES)],
    description: DESCRIPTIONS[randomIndex(DESCRIPTIONS)],
    createdAt: new Date().toISOString(),
    status: STATUSES[randomIndex(STATUSES)]
  }));

const tasks = generateTasks(TASK_COUNT);

const saveToFile = async (data) => {
  try {
    await writeFile("tasks.json", JSON.stringify(data, null, 2));
    console.log("tasks.json saved successfully");
  } catch (error) {
    console.error(error);
  }
};

saveToFile(tasks);
