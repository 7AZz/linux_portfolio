import { WindowControls } from "#components";
import { socials } from "#constants/index";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="p-5 space-y-5">
        <img
          src="/images/tanveer-pic.jpg"
          alt="Tanveer"
          className="w-20 rounded-full border-2 border-[var(--window-border)]"
        />
        <h3 className="text-[var(--window-text)]">Let's Connect</h3>
        <p className="text-[var(--window-text)]">Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>

        <p className="text-[var(--window-text-muted)] font-mono">tanveer.alam2209@gmail.com</p>

        <ul className="grid grid-cols-2 gap-3">
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} className="rounded-lg p-3 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300" style={{ backgroundColor: `${bg}33`, border: `1px solid ${bg}66` }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
                className="flex items-center gap-2"
              >
                <img src={icon} alt={text} className="size-5" />
                <p className="font-semibold text-xs text-[var(--window-text)]">{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
