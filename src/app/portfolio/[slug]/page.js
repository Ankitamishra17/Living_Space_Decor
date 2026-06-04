
import { notFound } from "next/navigation";
import projects from "@/data/projects";
import ProjectDetail from "./ProjectDetail";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Portfolio`,
    description: project.description?.slice(0, 155),
    openGraph: { images: [project.image] },
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
