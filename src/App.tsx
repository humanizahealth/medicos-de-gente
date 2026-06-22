import { Follow } from "./components/Follow";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Humaniza } from "./components/Humaniza";
import { Nav } from "./components/Nav";
import { Origin } from "./components/Origin";
import { PonteViva } from "./components/PonteViva";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Origin />
        <PonteViva />
        <Humaniza />
        <Follow />
      </main>
      <Footer />
    </>
  );
}
