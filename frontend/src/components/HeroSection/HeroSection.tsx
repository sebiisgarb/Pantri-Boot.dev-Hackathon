// src/components/HeroSection/HeroSection.tsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CameraIcon,
  PencilIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import Modal from "./Modal";
import useBarcodeScanner from "../../features/scan/hooks/useBarcodeScanner";

const font = { fontFamily: '"Bitcount Prop Double", sans-serif' };

const HeroSection = () => {
  const [step, setStep] = useState<
    "none" | "pick" | "manual" | "verify" | "scan" | "success"
  >("none");

  /* ZXing hook runs only while step === 'scan' */
  const { videoRef, result, clearResult } = useBarcodeScanner(step === "scan");

  // codul afișat / editat în input
  const [code, setCode] = useState("");

  // când scannerul găsește un cod → mergi la "verify"
  useEffect(() => {
    if (result && step === "scan") {
      setCode(result);
      setStep("verify");
    }
  }, [result, step]);

  const closeEverything = () => {
    clearResult();
    setStep("none");
  };

  return (
    <section className="relative isolate overflow-hidden min-h-screen flex items-center justify-center">
      {/* ───── Floating blobs ───── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-8 left-6 w-52 h-52 md:w-80 md:h-80 rounded-full
                     mix-blend-overlay filter blur-2xl opacity-70 animate-blob"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #d946ef 0%, #7e22ce 70%)",
          }}
        />
        <div
          className="absolute -bottom-16 left-1/2 w-60 h-60 md:w-[22rem] md:h-[22rem] rounded-full
                     -translate-x-1/2 mix-blend-overlay filter blur-2xl opacity-60 animate-blob delay-2s"
          style={{
            background:
              "radial-gradient(circle at 70% 70%, #c084fc 0%, #9333ea 70%)",
          }}
        />
        <div
          className="absolute top-20 right-4 w-44 h-44 md:w-72 md:h-72 rounded-full
                     mix-blend-overlay filter blur-2xl opacity-60 animate-blob delay-4s"
          style={{
            background:
              "radial-gradient(circle at 40% 60%, #818cf8 0%, #6d28d9 70%)",
          }}
        />
      </div>

      {/* ───── Glass card with motion ───── */}
      <AnimatePresence>
        <motion.div
          key="heroCard"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full sm:w-[90%] md:max-w-3xl px-4 sm:px-6 md:px-12 py-12
                     backdrop-blur-lg bg-white/10 rounded-3xl shadow-xl"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center"
            style={font}
          >
            Turn your pantry into a personal&nbsp;AI&nbsp;chef
          </h1>
          <p className="text-base sm:text-lg mb-10 text-center">
            Scan your groceries, build an automatic inventory and let&nbsp;
            <span className="font-semibold">Pantri&nbsp;AI</span> suggest
            delicious step-by-step recipes using exactly what you already have.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => setStep("pick")}
              className="bg-purple-600 hover:bg-purple-500 transition px-6 py-3 rounded-full font-bold text-white"
            >
              Scan your first item
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ───── Modal: pick input type ───── */}
      <Modal open={step === "pick"} onClose={closeEverything}>
        <h2 className="text-xl font-bold mb-4">Choose input method</h2>
        <OptionBtn
          icon={<CameraIcon className="w-6 h-6" />}
          label="Live camera"
          onClick={() => setStep("scan")}
        />
        <OptionBtn
          icon={<PencilIcon className="w-6 h-6" />}
          label="Manual input"
          onClick={() => setStep("manual")}
        />
      </Modal>

      {/* ───── Modal: live camera scanner ───── */}
      <Modal open={step === "scan"} onClose={closeEverything}>
        <h2 className="text-xl font-bold mb-4">Scan the barcode</h2>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full rounded-md"
        />
        <p className="text-center text-sm mt-2 text-gray-500">
          Point the camera at the barcode
        </p>
      </Modal>

      {/* ───── Modal: verify ───── */}
      <Modal open={step === "verify"} onClose={closeEverything}>
        <h2 className="text-xl font-bold mb-4">Verify the barcode</h2>

        <label className="block text-sm mb-1 text-gray-600">
          Please confirm / edit the scanned code:
        </label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="border p-2 rounded-md w-full"
        />

        <button
          onClick={() => {
            if (!code.trim()) return;
            /* 👉 trimite `code` către inventar / backend */
            clearResult();
            setStep("success");
          }}
          className="mt-4 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-md w-full"
        >
          Verify
        </button>

        <button
          onClick={() => {
            clearResult();
            setCode("");
            setStep("scan");
          }}
          className="mt-2 text-sm text-purple-600 underline w-full"
        >
          Rescan
        </button>
      </Modal>

      <Modal open={step === "manual"} onClose={closeEverything}>
        <div>
          <h2 className="text-xl font-bold mb-4">Manual input</h2>
          <p className="text-sm mb-4 text-gray-600">
            Enter the barcode number manually:
          </p>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="border p-2 rounded-md w-full mb-4"
          />
          <button
            onClick={() => {
              if (!code.trim()) return;
              /* 👉 trimite `code` către inventar / backend */
              clearResult();
              setStep("success");
            }}
            className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-md w-full"
          >
            Submit
          </button>
        </div>
      </Modal>

      {/* ───── Modal: success ───── */}
      <Modal open={step === "success"} onClose={closeEverything}>
        <div className="flex flex-col items-center gap-4">
          <CheckCircleIcon className="w-16 h-16 text-green-500" />
          <p className="text-lg font-semibold">Barcode scanned!</p>

          <button
            onClick={() => {
              clearResult();
              setStep("scan");
            }}
            className="px-4 py-2 bg-purple-600 text-white rounded-full"
          >
            Scan another
          </button>
          <button
            className="text-sm text-purple-600 underline mt-2"
            onClick={closeEverything}
          >
            Close
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default HeroSection;

/* ----- Option button helper ----- */
const OptionBtn = ({
  icon,
  label,
  onClick,
  disabled = false,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-full flex items-center gap-3 px-4 py-3 mb-3 rounded-lg border
      ${
        disabled
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-purple-600/90 hover:bg-purple-600 text-white"
      }`}
  >
    {icon}
    <span className="flex-1 text-left">{label}</span>
  </button>
);
