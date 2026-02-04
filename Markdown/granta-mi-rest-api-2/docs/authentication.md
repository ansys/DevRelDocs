# Authentication

To use the Granta Integration Service's web API, you must authenticate using [Ansys ID](https://webapps.ansys.com/era/ssosupport/index).

To request access to Granta Cloud Connected Materials, send your requirements to a member of the administration team via the Teams channel:

[Granta Cloud Connected Materials| Questions and Feedback](https://teams.microsoft.com/l/channel/19%3AZZ7_UUt4IZ5UZppC3BhIZcR1NlXWhphtIe3YwyONsCU1%40thread.tacv2/Questions%20and%20Feedback?groupId=3ba720a6-d1c0-4d0c-bce0-23a5edd266f1&tenantId=34c6ce67-15b8-4eff-80e9-52da8be89706)

## C# example
In C# asp.net Core, authentication against Ansys ID is fairly simple. 

There are libraries you can use, and you'll need to specify the following in your authentication flow:

```cs
b2cauthority = "https://a365dev.b2clogin.com/tfp/a365dev.onmicrosoft.com/B2C_1A_ANSYSID_SIGNUP_SIGNIN";
clientId = "63377600-f6ce-4c19-9c0e-a7278d7bde8c";
scope = "https://a365dev.onmicrosoft.com/AnsysID/Authentication";
redirectURI = "http://localhost:32284";
```

If done correctly, you will get a browser popup like this in your system's browser.

![Material Model Picker Button](./images/EntraID.png)

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