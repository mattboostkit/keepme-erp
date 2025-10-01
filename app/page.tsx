import Hero from '@/components/Hero';
import ConsolidationCard from '@/components/ConsolidationCard';
import TableOfContents from '@/components/TableOfContents';
import CompleteSolution from '@/components/CompleteSolution';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import AllSections from '@/components/AllSections';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Hero />
      <ConsolidationCard />
      <TableOfContents />
      <CompleteSolution />
      <AllSections />
      <BackToTop />
    </main>
  );
}
