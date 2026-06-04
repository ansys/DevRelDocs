# exit

<a id="ansys.meshing.prime.Client.exit"></a>

#### Client.exit()

Close the connection with the server.

If the client has launched the server, this method also
kills the server process.

### Examples

```pycon
>>> import ansys.meshing.prime as prime
>>> prime_client = prime.launch_prime() # This launches a server process.
>>> model = prime_client.model
>>> fileio = prime.FileIO(model)
>>> result = fileio.read_pmdat('example.pmdat', prime.FileReadParams(model=model))
>>> print(result)
>>> prime_client.exit() # Sever connection with server and kill the server.
```

<!-- !! processed by numpydoc !! -->


