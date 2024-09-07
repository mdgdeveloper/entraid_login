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

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## MSAL Library

The Microsoft Authentication Library (MSAL) for Next.js and React is a JavaScript library that enables secure authentication and authorization for applications using Azure Entra ID (Former AAD). 

It simplifies integrating Microsoft's identity platform into web apps by providing tools and methods for handling user sign-in, acquiring access tokens, and securely managing user sessions. 

MSAL supports Single Sign-On (SSO), multi-factor authentication, and various authentication flows such as OAuth 2.0 and OpenID Connect, making it ideal for protecting React-based applications and accessing Microsoft services like Microsoft Graph API.

## This project

This project works with MSAL library in two ways:

### User Authentication

Using `next-auth` library to authenticate the user and keep the session in all the project

- Ref: [https://next-auth.js.org/](https://next-auth.js.org/)

#### User authentication process

1. **User Initiates Login:**
   - The user clicks a "Sign In" button on the frontend.
   - This triggers a request to the NextAuth API (/api/auth/signin). `/app/api/auth/[..nextauth]`

2. **NextAuth API Handler:**
   - The NextAuth API handler uses the Microsoft provider configuration (MSAL) to initiate the authentication flow.
   - NextAuth redirects the user to the Microsoft identity platform's authorization endpoint.

3. **Microsoft Identity Platform:**
   - The user is presented with a Microsoft login page. `/login/page.tsx`
   - The user enters their credentials (username and password) and, if required, completes multi-factor authentication (MFA).
   - If the credentials are correct, Microsoft redirects back to Next.js with an authorization code.

4. **Authorization Code Exchange:**
   - NextAuth (on the server-side) uses MSAL to exchange the authorization code for an access token and an ID token by making a request to the Microsoft identity platform's token endpoint.

5. **User Redirected to Protected Page:**
   - The user is redirected back to the application, now authenticated.
   - The application can use the access token (stored securely) to access Microsoft services (e.g., Microsoft Graph API) on behalf of the user.

## References

- [Azure MSAL Node Package (Microsoft)](https://learn.microsoft.com/en-us/javascript/api/@azure/msal-node/?view=msal-js-latest)
- [MSAL libraty for JS (GitHub Repo)](https://github.com/AzureAD/microsoft-authentication-library-for-js)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
