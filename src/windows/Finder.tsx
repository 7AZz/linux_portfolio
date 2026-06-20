import { WindowControls } from "#components";
import { locations } from "#constants/index";
import WindowWrapper from "#hoc/WindowWrapper";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import clsx from "clsx";
import { Search } from "lucide-react";

const Finder = () => {
  const { openWindow, focusWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");
    const key = `${item.fileType}${item.kind}`;
    openWindow(key, item);
    focusWindow(key);
  };

  const renderList = (name, items) => {
    const safeItems = Array.isArray(items) ? items : [];

    return (
      <div>
        <h3>{name}</h3>
        <ul>
          {safeItems.map((item) => {
            const isActive = item.id === activeLocation.id;

            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setActiveLocation(item)}
                  className={clsx(isActive ? "active" : "not-active")}
                  aria-current={isActive ? "page" : undefined}
                >
                  <img src={item.icon} className="w-4" alt={item.name} />
                  <p className="text-sm font-medium truncate">{item.name}</p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const hasChildren = Array.isArray(activeLocation?.children);
  const contentItems = hasChildren ? activeLocation.children : [];
  const emptyStateLabel =
    activeLocation?.kind === "file"
      ? "This file has no contents."
      : "This folder is empty.";

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="flex h-full">
        <div className="sidebar">
          {renderList("Favorites", Object.values(locations))}
          {renderList("My Projects", locations.work.children)}
        </div>
        <ul className="content">
          {contentItems.length > 0 ? (
            contentItems.map((item) => (
              <li
                key={item.id}
                className={item.position}
                onClick={() => openItem(item)}
              >
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </li>
            ))
          ) : (
            <li className="empty-state">
              <p>{emptyStateLabel}</p>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};
const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
