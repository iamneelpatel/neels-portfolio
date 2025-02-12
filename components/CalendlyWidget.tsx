"use client"

import { useEffect } from "react"
import Script from "next/script"

// Add this type declaration at the top of the file
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

const CalendlyWidget = () => {
  useEffect(() => {
    const loadCalendly = () => {
      if (typeof window !== "undefined" && window.Calendly) {
        window.Calendly.initPopupWidget({
          url: "https://calendly.com/meetseichoagency/new-meeting",
        })
      }
    }

    document.getElementById("calendly-button")?.addEventListener("click", (e) => {
      e.preventDefault()
      loadCalendly()
    })

    return () => {
      document.getElementById("calendly-button")?.removeEventListener("click", loadCalendly)
    }
  }, [])

  return (
    <>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      <a
        href="#"
        id="calendly-button"
        className="fixed bottom-4 right-4 z-50 bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition shadow-lg"
      >
        Schedule time with me
      </a>
    </>
  )
}

export default CalendlyWidget

