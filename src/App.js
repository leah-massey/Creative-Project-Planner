import { useState } from "react";

export default function App() {
  const [projects, setProjects] = useState([]);

  function handleAddProjects(project) {
    setProjects((projects) => [...projects, project]); //we're not allowed to mutate an array in react - hence not using .push
  }

  function handleDeleteProject(id) {
    setProjects((projects) => projects.filter((project) => project.id !== id));
  }

  function handleToggleProject(id) {
    setProjects((projects) =>
      projects.map((project) =>
        project.id === id
          ? { ...project, completed: !project.completed }
          : project
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddProjects={handleAddProjects} />
      {/* it's convention to write the above line like this */}
      <ProjectList
        projects={projects}
        onDeleteProject={handleDeleteProject}
        onToggleProject={handleToggleProject}
      />
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
function ProjectList({ projects, onDeleteProject, onToggleProject }) {
  return (
    <div className="list">
      <ul>
        {projects.map((project) => (
          <Project
            project={project}
            onDeleteProject={onDeleteProject}
            key={project.id}
            onToggleProject={onToggleProject}
          />
        ))}
      </ul>
    </div>
  );
}

function Project({ project, onDeleteProject, onToggleProject }) {
  return (
    <li>
      <input
        type="checkbox"
        value={project.completed}
        onChange={() => onToggleProject(project.id)}
      />
      <span style={project.completed ? { textDecoration: "line-through" } : {}}>
        {project.projectDescription}
      </span>
      <button onClick={() => onDeleteProject(project.id)}>❌</button>
      {/* above line written as fnunction as we only want react to call the event onClick. (without '() =>' the function would be called automatically) */}
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
