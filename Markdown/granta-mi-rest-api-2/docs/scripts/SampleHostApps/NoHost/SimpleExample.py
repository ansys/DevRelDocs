import requests
import json
import webbrowser
import msal
# Authentication parameters for Ansys ID 
ansys_id_client_id = "28982bbf-f354-4e48-8bfb-e542d44c588c"
ansys_id_authority = "https://ansysaccount.b2clogin.com/ansysaccount.onmicrosoft.com/B2C_1A_ANSYSID_SIGNUP_SIGNIN"
scope = "https://ansysaccount.onmicrosoft.com/AnsysID/Authentication"

# Use Microsoft Authentication Library (MSAL) to log in using the system browser
token_resp = msal.PublicClientApplication(ansys_id_client_id, authority=ansys_id_authority).acquire_token_interactive(scopes=[scope], port=32284)

# Store the token from logging in for use in subsequent HTTP requests
auth_header = {"Authorization": f"Bearer {token_resp['access_token']}"}
print("Authenticated")
host = "https://grantamaterials.ansys.com/is"
sessions_endpoint = f"{host}/api/v1/sessions/"

# Create a session. Set a title for the Granta Material Picker. Store the response
print(f"sending request to {sessions_endpoint}")
post_session_resp = requests.post(sessions_endpoint, json={'name':'My Application', 'settings':{'title':'My Application', 'packageName':'Workbench', 'pollSeconds': 50}}, headers=auth_header, verify=0).json()

print("Opening browser...")
# Launch default browser at the Granta Material Picker session
webhost = "https://grantamaterials.ansys.com"
webbrowser.open(f"{webhost}/grantami/#/granta-material-picker?sessionId={post_session_resp['id']}")

# Retrieve data (blocks until a material model is selected in Granta Material Picker or a timeout configurable in the request elapses)
data_response = requests.get(f"{sessions_endpoint}{post_session_resp['id']}/data", headers=auth_header, verify=0).json()

# Print out the response returned (replace this with your own code to process the material data)
print(json.dumps(data_response, indent=True))

# End the session 
requests.delete(f"{sessions_endpoint}{post_session_resp['id']}", json={}, headers=auth_header, verify=0)