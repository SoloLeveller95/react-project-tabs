import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";
function App() {
	const [loading, setLoading] = useState(true);
	const [jobs, setJobs] = useState([]);
	const [value, setValue] = useState(0);

	const fetchJobs = async () => {
		const reponse = await fetch(url);
		const newJobs = await reponse.json();
		setJobs(newJobs);
		setLoading(false);
	};
	useEffect(() => {
		fetchJobs();
	}, []);
	if (loading) {
		return (
			<section className="h-screen flex justify-center items-center">
				<h1 className="text-8xl text-[#102a42] font-bold tracking-wide">
					Loading...
				</h1>
			</section>
		);
	}
	const { company, dates, duties, title } = jobs[value];
	return (
		<section className="flex flex-col w-[80vw] h-screen mx-auto ">
			<div className="flex flex-col items-center justify-center pt-20 pb-10">
				<h2 className="text-5xl text-[#102a42] font-bold tracking-wide">
					Experience
				</h2>
				<hr className="flex-initial h-1 w-[80px] bg-[#2caeba] mt-3" />
			</div>
			<div className="flex flex-col md:flex-row w-[80%] mx-auto">
				{/* btn container */}
				<div className="basis-1/6 flex flex-col">
					{jobs.map((item, index) => {
						return (
							<button
								key={item.id}
								onClick={() => setValue(index)}
								className={`  mb-6 text-xl tracking-widest transition duration-300 hover:ease-linear hover:text-[#2caeba]  hover:border-[#2caeba] ${
									index === value &&
									"text-[#2caeba] border-l-2 border-[#2caeba]"
								} `}
							>
								{item.company}
							</button>
						);
					})}
				</div>
				{/* job info */}
				<article className="ml-9 basis-5/6">
					<h3 className="text-3xl font-normal tracking-wider">{title}</h3>

					<h4 className="w-24 py-[2px] my-3 font-bold text-[#617d98] text-center bg-[#dae2ec] rounded-md tracking-wide">
						{company}
					</h4>
					<p className="text-[#617d98] tracking-widest mb-6">{dates}</p>
					{duties.map((duty, index) => {
						return (
							<div key={index} className="flex items-center mb-4">
								<FaAngleDoubleRight className="flex-initial text-lg text-[#2caeba] mr-8"></FaAngleDoubleRight>
								<p className="text-sm md:text-base flex-1 text-[#324d67]">
									{duty}
								</p>
							</div>
						);
					})}
				</article>
			</div>
			<button
				type="button"
				className=" w-48 h-8 mt-6 mx-auto ease-linear duration-300 bg-[#2caeba] text-[#bff8fd] hover:text-[#324d67] hover:bg-[#88ebf2] font-semibold uppercase rounded-md tracking-wider "
			>
				more info
			</button>
		</section>
	);
}

export default App;
