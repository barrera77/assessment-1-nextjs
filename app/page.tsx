import { Container } from "@mui/material";
import Footer from "./components/store/Footer";
import NavBar from "./components/store/NavBar";
import Hero from "./components/store/Hero";


export default function Home() {
  return (
    <>
      <div>
        <NavBar />
        <Hero />
        <Container>
          <Footer />
        </Container>
      </div>
    </>
  );
}
