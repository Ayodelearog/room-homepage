
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Discovery from "./components/Discovery";
import About from "./components/About";

export default function Home() {
	return (
		<main className="w-full h-screen relative">
			<div className="absolute top-6 w-full">
				<Nav />
			</div>

			<Hero />
			<Discovery />
			<About />
		</main>
	);
}
