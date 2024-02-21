"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-8 z-10 mb-8">
      <div role="tablist" className="tabs-boxed tabs">
        <Link href="/" className={clsx("tab", pathname === "/" ? "tab-active" : null)}>
          Home
        </Link>
        <Link href="/experiences" className={clsx("tab", pathname === "/experiences" ? "tab-active" : null)}>
          Experiences
        </Link>
        <Link href="/projects" className={clsx("tab", pathname === "/projects" ? "tab-active" : null)}>
          Projects
        </Link>
      </div>
    </nav>
  );
}
