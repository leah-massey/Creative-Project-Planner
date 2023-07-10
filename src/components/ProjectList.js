import { useState } from "react";
import Project from "./Project";

export default function ProjectList({
  projects,
  onDeleteProject,
  onToggleProject,
  onClearList,
}) {
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
            Size
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
            <button className="clear-button" onClick={() => onClearList()}>
              Clear List
            </button>
          </p>
        </div>

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
      </div>
    </div>
  );
}
