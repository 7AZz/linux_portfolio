import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

import { Dock, Navbar } from "#components";
import {
  Finder,
  Resume,
  Safari,
  Terminal,
  TextFile,
  ImageFile,
  Contact,
  Home,
} from "#windows/index";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <TextFile />
      <ImageFile />
      <Contact />
      <Home />
    </main>
  );
};

export default App;
