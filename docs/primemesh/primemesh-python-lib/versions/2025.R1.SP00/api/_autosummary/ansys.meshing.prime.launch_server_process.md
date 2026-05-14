# launch_server_process

<a id="ansys.meshing.prime.launch_server_process"></a>

### ansys.meshing.prime.launch_server_process(prime_root=None, ip='127.0.0.1', port=50055, n_procs=None, \*\*kw)

Launch a server process for Ansys Prime Server.

* **Parameters:**

  **prime_root**
  : Root directory for Ansys Prime Server.

  **ip: str**
  : IP address to start the server at. The default is `127.0.0.1`.

  **port: int**
  : Port at which the server is started. The default is `50055`.

  **n_procs: Optional[int]**
  : When running in distributed mode, the number of distributed
    processes to spawn. The default is `None`, in which case
    the server is launched as the only process (normal mode). The
    process marked as `Node 0` hosts the gRPC server.

* **Returns:**
  
  [`subprocess.Popen`](https://docs.python.org/3.11/library/subprocess.html#subprocess.Popen)
  : Instance of the subprocess that is launched.

* **Raises:**

  [`FileNotFoundError`](https://docs.python.org/3.11/library/exceptions.html#FileNotFoundError)
  : When there is an error in the file paths used to launch the server.
  
* **Return type:**

  [`Popen`](https://docs.python.org/3.11/library/subprocess.html#subprocess.Popen)

<!-- !! processed by numpydoc !! -->
