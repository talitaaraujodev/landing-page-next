import Footer from '../components/Footer';
import SectionHero from '../components/SectionHero';
import { SectionService } from '../components/SectionService';

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionService />
      <Footer />
    </>
  );
}
