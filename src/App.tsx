import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

import { Dock, Navbar, Welcome } from "#components";
import {
  Finder,
  Resume,
  Safari,
  Terminal,
  TextFile,
  ImageFile,
  Contact,
} from "#windows/index";

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
      <Finder />
      <TextFile />
      <ImageFile />
      <Contact />
    </main>
  );
};

export default App;
