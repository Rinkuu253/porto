import React from "react";

export const Introduction = () => {
	return (
		<>
			<div className="w-screen h-screen pt-12">
				<div className="flex flex-wrap">
					<div className="w-full self-center px-8 md:w-1/2 md:px-16 md:mt-20">
						<h1 className="text-lg md:text-3xl font-semibold text-primary">
							Halo, Perkenalkan Saya{" "}
							<span className="block text-secondary text-4xl md:text-5xl font-bold mt-2">
								Matthew Marvelino
							</span>
						</h1>
						<h2 className="text-sm text-slate-600 md:text-xl">
							Frontend Developer & Network Engineer
						</h2>
						<p className="text-xs mt-4 mb-6 md:text-sm md:mb-10">
							Saya adalah seorang Frontend Programmer dan Network Engineer,
							dengan pengalaman lebih dari 2 dalam Frontend. Beberapa keahlian
							saya adalah React Js, React Vite, Tailwind css, Mikrotik, Cisco,
							dan Cyber Security Awareness. Saya berkomitmen untuk
							menghasilkan proyek yang inovatif dan berkualitas tinggi. Dalam
							portofolio ini, Anda akan menemukan berbagai proyek yang telah
							saya kerjakan, ataupun yang sedang saya kerjakan.
						</p>
						<a
							href="#"
							className="text-base font-semibold text-white bg-primary py-2 md:py-4 px-6 md:px-8 rounded-2xl hover:shadow-lg hover:bg-opacity-[0.7] transition duration-300 ease-in-out"
						>
							Hubungi Saya
						</a>
					</div>
					<div className="w-full self-end px-8 md:w-1/2">
						<div className="relative mt-10">
							<img
								src="/profil-saya.png"
								alt="profil-saya"
								className="w-60 mx-auto object-fit bg-transparent z-100 md:w-80"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
