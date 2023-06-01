import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blogSection'>
            <div className="container mx-auto">
                <div className="qa-container mb-16" data-aos="fade-up">
                    <h1>What is an access token and refresh token? <br /> How do they work and where should we store them on the client-side?</h1>
                    <div className='text-justify'>
                        An <i>access token</i> and a <i>refresh token</i> are commonly used in authentication and authorization systems. <br />
                        <strong>Access Token:</strong> An access token is a credential that is issued to a client application (such as a web or mobile app) by an authentication server after the user successfully authenticates. It represents the authorization granted to the client to access specific resources or perform certain actions on behalf of the user. Access tokens are typically short-lived and have an expiration time. <br />
                        <strong>Refresh Token:</strong> A refresh token is also issued by the authentication server, alongside the access token. It has a longer expiration time compared to the access token. The refresh token is used to obtain a new access token when the current one expires or becomes invalid. It allows the client application to request a new access token without requiring the user to re-authenticate. <br /><br />
                        <b>Here's how the access token and refresh token workflow typically works (Figure 1):</b> <br />

                        <div className='w-1/2 mx-auto'>
                            <img src="https://i.stack.imgur.com/BPJjA.png" className='w-full' alt="" />
                            <h4 className='text-center'>Figure 1: Work Flow of Access Token and Refresh Token</h4>
                        </div><br /><br />

                        1. Authentication: The user provides their credentials (e.g., username and password) to the authentication server. If the credentials are valid, the server generates an access token and a refresh token. <br />

                        2. Access Token Usage: The client application includes the access token in the Authorization header or another appropriate location in API requests to the resource server. The server verifies the token to ensure the client has the necessary permissions to access the requested resource. If the token is valid and has not expired, the server processes the request and responds accordingly. <br />

                        3. Access Token Expiration: Access tokens have a limited validity period to enhance security. Once the access token expires, the client application needs to obtain a new one. <br />

                        4. Refresh Token Usage: If the access token expires or becomes invalid, the client application sends the refresh token to the authentication server. The server verifies the refresh token's validity and, if valid, issues a new access token. The refresh token is also updated or rotated, ensuring security and preventing abuse. <br />
                    </div>
                </div>
                <div className="qa-container mb-16" data-aos="fade-up">
                    <h1>Comparision between SQL and NoSQL databases</h1>
                    <div className='text-justify'>
                        <strong>SQL (Structured Query Language)</strong> and <strong>NoSQL (Not only SQL)</strong> are two different types of database management systems, each with its own strengths and suitable use cases. Here's a comparison between SQL and NoSQL databases: <br /><br />
                        <div className='w-1/3 mx-auto'>
                            <img src="https://dz2cdn1.dzone.com/storage/temp/15015863-nosql-sql-venn-diagram-figure-1.png" className='w-full' alt="" />
                            <h3 className='text-center mt-5'>Figure 2: SQL vs NoSQL</h3>
                        </div>
                        <strong>#</strong> SQL databases are relational, and NoSQL databases are non-relational. <br />
                        <strong>#</strong> SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
                        <strong>#</strong> SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
                        <strong>#</strong> SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />
                        <strong>#</strong> SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.

                    </div>
                </div>
                <div className="qa-container mb-16" data-aos="fade-up">
                    <h1>What is express js? What is Nest JS.</h1>
                    <div className='text-justify'>
                        <strong>Express.js</strong> and <strong>NestJS</strong> are both web application frameworks that are used to build server-side applications. However, they have some differences in terms of their design philosophy and features. <br /><br />

                        <strong>Express.js: </strong> <br /><br />
                        <div className='flex blogFlex1 gap-10'>
                            <div className='blogFlexImg'>
                                <img src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" className='w-full' alt="" />
                            </div>
                            <div>
                                <strong>#</strong> It is a minimalist web application framework for Node.js. It provides a simple and unopinionated way to build web applications and APIs. <br />
                                <strong>#</strong> It is known for its minimalistic approach, allowing developers to have more control over the application's structure and components. <br />
                                <strong>#</strong> Express.js provides a set of lightweight middleware functions that can be used to handle various aspects of the HTTP request-response cycle, such as routing, request parsing, authentication, and error handling. <br />
                                <strong>#</strong> It has a large and active community, extensive documentation, and a wide range of plugins and middleware available, making it highly flexible and customizable. <br />
                                <strong>#</strong> Express.js is suitable for small to medium-sized projects, APIs, and applications that require more control and customization.
                            </div>
                        </div><br /><br /><hr /><br />

                        <strong>Nest.js: </strong> <br /><br />
                        <div className='flex blogFlex2 gap-10'>
                            <div>
                                <strong>#</strong> NestJS is a progressive and opinionated framework for building efficient and scalable server-side applications. It is built with TypeScript and uses Express.js under the hood. <br />
                                <strong>#</strong> It aims to provide an organized and structured approach to application development, following the principles of Dependency Injection, modularity, and design patterns like MVC (Model-View-Controller). <br />
                                <strong>#</strong> NestJS provides a set of built-in modules, decorators, and tools that simplify common web development tasks such as routing, input validation, authentication, and database integration. <br />
                            </div>
                            <div className='w-1/2 blogFlexImg'>
                                <img src="https://cdn-scalioadmin.s3.amazonaws.com/work/og/circle-nest-png-1583305694768.png" className='w-full' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="qa-container" data-aos="fade-up">
                    <h1>What is MongoDB aggregate and how does it work? </h1>
                    <div className='text-justify'>
                        In MongoDB, the aggregate function is used to perform advanced data aggregation operations on collections. It allows you to process and transform data, apply complex computations, and obtain aggregated results based on specified criteria. The aggregate function takes an array of stages as input, where each stage represents a specific operation or transformation. <br /><br />
                        <div className='w-1/2 mx-auto'>
                            <img src="https://studio3t.com/wp-content/uploads/2018/10/Mongodb.png" className='w-full' alt="" />
                            <h3 className="text-center">Figure 5: MongoDB aggregate</h3>
                        </div><br />
                        <strong>Step 1 [Pipeline Stages]:</strong> The aggregate function takes an array of stages as its input. Each stage represents a specific operation or transformation to be applied to the data. The stages are executed sequentially, and the output of one stage becomes the input for the next stage. <br /> <br />
                        <strong>Step 2 [Stage Operations]:</strong> Each stage in the pipeline can perform various operations on the data. Some commonly used stage operations include: <br />

                        &nbsp;&nbsp;&nbsp;&nbsp;<strong>$match:</strong> Filters the documents based on specified criteria. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<strong>$group:</strong> Groups documents together based on a specified key and performs aggregations on the grouped data. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<strong>$sort:</strong> Sorts the documents based on specified fields. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<strong>$project:</strong> Selects and reshapes the fields in the documents. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<strong>$limit:</strong> Limits the number of documents in the output. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<strong>$skip:</strong> Skips a specified number of documents in the output. <br />
                        <br />
                        <strong>Step 3 [Data Transformation]:</strong> Each stage in the pipeline can transform the data based on the specified operation. For example, you can group documents based on a common field and calculate aggregate values like counts, sums, averages, etc. You can reshape the documents by including or excluding specific fields using the $project stage. You can also sort and limit the output as needed. <br /><br />

                        <strong>Step 3 [Aggregated Result:]:</strong> The final stage in the pipeline produces the aggregated result based on the transformations and operations performed in the earlier stages. The output can be a collection of documents or a specific value based on the operations specified.
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;