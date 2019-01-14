# Running the application

## API server
* Install json-server using npm. (https://www.github.com/typicode/json-server)
* Run `json-server data.json`
* usually json server runs at port 3000. if it runs at any other port. please update the new url value in  model.js.

## UI client
* `cd` into `src` directory and run a static file server. example `python3 -m http.server`. This is needed to prevent chrome from running into CORS issues while fetching static files.
* Point the browser at the URL and the application will be loaded.
