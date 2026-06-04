# launch_prime

<a id="ansys.meshing.prime.launch_prime"></a>

### ansys.meshing.prime.launch_prime(prime_root=None, ip='127.0.0.1', port=50055, timeout=20.0, n_procs=None, version=None, \*\*kwargs)

Launch an instance of Ansys Prime Server and get a client for it.

* **Parameters:**

  **prime_root: Optional[str]**
  : Root directory for Ansys Prime Server.

  **ip: str**
  : IP address to start the server at. The default is `127.0.0.1`.

  **port: int**
  : Port at which the server is started. The default is `50055`.

  **timeout: float**
  : Maximum time in seconds to wait for the client to connect to the server.
    The default is `20.0`.

  **n_procs: Optional[int]**
  : When running in distributed mode, the number of distributed
    processes to spawn. The default is `None`, in which case
    the server is launched as the only process (normal mode). The
    process marked as `Node 0` hosts the gRPC server.

* **Returns:**

  [`Client`](ansys.meshing.prime.Client.md#ansys.meshing.prime.Client)
  : Instance of the client that is connected to the launched server.


* **Raises:**

  [`FileNotFoundError`](https://docs.python.org/3.11/library/exceptions.html#FileNotFoundError)
  : When there is an error in file paths used to launch the server.

  [`ConnectionError`](https://docs.python.org/3.11/library/exceptions.html#ConnectionError)
  : When there is an error in connecting to the gRPC server.

<!-- !! processed by numpydoc !! -->
