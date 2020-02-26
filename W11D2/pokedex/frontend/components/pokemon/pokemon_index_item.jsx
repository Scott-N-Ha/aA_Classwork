import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ id, name, image_url}) => {
  let link = "/pokemon/" + id;

  return (
    <Link to={link}>
      <li className="pokeIndexEntry">
        <img className="pokeIndexEntry-img" src={image_url} alt={name} />
        {name}
      </li>
    </Link >
  )
}

export default PokemonIndexItem;