import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="bg-white text-dark">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Your Questions ? My Answer.</h2>
		<p className="mt-4 mb-8 dark:text-gray-400"></p>
		<div className="space-y-4">
		<details className="w-full border rounded-lg">
			<summary className="px-4 text-2xl py-6 focus:outline-none focus-visible:ring-violet-400">What is ContextAPi?</summary>
			<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">React.createContext() is all you need. Itreturns a consumer and a provider. Provider is a component that as it's names suggests provides the stateto its children. It will hold the "store" and be the parent of all the components that might need thatstore.Consumer as it so happens is a component that consumes and uses the state.</p>
		</details>
		<details className="w-full border rounded-lg">
			<summary className="px-4 text-2xl py-6 focus:outline-none focus-visible:ring-violet-400">What is perpose of react router?</summary>
			<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. </p>
		</details>
		<details className="w-full border rounded-lg">
			<summary className="px-4 py-6 text-2xl focus:outline-none focus-visible:ring-violet-400">What is useRef()?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">UseRef() is a react Hook.useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.Essentially, useRef is like a “box” that can hold a mutable value in its .current property.However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.</p>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default Blog;