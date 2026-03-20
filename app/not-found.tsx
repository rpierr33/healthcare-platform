import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <Image
        src="/logo.png"
        alt="Mindcare of America"
        width={80}
        height={80}
        className="mb-8 h-20 w-auto opacity-50"
      />
      <h1 className="font-display text-6xl font-bold text-primary">404</h1>
      <h2 className="mt-4 font-display text-2xl font-bold text-neutral-dark">
        Page Not Found
      </h2>
      <p className="mt-2 max-w-md text-neutral-mid">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          className="rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
