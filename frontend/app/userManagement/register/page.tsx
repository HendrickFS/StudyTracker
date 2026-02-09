import Link from "next/link";

export default function Register() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-sky-400/30 via-emerald-400/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-rose-400/25 via-amber-400/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-zinc-800/60 via-zinc-700/10 to-zinc-800/60 blur-2xl" />

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-2xl rounded-3xl border border-zinc-800/80 bg-zinc-900/70 p-8 shadow-[0_0_60px_rgba(0,0,0,0.45)] backdrop-blur sm:p-10">
          <div className="mb-8 space-y-3">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-300">
              Study Tracker
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Create your account
            </h1>
            <p className="text-sm text-zinc-400 sm:text-base">
              Start tracking goals, celebrate streaks, and build consistent study habits.
            </p>
          </div>

          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-zinc-300" htmlFor="firstName">
                First name
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Hendrick"
                  className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  autoComplete="given-name"
                />
              </label>
              <label className="block text-sm text-zinc-300" htmlFor="lastName">
                Last name
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  autoComplete="family-name"
                />
              </label>
            </div>

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

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-zinc-300" htmlFor="password">
                Password
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  autoComplete="new-password"
                />
              </label>
              <label className="block text-sm text-zinc-300" htmlFor="confirmPassword">
                Confirm password
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  autoComplete="new-password"
                />
              </label>
            </div>

            <label className="flex items-start gap-2 text-xs text-zinc-400">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border border-zinc-700 bg-zinc-950 text-emerald-400"
              />
              I agree to the Terms and Privacy Policy.
            </label>

            <button
              type="submit"
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-300"
            >
              <span className="absolute inset-0 -translate-y-full bg-gradient-to-r from-emerald-200/60 to-emerald-400/0 transition group-hover:translate-y-0" />
              <span className="relative">Create account</span>
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-zinc-400">
            Already have an account?{" "}
            <Link
              href="/userManagement/login"
              className="text-emerald-300 hover:text-emerald-200"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
