import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-12">
      <section className="grid gap-6 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Organize suas compras com o <span className="text-primary">MarketMate</span>
          </h1>
          <p className="text-muted-foreground">
            Crie listas colaborativas, convide amigos e mantenha tudo sincronizado.
            Em breve, sugestões inteligentes para não esquecer nada.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/register">Começar agora</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/login">Já tenho conta</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border p-6 md:p-10">
          <div className="grid gap-2 text-sm">
            <div className="font-medium">Prévia da sua próxima lista</div>
            <div className="rounded-xl border p-4">
              <div className="flex items-center justify-between">
                <span>Lista da Semana</span>
                <span className="text-muted-foreground">3 itens</span>
              </div>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li>• Leite</li>
                <li>• Pão integral</li>
                <li>• Tomate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Minhas listas</h2>
          <Button variant="outline" asChild>
            <Link href="/login">Criar nova lista</Link>
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["Mercado", "Churrasco", "Festa"].map((name, i) => (
            <Card key={i} className="hover:shadow-sm transition-shadow">
              <CardHeader>
                <CardTitle>{name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {i === 0 ? "12 itens • atualizado há 1 dia" : "Vazia • crie itens ao entrar"}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
