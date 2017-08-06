> Generate GraphQL schema in a consistent, database-agnostic way.

## Why OctoQl

 * Once finished, OctoQl will aim to support scaffolding data logic in a database-agnostic manner.
 That means OctoQl will look at your data as sets of arrays and objects retreived from source of your choice, be it your
 own database, some public api or any other source of truth.


## Installation

First, install [Yeoman](http://yeoman.io) and generator-octoql using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-octoql
```

Then generate your schema:

```bash
mkdir schema
touch configFile.js, fill configFile with description of your data <-- this will be generated soon
yo octoql
```

## Getting To Know Yeoman

 * This project is being developed using yeoman generator.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Adam Żaczek]()
