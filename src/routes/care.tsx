import { createFileRoute } from "@tanstack/react-router";
import { Care } from "@/components/other-pages";
import { pageHead } from "@/lib/petcare";
export const Route = createFileRoute("/care")({ head: () => pageHead('Les soins', 'Des guides de soins pour les chiens et les chats.'), component: Care });
