import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/other-pages";
import { pageHead } from "@/lib/petcare";
export const Route = createFileRoute("/about")({ head: () => pageHead('À propos', 'PetCare, un petit compagnon pour des journées plus douces avec votre animal.'), component: About });
