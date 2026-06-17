import { DotNavigation } from '@/components/ui/DotNavigation';
import { TopNavigation } from '@/components/ui/TopNavigation';
import { Hero } from '@/components/sections/Hero';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { HowIThink } from '@/components/sections/HowIThink';
import { Experience } from '@/components/sections/Experience';
import { Now } from '@/components/sections/Now';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
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
