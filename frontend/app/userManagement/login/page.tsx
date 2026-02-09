import Link from "next/link";

export default function Login() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-400/35 via-cyan-400/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-amber-300/25 via-rose-400/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-zinc-800/60 via-zinc-700/10 to-zinc-800/60 blur-2xl" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-16 lg:flex-row lg:items-center lg:gap-12">
        <div className="flex w-full flex-col justify-center gap-8 lg:w-1/2">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-300">
            Study Tracker
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Welcome back. Keep your progress in motion.
            </h1>
            <p className="max-w-xl text-base text-zinc-300 sm:text-lg">
              Log in to manage goals, review streaks, and keep your study plan on track.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Goals", "Streaks", "Achievements", "Progress Management"].map(
              (label) => (
                <div
                  key={label}
                  className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-4 text-sm text-zinc-300"
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Feature
                  </div>
                  <div className="mt-2 text-base text-zinc-100">{label}</div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="mt-12 h-full w-full max-w-xl rounded-3xl border border-zinc-800/80 bg-zinc-900/70 p-8 shadow-[0_0_60px_rgba(0,0,0,0.45)] backdrop-blur lg:mt-0 lg:w-1/2">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Sign in</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Use your Study Tracker account.
            </p>
          </div>
          <form className="space-y-4">
            <label className="block text-sm text-zinc-300" htmlFor="email">
              Email
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                autoComplete="email"
              />
            </label>
            <label className="block text-sm text-zinc-300" htmlFor="password">
              Password
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                autoComplete="current-password"
              />
            </label>

            <div className="flex items-center justify-between text-xs text-zinc-400">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border border-zinc-700 bg-zinc-950 text-emerald-400"
                />
                Remember me
              </label>
              <a href="#" className="text-emerald-300 hover:text-emerald-200">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-300"
            >
              <span className="absolute inset-0 -translate-y-full bg-gradient-to-r from-emerald-200/60 to-emerald-400/0 transition group-hover:translate-y-0" />
              <span className="relative">Sign in</span>
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-zinc-400">
            New here?{" "}
            <Link
              href="/userManagement/register"
              className="text-emerald-300 hover:text-emerald-200"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
