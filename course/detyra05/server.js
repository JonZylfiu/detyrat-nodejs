import http from "http";
import querystring from "querystring";

const address = 'localhost';
const port = 8080;

const handleRequests = (req, res) => {
    const method = req.method;
    const url = req.url;


    if(url == "/login.html" && method == "GET") {
        loginPage(req, res, '', '');
    } 


    if(url == "/login.html" && method == "POST") {
        handleLogin(req, res);
    }

}

const loginPage = (req, res, message, color) => {

    res.setHeader("Content-Type", "text/html; charset=utf-8");

    const html = `
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>Login Page</title>
                </head>
                <body>
                    <form method="POST" action="/login.html">
                        <label for="username">Username: </label>
                        <input type="text" id="username" name="username"/>
                        <br />
                        <br />
                        <label for="password">Password: </label>
                        <input type="password" id="password" name="password"/>
                        <br />
                        <button type="submit">Login</button>
                        </br>
                        <p style='color: ${color};'>${message}</p>
                    </form>
                </body>
            </html> 
        `;

    res.write(html);
    res.end();
}

const handleLogin = (req, res) => {

    let data = "";
    req.on('data', chunk => {
        data += chunk;
    })


    req.on("end", () => {

        const parsedData = querystring.parse(data);

        if(parsedData.username == 'user' && parsedData.password == 'secret') {
            loginPage(req, res, "Success!", 'green')
            res.end();
        } else {
            loginPage(req, res, "Username or Password are incorrect!", 'red')
            res.end();
        }
    })
}


const server = http.createServer(handleRequests);
server.listen(port, address, () => console.log(`Server is running on port ${port} and address: ${address}`));