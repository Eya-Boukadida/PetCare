import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/other-pages";
import { pageHead } from "@/lib/petcare";
export const Route = createFileRoute("/home")({ head: () => pageHead('Accueil', 'Votre journée avec PetCare : soins, jeux et attention au quotidien.'), component: Home });
