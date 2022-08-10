import type { NextPage } from "next";
import { LinkedListView } from "../components/views/LinkedList";
import { LinkedListProvider } from "../contexts/LinkedListContext";
import { Footer } from "../components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <div className="bg-primary-900/10 dark:bg-neutral-900 min-h-screen justify-between">
      <LinkedListProvider>
        <LinkedListView />
      </LinkedListProvider>
      <Footer />
    </div>
  );
};

export default Home;
