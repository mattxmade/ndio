import { styleConfig } from "@/app/style.config";
import { useEffect, useState } from "react";

const { sm, md, lg, xl } = styleConfig.screens;

const breakpoints = {
  sm: Number(sm.slice(0, -3)),
  md: Number(md.slice(0, -3)),
  lg: Number(lg.slice(0, -3)),
  xl: Number(xl.slice(0, -3)),
  "2xl": Number(styleConfig.screens["2xl"].slice(0, -3)),
};

const useBreakpoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState();
};

export default useBreakpoint;
