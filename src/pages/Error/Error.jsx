import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
      
		<div className='errorContainer'>
			<h2>404</h2>
			<h3><span>Oups! La page que </span><span>vous demandez n'existe pas.</span></h3>
			<Link to='/'>Retourner sur la page d'accueil</Link>

		</div>
    </div>
  )
}

export default Error