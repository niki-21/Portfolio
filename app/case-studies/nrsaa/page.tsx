import type { Metadata } from "next";
import { ProjectStory } from "@/components/project-story";

export const metadata: Metadata = { title: "NRSAA Case Study" };

export default function Page() { return <ProjectStory slug="nrsaa" />; }
