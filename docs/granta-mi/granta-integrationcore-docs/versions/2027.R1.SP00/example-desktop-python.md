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

```python
session = requests.Session()

if AUTH_MODE == "windows":
    from requests_negotiate_sspi import HttpNegotiateAuth

    session.auth = HttpNegotiateAuth()
elif AUTH_MODE == "basic":
    username = input("Username: ")
    password = getpass.getpass("Password: ")
    domain = input("Domain (optional): ")
    session.auth = HTTPBasicAuth(f"{domain}\\{username}" if domain else username, password)
elif AUTH_MODE == "oidc":
    session.headers["Authorization"] = f"Bearer {get_oidc_token()}"
else:
    raise ValueError(f"Unsupported AUTH_MODE: {AUTH_MODE!r}. Use 'windows', 'basic' or 'oidc'.")

return session
```

### Requesting an MI Materials Gateway session

The script creates a new session by calling `POST /sessions`, then builds the MI Materials Gateway URL for that session and opens it in the user's default browser. If `HOST_ID` has been set, it is included in the URL as the `hostId` parameter. This lets the host application identify itself to MI Materials Gateway, so that application behavior can be tailored for that specific host.

```python
# Create a session on the MI Integration Service and stash the session ID.
print(f"Creating session on {SERVER} ...")
response = session.post(
    f"{API_BASE}/sessions",
    json={"name": SESSION_NAME, "settings": {"pollSeconds": POLL_SECONDS}},
)
raise_for_status(response)
body = response.json()
session_id = body["id"]
print(f"Session created: id={session_id}, expiresAt={body['expiresAt']}")

# Use the session ID to construct the MI Gateway URL and open it in the user's default browser.
server_root = SERVER.rstrip("/").removesuffix("/mi_servicelayer")
host_id_parameter = f"&hostId={quote(HOST_ID)}" if HOST_ID else ""
gateway_url = f"{server_root}/grantami/gateway/?webMode=true&gisSessionId={session_id}{host_id_parameter}"
print(f"Opening browser at: {gateway_url}")
webbrowser.open(gateway_url)
```

### Receiving materials data

The script long-polls `GET /sessions/{uid}/data`, which blocks server-side for up to `POLL_SECONDS` before returning either the next item pushed into the session, or a `204 No Content` if nothing has arrived yet, in which case the script simply polls again. Polling is performed on a background thread so that the script remains responsive to Ctrl+C while waiting.

```python
# Wait for the user to select a material. This is done in a separate thread to ensure
# the script remains responsive for Ctrl+C interrupts.
print("Listening for material selections (Ctrl+C to stop and clean up)...")
next_id = None
while True:
    params = {"id": next_id} if next_id is not None else {}
    result: dict = {}  # Contains the result of the poll request, either a response or an error.

    def do_poll(params=params, result=result):
        try:
            result["response"] = session.get(
                f"{API_BASE}/sessions/{session_id}/data",
                params=params,
                timeout=POLL_TIMEOUT_SECONDS,
            )
        except requests.RequestException as ex:
            result["error"] = ex

    poll_thread = threading.Thread(target=do_poll, daemon=True)
    poll_thread.start()
    while poll_thread.is_alive():
        poll_thread.join(timeout=1)

    if "error" in result:
        raise result["error"]
    response = result["response"]

    if response.status_code == requests.codes.no_content:
        # Timed out waiting for data - just poll again.
        continue

    raise_for_status(response)

    data = response.json()
    # This line is where the 'integration' happens.
    # In this example the application simply prints the received data to the console.
    # In a real integration the data would instead be passed into the application.
    timestamp = datetime.now(timezone.utc).astimezone().strftime("%H:%M:%S")
    print(f"[{timestamp}] Received data (sid={data['id']}): {data['value']}")
    next_id = data["id"] + 1
```

For each item received, the script prints the data to the console. For an actual implementation, the plugin would instead write the materials data into the host application using the appropriate host application API.

This example always starts polling from the lowest data sequence ID currently available for the session; it does not persist a data sequence ID across separate runs of the script. A production integration that needs to resume where a previous run left off should add this.

### Cleaning up the session

The session should be deleted once the plugin no longer needs it. This example deletes the session in a `finally` block, so that this happens both on normal completion and when the user presses Ctrl+C.

```python
finally:
    if session_id is not None:
        print("Deleting session...")
        try:
            response = session.delete(f"{API_BASE}/sessions/{session_id}")
            if response.status_code != requests.codes.not_found:
                raise_for_status(response)
            print("Session deleted.")
        except requests.RequestException as ex:
            print(f"Warning: failed to delete session {session_id}: {ex}", file=sys.stderr)
```

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
