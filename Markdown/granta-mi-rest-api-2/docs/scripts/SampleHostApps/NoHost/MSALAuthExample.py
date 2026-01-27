import msal
import requests

client_id = "28982bbf-f354-4e48-8bfb-e542d44c588c"
ansys_id_authority = "https://ansysaccount.b2clogin.com/ansysaccount.onmicrosoft.com/B2C_1A_ANSYSID_SIGNUP_SIGNIN"
scope = "https://ansysaccount.onmicrosoft.com/AnsysID/Authentication"

resp = msal.PublicClientApplication(
    client_id,
    authority=ansys_id_authority,
).acquire_token_interactive(scopes=[scope], port=32284)
print(f"Token: {resp['access_token']}")

