import type { NextPage } from "next";
import { LinkedListProvider } from "../contexts/LinkedListContext";
import { Footer } from "../components/Footer/Footer";
import LandingPage from "../components/views/LandingPage";

const Home: NextPage = () => {
  return (
    <div className="bg-primary-900/10 dark:bg-neutral-900 min-h-screen justify-between">
      <LinkedListProvider>
        <LandingPage />
      </LinkedListProvider>
      <Footer />
    </div>
  );
};

export default Home;
