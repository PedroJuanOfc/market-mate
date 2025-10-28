import Link from "next/link"

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">MarketMate</h1>
      <Link href="/login" className="underline">Ir para Login</Link>
    </main>
  )
}
