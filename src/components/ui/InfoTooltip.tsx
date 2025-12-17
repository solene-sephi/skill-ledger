import { useState } from "react";
import { FiInfo } from "react-icons/fi";

interface InfoTooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  position?: "top" | "bottom" | "left" | "right";
  tooltipId: string;
}

const positionClasses = {
  top: "left-1/2 transform -translate-x-1/2 bottom-full mb-2",
  bottom: "left-1/2 transform -translate-x-1/2 top-full mt-2",
  left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
  right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
};

export default function InfoTooltip({
  text,
  position = "top",
  tooltipId,
  className,
}: InfoTooltipProps) {
  const [visible, setVisible] = useState(false);
  const positioning = positionClasses[position];
  const transitioning = "translate-y-1 group-hover:translate-y-0";

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <span className={`${className}`}>
      <span className="relative inline-flex items-center group">
        <button
          className="cursor-pointer"
          onTouchStart={show} // for mobile (no hide needeed)
          onMouseEnter={show} // for desktop
          onMouseLeave={hide} // for desktop
          onFocus={show}
          aria-label="Information supplémentaire"
          aria-describedby={tooltipId}
        >
          <FiInfo className="size-6 md:size-4" />
        </button>
        <span
          role="tooltip"
          id={tooltipId}
          className={`${positioning} ${transitioning} ${
            !visible && "hidden"
          } absolute bg-grey-900 text-white text-xs rounded py-1 px-2 z-10`}
        >
          {text}
        </span>
      </span>
    </span>
  );
}
