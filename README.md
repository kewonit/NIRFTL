# NIRF-Tierlist [NIRFTL]

This is a [Next.js](https://nextjs.org/) project that uses [Prisma](https://www.prisma.io/) to connect to a [PlanetScale](https://planetscale.com/) database and [Tailwind CSS](https://tailwindcss.com/) along [Shadcn/ui](https://ui.shadcn.com/) for styling. Basically the [T3 Stack](https://create.t3.gg/)

## Prerequisites

- [Next.js](https://nextjs.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [Node.js](https://nodejs.org/en/download/)
- [PlanetScale CLI](https://github.com/planetscale/cli)

## Authenticate the CLI with the following command:

```sh
pscale auth login
```

## Set up the database

Create a new database with the following command:

```sh
pscale database create <DATABASE_NAME>
```

> A branch, `main`, was automatically created when you created your database, so you can use that for `BRANCH_NAME` in the steps below.

## Set up the app

Clone the repository.

```sh
git clone https://github.com/KewKartik/NIRFTL
```

Install the dependencies.

```sh
npm install
```

Next, you'll need to create a database username and password through the CLI to connect to your application. If you'd prefer to use the dashboard for this step, you can find those instructions in the [Connection Strings documentation](/concepts/connection-strings#creating-a-password) and then come back here to finish setup.

First, create your `.env` file by renaming the `.env.example` file to `.env`:

```sh
mv .env.example .env
```

Next, using the PlanetScale CLI, create a new username and password for the branch of your database:

```sh
pscale password create <DATABASE_NAME> <BRANCH_NAME> <PASSWORD_NAME>
```

> The `PASSWORD_NAME` value represents the name of the username and password being generated. You can have multiple credentials for a branch, so this gives you a way to categorize them. To manage your passwords in the dashboard, go to your database overview page, click "Settings", and then click "Passwords".

Take note of the values returned to you, as you won't be able to see this password again.

```text
Password production-password was successfully created.
Please save the values below as they will not be shown again

  NAME                  USERNAME       ACCESS HOST URL                     ROLE               PLAIN TEXT
 --------------------- -------------- ----------------------------------- ------------------ -------------------------------------------------------
  production-password   xxxxxxxxxxxxx   xxxxxx.us-east-2.psdb.cloud   Can Read & Write   pscale_pw_xxxxxxx
```

You'll use these properties to construct your connection string, which will be the value for `DATABASE_URL` in your `.env` file. Update the `DATABASE_URL` property with your connection string in the following format:

```text
mysql://<USERNAME>:<PLAIN_TEXT_PASSWORD>@<ACCESS_HOST_URL>/<DATABASE_NAME>?sslaccept=strict
```

Push the database schema to your PlanetScale database using Prisma.

`npx prisma db push`

Run the seed script to populate your database with `Product` and `Category` data.

`npm run seed`

## Run the App

Run the app with following command:

`npm run dev`

Open your browser at [localhost:3000](localhost:3000) to see the running application.

## Deploying

After you've got your application running locally, it's time to deploy it. To do so, you'll need to promote your database branch (`main` by default) to be the production branch ([read the branching documentation for more information](https://planetscale.com/docs/concepts/branching)).

```sh
pscale branch promote <DATABASE_NAME> <BRANCH_NAME>
```

Now that your branch has been promoted to production, you can either use the existing password you generated earlier for running locally or create a new password. Regardless, you'll need a password in the deployment steps below.

Choose one of the following deploy buttons and make sure to update the `DATABASE_URL` variable during this setup process.

## Deploying the webiste

For example we can consider vercel as our hosting platform. ([We need to use a workaround to generate prisma at every devployment ](https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/vercel-caching-issue)).

### A custom postinstall script

Within the scripts section of your project's package.json file, if there is not already a script named postinstall, add one and add prisma generate to that script:

```js
{
  ...
  "scripts" {
    "postinstall": "prisma generate"
  }
  ...
}
```

### The application's build script in package.json

Within the scripts section of your project's package.json file, within the build script, prepend prisma generate to the default vercel build command:

```js
{
  ...
  "scripts" {
    "build": "prisma generate && <actual-build-command>"
  }
  ...
}
```

Another way to do it is just add `npx prisma generate && next build`!

## Also you can cache your site using cloudflare to avoid high bandwidth usage on vercel

([With Proxy](https://vercel.com/guides/using-cloudflare-with-vercel)).
