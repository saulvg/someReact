import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Disclaimer = ({ children, className }) => (
  <div className={className}>
    <div className="flex gap-1 shadow-lg p-2 bg-yellow-400/60 rounded-md w-fit my-4">
      <FontAwesomeIcon icon={faAsterisk} className="h-2 w-2" />
      <p className="font-semibold text-xs">{children}</p>
    </div>
  </div>
);

export { Disclaimer };
