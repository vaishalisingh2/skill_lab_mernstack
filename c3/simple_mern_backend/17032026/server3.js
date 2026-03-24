const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    // URL parse doing
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    // Exercise 3: Routing
    if (path === "/") {
        res.end("Home Page");
    } else if (path === "/about") {
        res.end("About Us");
    } else if (path === "/contact") {
        res.end("Contact Page");
    }
    // Exercise 4: Date & Time
    else if (path === "/time") {
        const now = new Date();
        res.end("Current Time: " + now.toLocaleString());
    }
    // Exercise 5: Calculator API
    else if (path === "/add") {
        const num1 = parseInt(parsedUrl.query.num1);
        const num2 = parseInt(parsedUrl.query.num2);
        const result = num1 + num2;
        res.end("Result = " + result);
    }
    // Exercise 6: JSON Response
    else if (path === "/json") {
        res.setHeader('Content-Type', 'application/json');
        const data = {
            name: "Satish",
            course: "BCA",
            role: "Student"
        };
        res.end(JSON.stringify(data));
    }
    //Exercise 7: Student Info Routes
    else if (path === "/student") {
        res.end("Student: Satish, BCA 3rd Year");
    } else if (path === "/course") {
        res.end("Course: Bachelor of Computer Applications");
    } else if (path === "/teacher") {
        res.end("Teacher: Rajeev Sir");
    }
    // Exercise 8: HTML Response
    else if (path === "/html") {
        res.setHeader('Content-Type', 'text/html');
        res.end(`
            <h1>Welcome</h1>
            <p>This is my Node.js Server</p>
        `);
    }
    else {
  // Default Route (Important)
        res.end("404 Page Not Found");
    }
});
// Server start
server.listen(3000, () => {
    console.log("Server running on port 3000");
});

