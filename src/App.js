const initialProjects = [
  {
    id: 1,
    garment: "Shorts",
    fabric: "linen",
    started: false,
    completed: false,
  },
  {
    id: 2,
    garment: "Black Dress",
    fabric: "viscose",
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
  return <h1>Sewing Projects</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you want to add? </h3>
    </div>
  );
}
function ProjectList() {
  return (
    <div className="list">
      <ul>
        {initialProjects.map((project) => (
          <Project project={project} />
        ))}
      </ul>
    </div>
  );
}

function Project({ project }) {
  return (
    <li>
      <span>
        {project.garment} ({project.fabric})
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <em>
      <footer className="stats">
        You have x items in your list, and you already bought{" "}
      </footer>
    </em>
  );
}
