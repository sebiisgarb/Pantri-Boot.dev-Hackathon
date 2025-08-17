import { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";
import type { IScannerControls } from "@zxing/browser";

export default function useBarcodeScanner(active: boolean) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    if (!active || !videoRef.current) return;

    const reader = new BrowserMultiFormatReader();
    let controls: IScannerControls | null = null;

    reader
      .decodeFromVideoDevice(undefined, videoRef.current, (res, err, c) => {
        if (c) controls = c;
        if (res) setResult(res.getText());
        if (err?.name === "NotFoundException") return;
      })
      .catch(console.error);

    return () => {
      controls?.stop();
      if (videoRef.current) videoRef.current.srcObject = null;
    };
  }, [active]);

  return { videoRef, result, clearResult: () => setResult(null) };
}
