import Link from 'next/link';
import React from 'react';

const notFound = () => {
    return (
    <main className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-6">
      <div className="w-full max-w-2xl text-center">

        {/* 404 */}
        <p className="text-8xl sm:text-9xl font-black tracking-tight text-[#244D3F]">
          404
        </p>

        {/* Heading */}
        <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-slate-800">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-md mx-auto text-base sm:text-lg leading-relaxed text-slate-500">
          Oops! The page you are looking for doesn&apos;t exist or may have
          been moved somewhere else.
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl
                       bg-[#244D3F] px-6 py-3
                       text-sm font-semibold text-white
                       shadow-lg shadow-cyan-500/20
                       transition-all duration-200
                       hover:bg-[#36745f] hover:-translate-y-0.5
                       active:translate-y-0"
          >
            Back to Home
          </Link>
        </div>

        {/* Small decorative line */}
        <div className="mx-auto mt-10 h-1 w-16 rounded-full bg-[#244D3F]" />

      </div>
    </main>
  );
};

export default notFound