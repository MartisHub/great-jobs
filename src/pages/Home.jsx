import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import JobSearch from '../components/JobSearch';
import Testimonials from '../components/Testimonials';
import CVUpload from '../components/CVUpload';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <JobSearch />
      <Testimonials />
      <CVUpload />
      <Newsletter />
    </>
  );
}