import "./styles.css";
import { useState, useEffect, useRef } from "react";

export default function FunctionComponent() {
  const ref = useRef();

  const [isModalOpen, setModalOpen] = useState(false);

  // useOnClickOutside nhận vào 2 params.
  // param thứ 1 là ref để xác định đâu là "outside"
  // param thử 2 là hàm sẽ được thực thi khi xảy ra click bên ngoài component được gắp ref
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div className="container">
      <div className="modal">
        {isModalOpen ? (
          <div ref={ref}>👋 Click bên ngoài để đóng modal</div>
        ) : (
          <button onClick={() => setModalOpen(true)}>Mở Modal</button>
        )}
      </div>
    </div>
  );
}

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
