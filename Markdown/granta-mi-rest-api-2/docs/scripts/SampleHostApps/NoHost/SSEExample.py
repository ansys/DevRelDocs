## Using SSEs to wait for and retrieve data

### Connect to the Granta Integration Service

# This example illustrates using an SSE (Server Sent Event) connection to receive data. 
# The advantage of using an SSE is that you do not have to write a polling loop to check for new data. 
# The first part of this script (creating a session) is the same as in the Getting Started example.
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

### Open an SSE connection
# The SSE connection stays open indefinitely. You can receive data on this connection as soon as it is available
messages = sseclient.SSEClient(f"{sessions_endpoint}{put_session_resp['id']}/data/sse", headers=auth_header, verify=0)

# Wait for events that have data. In this example we wait for 3 events. An event will fire when you click "Fetch material data" in the Granta Material Picker.
for event in islice((msg for msg in messages if msg.data), 3):
    print(f"Event received: {event.data}")

### End the session
requests.delete(f"{sessions_endpoint}{put_session_resp['id']}", json={}, headers=auth_header, verify=0)
print("Session deleted")
