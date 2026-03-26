export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-10 max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-600 mb-6">
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3l14 9-14 9V3z"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">
          Hello World
        </h1>

        <p className="text-zinc-400 text-base leading-relaxed mb-8">
          Your Next.js app is up and running. Tailwind CSS, TypeScript, and the
          App Router are all configured and ready to go.
        </p>

        <button className="w-full bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-150 cursor-pointer">
          Get Started
        </button>

        <p className="mt-6 text-xs text-zinc-600">
          Edit{" "}
          <code className="font-mono text-zinc-400">src/app/page.tsx</code> to
          get started
        </p>
      </div>
    </main>
  );
}
