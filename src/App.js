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
      <Stats projects={projects} />
      {/* 👆🏻 passing projects into stats as a prop. This prop now needs to be accepted as an argument in the stats function */}
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
  const [sortByType, setSortByType] = useState("allTypes");
  const [sortBySize, setSortBySize] = useState("allSizes");
  // const [sortByStatus, setSortByStatus] = useState("all");
  // const [sortByDate, setSortByDate] = useState("newest");

  let sortedProjects;

  //* sorting by date not currently working 👇🏻
  // if (sortByDate === "newest") sortedProjects = projects;
  // if (sortByDate === "oldest") sortedProjects = projects.slice().reverse();

  //* sorting by status not currently working
  // if (sortByStatus === "all") sortedProjects = projects;
  // if (sortByStatus === "incomplete")
  //   sortedProjects = projects
  //     .slice()
  //     .sort((a, b) => Number(!a.complete) - Number(!b.complete));

  // sorting by type
  if (sortByType === "allTypes") sortedProjects = projects;

  if (sortByType === "sewing")
    sortedProjects = projects
      .slice()
      .filter((project) => project.projectType === "Sewing");

  if (sortByType === "coding")
    sortedProjects = projects
      .slice()
      .filter((project) => project.projectType === "Coding");
  if (sortByType === "art")
    sortedProjects = projects
      .slice()
      .filter((project) => project.projectType === "Art");
  if (sortByType === "interior")
    sortedProjects = projects
      .slice()
      .filter((project) => project.projectType === "Interior");
  if (sortByType === "other")
    sortedProjects = projects
      .slice()
      .filter((project) => project.projectType === "Other");

  // sorting by project size
  if (sortBySize === "xs")
    sortedProjects = projects
      .slice()
      .filter((project) => project.projectSize === "XS");

  if (sortBySize === "s")
    sortedProjects = projects
      .slice()
      .filter((project) => project.projectSize === "S");

  if (sortBySize === "m")
    sortedProjects = projects
      .slice()
      .filter((project) => project.projectSize === "M");

  if (sortBySize === "l")
    sortedProjects = projects
      .slice()
      .filter((project) => project.projectSize === "L");

  return (
    <div className="list">
      <ul>
        {sortedProjects.map((project) => (
          <Project
            project={project}
            onDeleteProject={onDeleteProject}
            key={project.id}
            onToggleProject={onToggleProject}
          />
        ))}
      </ul>

      {/*//* sort by date not currently working*/}
      {/* <div className="actions">
        <p>
          by date
          <select
            value={sortByDate}
            onChange={(e) => setSortByDate(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </p>
      </div> */}

      {/* //* sort by status not currenlty working*/}
      {/* <div className="actions">
        <p>
          project status
          <select
            value={sortByType}
            onChange={(e) => setSortByStatus(e.target.value)}
          >
            <option value="all">All</option>
            <option value="incomplete">incomplete</option>
          </select>
        </p>
      </div> */}

      {/* sort by type */}
      <div className="actions">
        <p>
          project type
          <select
            value={sortByType}
            onChange={(e) => setSortByType(e.target.value)}
          >
            <option value="allTypes">All</option>
            <option value="sewing">Sewing</option>
            <option value="coding">Coding</option>
            <option value="art">Art</option>
            <option value="interior">Interior</option>
            <option value="other">Other</option>
          </select>
        </p>
      </div>

      {/* sorting by size */}
      <div className="actions">
        <p>
          size
          <select
            value={sortBySize}
            onChange={(e) => setSortBySize(e.target.value)}
          >
            <option value="allSizes">All</option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
          </select>
        </p>
      </div>
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

function Stats({ projects }) {
  if (projects.length === 0) {
    return (
      <em>
        <footer className="stats">
          You don't currently have any projecst on your list. Surely there's
          something you'd like to be making?
        </footer>
      </em>
    );
  }
  const numProjects = projects.length;
  const numCompleted = projects.filter(
    (project) => project.completed === true
  ).length;
  return (
    <em>
      <footer className="stats">
        {numProjects === numCompleted
          ? "You have completed all of your projects 💪🏻"
          : numProjects === 1
          ? "You have one project on your list."
          : `You have ${numProjects} projects in your list, ${numCompleted} of which you
        have completed.`}
      </footer>
    </em>
  );
}
