<p style="border: 1px solid #1a78c2; padding: 10px; border-radius: 8px;">
The code in this page follows the example script `SSEExample.py`, available here: <a href="example-scripts/python_examples.zip">python_examples.zip</a>
</p>

# Waiting for and retrieving data

This example illustrates using a Server-Sent Event (SSE) connection to receive data. The advantage of using an SSE is that you do not have to write a polling loop to check for new data. 

## Creating a Granta Integration Service session

The first part of this script (creating a session) is the same as in the Getting Started example:
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

host = "https://cloudserver.com/is"

sessions_endpoint = f"{host}/api/v1/sessions/"

# Create a session. Set a title for the Granta Material Picker. Store the response
put_session_resp = requests.post(sessions_endpoint, json={'name':'My Application', 'settings':{'title':'My Application', 'packageName':'Workbench'}}, headers=auth_header, verify=0).json()

# Launch default browser at the Granta Material Picker session
webhost = "https://cloudserver.com"

webbrowser.open(f"{webhost}/grantami/#/granta-material-picker?sessionId={put_session_resp['id']}")
```

## Opening an SSE connection
Next we add the code to connect via SSE:
```python
messages = sseclient.SSEClient(f"{sessions_endpoint}{put_session_resp['id']}/data/sse", headers=auth_header, verify=0)
```

This connection will stay open indefinitely, and you can receive data on this connection as soon as it is available.

To demonstrate receiving data from the SSE connection, add:

```python
for event in islice((msg for msg in messages if msg.data), 3):
    print(f"Event received: {event.data}")
```


This waits for events that have data and provides the information. In this example we wait for 3 events. An event will fire when you click "Fetch material data" in the Granta Material Picker.

## Ending the session

To close the session down and ensure no more materials can be received, send an HTTP `DELETE` request to the session URL:
```python
requests.delete(f"{sessions_endpoint}{put_session_resp['id']}", json={}, headers=auth_header, verify=0)
print("Session deleted")
```
