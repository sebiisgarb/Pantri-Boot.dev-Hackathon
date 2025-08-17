/* RightInfoCard.tsx  – componentă reutilizabilă */
import Background from "../../pantry/components/Background";

export default function RightInfoCard() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center rounded-3xl overflow-hidden">
      {/* blur blobs in back */}
      <Background />

      <div className="relative z-10 flex flex-col items-center gap-6 p-8 text-center">
        {/* headline */}
        <h2 className="text-3xl font-extrabold text-purple-700">
          Your pantry, powered by&nbsp;
          <span className="text-fuchsia-600">AI</span>
        </h2>

        {/* pitch */}
        <p className="text-gray-700 max-w-xs">
          Scan groceries once, let Pantri track stock and suggest recipes that
          use what you still have.
        </p>

        {/* key features */}
        <ul className="space-y-4 text-sm text-left">
          <li className="flex items-start gap-3">
            <span className="text-xl">📂</span>
            <span>
              Smart&nbsp;
              <strong>category shelves</strong>
              &nbsp;— fridge, freezer, pantry
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">📉</span>
            <span>
              <strong>Dynamic inventory</strong>&nbsp;— items subtract when you
              cook
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">🕓</span>
            <span>
              <strong>Recipe history</strong>&nbsp;— revisit favourites in one
              tap
            </span>
          </li>
        </ul>

        {/* stat */}
        <div className="text-purple-600 font-semibold">
          💡 Users save <strong>2 hrs / week</strong> on meal planning
        </div>

        {/* testimonial */}
        <blockquote className="mt-4 text-xs italic text-gray-500 max-w-xs">
          “Pantri keeps my shelves tidy and my dinners inspired.” — Cristina P.
        </blockquote>
      </div>
    </div>
  );
}
