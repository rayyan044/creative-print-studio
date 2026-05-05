import {
  BookOpen, Package, GraduationCap, ShieldCheck,
  Scissors, Printer, Layers, Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";

export type Service = {
  title: string;
  description: string;
  icon: ReactNode;
  accent: "coral" | "teal" | "marigold" | "ink";
};

const i = "h-7 w-7";

export const services: Service[] = [
  {
    title: "Book Design & Production",
    description: "Custom-designed and printed books in Arabic and English — from concept to bound copy.",
    icon: <BookOpen className={i} />,
    accent: "coral",
  },
  {
    title: "Packaging & Boxes",
    description: "Medicine boxes, chalk boxes, and custom packaging produced with precision and durability.",
    icon: <Package className={i} />,
    accent: "teal",
  },
  {
    title: "School Examinations",
    description: "Confidential preparation and printing of school exams with rigorous quality control.",
    icon: <GraduationCap className={i} />,
    accent: "marigold",
  },
  {
    title: "Lamination Services",
    description: "Protect ID cards, books, notebooks and boxes with a clean, professional laminate finish.",
    icon: <ShieldCheck className={i} />,
    accent: "ink",
  },
  {
    title: "Die-Cut Services",
    description: "Precise A3 and A4 die-cutting for cards, packaging and creative shapes.",
    icon: <Scissors className={i} />,
    accent: "coral",
  },
  {
    title: "A2 & A4 Printing",
    description: "High-quality printing of books, notebooks, church materials, exams and conference documents.",
    icon: <Printer className={i} />,
    accent: "teal",
  },
  {
    title: "Stitching & Binding",
    description: "Stitched and bound books in formats and finishes that last.",
    icon: <Layers className={i} />,
    accent: "marigold",
  },
  {
    title: "Cards & Stationery",
    description: "ID cards, wedding & invitation cards, flyers, stickers and business cards — designed and printed.",
    icon: <Sparkles className={i} />,
    accent: "ink",
  },
];
