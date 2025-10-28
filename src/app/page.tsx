import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, Users, Sparkles, Clock4, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 space-y-12">
      <section className="grid gap-6 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Organize suas compras com o MarketMate
          </h1>
          <p className="text-base text-muted-foreground">
            Uma lista de compras colaborativa, simples e rápida. Convide
            pessoas, acompanhe o que falta e receba sugestões inteligentes.
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
          <div className="grid gap-3">
            <div className="text-sm text-muted-foreground">Prévia</div>
            <div className="rounded-xl border p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Lista da Semana</span>
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
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">O que você vai encontrar</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex-row items-center gap-3">
              <ListChecks className="h-5 w-5" />
              <CardTitle>Listas simples</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Adicione itens, marque como comprado e mantenha tudo organizado.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center gap-3">
              <Users className="h-5 w-5" />
              <CardTitle>Colaboração fácil</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Convide pessoas para a mesma lista e veja atualizações em tempo
              real.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center gap-3">
              <Sparkles className="h-5 w-5" />
              <CardTitle>Sugestões inteligentes</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Recomendações baseadas no seu histórico para não esquecer nada.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center gap-3">
              <Clock4 className="h-5 w-5" />
              <CardTitle>Rápido e leve</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Interface objetiva para você focar em comprar, não em configurar.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center gap-3">
              <Shield className="h-5 w-5" />
              <CardTitle>Privacidade</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Suas listas são suas. Controles de acesso e segurança pensados
              desde o início.
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
