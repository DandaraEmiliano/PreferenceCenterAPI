## Preference Center API

## Overview

This API allows managing user preferences for notifications (email and SMS). It provides endpoints to manage users and their consent events.

## Features

- CRUD operations for users.
- Create events to manage consent status.
- Full audit history for user consent changes.

## Tech Stack

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Sequelize (ORM)

## Installation

- Node.js installed
- PostgreSQL database created (`preference_center`)

## Clone the repository:

   git clone https://github.com/your-repo/preference-center-api.git

   cd preference-center-api

## Install dependencies:

npm install

## Configure database: 

Edit src/config/database.ts with your database credentials.

## Run migrations:

npx sequelize-cli db:migrate

## Start the server:

npm start

## Endpoints

/api/users
- GET: Retrieve all users and their current consent status.
- POST: Create a new user.
- DELETE: Delete a user by ID.

/api/events
- POST: Create a consent change event for a user.

