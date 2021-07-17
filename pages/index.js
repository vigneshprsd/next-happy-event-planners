import { server } from '../config'
import About from "../components/About";
import Pricing from "../components/Pricing";
import Service from "../components/Service";
import Slider from "../components/Slider";
import Testimonial from "../components/Testimonial";
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Slider />
      <Service />
      <About />
      <Pricing />
      <Testimonial />
    </Layout>
  );
}


