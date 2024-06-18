"use client"

import * as z from "zod";

import { Suspense, useState, useTransition } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";

import { LoginSchema } from "@/schemas";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/auth/form"

import { CardWrapper } from "@/components/auth/card-wrapper"
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { login } from "@/actions/login";
import { Button } from "../ui/auth/button";
import { Input } from "../ui/auth/input";

export const LoginForm = () => {
	const searchParams = useSearchParams();
	const urlError = searchParams?.get("error") === "OAuthAccountNotLinked" ? "Email already in use with different provider!" : ""

	const [error, setError] = useState<string | undefined>("")
	const [success, setSuccess] = useState<string | undefined>("")
	const [isPending, startTransition] = useTransition()

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		}
	})

	const onSubmit = (values: z.infer<typeof LoginSchema>) => {
		setError("");
		setSuccess("");
		startTransition(() => {
			login(values)
				.then((data) => {
					setError(data?.error);
					// setSuccess(data.success);
				})
		})
	}

	return (
		<CardWrapper
			headerLabel="Welcome back"
			backButtonLabel="Não possui uma conta?"
			backButtonHref="/auth/register"
			showSocial>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6"
				>
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Email
									</FormLabel>
									<FormControl>
										<Input
											{...field}
											placeholder="john.doe@example.com"
											type="email"
											disabled={isPending}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Senha
									</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled={isPending}
											placeholder="******"
											type="password"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Suspense><FormError message={error || urlError} /></Suspense>
					<FormSuccess message={success} />
					<Button
						disabled={isPending}
						type="submit"
						className="w-full">
						Login
					</Button>

				</form>
			</Form>
		</CardWrapper>
	)
}