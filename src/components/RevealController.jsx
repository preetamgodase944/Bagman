"use client";

import { usePathname } from "next/navigation";
import { useReveal } from "../utils/useReveal";

// Re-scans the DOM for `.reveal` elements on every route change,
// mirroring the old AppShell useReveal([location.pathname]) behavior.
export default function RevealController() {
  const pathname = usePathname();
  useReveal([pathname]);
  return null;
}
