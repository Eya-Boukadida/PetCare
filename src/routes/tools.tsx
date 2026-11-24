import { createFileRoute } from "@tanstack/react-router";
import { Tools } from "@/components/other-pages";
import { pageHead } from "@/lib/petcare";
export const Route = createFileRoute("/tools")({ head: () => pageHead('Calculer son âge', 'Estimer l’âge de votre chien ou chat en années humaines.'), component: Tools });
