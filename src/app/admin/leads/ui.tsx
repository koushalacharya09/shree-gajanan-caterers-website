export function AdminLogin({ login }: { login: (data: FormData) => Promise<void> }) {
  return (
    <main className="mx-auto max-w-sm px-5 py-24">
      <h1 className="font-display text-3xl">Admin</h1>
      <form action={login} className="mt-6 grid gap-3">
        <input type="password" name="password" required className="border border-gold/40 px-3 py-3" placeholder="Password" />
        <button className="bg-maroon py-3 text-xs font-bold uppercase tracking-widest text-ivory">Enter</button>
      </form>
    </main>
  );
}
