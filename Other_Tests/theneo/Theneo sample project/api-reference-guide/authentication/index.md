When it comes to interacting with APIs, authentication is a critical step to ensure secure communication between your application and the API service. API authentication is performed via HTTP Basic Auth, which involves including your API key in the HTTP request headers. This method verifies your identity and grants you access to the API's resources, ensuring that only authorized users can make requests.

Theneo Sample API uses `API keys` to authenticate requests.

### To retrieve your API key from app.theneo.io, follow these steps:

1.  **Sign in**: Navigate to app.theneo.io and sign in with your credentials.
    
2.  **User Settings**: Once logged in, locate the user settings.
    
3.  **Tools & Integrations Tab**: Within the user settings, find the "Tools & Integrations" tab. Click on it to access settings related to integrations and tools.
    
4.  **Locate API Key**: In the Tools & Integrations tab, you should find your API key listed.
    

Add headers to an HTTP request
------------------------------

When issuing an HTTP request to Theneo, each request must contain an `Api-Key` header that specifies a valid API key and must be encoded as JSON with the `Content-Type: application/json` header.

CURL

    curl -s -X POST "https://app.theneo.io" \   -H "Content-Type: application/json" \   -H "Api-Key: YOUR_API_KEY" \   -d '{         "given_name":  "Theneo",         "last_name": "APIDoc",         "mail": "hello@theneo.io",         "phone_number": ""      }

Your API keys grant significant access, so it’s crucial to keep them safe! Avoid sharing your secret API keys in public places like GitHub, client-side code, and similar locations.

API requests without authentication will fail.