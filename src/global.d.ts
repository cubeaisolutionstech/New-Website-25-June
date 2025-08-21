// Extend the Window interface to include gtag
export {};

declare global {
  interface Window {
    gtag: (
      command: string,
      eventName: string,
      eventParams?: Record<string, unknown>
    ) => void;
  }
}
