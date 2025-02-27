import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const signUpSchema  = z.object({
    email: z.string().email(),
    restaurantName: z.string(),
    phone: z.string(),
    managerName: z.string(),
})

type SignUpForm = z.infer<typeof signUpSchema >;

export function SignUp() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpForm>({
        resolver: zodResolver(signUpSchema),
    })

    async function handleSignUp(data:SignUpForm) {
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log("Dados do e-mail: ", data);

            toast.success("Restaurante cadastrado com sucesso!", {
                action: {
                    label: 'Entrar',
                    onClick: () => navigate('/sign-in'),  
                },
            })
        } catch {
            toast.error('Erro ao cadastrar restaurante.')
        }
    }
    useEffect(() => {
        document.title = "Cadastrar | pizza.shop";
      }, []);
    return (
        <>
            <Helmet/>
            <div className="p-8">
                <Button variant={"ghost"} asChild>
                   <Link to="/sign-in" className="absolute right-8 top-8">
                        Fazer login
                    </Link> 
                </Button>
                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Criar conta grátis</h1>
                        <p className="text-sm text-muted-foreground">Seja um parceiro e comece suas vendas!</p>
                    </div>
                    <form action="" className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
                        <div className="space-y-2">
                            <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
                            <Input id="restaurantName" type="text" {...register('restaurantName')} /> 
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="managerName">Seu nome</Label>
                            <Input id="managerName" type="text" {...register('managerName')} /> 
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Seu e-mail</Label>
                            <Input id="email" type="email" {...register('email')} /> 
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Seu celular</Label>
                            <Input id="phone" type="tel" {...register('phone')} /> 
                        </div>
                        <Button disabled={isSubmitting} className="w-full" type="submit">Finalizar cadastro</Button>
                        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground"> 
                            Ao continuar, você concorda com nossos
                            {" "}
                            <a className="underline underline-offset-4" href="#">Termos de serviço </a>
                             e 
                            <a className="underline underline-offset-4" href="#"> políticas de privacidade</a>.
                        </p>
                    </form>
                </div>
            </div>
            <Outlet/>
        </>
    )
}