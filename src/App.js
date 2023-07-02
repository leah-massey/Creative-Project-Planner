const initialProjects = [
  {
    id: 1,
    garment: "Shorts",
    fabric: "linen",
    projectSize: "M",
    started: false,
    completed: false,
  },
  {
    id: 2,
    garment: "Black Dress",
    fabric: "viscose",
    projectSize: "L",
    started: false,
    completed: false,
  },

  {
    id: 3,
    garment: "Cream Skirt",
    fabric: "linen viscose",
    projectSize: "L",
    started: true,
    completed: true,
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
    <form className="add-form">
      <h3>What new project do you want to add? </h3>
      <select>
        {["XS", "S", "M", "L"].map((size) => (
          <option value={size} key={size}>
            {size}
          </option>
        ))}
      </select>
      <input type="text" placeholder="new project..." />
    </form>
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
      <span style={project.completed ? { textDecoration: "line-through" } : {}}>
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
        You have x items in your list, and you already finished{" "}
      </footer>
    </em>
  );
}
