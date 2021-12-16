const http = require("http");
const url = require("url");
const fs = require("fs");

const mainHtml = fs.readFileSync(`${__dirname}/templates/index.html`, `utf-8`);
const tempHtml = fs.readFileSync(
  `${__dirname}/templates/template-index.html`,
  `utf-8`
);
const data = fs.readFileSync(`${__dirname}/data/universe.json`, `utf-8`);

const dataObj = JSON.parse(data);

const replaceTemplate = function (template, planet) {
  let output = template.replace(/{%DESCRIPTION%}/g, planet.description);
  output = output.replace(/{%NAME%}/g, planet.name);
  output = output.replace(/{%IMAGE%}/g, planet.image);
  output = output.replace(/{%FACTS%}/g, planet.facts);
  output = output.replace(/{%DISTANCE%}/g, planet.distance);
  output = output.replace(/{%FIRST_VISITED%}/g, planet.visited);

  return output;
};

const server = http.createServer((req, res) => {
  const pathname = req.url;
  if (pathname === `/` || pathname === `/index.html`) {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const htmlShow = replaceTemplate(tempHtml, dataObj[0]);

    res.end(htmlShow);
  } else if (pathname === `/moon.html`) {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const htmlShow = replaceTemplate(tempHtml, dataObj[1]);

    res.end(htmlShow);
  } else if (pathname === `/venus.html`) {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const htmlShow = replaceTemplate(tempHtml, dataObj[2]);
    res.end(htmlShow);
  } else if (pathname === `/saturn.html`) {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const htmlShow = replaceTemplate(tempHtml, dataObj[3]);
    res.end(htmlShow);
  } else if (pathname === `/mars.html`) {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const htmlShow = replaceTemplate(tempHtml, dataObj[4]);
    res.end(htmlShow);
  } else if (pathname === `/jupiter.html`) {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const htmlShow = replaceTemplate(tempHtml, dataObj[5]);
    res.end(htmlShow);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end(`<h1>Page Not Found</h1>`);
  }
});

server.listen(8000, `127.0.0.1`, () => {
  console.log(`Listening to port 8000`);
});
