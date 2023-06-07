import { useLog } from "@/context/Landing";
import { registerValidate } from "@/lib/validate";
import Image from "next/image";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { Toaster } from "react-hot-toast";

interface loginn {
	login: () => void;
	setLog: number | any;
}

const Signup_left = () => {
	const { login, setLog } = useLog() as loginn;
	const router = useRouter();
	const [agree, setAgree] = useState(false);
	const [click, setClick] = useState(false);
	const regformik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
		},
		validate: registerValidate,
		onSubmit: async (values: any) => {
			const option = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			};
			await fetch("http://localhost:3000/api/signup", option).then((res) =>
				res.json()
			);
			setLog(2);
		},
	});
	const handleAgree = () => {
		setAgree(!agree);
	};
	const handleGoogleAuth = async () => {
		signIn("google", {
			callbackUrl: "/",
		});
	};
	const handleTwitterAuth = async () => {
		signIn("twitter", {
			callbackUrl: "/",
		});
	};
	return (
		<div className="font-popsans m-auto">
			{/* Toaster */}

			{((regformik.errors.name && regformik.touched.name) ||
				(regformik.errors.email && regformik.touched.email) ||
				(regformik.errors.password && regformik.touched.password)) &&
			click ? (
				<Toaster
					position="top-right"
					reverseOrder={false}
					gutter={10}
				></Toaster>
			) : (
				<></>
			)}
			{/* Title */}
			<h2 className="lg:font-bold lg:text-6xl font-black text-[2rem] lg:mx-0 mx-auto lg:mt-0 mt-12 w-max">
				Get Started Now
			</h2>
			<p className="lg:text-xl text-base lg:my-2 mx-auto lg:mx-0 text-center lg:text-left font-light lg:ml-2">
				Enter your credentials to access your account
			</p>
			{/* Social Sign Up Buttons */}
			<div className="flex lg:flex-row flex-col mx-4 lg:mx-0 justify-between lg:my-4 my-6">
				<div
					onClick={handleGoogleAuth}
					className="flex items-center border cursor-pointer border-black rounded-xl space-x-4 p-2 px-4 lg:mb-0 mb-4"
				>
					<Image src="/google.svg" alt="Google" width={25} height={25} />
					<span>Sign up with Google</span>
				</div>
				<div
					onClick={handleTwitterAuth}
					className="flex items-center border cursor-pointer border-black rounded-xl space-x-4 p-2 px-4"
				>
					<Image src="/microsoft.svg" alt="Microsoft" width={25} height={25} />
					<span>Sign up with twitter</span>
				</div>
			</div>
			<Image
				src="/or.svg"
				alt="or"
				width={500}
				height={50}
				className="flex justify-center items-center lg:mx-auto mx-4 w-[-webkit-fill-available] lg:w-auto opacity-80 my-3 lg:my-2"
			/>

			{/* Registration Form */}
			<form
				className="space-y-4 mx-4 lg:mx-0"
				onSubmit={regformik.handleSubmit}
			>
				<div className="space-y-1">
					<h3 className="font-semibold lg:text-xl text-gray-800">Name</h3>
					<input
						type="text"
						onClick={() => setClick(false)}
						{...regformik.getFieldProps("name")}
						className={`p-3 px-6 rounded-3xl border-2 border-black w-full ${
							regformik.errors.name && regformik.touched.name
								? "border-red-800"
								: "border-0-black"
						}`}
					/>
				</div>
				<div className="space-y-1">
					<h3 className="font-semibold lg:text-xl text-gray-800">
						Email Address
					</h3>
					<input
						type="email"
						onClick={() => setClick(false)}
						{...regformik.getFieldProps("email")}
						className={`p-3 px-6 rounded-3xl border-2 border-black w-full ${
							regformik.errors.email && regformik.touched.email
								? "border-red-800"
								: "border-0-black"
						}`}
					/>
				</div>
				<div className="space-y-1">
					<h3 className="font-semibold lg:text-xl text-gray-800">Password</h3>
					<input
						type="password"
						{...regformik.getFieldProps("password")}
						onClick={() => setClick(false)}
						className={`p-3 px-6 rounded-3xl border-2 border-black w-full ${
							regformik.errors.password && regformik.touched.password
								? "border-red-800"
								: "border-0-black"
						}`}
					/>
				</div>

				{/* Terms and Privacy Checkbox */}
				<div className="space-x-3 flex items-center ml-6">
					<input
						type="checkbox"
						onChange={handleAgree}
						name="term"
						className="w-5 h-5 rounded-xl"
					/>
					<label htmlFor="term" className="flex">
						I agree to the <p className="text-blue-500 ml-1">Terms & Privacy</p>
					</label>
				</div>
				<button
					disabled={!agree || !registerValidate}
					type="submit"
					onClick={() => setClick(true)}
					className="font-bold text-3xl disabled:cursor-not-allowed border-2 border-black disabled:border-0-black/20 disabled:bg-0-black/70 w-full bg-0-black text-0-white p-2 rounded-3xl"
				>
					Sign Up
				</button>
			</form>

			{/* Login Link */}
			<div className="text-lg flex justify-center mt-3">
				Already have an account?{" "}
				<p
					className="font-extrabold ml-2 text-0-Dprimary cursor-pointer"
					onClick={login}
				>
					Login
				</p>
			</div>
		</div>
	);
};

export default Signup_left;
