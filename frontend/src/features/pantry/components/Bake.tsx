import { useState } from "react";
import { Loader2 } from "lucide-react";

interface Props {
  preference: string;
  setPreference: (v: string) => void;
  recipe: string | null;
  setRecipe: (v: string | null) => void;
}

export default function Bake({
  preference,
  setPreference,
  recipe,
  setRecipe,
}: Props) {
  const [loading, setLoading] = useState(false);
  
  async function handleBake() {
    if (!preference.trim()) return;
    setLoading(true);

    try {
      const r = await fetch("/api/recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ preference }),
      });

      if (!r.ok) throw new Error("Network");

      const json = await r.json(); // ⇠ poate fi { recipe: "..." }
      setRecipe(json.text || json.recipe || "Your tasty recipe is ready!");
    } catch (err) {
      setRecipe("⚠️  Sorry, the AI oven is offline. Try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
        <input
          value={preference}
          onChange={(e) => setPreference(e.target.value)}
          placeholder="ex: high protein, low calories"
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 outline-none"
        />

        <button
          onClick={handleBake}
          disabled={loading}
          className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r
                     from-purple-600 to-fuchsia-600 text-white font-semibold
                     disabled:opacity-50 transition cursor-pointer hover:from-purple-500 hover:to-fuchsia-500 active:scale-[.98]"
        >
          {loading ? (
            <Loader2 className="animate-spin" size={18} />
          ) : (
            "🍳 Cook!"
          )}
        </button>
      </div>

      {recipe && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-lg rounded-3xl p-8 relative">
            <button
              onClick={() => setRecipe(null)}
              className="absolute top-4 right-5 text-xl font-bold text-gray-400 hover:text-gray-600"
            >
              ×
            </button>

            <h3 className="text-xl font-bold mb-4">Your AI-generated recipe</h3>
            <pre className="whitespace-pre-wrap text-sm leading-relaxed">
              {recipe}
            </pre>
          </div>
        </div>
      )}
    </>
  );
}
