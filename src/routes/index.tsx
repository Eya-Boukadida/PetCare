import { createFileRoute } from "@tanstack/react-router";
import { Training } from "@/components/training";
import { pageHead } from "@/lib/petcare";
export const Route = createFileRoute("/")({ head: () => pageHead('Entraînement', '13 exercices et 64 étapes illustrées pour apprendre avec votre chien ou votre chat.'), component: Training });
