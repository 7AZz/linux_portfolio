import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

import { Dock, Navbar, Welcome } from "#components";
import Terminal from "#windows/Terminal";
import Safari from "#windows/Safari";
import Resume from "#windows/Resume";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
    </main>

  );
};

export default App;
