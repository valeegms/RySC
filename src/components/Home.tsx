export const Home = () => {
	return (
		<section className="flex flex-col-reverse sm:flex-row xl:flex-row lg:flex-row md:flex-row xl:mx-8 xl:my-4 lg:m-8 md:m-6 place-items-center gap-5 h-full">
			<article className="">
				<h1 className="xl:text-4xl lg:text-3xl md:text-3xl text-2xl font-semibold text-amber-400 mb-2 xl:mb-4 lg:mb-2">
					Redes y Seguridad de Computadoras
				</h1>
				<p className="xl:text-md lg:text-base text-sm xl:mb-4 lg:mb-2 mb-4">
					Micrositio web informativo para la materia de Redes y Seguridad de
					Computadoras donde se tocarán temas en cuanto a Seguridad en la web,
					en la comunicación de datos de una red, Sockets e Internet de las
					Cosas (IoT)
				</p>
				<button className="xl:text-md lg:text-base text-sm bg-violet-700 py-2 px-6 rounded-[4px] text-white font-semibold hover:bg-[#5B21B6] cursor-pointer">
					Sobre nosotros
				</button>
			</article>
			<div className="grow-0">
				<img
					className="xl:w-[90rem] lg:w-[120rem] md:w-[100rem] w-[100rem]"
					src="./assets/img/landing-placeholder.svg"
					alt=""
				/>
			</div>
			{/* <Button isDisabled={false} text={"Sobre nosotros"} type={"link"} /> */}
		</section>
	);
};
