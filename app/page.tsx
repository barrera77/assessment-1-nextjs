import { Container } from "@mui/material";
import Footer from "./components/store/Footer";
import NavBar from "./components/store/NavBar";


export default function Home() {
  return (
    <>
      <div>
        <NavBar />
        <Container>
          <Footer />
        </Container>
      </div>
    </>
  );
}
