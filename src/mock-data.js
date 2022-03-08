const mockData = {
  todo: {
    label: "todo",
    name: "📝 To Do",
    items: [
      {
        title: "Build card",
        id: 0,
        content: "Build card for kanban",
        url: "/kanban-1",
        status: "todo",
      },
      {
        title: "Database",
        id: 1,
        content: "Use prisma as db for kanban tasks",
        url: "/kanban-1",
        status: "todo",
      },
      {
        title: "HTML Section",
        id: 2,
        content: "Make 3 sections for Kanban",
        url: "/kanban-2",
        status: "todo",
      },
      {
        title: "Tasks",
        id: 3,
        content: "Make kanban tasks draggable",
        url: "/kanban-3",
        status: "todo",
      },
      {
        title: "Update task",
        id: 4,
        content: "Let kanban task update status to in progress or done",
        url: "/kanban-4",
        status: "todo",
      },
      {
        title: "Kanban",
        id: 5,
        content: "Viola!",
        url: "/kanban-5",
        status: "todo",
      },
    ],
  },
  inProgress: {
    label: "inProgress",
    name: "⏳ In Progress",
    items: [
      {
        title: "Kanban",
        id: 111,
        content: "Build card for kanban",
        url: "/kanban",
        status: "inProgress",
      },
      {
        title: "Demo title",
        id: 222,
        content: "Use prisma as db for kanban tasks",
        url: "/demo-title",
        status: "inProgress",
      },
    ],
  },
  done: {
    label: "done",
    name: "✅ Done",
    items: [],
  },
  // approved: {
  //   label: "approved",
  //   name: "💯 Approved",
  //   items: [],
  // },
};

export default mockData;
