const initialProjects = [
  {
    id: 1,
    category: "sewing",
    item: "Shorts",
    material: "linen",
    projectSize: "M",
    started: false,
    completed: false,
  },
  {
    id: 2,
    category: "sewing",
    item: "Black Dress",
    material: "viscose",
    projectSize: "L",
    started: false,
    completed: false,
  },

  {
    id: 3,
    category: "sewing",
    item: "Cream Skirt",
    material: "linen viscose",
    projectSize: "L",
    started: true,
    completed: true,
  },

  {
    id: 4,
    category: "art",
    item: "Christmas cards",
    material: "gouache",
    projectSize: "M",
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
  return <h1>Creative Projects</h1>;
}

function Form() {
  return (
    <form className="add-form">
      <h3>Project Type</h3>
      <select>
        {["Sewing", "Art", "Coding", "Interior", "Other"].map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </select>

      <h3>Project Size</h3>
      <select>
        {["XS", "S", "M", "L"].map((size) => (
          <option value={size} key={size}>
            {size}
          </option>
        ))}
      </select>

      <h3>Project Name</h3>
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
        {project.item} ({project.material})
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
