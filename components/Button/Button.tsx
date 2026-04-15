"use client";

import css from "./Button.module.css"
import { ReactNode } from "react";

export type ButtonColor = "green" | "white";

interface ButtonProps {
  text: string;
  color: ButtonColor;
  width: number;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  type?: 'button';
}

export default function Button({
  text,
  color,
  width,
  onClick,
  className,
  icon,
  type,
}: ButtonProps) {

    
  return (
      <button
          type={type as "button" | "submit" | "reset"}
      onClick={onClick}
          className={`${css.btn} ${css[color]} ${className || ""}`}
           style={{ width: `${width}px` }} 
    >
      {icon && <span className={css.icon}>{icon}</span>}
      {text}
    </button>
  );
}
