import { ReactNode } from "react";

export interface FooterColumnProps {
  menuTitle?: string;
  menuItems: { name: string; link: string }[];
  children?: ReactNode;
}
