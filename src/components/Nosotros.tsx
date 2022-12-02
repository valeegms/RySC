import MemberCard, { MemberName, MemberPhoto } from "./ui/MemberCard";

export default function Nosotros() {
	return (
		<section className="px-32 h-full py-16 flex flex-col gap-4">
			<div>
				<h1 className="text-4xl mt-3 font-semibold text-violet-700">
					Nosotros
				</h1>
				<p>
					Equipo que participó en la elaboración del micriositio web para el
					Proyecto Integrador de la materia.
				</p>
			</div>
			<div className="flex justify-between">
				<MemberCard>
					<MemberPhoto width={175} path="../assets/img/female-student.svg" />
					<MemberName name="Valeria Ysabel González Meneses" />
				</MemberCard>
				<MemberCard>
					<MemberPhoto width={175} path="../assets/img/male-student1.svg" />
					<MemberName name="Raúl Antonio Villanueva Hernández" />
				</MemberCard>
				<MemberCard>
					<MemberPhoto width={175} path="../assets/img/male-student2.svg" />
					<MemberName name="Vicente Nava Montoya" />
				</MemberCard>
			</div>
		</section>
	);
}
