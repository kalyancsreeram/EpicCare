import { useEffect } from "react";

export default function useWhatsappScript(url, options) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = url;

    script.onload = () => {
      if (window.CreateWhatsappChatWidget) {
        window.CreateWhatsappChatWidget(options);
      } else console.error("CreateWhatsappChatWidget is not defined.");
    };

    script.onerror = () => {
      console.error("Script loading failed");
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url, options]);
}
