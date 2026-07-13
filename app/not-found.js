import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0F172A] px-6 py-20 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-30 -top-30 h-80 w-[320px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-30 -right-30 h-80 w-[320px] rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* 404 Text */}
        <h1 className="bg-linear-to-r from-cyan-400 via-white to-fuchsia-400 bg-clip-text text-8xl font-black tracking-tight text-transparent sm:text-9xl">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          This Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          The page you are looking for may have been moved, deleted, or never
          existed. Explore our publishing solutions, professional book
          formatting, and creative design services.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-7 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
          >
            <Home className="h-4 w-4" />
            Back to Homepage
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}