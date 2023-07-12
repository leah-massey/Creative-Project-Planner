import { FaTimes } from "react-icons/fa";

export default function Project({ project, onDeleteProject, onToggleProject }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={project.completed}
        onChange={() => onToggleProject(project.id)}
      />
      <span style={project.completed ? { textDecoration: "line-through" } : {}}>
        {project.projectDescription}
      </span>
      <button onClick={() => onDeleteProject(project.id)}>{<FaTimes />}</button>
      {/* above line written as fnunction as we only want react to call the event onClick. (without '() =>' the function would be called automatically) */}
    </li>
  );
}
