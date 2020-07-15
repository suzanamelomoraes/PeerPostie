# Peer Posties NZ - peer-to-peer delivery

### 2nd place winner of Hack the Crisis NZ 2020 hackathon

This is a project/pitch planed and developed in less than 48h by a team of 10 people, including me, during Hack the Crisis NZ 2020 (17-19 April). I contributed to building the database in SQLite, API’s and components in React.

The organisers of this hackathon challenged Kiwis to design, test and bring to life innovative ideas for life in New Zealand beyond COVID-19.

The goal was finding innovative solutions to problems brought about by COVID-19 inside three themes:

- Supporting businesses
- Connecting communities
- Resilience and wellbeing

This repository contains the code of what could be finished in time to present the idea to the judges.

The project went to the Top 8 finalist and after that, one of the three runner-ups - 2nd equal winner.

## Run the project

To start the development server with a watcher that rebuilds your code, run `npm run dev`. The assets built by Webpack are placed in `server/public`. This folder is defined as a static folder in an Express.js server that can be started with `npm run server`.

Additional components should be placed in `client/components`.

## Separate client/server

The client is also set up to be hosted using `webpack-dev-server` with hot module reloading etc. To use this method, in one terminal run:

```shn
npm run client
```

and in the other:

```sh
npm run server
```

The client will be available on http://localhost:8080 and the server on http://localhost:3000. Note that you will still need to manage CORS between the two, as they are on different ports.
