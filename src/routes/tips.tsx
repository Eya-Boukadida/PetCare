import { createFileRoute } from "@tanstack/react-router";
import { Tips } from "@/components/other-pages";
import { pageHead } from "@/lib/petcare";
export const Route = createFileRoute("/tips")({ head: () => pageHead('Petits conseils', 'Nutrition, activité, hygiène, éducation et sécurité au quotidien.'), component: Tips });
