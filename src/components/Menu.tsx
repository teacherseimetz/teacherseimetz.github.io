"use client";

import { useRef, useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import styles from "./Menu.module.css";

const links = [
  { href: "#inicio", label: "home" },
  { href: "#sobre", label: "sobre mim" },
  { href: "#aulas", label: "aulas" },
  { href: "#como-funciona", label: "como funciona" },
  { href: "#professores", label: "professores" },
  { href: "#eventos", label: "eventos" },
];

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useClickOutside(navRef, () => setIsOpen(false));

  return (
    <nav
      ref={navRef}
      aria-label="Navegação principal"
      className={styles.nav}
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <button
        ref={toggleRef}
        className={styles.toggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="menu-links"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        type="button"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {isOpen ? (
            <path d="M6 6L18 18M6 18L18 6" />
          ) : (
            <path d="M4 6H20M4 12H20M4 18H20" />
          )}
        </svg>
      </button>
      <ul
        id="menu-links"
        className={`${styles.links} ${isOpen ? styles.open : ""}`}
      >
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href} onClick={() => setIsOpen(false)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
