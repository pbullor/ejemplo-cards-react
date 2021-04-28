import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./card.js";

//create your first component
export function Home() {
	let card = [
		{
			nombre: "Bob Marley",
			descripcion:
				"Robert Nesta Marley, más conocido como Bob Marley, fue un músico, guitarrista y compositor jamaicano. Durante su carrera musical fue el líder, compositor y guitarrista de las bandas The Wailers y Bob Marley & The Wailers."
		},
		{
			nombre: "Michael Jackson",
			descripcion:
				"Michael Joseph Jackson​ fue un cantante, compositor, productor discográfico, bailarín, actor y filántropo estadounidense."
		},
		{
			nombre: "Emiliano Brancciari",
			descripcion:
				"Emiliano Germán Brancciari Amarillo es un músico y compositor argentino, que hizo la mayoría de su carrera musical en Uruguay. Es uno de los líderes fundadores de la banda No Te Va Gustar. "
		}
	];
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<div className="container">
				<div className="row">
					{card.map((item, index) => {
						return (
							<Card
								key={index}
								titulo={item.nombre}
								descripcion={item.descripcion}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
