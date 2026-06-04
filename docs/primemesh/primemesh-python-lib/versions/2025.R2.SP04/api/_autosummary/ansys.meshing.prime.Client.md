# Client

<a id="ansys.meshing.prime.Client"></a>

### *class* ansys.meshing.prime.Client(\*, server_process=None, ip='127.0.0.1', port=50055, timeout=20.0, credentials=None, communicator_type='grpc', \*\*kwargs)

Provides the `Client` class for PyPrimeMesh.

* **Parameters:**

  **server_process**
  : Server process in the system. The default is `None`.

  **ip**
  : IP address where the server is located. The default is `defaults.ip()`.

  **port**
  : Port where the server is deployed. The default is `defaults.port()`.

  **timeout**
  : Maximum time to wait for connection. The default is `defaults.connection_timeout()`.

  **credentials**
  : Credentials to connect to the server. The default is `None`.
* **Raises:**
  [`ValueError`](https://docs.python.org/3.11/library/exceptions.html#ValueError)
  : Failed to load the communicator.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|
| [`Client.exit`](ansys.meshing.prime.Client.exit.md#ansys.meshing.prime.Client.exit)()                                  | Close the connection with the server.   |
| [`Client.run_on_server`](ansys.meshing.prime.Client.run_on_server.md#ansys.meshing.prime.Client.run_on_server)(recipe) | Run a recipe on the server.             |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------|-----------------------------------------|
| [`Client.model`](ansys.meshing.prime.Client.model.md#ansys.meshing.prime.Client.model)   | Get model associated with the client.   |
<!-- vale on -->