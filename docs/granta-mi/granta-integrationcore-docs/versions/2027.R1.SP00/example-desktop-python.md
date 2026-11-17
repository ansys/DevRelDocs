# Desktop plugin example: DesktopIntegrationSamplePython

## Introduction

`DesktopIntegrationSamplePython` is an example Host Integration plugin for a desktop-based host application written in Python. It shows how to manage MI Integration Service sessions, and how to fetch materials data selected using MI Materials Gateway. It is a recommended starting point for developing a desktop-based plugin.

Unlike a server-based plugin, a desktop plugin does not implement an interface provided by the Integration Service. Instead, it is a client of the Integration Service REST API: it creates a session, opens a browser at the MI Materials Gateway URL for that session, and receives materials data pushed into the session as the user makes selections.

This example demonstrates the desktop plugin concept with a single-file script that:

1. Authenticates to Granta MI (Windows Authentication, HTTP Basic, or OIDC).
2. Creates a session (`POST /sessions`).
3. Opens the MI Materials Gateway URL, passing the new session ID.
4. Long-polls for material selections pushed into the session (`GET /sessions/{uid}/data`), printing them as they arrive.
5. Cleans up on exit by deleting the session (`DELETE /sessions/{uid}`).

The example code can be found in the Granta MI installation CD `extras`, in the `DesktopIntegrationSamplePython` folder of the `IntegrationDevKit.zip`. In addition to the standard prerequisites for creating an integration, this example requires Python 3.10 or later, and access the `requests` and `requests_negotiate_sspi` packages found on the Python Package Index (PyPI).

## Implementation

### Configuration

The script uses constants near the top of `main.py` to define the integration and authentication details:

| Constant | Description |
|----------|-------------|
| `SERVER` | MI Service Layer base URL, for example `https://my_server_name/mi_servicelayer`. |
| `AUTH_MODE` | `"windows"` (current Windows user, via SSPI), `"basic"` (console-prompted username/password), or `"oidc"` (token acquisition is a stub). |
| `SESSION_NAME` | Session display name. |
| `HOST_ID` | Host id to pass to MI Materials Gateway as the `hostId` URL parameter. If empty, the parameter is omitted. |

### Authenticating

`build_session` returns a `requests.Session` configured for the selected `AUTH_MODE`: Windows Integrated Authentication (via `requests_negotiate_sspi`), HTTP Basic (prompting for credentials at the console), or OIDC. For OIDC, the token acquisition must be implemented based on the configured identity provider.

[!code-python[](~/../granta-integration-service/devkit/examples/OnPrem/Desktop/DesktopIntegrationSamplePython/main.py#BuildSession)]

### Requesting an MI Materials Gateway session

The script creates a new session by calling `POST /sessions`, then builds the MI Materials Gateway URL for that session and opens it in the user's default browser. If `HOST_ID` has been set, it is included in the URL as the `hostId` parameter. This lets the host application identify itself to MI Materials Gateway, so that application behavior can be tailored for that specific host.

[!code-python[](~/../granta-integration-service/devkit/examples/OnPrem/Desktop/DesktopIntegrationSamplePython/main.py#CreateSessionAndOpenBrowser)]

### Receiving materials data

The script long-polls `GET /sessions/{uid}/data`, which blocks server-side for up to `POLL_SECONDS` before returning either the next item pushed into the session, or a `204 No Content` if nothing has arrived yet, in which case the script simply polls again. Polling is performed on a background thread so that the script remains responsive to Ctrl+C while waiting.

[!code-python[](~/../granta-integration-service/devkit/examples/OnPrem/Desktop/DesktopIntegrationSamplePython/main.py#ReceiveMaterialsData)]

For each item received, the script prints the data to the console. For an actual implementation, the plugin would instead write the materials data into the host application using the appropriate host application API.

This example always starts polling from the lowest data sequence ID currently available for the session; it does not persist a data sequence ID across separate runs of the script. A production integration that needs to resume where a previous run left off should add this.

### Cleaning up the session

The session should be deleted once the plugin no longer needs it. This example deletes the session in a `finally` block, so that this happens both on normal completion and when the user presses Ctrl+C.

[!code-python[](~/../granta-integration-service/devkit/examples/OnPrem/Desktop/DesktopIntegrationSamplePython/main.py#CleanUpSession)]

## Set up

```powershell
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```

## Run

```powershell
python main.py
```

## Deploy

For a real integration, the plugin must be deployed on the host application client machines, and registered in the usual way for customizations to that host application, for example triggered from a button or menu command in the host application UI.

## Test

The script is run against a Granta MI server, as described above. It creates a session and opens MI Materials Gateway in the default browser. When a material is selected, the details are printed to the console.
