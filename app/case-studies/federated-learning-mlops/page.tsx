import type { Metadata } from "next";
import { ProjectStory } from "@/components/project-story";

export const metadata: Metadata = { title: "Federated Learning for Autonomous Driving" };

export default function Page() { return <ProjectStory slug="federated-learning-mlops" />; }
