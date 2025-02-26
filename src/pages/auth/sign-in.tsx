import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Outlet } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from "sonner";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const signInSchema  = z.object({
    email: z.string().email(),
})

type SignInForm = z.infer<typeof signInSchema >;

export function SignIn() {

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>({
        resolver: zodResolver(signInSchema),
    })

    async function handleSignIn(data:SignInForm) {
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log("Dados do e-mail: ", data);

            toast.success("Enviamos um link de autenticação para seu e-mail.", {
                action: {
                    label: 'Reenviar',
                    onClick: () => handleSignIn(data),  
                },
            })
        } catch {
            toast.error('Credenciais inválidas.')
        }
    }
    useEffect(() => {
    document.title = "Entrar | pizza.shop";
  }, []);
    return (
        <>
            <Helmet/>           
            <div className="p-8">
                <Button variant={"ghost"} asChild>
                   <Link to="/sign-up" className="absolute right-8 top-8">
                        Novo estabelecimento
                    </Link> 
                </Button>
                
                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Acessar painel</h1>
                        <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro!</p>
                    </div>
                    <form action="" className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
                        <div className="space-y-2">
                            <Label htmlFor="email">Seu e-mail</Label>
                            <Input id="email" type="email" {...register('email')} />
                        </div>
                        <Button disabled={isSubmitting} className="w-full" type="submit">Acessar painel</Button>
                    </form>
                </div>
            </div>
            <Outlet/>
        </>
    )
}