import { createFileRoute } from "@tanstack/react-router";
import { Profile } from "@/components/other-pages";
import { pageHead } from "@/lib/petcare";
export const Route = createFileRoute("/profile")({ head: () => pageHead('Mon compagnon', 'Le nom, l’âge et les activités préférées de votre compagnon.'), component: Profile });
