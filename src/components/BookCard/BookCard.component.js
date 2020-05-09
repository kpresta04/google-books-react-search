import React from "react";
import "./BookCard.css";
import axios from "axios";

export default function BookCard(props) {
	const saveBook = () => {
		axios
			.post("/save/", {
				image: props.image,
				title: props.title,
				desc: props.desc,
				author: props.author,
				link: props.link,
			})
			.then(function (response) {
				console.log(response);
			});
	};
	return (
		<div>
			<div
				className="max-w-sm w-full lg:max-w-full lg:flex"
				style={{ outline: "2px solid grey", margin: "1em 0" }}
			>
				<div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden items-center">
					<img src={props.image} alt="Book" className="mx-auto my-auto"></img>
				</div>
				<div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
					<div className="mb-8">
						<div className="text-gray-900 font-bold text-xl mb-2">
							{props.title}
						</div>
						<p className="text-gray-700 text-base">{props.desc}</p>
					</div>
					<div className="flex items-center text-center">
						<div className="text-center text-sm items-center">
							<p className="text-gray-900 leading-none mx-auto">
								{props.author}
							</p>
						</div>
					</div>
					<div className="flex space-x-4 items-center">
						<a href={props.link}>
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
								View
							</button>
						</a>
						<button
							onClick={() => saveBook()}
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						>
							{props.commandText}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
