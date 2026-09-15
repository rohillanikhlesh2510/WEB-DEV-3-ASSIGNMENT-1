// creating a server using http module

// importing the http module 
const http = require("http");

// creating a server
const server = http.createServer((req, res) => {

    // Ignore favicon requests without logging error
    if (req.url === "/favicon.ico") {
        res.writeHead(204);
        res.end();
        return;
    }

    const nav = `
        <nav style='margin-top: 15px;'>
            <a href='/' style='color: blue; text-decoration: none; font-weight: bold;'>Home</a> | 
            <a href='/about' style='color: green; text-decoration: none; font-weight: bold;'>About</a> | 
            <a href='/contact' style='color: red; text-decoration: none; font-weight: bold;'>Contact</a>
        </nav>
    `;

    if (req.url === "/" || req.url === "/home") {
        // if the route is "/" or "/home" then the welcome message will appear
        res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
        res.end(`
            <h1 style='color:black'> Welcome to my http server !! </h1>
            <p>Smart Utility Toolkit Web Server powered by Node.js core HTTP module.</p>
            ${nav}
        `);
        console.log("Welcome to my http server !!");

    } else if (req.url === "/about") {
        // if the route is "/about" then the about page will appear and with a corresponding message
        res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
        res.end(`
            <h1 style='color:green'>About Page</h1>
            <p> Hola, Myself Nikhlesh Rohilla.
            </br> I am currently doing B.Tech CSE Core from 
            </br> 
            K.R. Mangalam University,
            Gurugram, Haryana 
            </br>
            GitHub: <a href="https://github.com/rohillanikhlesh2510" target="_blank">rohillanikhlesh2510</a>
            </p>
            ${nav}
        `);
        console.log("About Page");
        console.log(
            "Hola, Myself Nikhlesh Rohilla. I am currently doing B.Tech CSE Core from K.R. Mangalam University, Gurugram, Haryana ",
        );

    } else if (req.url === "/contact") {
        // if the route is "/contact" then the contact page will appear with the corresponding message
        res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
        res.end(`
            <h1 style='color:red'>Contact Page</h1>
            <p> GitHub : https://github.com/rohillanikhlesh2510
            </br> Email : bharatgram25@gmail.com
            </p>
            ${nav}
        `);
        console.log("Contact Page");
        console.log("GitHub : https://github.com/rohillanikhlesh2510 ,Email : bharatgram25@gmail.com");

    } else {
        // handling the routes that do not exist with error message
        res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
        res.end(`
            <h1 style='color:red'>404 : Not Found Error !!</h1>
            <p>The requested route <code>${req.url}</code> does not exist on this server.</p>
            ${nav}
        `);
        console.log(`404 : Not Found Error !! (${req.url})`);
    }
});

// port configuration (fallback to 3000 or 10000)
const PORT = process.env.PORT || 3000;

// running the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} !!`);
});

// to run the code run the following command :
// node server.js
// and open postman or any browser to test different routes
