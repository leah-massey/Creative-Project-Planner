export default function Stats({ projects }) {
  if (projects.length === 0) {
    return (
      <em>
        <footer className="stats">
          You don't currently have any projecst on your list. Add something now
          and get making!
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
