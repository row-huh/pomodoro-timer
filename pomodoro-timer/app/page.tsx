"use client"

import { useState } from "react";


function addTask(task: string, tasks: string[]) {
  
}

export default function Home() {
  // usestate only stores while running (memory stays for the session)
  const [tasks, setTasks] = useState<string[]>([]);


  return (
    <div>
      <form>
        <label htmlFor="tasks"></label>
        <input type="text" />
        <input type="submit" onClick={addTask()} />
      </form>
    </div>
    // add a button + text field
    // clickin on button submits form
    // anything inside it appends to tasks usestate?
);
}

