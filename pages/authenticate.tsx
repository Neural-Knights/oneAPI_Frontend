import Login_left from "@/components/Authentication/Login_left";
import Login_right from "@/components/Authentication/Login_right";
import Signup_left from "@/components/Authentication/Signup_left";
import Signup_right from "@/components/Authentication/Signup_right";
import About from "@/components/Landing_About/About";
import Contact from "@/components/Landing_Contact/Contact";
import Features from "@/components/Landing_Features/Features";
import Footer from "@/components/Landing_Footer/Footer";
import HeroSection from "@/components/Landing_Hero/HeroSection";
import Navbar from "@/components/Landing_Nav/Navbar";
import { useLog } from "@/context/Landing";
import Head from "next/head";

interface login {
	log: number;
}

const Authenticate = () => {
	const { log } = useLog() as login;
	if (log == 0) {
		return (
			<>
				<Head>
					<title>Neural Knights Authentication</title>
					<meta
						name="description"
						content="A Student Learning Platform By Increasing Interactivity"
					/>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<div className="bg-0-white scroll-smooth overflow-x-auto">
					<Navbar />
					<HeroSection />
					<About />
					<Features />
					<Contact />
					<Footer />
				</div>
			</>
		);
	} else if (log == 1) {
		return (
			<div className="grid lg:grid-cols-2 grid-cols-1 overflow-hidden h-full">
				<Signup_left />
				<Signup_right />
			</div>
		);
	}
	return (
		<div className="grid lg:grid-cols-2 grid-cols-1 overflow-hidden h-full">
			<Login_left />
			<Login_right />
		</div>
	);
};

export default Authenticate;
