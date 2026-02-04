# Using SSEs to wait for and retrieve data

<p style="border: 1px solid #1a78c2; padding: 10px; background-color: #f2f2f2; border-radius: 8px;">
 This page follows <a href=https://github.com/ansys-internal/granta-cloud-data-examples/blob/main/SampleHostApps/NoHost/SSEExample.py>SSEExample.py</a>
</p>


## Connect to the Granta Integration Service

This example illustrates using an SSE (Server Sent Event) connection to receive data. 
The advantage of using an SSE is that you do not have to write a polling loop to check for new data. 
The first part of this script (creating a session) is the same as in the Getting Started example.

<!-- :::code source="scripts/SampleHostApps/NoHost/SSEExample.py" language="python" range="8-34"::: -->
```python
import requests
import json
import webbrowser
import msal # pip install msal
import sseclient # pip install sseclient
from itertools import islice

# Authentication parameters for Ansys ID
ansys_id_client_id = "28982bbf-f354-4e48-8bfb-e542d44c588c"
ansys_id_authority = "https://ansysaccount.b2clogin.com/ansysaccount.onmicrosoft.com/B2C_1A_ANSYSID_SIGNUP_SIGNIN"
scope = "https://ansysaccount.onmicrosoft.com/AnsysID/Authentication"

# Use Microsoft Authentication Library (MSAL) to log in using the system browser
token_resp = msal.PublicClientApplication(ansys_id_client_id, authority=ansys_id_authority).acquire_token_interactive(scopes=[scope], port=32284)

# Store the token from logging in for use in subsequent HTTP requests
auth_header = {"Authorization": f"Bearer {token_resp['access_token']}"}

host = "https://grantamaterials.ansys.com/is"
sessions_endpoint = f"{host}/api/v1/sessions/"

# Create a session. Set a title for the Granta Material Picker. Store the response
put_session_resp = requests.post(sessions_endpoint, json={'name':'My Application', 'settings':{'title':'My Application', 'packageName':'Workbench'}}, headers=auth_header, verify=0).json()

# Launch default browser at the Granta Material Picker session
webhost = "https://grantamaterials.ansys.com"
webbrowser.open(f"{webhost}/grantami/#/granta-material-picker?sessionId={put_session_resp['id']}")
```


## Open an SSE connection
The SSE connection stays open indefinitely. You can receive data on this connection as soon as it is available

<!-- :::code source="scripts/SampleHostApps/NoHost/SSEExample.py" language="python" range="38-39"::: -->
```python
messages = sseclient.SSEClient(f"{sessions_endpoint}{put_session_resp['id']}/data/sse", headers=auth_header, verify=0)

```

## End the session
<!-- :::code source="scripts/SampleHostApps/NoHost/SSEExample.py" language="python" range="45-46"::: -->
```python
requests.delete(f"{sessions_endpoint}{put_session_resp['id']}", json={}, headers=auth_header, verify=0)
print("Session deleted")
```
