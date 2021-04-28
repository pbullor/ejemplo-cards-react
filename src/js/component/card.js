import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="col-4">
			<div className="card">
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{props.titulo}</h5>
					<p className="card-text">{props.descripcion}</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;

Card.propTypes = {
	titulo: PropTypes.string,
	descripcion: PropTypes.string
};
