
The code in this page follows the example script `SSEExample.py`, available here: [python_examples.zip](https://github.com/ansys/DevRelPublic/raw/main/Downloads/granta-connected-data/python_examples.zip)


# Getting Started

Launch the Granta Material Picker in a browser and obtain data for the material models selected for use in your application.

## Imports
Import required packages for the workflow. 

```python
import requests
import json
import webbrowser
import msal
```

## Authentication

Obtain an access token from Ansys ID and format an authentication header. The underlying standard used is OIDC. 
```python
ansys_id_client_id = "28982bbf-f354-4e48-8bfb-e542d44c588c"
ansys_id_authority = "https://ansysaccount.b2clogin.com/ansysaccount.onmicrosoft.com/B2C_1A_ANSYSID_SIGNUP_SIGNIN"
scope = "https://ansysaccount.onmicrosoft.com/AnsysID/Authentication"

# Use Microsoft Authentication Library (MSAL) to log in using the system browser
token_resp = msal.PublicClientApplication(ansys_id_client_id, authority=ansys_id_authority).acquire_token_interactive(scopes=[scope], port=32284)

# Store the token from logging in for use in subsequent HTTP requests
auth_header = {"Authorization": f"Bearer {token_resp['access_token']}"}
print("Authenticated")
```

## Connect to the Granta Integration Service

Create a session on the Granta Integration Service and store the response from that call.
```python
sessions_endpoint = f"{host}/api/v1/sessions/"

# Create a session. Set a title for the Granta Material Picker. Store the response
print(f"sending request to {sessions_endpoint}")
post_session_resp = requests.post(sessions_endpoint, json={'name':'My Application', 'settings':{'title':'My Application', 'packageName':'Workbench', 'pollSeconds': 50}}, headers=auth_header, verify=0).json()
```

## Launch the Granta Material Picker

Launch the Granta Material Picker in a browser (this example uses the default web browser). The session uid from the previous step is required here.

```python
print("Opening browser...")
# Launch default browser at the Granta Material Picker session
webhost = "https://cloudserver.com"
```

In the browser, you can now search for materials and select material models to transfer to your application.

## Receive model data

Retrieve the material model data from the Granta Integration Service.
```python
# Retrieve data (blocks until a material model is selected in Granta Material Picker or a timeout configurable in the request elapses)
data_response = requests.get(f"{sessions_endpoint}{post_session_resp['id']}/data", headers=auth_header, verify=0).json()

# Print out the response returned (replace this with your own code to process the material data)
print(json.dumps(data_response, indent=True))
```

Your application can now use the material data contained in `data_response`. Replace the `print` statement with your code to handle the material data. 