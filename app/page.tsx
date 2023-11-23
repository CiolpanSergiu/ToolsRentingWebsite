import LandingPage from "./components/landing-page/LandingPage";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="max-w-screen">
        {/* <h1 className="text-4xl mt-8 text-center">Tools Renting</h1> */}
        <LandingPage />
      </main>
      <footer></footer>
    </>
  );
}
