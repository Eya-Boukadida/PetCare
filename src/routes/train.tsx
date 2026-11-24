import { createFileRoute } from "@tanstack/react-router";
import { Training } from "@/components/training";
import { pageHead } from "@/lib/petcare";
export const Route = createFileRoute("/train")({ head: () => pageHead('Entraîner son compagnon', 'Un parcours positif, des gestes précis et une illustration pour chaque étape.'), component: Training });
