import About from "@/components/Landing_About/About";
import Contact from "@/components/Landing_Contact/Contact";
import Features from "@/components/Landing_Features/Features";
import Footer from "@/components/Landing_Footer/Footer";
import HeroSection from "@/components/Landing_Hero/HeroSection";
import Navbar from "@/components/Landing_Nav/Navbar";

export default function Home() {
	return (
		<div className="bg-0-white scroll-smooth overflow-x-auto">
			<Navbar />
			<HeroSection />
			<About />
			<Features />
			<Contact />
			<Footer />
		</div>
	);
}
