# User guide

This section provides an overview of how you use PyPrimeMesh for mesh preparation.

<a id="overview"></a>

## Overview

The [`launch_prime()`](./../api/_autosummary/ansys.meshing.prime.launch_prime.md#ansys.meshing.prime.launch_prime) method in PyPrimeMesh launches
Ansys Prime Server and returns an instance of the [`Client`](./../api/_autosummary/ansys.meshing.prime.Client.md#ansys.meshing.prime.Client)
class. You can then send gRPC commands to Ansys Prime Server and receive responses
from it.

```python
from ansys.meshing.prime import launch_prime

prime_client = launch_prime()
```
