# Launching PyPrimeMesh

<a id="launch-server-from-a-python-script"></a>

## Launch server from a Python script

The [`launch_prime()`](./../api/_autosummary/ansys.meshing.prime.launch_prime.md#ansys.meshing.prime.launch_prime) method launches Ansys Prime Server.

This code returns an instance of the PyPrimeMesh [`Client`](./../api/_autosummary/ansys.meshing.prime.Client.md#ansys.meshing.prime.Client) class
connected to the launched server session:

```python
import ansys.meshing.prime as prime

prime_client = prime.launch_prime()
```

You can send commands to Ansys Prime Server and receive responses from it.

The [`Client`](./../api/_autosummary/ansys.meshing.prime.Client.md#ansys.meshing.prime.Client) class gets the [`model`](./../api/_autosummary/ansys.meshing.prime.Client.model.md#ansys.meshing.prime.Client.model)
parameter associated with the client instance:

```python
model = prime_client.model
```

<a id="launch-server-from-a-windows-or-linux-console-and-connect-the-client"></a>

## Launch server from a Windows or Linux console and connect the client

You can launch Ansys Prime Server on Linux or Windows from a command prompt and then connect to the client as needed.

This example starts the server in parallel mode on four nodes and specifies the IP address and port on Windows:

1. Launch the server from a command line:
   ```shell-session
   "%AWP_ROOT252%\meshing\Prime\runPrime.bat" server -np 4 --ip 127.0.0.1 --port 50055
   ```
2. Connect to the server in Python using the [`Client`](./../api/_autosummary/ansys.meshing.prime.Client.md#ansys.meshing.prime.Client) class:
   ```python
   import ansys.meshing.prime as prime

   prime_client = prime.Client(ip="127.0.0.1", port=50055)
   model = prime_client.model
   ```

#### NOTE
Only a single client session can be connected to an active Ansys Prime Server instance at any time.

<a id="disconnect-from-the-server"></a>

## Disconnect from the server

The [`Client.exit()`](./../api/_autosummary/ansys.meshing.prime.Client.exit.md#ansys.meshing.prime.Client.exit) method ends the connection with the server.

If the [`Client`](./../api/_autosummary/ansys.meshing.prime.Client.md#ansys.meshing.prime.Client) class launched the server, then this terminates the server process.

#### NOTE
If you use Intel(R) MPI Library, Version 2021.8, you may encounter the following error while exiting the client:

![Client Error](./../images/client_exit_error.png)

<a id="run-a-python-script-in-batch-on-the-server"></a>

## Run a Python script in batch on the server

You can run a Python script directly on the server from a Linux or Windows console.

Here is a Windows code example for running a Python script directly from the command line:

```shell-session
"%AWP_ROOT252%\meshing\Prime\runPrime.bat" my_script.py
```

<a id="recommendations-for-launching-the-server"></a>

## Recommendations for launching the server

When developing, you can use Python context to launch the server so that if an exception
occurs during runtime the server closes cleanly. This prevents servers being spawned and
left open blocking ports.

This code example shows how to manage the server lifecycle using context to make development easier:

```python
import ansys.meshing.prime as prime

with prime.launch_prime() as prime_client:
    model = prime_client.model
    # Indented code to run...
```

Using the [`Client.exit()`](./../api/_autosummary/ansys.meshing.prime.Client.exit.md#ansys.meshing.prime.Client.exit) method to close the server in this instance is not required.
