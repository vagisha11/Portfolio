import { redirect } from 'next/navigation';
import { caseStudies } from '@/content/case-studies';
import { DotNavigation } from '@/components/ui/DotNavigation';
import { TopNavigation } from '@/components/ui/TopNavigation';
import { Hero } from '@/components/sections/Hero';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { HowIThink } from '@/components/sections/HowIThink';
import { Experience } from '@/components/sections/Experience';
import { Now } from '@/components/sections/Now';
import { Contact } from '@/components/sections/Contact';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const caseStudy = caseStudies.find((study) => study.id === id);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${caseStudy.title} · Vagisha Anand`,
    description: caseStudy.hook,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { id } = await params;
  const caseStudy = caseStudies.find((study) => study.id === id);

  if (!caseStudy) {
    redirect('/');
  }

  // This route renders the same full page, but the SelectedWork component
  // will detect the URL path and auto-expand the correct case study
  return (
    <main className="relative">
      <TopNavigation />
      <DotNavigation />
      <Hero />
      <SelectedWork />
      <HowIThink />
      <Experience />
      <Now />
      <Contact />
    </main>
  );
}
