import { Footer } from "./components/footer";
import { Landing } from "./components/landing";
import Navbar from "./components/navbar";

export default function Home() {
  return (
      <div>
        <Navbar />
        <Landing />
        <Footer />
      </div>
  );
}
