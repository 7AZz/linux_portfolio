import WindowControls from "#components/WindowControls";
import { techStack } from "#constants/index";
import WindowWrapper from "#hoc/WindowWrapper";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack flex p-6 gap-10 font-roboto select-none">
        <pre className="text-[#87ac99] leading-[1.1] text-xs">
          {`                   -\`
                  .o+\`
                 \`ooo/
                \`+oooo:
               \`+oooooo:
               -+oooooo+:
             \`/:-:++oooo+:
            \`/++++/+++++++:
           \`/++++++++++++++:
          \`/+++ooooooooooooo/\`
         ./ooosssso++osssssso+\`
        .oossssso-\`\`\`\`/ossssss+\`
       -osssssso.      :ssssssso.
      :osssssss/        osssso+++.
     /ossssssss/        ossssoooo/
    /osssssssss/        ossssooooo:
   \`/osssssssss/        ossssoooooo-`}
        </pre>

        <div className="flex-1 space-y-1 text-sm">
          <p>
            <span className="text-[#87ac99] font-bold">tanveer</span>@
            <span className="text-[#87ac99] font-bold">portfolio</span>
          </p>
          <p className="opacity-20">-----------------------</p>
          <p>
            <span className="text-[#87ac99] font-bold">OS: </span>
            Portfolio x86_64
          </p>
          <p>
            <span className="text-[#87ac99] font-bold">Host: </span>
            Tanveer's Portfolio
          </p>
          <p>
            <span className="text-[#87ac99] font-bold">Kernel: </span>
            2026.06.20
          </p>
          <p>
            <span className="text-[#87ac99] font-bold">Uptime: </span>
            Always Online
          </p>
          <p>
            <span className="text-[#87ac99] font-bold">Packages: </span>
            {techStack.length} (tech-stacks)
          </p>
         
          

          <div className="pt-2" />

          {techStack.map(({ category, items }) => (
            <p key={category}>
              <span className="text-[#87ac99] font-bold">{category}: </span>
              {items.join(", ")}
            </p>
          ))}

          <div className="flex gap-1.5 pt-4">
            <div className="size-4 bg-gray-900" />
            <div className="size-4 bg-red-500" />
            <div className="size-4 bg-green-500" />
            <div className="size-4 bg-yellow-500" />
            <div className="size-4 bg-blue-500" />
            <div className="size-4 bg-purple-500" />
            <div className="size-4 bg-cyan-500" />
            <div className="size-4 bg-gray-200" />
          </div>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
