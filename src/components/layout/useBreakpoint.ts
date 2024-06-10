"use client";

import { styleConfig } from "@/app/style.config";
import { useEffect, useState } from "react";

const { sm, md, lg, xl } = styleConfig.screens;

const breakpoints = {
  sm: Number(sm.slice(0, -2)),
  md: Number(md.slice(0, -2)),
  lg: Number(lg.slice(0, -2)),
  xl: Number(xl.slice(0, -2)),
  "2xl": Number(styleConfig.screens["2xl"].slice(0, -2)),
};

const useBreakpoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<
    keyof typeof breakpoints | null
  >(null);

  const handleResize = () => {
    if (window.innerWidth < breakpoints.md) setCurrentBreakpoint("sm");

    if (
      window.innerWidth >= breakpoints.md &&
      window.innerWidth < breakpoints.lg
    )
      setCurrentBreakpoint("md");

    if (
      window.innerWidth >= breakpoints.lg &&
      window.innerWidth < breakpoints.xl
    )
      setCurrentBreakpoint("lg");

    if (
      window.innerWidth >= breakpoints.xl &&
      window.innerWidth < breakpoints["2xl"]
    )
      setCurrentBreakpoint("xl");

    if (window.innerWidth >= breakpoints["2xl"]) setCurrentBreakpoint("2xl");
  };

  useEffect(() => {
    if (!window) return;

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    currentBreakpoint,
  };
};

export default useBreakpoint;
