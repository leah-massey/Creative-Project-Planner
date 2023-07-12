import { useState } from "react";
import Project from "./Project";
import FilterButton from "./FilterButton";

const FILTER_MAP = {
  All: () => true,
  Active: (project) => !project.completed,
  Completed: (project) => project.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function ProjectList({
  projects,
  onDeleteProject,
  onToggleProject,
  onClearList,
}) {
  const [sortByType, setSortByType] = useState("allTypes");
  const [sortBySize, setSortBySize] = useState("allSizes");
  const [filterByCompletion, setFilterByCompletion] = useState("All");
  // const [sortByStatus, setSortByStatus] = useState("all");
  // const [sortByDate, setSortByDate] = useState("newest");
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filterByCompletion}
      setFilterByCompletion={setFilterByCompletion}
    />
  ));

  let sortedProjects;

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
      <>
        <div className="filters actions">{filterList}</div>
        <ul>
          {sortedProjects
            .filter(FILTER_MAP[filterByCompletion])
            .map((project) => (
              <Project
                project={project}
                onDeleteProject={onDeleteProject}
                key={project.id}
                onToggleProject={onToggleProject}
              />
            ))}
        </ul>
      </>

      {/* sort by type */}
      <div className="filter">
        <div className="filter-heading">
          <p>Filter by: </p>
        </div>
        <div className="actions">
          <p>
            Type
            <select
              value={sortByType}
              onChange={(e) => setSortByType(e.target.value)}
            >
              <option value="allTypes"></option>
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
            Size
            <select
              value={sortBySize}
              onChange={(e) => setSortBySize(e.target.value)}
            >
              <option value="allSizes"></option>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
            </select>
            <button
              className="btn pale-btn toggle-btn"
              onClick={() => onClearList()}
            >
              Clear List
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
