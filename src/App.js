import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import ProjectList from "./components/ProjectList";
import Stats from "./components/Stats";

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

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items from your project list?"
    );
    if (confirmed) setProjects([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddProjects={handleAddProjects} />

      <ProjectList
        projects={projects}
        onDeleteProject={handleDeleteProject}
        onToggleProject={handleToggleProject}
        onClearList={handleClearList}
      />
      <Stats projects={projects} />
      {/* 👆🏻 passing projects into stats as a prop. These props now need to be accepted as arguments in the corresponding functions */}
    </div>
  );
}
