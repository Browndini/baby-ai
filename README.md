
### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/Browndini/baby-ai.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |

## Commit message style
- **feat**: The new feature you're adding to a particular application
- **fix**: A bug fix
- **style**: Feature and updates related to styling
- **refactor**: Refactoring a specific section of the codebase
- **test**: Everything related to testing
- **docs**: Everything related to documentation
- **chore**: Regular code maintenance.[ You can also use emojis to represent commit types]

**ex**: feat: added modal for subscriptions