import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const TextFile = () => {
  const { window: windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const images = [data.image, data.imageUrl].filter(Boolean);

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{data.name}</h2>
      </div>

      <div className="p-5 space-y-4 text-sm text-gray-700">
        {images.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {images.map((src, index) => (
              <img
                key={`${data.name}-media-${index}`}
                src={src}
                alt={data.name}
                className="w-full h-auto rounded"
                loading="lazy"
              />
            ))}
          </div>
        )}

        {data.subtitle && (
          <p className="text-lg font-semibold">{data.subtitle}</p>
        )}

        {data.description?.map((paragraph, index) => (
          <p
            key={`${data.name}-para-${index}`}
            className="space-y-3 leading-relaxed text-base text-gray-800"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </>
  );
};

const TextFileWindow = WindowWrapper(TextFile, "txtfile");

export default TextFileWindow;
