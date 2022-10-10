import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <header className="p-4 bg-white text-dark text-2xl">
	<div className="container flex justify-between h-16 mx-auto">
		<Link rel="noopener noreferrer" to="#" aria-label="Back to homepage" className="flex items-center m-0 ">
		<img className='w-40 ' src="https://i.ibb.co/7nZzDZh/logo-quiz.webp" alt="logo-quiz"></img>
		</Link>
	<ul className="items-stretch hidden space-x-3 md:flex">
		<li className="flex">
			<Link rel="noopener noreferrer" to="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</Link>
		</li>
		<li className="flex">
			<Link rel="noopener noreferrer" to="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</Link>
		</li>
		<li className="flex">
			<Link rel="noopener noreferrer" to="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400">Link</Link>
		</li>
		<li className="flex">
			<Link rel="noopener noreferrer" to="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Blog</Link>
		</li>
	</ul>
	<button className="flex justify-end p-4 md:hidden">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
        </div>
    );
};

export default Navbar;