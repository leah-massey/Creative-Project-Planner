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
  const [projects, setProjects] = useState([]);

  function handleAddProjects(project) {
    setProjects((projects) => [...projects, project]); //we're not allowed to mutate an array in react - hence not using .push
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddProjects={handleAddProjects} />
      {/* it's convention to write the above line like this */}
      <ProjectList projects={projects} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Creative Projects</h1>;
}

function Form({ onAddProjects }) {
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
    onAddProjects(newProject);

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
function ProjectList({ projects }) {
  return (
    <div className="list">
      <ul>
        {projects.map((project) => (
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
        {project.projectDescription}
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
