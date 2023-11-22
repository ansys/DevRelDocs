# Using OpenID Connect with MI Scripting Toolkit

Please contact Ansys Granta Technical Support for information on supported OpenID Connect Identity Providers, and for configuration and setup documentation.

## Access Granta MI using OpenID Connect

In version 2.2 onwards of MI Scripting Toolkit, OIDC authentication is exposed through the Session class in the same way as other authentication options. For interactive use, this is as simple as setting `oidc=True` in the constructor.


```python
from GRANTA_MIScriptingToolkit import granta as mpy

# Connect to MI using OpenID Connect; this will open a browser and prompt the user to log in.
# Access MI and list the available databases.
mi = mpy.connect('https://my.server.name/mi_servicelayer', oidc=True)
print(mi.dbs)
```

    [<Database: MI Training, unit system: Database>]
    

## Unattended use
For unattended use, OIDC tokens can be stored securely in the OS credential manager. For Windows this is the Windows
Credential Locker, for linux this may be Freedesktop Secret Service or the dbus KWallet. Tokens can be persisted with
the `Session.persist_oidc_token()` method.


```python
# We can access the tokens provided by the OpenID identity provider using a private property of the session object.
print(mi._Session__auth_token)

mi.persist_oidc_token()

# Clear the current Session
del(mi)
```

    gaUDsgUrOiJSUzI1NiIsImtpZCI6IkVlMlQ0Y2F4U1RkaVFDTmEyMTcyUWciLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE1OTE3ODEwNzAsImV4cCI6MTU5MTc4MjI3MCwiaXNzIjoiaHR0cHM6Ly9taWF1dGgtaWRwLmdyYW50YWRlc2lnbi5sb2NhbDo1MDAwIiwiYXVkIjoibWkiLCJjbGllbnRfaWQiOiJtaUNsaWVudCIsInN1YiI6Ik1JX1VTRVJfNyIsImF1dGhfdGltZSI6MTU5MTc4MTA2OSwiaWRwIjoibG9jYWwiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwibWkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.D2PM4ofOZYDH-yQfo_2K1K33OpdmuhsEp3yt_p0wQeN8WmCBVrF4CFfWNlKUBbiQHlQlUUNEjze14Z-nkogpJafT37ltVzIxF0AEHfHsZpB4WwUMLPoDP3fvQ9cO3N66LuiKaD5LUhnalFZTiwZs4xCJhAMcWpYkaSNAEcR_TX-3do-iDmHqXqXbvqHa-2PACgh5k3nVl4sa92d69_OFzLEQA-vuBBzhMiM9aecK6M-2CBxPQn26rG8f1_L0siZC_qAhw0lKj-NTh6Eeyd-BqfpSEvBvUOCUDzoDGvK9e6e-PPwikOJKa4LtBUgt4mmfo9UaqLpraHp2nvp8v2J3LQ
    

OpenID Connect tokens can then be extracted from the store and used to create a new Session object with no user interaction.


```python
mi = mpy.Session("https://my.server.name/mi_servicelayer", oidc=True, use_stored_token=True)

print(mi._Session__auth_token)

print(mi.dbs)
```

    gaUDsgUrOiJSUzI1NiIsImtpZCI6IkVlMlQ0Y2F4U1RkaVFDTmEyMTcyUWciLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE1OTE3ODEwNzAsImV4cCI6MTU5MTc4MjI3MCwiaXNzIjoiaHR0cHM6Ly9taWF1dGgtaWRwLmdyYW50YWRlc2lnbi5sb2NhbDo1MDAwIiwiYXVkIjoibWkiLCJjbGllbnRfaWQiOiJtaUNsaWVudCIsInN1YiI6Ik1JX1VTRVJfNyIsImF1dGhfdGltZSI6MTU5MTc4MTA2OSwiaWRwIjoibG9jYWwiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwibWkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.D2PM4ofOZYDH-yQfo_2K1K33OpdmuhsEp3yt_p0wQeN8WmCBVrF4CFfWNlKUBbiQHlQlUUNEjze14Z-nkogpJafT37ltVzIxF0AEHfHsZpB4WwUMLPoDP3fvQ9cO3N66LuiKaD5LUhnalFZTiwZs4xCJhAMcWpYkaSNAEcR_TX-3do-iDmHqXqXbvqHa-2PACgh5k3nVl4sa92d69_OFzLEQA-vuBBzhMiM9aecK6M-2CBxPQn26rG8f1_L0siZC_qAhw0lKj-NTh6Eeyd-BqfpSEvBvUOCUDzoDGvK9e6e-PPwikOJKa4LtBUgt4mmfo9UaqLpraHp2nvp8v2J3LQ
    [<Database: MI Training, unit system: Database>]
    
