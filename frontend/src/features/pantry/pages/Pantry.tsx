import { useState } from "react";
import Navbar from "../../../components/Navbar/page/Navbar";
import BackgroundBlobs from "../components/Background";
import Inventory from "../components/Inventory";
import Bake from "../components/Bake";
import { AnimatePresence, motion } from "framer-motion";

const Pantry = () => {
  const [preference, setPreference] = useState("");
  const [recipe, setRecipe] = useState<string | null>(null);
  return (
    <>
      <section className="relative isolate overflow-hidden min-h-screen">
        <Navbar />
        <BackgroundBlobs />

        <div className="flex items-start  justify-center pt-30">
          <div className="w-full max-w-5xl">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.7 }}
                className="text-center mb-10"
              >
                <Card>
                  <Inventory />
                  <Bake
                    preference={preference}
                    setPreference={setPreference}
                    recipe={recipe}
                    setRecipe={setRecipe}
                  />
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pantry;

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-10 relative z-20">
      {children}
    </div>
  );
}
