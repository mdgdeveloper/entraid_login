This is a [Next.js](https://nextjs.org/) application which provides a boilerplate to Azure Entra ID authentication

## Requirements

`.env` file should be filled with the actual data required for the application to work:

```
AZURE_CLIENT_ID=""
AZURE_CLIENT_SECRET=""
AZURE_TENANT_ID=""
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=""
```

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000/protected](http://localhost:3000/protected) with your browser to see the result.