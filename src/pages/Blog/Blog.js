import React from "react";
import "./Blog.css";
import Blog1 from "../../assets/images/blog/jwt.png";
import Blog2 from "../../assets/images/blog/nodejs.jpg";

const Blog = () => {
    return (
        <div>
            <h2 className="text-4xl font-semibold mt-10 mb-6">Blog</h2>
            <div className="blog-content">
                <h4 className="bg-success rounded-lg p-4 text-2xl font-bold">
                    What is the differences between SQL and NoSQL?
                </h4>
                <div className="p-4 my-6">
                    <p className="">
                        When it comes to choosing a database the biggest
                        decisions is picking a relational (SQL) or
                        non-relational (NoSQL) data structure. While both the
                        databases are viable options still there are certain key
                        differences between the two that users must keep in mind
                        when making a decision.
                    </p>
                    <p className="mt-4">
                        <strong>The Main Differences:</strong>
                        <br />
                        <br />
                        <strong>1. Type</strong>-<br />
                        SQL databases are primarily called as Relational
                        Databases (RDBMS); whereas NoSQL database are primarily
                        called as non-relational or distributed database.
                        <br />
                        <br />
                        <strong>2. Language</strong>-<br />
                        SQL databases defines and manipulates data based
                        structured query language (SQL). Seeing from a side this
                        language is extremely powerful. <br /> A NoSQL database
                        has dynamic schema for unstructured data. Data is stored
                        in many ways which means it can be document-oriented,
                        column-oriented, graph-based or organized as a KeyValue
                        store.
                        <br />
                        <br />
                        <strong>3. Scalability </strong>-<br />
                        In almost all situations SQL databases are vertically
                        scalable. This means that you can increase the load on a
                        single server by increasing things like RAM, CPU or SSD.
                        But on the other hand NoSQL databases are horizontally
                        scalable. This means that you handle more traffic by
                        sharding, or adding more servers in your NoSQL database.
                        <br />
                        <br />
                        <strong>4. Structure </strong>-<br />
                        SQL databases are table-based on the other hand NoSQL
                        databases are either key-value pairs, document-based,
                        graph databases or wide-column stores. This makes
                        relational SQL databases a better option for
                        applications that require multi-row transactions such as
                        an accounting system or for legacy systems that were
                        built for a relational structure. Property followed –
                        SQL databases follow ACID properties (Atomicity,
                        Consistency, Isolation and Durability) whereas the NoSQL
                        database follows the Brewers CAP theorem (Consistency,
                        Availability and Partition tolerance).
                        <br />
                        <br />
                        <strong>5. Support </strong>-<br />
                        Great support is available for all SQL database from
                        their vendors. Also a lot of independent consultations
                        are there who can help you with SQL database for a very
                        large scale deployments but for some NoSQL database you
                        still have to rely on community support and only limited
                        outside experts are available for setting up and
                        deploying your large scale NoSQL deployments.
                    </p>
                </div>
            </div>
            <div>
                <h4 className="bg-success rounded-lg p-4 text-2xl font-bold">
                    What is JWT, and how does it work?
                </h4>
                <div className="p-4 my-6">
                    <strong>JSON Web Token (JWT):</strong>
                    <p>
                        JSON Web Token (JWT) is an open standard (RFC 7519) for
                        securely transmitting information between parties as
                        JSON object. It is compact, readable and digitally
                        signed using a private key/ or a public key pair by the
                        Identity Provider(IdP). So the integrity and
                        authenticity of the token can be verified by other
                        parties involved. The purpose of using JWT is not to
                        hide data but to ensure the authenticity of the data.
                        JWT is signed and encoded, not encrypted.
                    </p>
                    <br />
                    <strong>How it works:</strong>
                    <p>
                        Basically the identity provider(IdP) generates a JWT
                        certifying user identity and Resource server decodes and
                        verifies the authenticity of the token using secret salt
                        / public key.
                    </p>
                    <br />
                    <div className="flex justify-center">
                        <img src={Blog1} alt="" />
                    </div>
                    <br />
                    <ol>
                        <li>
                            1. User sign-in using username and password or
                            google/facebook
                        </li>
                        <br />
                        <li>
                            2. Authentication server verifies the credentials
                            and issues a jwt signed using either a secret salt
                            or a private key.
                        </li>
                        <br />
                        <li>
                            3. User's Client uses the JWT to access protected
                            resources by passing the JWT in HTTP Authorization
                            header.
                        </li>
                        <br />
                        <li>
                            4. Resource server then verifies the authenticity of
                            the token using the secret salt/ public key.
                        </li>
                    </ol>
                </div>
            </div>
            <div>
                <h4 className="bg-success rounded-lg p-4 text-2xl font-bold">
                    What is the difference between javascript and NodeJS?
                </h4>
                <div className="p-4 my-6">
                    <p>Differences between Javascript and NodeJS:</p>
                    <br />
                    <ol>
                        <strong>Javascript</strong>:
                        <li>
                            1. Javascript is a programming language that is used
                            for writing scripts on the website.
                        </li>
                        <li>2. Javascript can only be run in the browsers.</li>
                        <li>3. It is basically used on the client-side.</li>
                        <li>
                            4. Javascript is capable enough to add HTML and play
                            with the DOM.
                        </li>
                        <li>
                            5. Javascript can run in any browser engine as like
                            JS core in safari and Spidermonkey in Firefox.
                        </li>
                        <li>6. Javascript is used in frontend development.</li>
                        <li>
                            7. Some of the javascript frameworks are RamdaJS,
                            TypedJS, etc.
                        </li>
                    </ol>
                    <br />
                    <ol>
                        <strong>NodeJS</strong>:
                        <li>1. NodeJS is a Javascript runtime environment.</li>
                        <li>
                            2. We can run Javascript outside the browser with
                            the help of NodeJS.
                        </li>
                        <li>3. It is mostly used on the server-side.</li>
                        <li>
                            4. Nodejs does not have capability to add HTML tags.
                        </li>
                        <li>
                            5. V8 is the Javascript engine inside of node.js
                            that parses and runs Javascript.
                        </li>
                        <li>6. Nodejs is used in server-side development.</li>
                        <li>
                            7. Some of the Nodejs modules are Lodash, express
                            etc. These modules are to be imported from npm.
                        </li>
                    </ol>
                </div>
            </div>
            <div>
                <h4 className="bg-success rounded-lg p-4 text-2xl font-bold">
                    How does NodeJS handle multiple requests at the same time?
                </h4>
                <div className="p-4 my-6">
                    <p>
                        NodeJS Web Server maintains a limited Thread Pool to
                        provide services to client requests. Multiple clients
                        make multiple requests to the NodeJS server. NodeJS
                        receives these requests and places them into the
                        EventQueue . NodeJS server has an internal component
                        referred to as the EventLoop which is an infinite loop
                        that receives requests and processes them. This
                        EventLoop is single threaded. In other words, EventLoop
                        is the listener for the EventQueue.
                    </p>
                    <br />
                    <div className="flex justify-center">
                        <img src={Blog2} alt="" />
                    </div>
                    <br />
                    <p>
                        So, we have an event queue where the requests are being
                        placed and we have an event loop listening to these
                        requests in the event queue. What happens next?
                        <br />
                        The listener(the event loop) processes the request and
                        if it is able to process the request without needing any
                        blocking IO operations, then the event loop would itself
                        process the request and sends the response back to the
                        client by itself.
                    </p>
                    <p>
                        If the current request uses blocking IO operations, the
                        event loop sees whether there are threads available in
                        the thread pool, picks up one thread from the thread
                        pool and assigns the particular request to the picked
                        thread. That thread does the blocking IO operations and
                        sends the response back to the event loop and once the
                        response gets to the event loop, the event loop sends
                        the response back to the client.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
