import { createFileRoute } from "@tanstack/react-router";
import { Approach } from "@/components/other-pages";
import { pageHead } from "@/lib/petcare";
export const Route = createFileRoute("/approach")({ head: () => pageHead('Notre approche', 'Observer, prendre soin et célébrer les petits moments avec votre animal.'), component: Approach });
