import { useCallback, useEffect, useRef, useState } from "react";

const config = { attributes: true, childList: true, subtree: true };

const useObserver = () => {
  const init = useRef(true);
  const [notification, setNotification] = useState(0);
  const [targetNode, setTargetNode] = useState<HTMLElement | null>();

  const initTargetNode = useCallback(
    (element: HTMLElement) => {
      if (!element || targetNode) return;
      setTargetNode(element);
    },
    [targetNode]
  );

  const observerCallback = useCallback(
    (mutationList: MutationRecord[], observer: MutationObserver) => {
      for (const mutation of mutationList) {
        if (mutation.type === "childList") {
          setNotification((prev) => (prev += 1));
        }
      }
    },
    [notification]
  );

  useEffect(() => {
    if (!targetNode || !init.current) return;

    const observer = new MutationObserver(observerCallback);
    observer.observe(targetNode, config);
    init.current = false;

    return () => {
      observer.disconnect();
    };
  }, [targetNode]);

  return {
    notification,
    initTargetNode,
  };
};

export default useObserver;
