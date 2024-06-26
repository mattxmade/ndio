import { useCallback, useEffect, useRef, useState } from "react";

const useObserver = () => {
  const init = useRef(true);
  const [notification, setNotification] = useState(0);
  const [targetNode, setTargetNode] = useState<HTMLElement | null>();

  const initTargetNode = () => {};

  return {
    notification,
    initTargetNode,
  };
};

export default useObserver;
