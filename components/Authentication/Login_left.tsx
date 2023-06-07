import { useLog } from "@/context/Landing";
import { loginvalid } from "@/lib/validate";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { Toaster } from "react-hot-toast";

// Interface for the login component
interface loginn {
	signup: () => void;
}

const Login_left = () => {
	// State for controlling the display of the toast
	const [click, setClick] = useState<boolean>(true);
	const router = useRouter();
	// Formik for handling form state and validation
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validate: loginvalid,
		onSubmit: async (values: any) => {
			// Signing in using NextAuth credentials provider
			const status: any = await signIn("credentials", {
				redirect: false,
				email: values.email as string,
				password: values.password as string,
				callbackUrl: "/",
			});
			if (status.ok) {
				// Redirecting to the homepage after successful login
				router.push(status.url);
			}
		},
	});

	// Function for handling Google authentication
	const handleGoogleAuth = async () => {
		signIn("google", {
			callbackUrl: "/",
		});
	};

	// Function for handling Twitter authentication
	const handleTwitterAuth = async () => {
		signIn("twitter", {
			callbackUrl: "/",
		});
	};

	// Accessing the signup function from the context
	const { signup } = useLog() as loginn;

	return (
		<div className="font-popsans m-auto">
			{!click && (
				<Toaster
					position="top-right"
					reverseOrder={false}
					gutter={10}
				></Toaster>
			)}
			<h2 className="lg:font-bold lg:text-6xl font-black text-[2rem] lg:mx-0 mx-auto lg:mt-0 mt-12 w-max">
				Welcome Again
			</h2>
			<p className="lg:text-xl text-base lg:my-2 mx-auto lg:mx-0 text-center lg:text-left font-light lg:ml-2">
				Enter your credentials to access your account
			</p>
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
			<form className="space-y-4 mx-4 lg:mx-0" onSubmit={formik.handleSubmit}>
				<div className="space-y-1">
					<h3 className="font-semibold lg:text-xl text-gray-800">
						Email Address
					</h3>
					{/* Input field for email */}
					<input
						type="email"
						onClick={() => setClick(false)}
						{...formik.getFieldProps("email")}
						className="p-3 px-6 rounded-3xl border-2 border-black w-full"
					/>
				</div>
				<div className="space-y-1">
					<h3 className="font-semibold lg:text-xl text-gray-800">Password</h3>
					{/* Input field for password */}
					<input
						type="password"
						onClick={() => setClick(false)}
						{...formik.getFieldProps("password")}
						className="p-3 px-6 rounded-3xl border-2 border-black w-full"
					/>
				</div>
				<div className="border-2 border-black w-full bg-0-black text-0-white p-2 rounded-3xl text-center">
					{/* Login button */}
					<button
						onClick={() => setClick(false)}
						type="submit"
						className="font-bold text-3xl"
					>
						Login
					</button>
				</div>
			</form>
			{/* Sign up link */}
			<div className="text-lg flex justify-center mt-3">
				Create an account?{" "}
				<p
					className="font-extrabold ml-2 text-0-Dprimary cursor-pointer"
					onClick={signup}
				>
					SignUp
				</p>
			</div>
		</div>
	);
};

export default Login_left;
