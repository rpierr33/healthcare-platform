"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display text-4xl font-bold text-neutral-dark">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-neutral-mid">
        We apologize for the inconvenience. Please try again or contact us if the
        problem persists.
      </p>
      <div className="mt-8 flex gap-4">
        <button
          onClick={reset}
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
        >
          Try Again
        </button>
        <a
          href="tel:5617970724"
          className="rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
        >
          Call (561) 797-0724
        </a>
      </div>
    </div>
  );
}
