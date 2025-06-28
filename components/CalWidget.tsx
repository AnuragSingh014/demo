// components/CalWidget.tsx
"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface CalWidgetProps {
  namespace?: string;
  calLink?: string;
}

export default function CalWidget({ 
  namespace = "15min", 
  calLink = "avvjt/15min" 
}: CalWidgetProps) {
  useEffect(() => {
    (async function initCal() {
      try {
        const cal = await getCalApi({ namespace });
        cal("ui", { 
          hideEventTypeDetails: false,
          layout: "month_view" 
        });
      } catch (error) {
        console.error("Failed to load Cal.com widget", error);
      }
    })();
  }, [namespace]);

  return (
    <Cal
      namespace={namespace}
      calLink={calLink}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", "theme":"light"}}
    />
  );
}