"use client"

import { signIn } from "next-auth/react"
import Input from '@/components/Input'
import React, { useCallback, useState } from 'react'
import { FcGoogle } from "react-icons/fc"
import { BsGithub } from "react-icons/bs"
import axios from "axios"
import { FaSpinner } from "react-icons/fa"
import toast from "react-hot-toast"
import { useRef } from "react"


const page = () => {
	const [variant, setVariant] = useState("Login")
	const [data, setData] = useState({ name: "", email: "", password: "" })
	const [loading, setLoading] = useState(false)
	const formRef = useRef<HTMLFormElement>(null)

	const reset = () => {
		setData({ name: "", email: "", password: "" })
	}


	const toggleVariant = useCallback(() => {
		setVariant(currentVariant => currentVariant === "Login" ? "Register" : "Login")
	}, [])

	const register = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)
		await axios.post("/api/register", data)
			.then(() => toast.success("User Registered Successfully"))
			.catch((err) => toast.error(err.response.data.message))
			.finally(() => setLoading(false))
			reset()
		formRef.current?.reset()
	}

	const login = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)
	 	signIn("credentials", { ...data, redirect: false }).then((callback) => {
			if (callback?.error) {
				toast.error(callback?.error)
			}
			if (callback?.ok && !callback.error) {
				toast.success("User Logged In Successfully")

			}
		}).finally(() => {
			setLoading(false)
		})
		reset()
		formRef.current?.reset()
	}

	return (
		<div
			className='h-auto md:w-[400px]
	bg-black rounded-md flex 
	flex-col py-5 w-full
	items-center justify-center 
	'
		>
			<div className="flex flex-col gap-1 items-center justify-center">
				<h2 className='font-bold text-2xl cursor-default'>{variant === "Login" ? "Login" : "Sign Up"}</h2>
				<p className='text-sm font-bold cursor-default'>{variant === "Login" ? "Please Login to your account" : "Welcome, get started with trending movies"}</p>
			</div>
			<form ref={formRef} onSubmit={(e) => { variant === "Login" ? login(e) : register(e) }} className='w-[100%] mt-2 flex flex-col items-center justify-center'>
				{variant === "Register" && (
					<div className="mt-2 w-[100%] flex items-center justify-center">
						<Input
							label='Name'
							id='name'
							value={data.name}
							onChange={(e: any) => setData({ ...data, name: e.target.value })}
							name='name'
							type="name"
							required
						/>
					</div>
				)}
				<div className="mt-8 w-[100%] flex items-center justify-center">
					<Input
						label='Email'
						id='email'
						name='email'
						type="email"
						value={data.email}
						onChange={(e: any) => setData({ ...data, email: e.target.value })}
						required
					/>
				</div>
				<div className="mt-8 w-[100%] flex items-center justify-center">
					<Input
						label='Password'
						id='password'
						name='password'
						type="password"
						value={data.password}
						onChange={(e: any) => setData({ ...data, password: e.target.value })}
						required
					/>
				</div>
				<div className="mt-5 w-[90%] flex gap-4 items-center justify-center">
					<div aria-disabled={loading} onClick={() => signIn("google", {callbackUrl: "/"}).then((callback) => {if (callback?.ok) { toast.success("User Logged In Successfully"), window.location.href = "/" }})} className="h-10 w-10 disabled:cursor-not-allowed transition hover:opacity-80 cursor-pointer rounded-full flex items-center justify-center" title='Google Provider'> <FcGoogle size={30} /> </div>
					<div aria-disabled={loading}
						className="h-10 w-10  
					transition hover:opacity-80 
					cursor-pointer rounded-full flex 
					items-center justify-center disabled:cursor-not-allowed"
						title='Github Provider'
						onClick={() => signIn("github").then((callback) => { if (callback?.ok) { toast.success("User Logged In Successfully") } })}>
						<BsGithub size={30} />
					</div>
				</div>
				<div className="mt-5 w-[90%] flex items-center justify-center">
					<button disabled={loading} type="submit" className={`${loading ? "opacity-50 cursor-not-allowed" : ""} flex items-center justify-center h-10 w-[100%] transition bg-[#01b4e4] font-bold hover:opacity-80 rounded-md`}>{loading ? <FaSpinner className='animate-spin' /> : variant === "Login" ? "Login" : "Sign up"}</button>
				</div>
				<div className="mt-5 w-[90%] flex gap-2 items-center justify-center">
					<p className='text-sm font-bold cursor-default'>
						{variant === "Login" ? "New to Naijaflix?" : "Already have an account?"}
					</p>
					<span onClick={toggleVariant} className='text-sm font-semibold cursor-pointer hover:opacity-80 transition hover:underline'>
						{variant === "Login" ? "Sign Up" : "Login"}
					</span>
				</div>
			</form>
		</div>
	)
}

export default page