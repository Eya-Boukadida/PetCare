import { createFileRoute } from "@tanstack/react-router";
import { Checklist } from "@/components/other-pages";
import { pageHead } from "@/lib/petcare";
export const Route = createFileRoute("/checklist")({ head: () => pageHead('La liste du jour', 'Sept petites attentions pour prendre soin de votre compagnon aujourd’hui.'), component: Checklist });
