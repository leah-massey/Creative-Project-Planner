import { useState } from "react";

const initialProjects = [
  {
    id: 1,
    category: "sewing",
    item: "Shorts",

    projectSize: "M",
    started: false,
    completed: false,
  },
  {
    id: 2,
    category: "sewing",
    item: "Black Dress",

    projectSize: "L",
    started: false,
    completed: false,
  },

  {
    id: 3,
    category: "sewing",
    item: "Cream Skirt",

    projectSize: "L",
    started: true,
    completed: true,
  },

  {
    id: 4,
    category: "art",
    item: "Christmas cards",

    projectSize: "M",
    started: false,
    completed: false,
  },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <ProjectList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Creative Projects</h1>;
}

function Form() {
  const [projectDescription, setProjectDescription] = useState("");
  const [projectSize, setProjectSize] = useState("XS");
  const [projectType, setProjectType] = useState("Sewing");

  function handleSubmit(e) {
    e.preventDefault();

    if (!projectDescription) return;

    const newProject = {
      projectDescription,
      projectType,

      projectSize,
      started: false,
      completed: false,
      id: Date.now(),
    };
    console.log(newProject);

    setProjectDescription("");
    setProjectSize("XS");
    setProjectType("Sewing");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Project Type</h3>
      <select
        value={projectType}
        onChange={(e) => {
          setProjectType(e.target.value); // this is always a string - to make it a number : Number(e.target.value)
        }}
      >
        {["Sewing", "Art", "Coding", "Interior", "Other"].map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </select>

      <h3>Project Size</h3>
      <select
        value={projectSize}
        onChange={(e) => {
          setProjectSize(e.target.value);
        }}
      >
        {["XS", "S", "M", "L"].map((size) => (
          <option value={size} key={size}>
            {size}
          </option>
        ))}
      </select>

      <h3>Project Description</h3>
      <input
        type="text"
        placeholder="new project..."
        value={projectDescription}
        onChange={(e) => {
          setProjectDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
function ProjectList() {
  return (
    <div className="list">
      <ul>
        {initialProjects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </ul>
    </div>
  );
}

function Project({ project }) {
  return (
    <li>
      <span style={project.completed ? { textDecoration: "line-through" } : {}}>
        {project.item} ({project.material})
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <em>
      <footer className="stats">
        You have x items in your list, and you already finished{" "}
      </footer>
    </em>
  );
}
