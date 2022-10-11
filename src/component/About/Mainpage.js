import React from 'react';
import { Link } from 'react-router-dom';

const Mainpage = () => {
    return (
        <div>
            <section className="bg-sky-300 text-white">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">Welcome to 
			<span className="dark:text-violet-400"> Quiz.Com </span>
		</h1>
		<p className="px-8 mt-8 mb-12 text-white text-lg">Do Check yourself ? Then Press the (Getstart) button!!</p>
		<div className="flex flex-wrap justify-center">
			<Link to='/exam' className="px-8 py-3 m-2 text-lg font-semibold rounded bg-sky-400 text-white">Get started</Link>
					</div>
	</div>
</section>
        </div>
    );
};

export default Mainpage;