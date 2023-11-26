"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { roleName } from "@/utils/roleName";
import Loading from "@/app/loading";
import Link from "next/link";

interface ProfileCardProps {
  children?: React.ReactNode;
}

const checkAuthentication = async () => {
  const resp = await fetch("/api/auth/auth-check", {
    headers: { "Content-Type": "application/json" },
    next: {
      revalidate: 60,
    },
  });
  return await resp.json();
};

export default function ProfileCard({ children }: ProfileCardProps) {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () => checkAuthentication(),
    staleTime: 1000 * 30, // 30 seconds
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <main
        className="flex min-h-screen flex-col bg-[url('https://i.imgur.com/3xM4fk9.jpg')] bg-center bg-no-repeat bg-cover bg-black pb-16"
        id="top"
      >
        <Tabs
          defaultValue="account"
          className="w-[400px] self-center determination mt-8"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="account">Conta</TabsTrigger>
            <TabsTrigger value="password">Alterar senha</TabsTrigger>
            <TabsTrigger value="logout">
              <Link href={"/api/auth/logout"}>Deslogar</Link>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>
                  Bem-vindo(a), {data?.data?.userDetails?.username}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label className="text-lg" htmlFor="name">
                        Nome de exibição
                      </Label>
                      <Input
                        id="name"
                        required={true}
                        defaultValue={data?.data?.userDetails?.username}
                        placeholder="Troque seu nome."
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label className="text-lg" htmlFor="role">
                        Cargo
                      </Label>
                      <Input
                        id="role"
                        value={roleName[data?.data?.userDetails?.role]}
                        disabled={true}
                        placeholder="Troque seu nome."
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancelar</Button>
                <Button>Salvar</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Alterar senha</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label className="text-lg" htmlFor="new-password">
                        Nova senha
                      </Label>
                      <Input
                        id="new-password"
                        required={true}
                        placeholder="Sua nova senha."
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label className="text-lg" htmlFor="new-password">
                        Senha atual
                      </Label>
                      <Input
                        id="new-password"
                        required={true}
                        placeholder="Sua senha atual."
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancelar</Button>
                <Button>Confirmar</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}
