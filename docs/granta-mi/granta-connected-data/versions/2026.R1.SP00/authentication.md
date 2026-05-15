# Authentication

To both develop and use Granta Connected Data, you need to authenticate using [Ansys ID](https://webapps.ansys.com/era/ssosupport/index).
 
For developing your own plugin to Granta Connected Data, send the following information to your Ansys representative:
 
- Your Name
- Your email account
- The Product team you are working with

To enable your customers to access Granta Connected Data from your application, their Ansys ID accounts must also be enabled, send the following information about each account in CSV format to your Ansys representative:

- Name
- Email address
- Company
- Database access required


## C# example
In C# ASP.NET Core, authentication against Ansys ID is fairly simple. 

There are libraries you can use, and you'll need to specify the following in your authentication flow:

```cs
b2cauthority = "https://a365dev.b2clogin.com/tfp/a365dev.onmicrosoft.com/B2C_1A_ANSYSID_SIGNUP_SIGNIN";
clientId = "63377600-f6ce-4c19-9c0e-a7278d7bde8c";
scope = "https://a365dev.onmicrosoft.com/AnsysID/Authentication";
redirectURI = "http://localhost:32284";
```

If done correctly, you will get a popup in your system's browser.

Use the token in the response from the authentication flow in the Authorization header in subsequent API requests. Only requests to the Granta Integration Service need this header (not the call to open a web browser to display the Granta Material Picker).

```
Authorization: Bearer TOKEN
```

## Python example
In Python, there is an MSAL library that can be used to retrieve an access token for the Granta Integration Service.

First, install MSAL.

```cmd
python -m pip install msal
```

And use these parameters to authenticate in a browser with Azure AD B2C. 

```python
ansys_id_client_id = "63377600-f6ce-4c19-9c0e-a7278d7bde8c"
ansys_id_authority = "https://a365dev.b2clogin.com/a365dev.onmicrosoft.com/B2C_1A_ANSYSID_SIGNUP_SIGNIN"
scope = "https://a365dev.onmicrosoft.com/AnsysID/Authentication"

# Use Microsoft Authentication Library (MSAL) to log in using the system browser
token_resp = msal.PublicClientApplication(ansys_id_client_id, authority=ansys_id_authority).acquire_token_interactive(scopes=[scope], port=32284)

# Store the token from logging in for use in subsequent HTTP requests
auth_header = {"Authorization": f"Bearer {token_resp['access_token']}"}
```

Use this authorization header in subsequent HTTP requests.