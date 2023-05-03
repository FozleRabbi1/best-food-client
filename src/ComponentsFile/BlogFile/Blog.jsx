import './Blog.css';

const Blog = () => {
    return (
        <div>

            <h2 className="text-center mt-8 text-red-700 text-2xl ">...This is blog page...</h2>

            <div className="all-blogs text-white grid grid-cols-2 gap-10 py-10 " >
                <div className="divOne">
                    <h2 className="text-red-500 mb-2 text-lg">differences between uncontrolled and controlled components.</h2>

                    <p className="text-sm">
                        <span>Uncontrolled components refer to those parts of a system that are not actively managed or regulated. They may have a significant impact on the behavior of the system, but they are not subject to direct control.</span>
                        <span className="mt-1 block">
                            On the other hand, controlled components are those parts of a system that are actively managed or regulated in some way. This can include physical components such as machines or software systems, as well as human factors such as training programs and standard operating procedures.
                        </span>
                    </p>
                </div>
                <div className="divTwo">
                    <h2 className="text-red-500 mb-2 text-lg" >How to validate React props using PropTypes...?</h2>
                    <p className='text-sm'>
                        React provides a way to validate the props that are passed to a component using the PropTypes library. This library allows you to specify the type of each prop, as well as any other validation rules that you want to apply.Here is how to use PropTypes to validate props in a React component:
                    </p>
                </div>

                <div className="divThree">
                    <h2 className="text-red-500 mb-2 text-lg" >difference between nodejs and express js</h2>
                    <p className='text-sm'>
                        <span>
                            Node.js is a runtime environment for executing JavaScript code outside of a web browser, allowing developers to create server-side applications using JavaScript. It includes built-in modules for handling file input/output, network communication, and other common tasks.
                        </span>
                        <span className="mt-1 block">
                            Express.js, on the other hand, is a web application framework built on top of Node.js that simplifies the process of building web applications and APIs. It provides a set of features for routing, handling HTTP requests and responses, middleware for handling cross-cutting concerns, and templates for generating HTML views.
                        </span>
                    </p>
                </div>

                <div className="divFour">
                    <h2 className="text-red-500 mb-2 text-lg" >What is a custom hook, and why will you create a custom hook...?</h2>
                    <p className='text-sm'>
                        In React, a custom hook is a reusable function that encapsulates logic that can be shared between different components. Custom hooks allow you to extract common functionality into a single place, making it easier to manage and reuse code across your application.

                        <ul>
                            <li>Reusability: If you find yourself repeating the same code in multiple components, it might be a good idea to create a custom hook to encapsulate that logic and reuse it wherever it is needed.</li>
                            <li>Abstraction: Custom hooks can abstract away complex functionality, making it easier to use in other components. This can make your code more readable and easier to maintain.</li>
                        </ul>




                    </p>
                </div>
            </div>


        </div>
    );
};

export default Blog;