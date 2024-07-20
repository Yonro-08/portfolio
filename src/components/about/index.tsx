import { ItemLayout } from './ItemLayout';

export default function AboutDetails() {
	return (
		<section className="py-20 w-full">
			<div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
				<ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start space-y-8">
					<h2 className="text-xl md:text-2xl text-left w-full capitalize">
						Architect of Enchantment
					</h2>
					<p className="font-light text-xs sm:text-sm md:text-base">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
						facilis praesentium ipsa pariatur similique! Perferendis labore
						doloremque, tenetur provident amet ipsa nobis in omnis adipisci
						asperiores temporibus qui aliquid enim. Voluptatem accusamus rem
						dolorem adipisci beatae quis nulla reprehenderit veritatis commodi
						minus assumenda omnis quaerat temporibus qui, nihil consequuntur id
						incidunt minima, deleniti vel consequatur distinctio eos! Assumenda,
						incidunt quae? Facilis suscipit corporis nam ratione expedita,
						possimus incidunt earum dolorem modi praesentium nihil accusantium
						placeat explicabo recusandae fugiat ut exercitationem veniam
						laborum. Perspiciatis porro tempore illo ab, sunt blanditiis veniam?
					</p>
				</ItemLayout>
				<ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
					<p className="font-semibold w-full text-left text-2xl sm:text-5xl">
						25+ <sub className="font-semibold text-base">clients</sub>
					</p>
				</ItemLayout>
				<ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
					<p className="font-semibold w-full text-left text-2xl sm:text-5xl">
						4+ <sub className="font-semibold text-base">years experience</sub>
					</p>
				</ItemLayout>

				<ItemLayout className="col-span-full sm:col-span-6 md:col-span-4 !p-0">
					<img
						className="w-full h-auto"
						src="https://github-readme-stats.vercel.app/api/top-langs?username=yonro-08&hide_border=true&theme=transparent&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
						alt="topLangs"
						loading="lazy"
					/>
				</ItemLayout>

				<ItemLayout className="col-span-full md:col-span-8 !p-0">
					<img
						className="w-full h-auto"
						src="https://github-readme-stats.vercel.app/api?username=yonro-08&hide_border=true&theme=transparent&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
						alt="vercelStats"
						loading="lazy"
					/>
				</ItemLayout>

				<ItemLayout className="col-span-full">
					<img
						className="w-full h-auto"
						src="https://skillicons.dev/icons?i=css,docker,figma,git,github,html,js,mongodb,nextjs,nodejs,npm,postgres,react,redux,sass,vite,vscode,yarn,ts,nestjs,discord,express,postman,prisma,regex,styledcomponents"
						alt="skills"
						loading="lazy"
					/>
				</ItemLayout>

				<ItemLayout className="col-span-full md:col-span-6 !p-0">
					<img
						className="w-full h-auto"
						src="https://github-readme-streak-stats.herokuapp.com?user=yonro-08&theme=dark&hide_border=true&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
						alt="herokuStats"
						loading="lazy"
					/>
				</ItemLayout>

				<ItemLayout className="col-span-full md:col-span-6 !p-0">
					<img
						className="w-full h-auto"
						src="https://github-readme-stats.vercel.app/api/pin/?username=yonro-08&repo=movie-app&hide_border=true&theme=transparent&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_column=2"
						alt="vercelStats"
						loading="lazy"
					/>
				</ItemLayout>
			</div>
		</section>
	);
}
