# Getting started

PyPrimeMesh is a Python client for Ansys Prime Server,
which provides core Ansys meshing technology.

To use PyPrimeMesh, you must have a local installation of Ansys 2023 R1 or later.
The Ansys version that you have installed dictates the features available to you.

For more information on getting a licensed copy of Ansys, visit the [Ansys website](https://www.ansys.com/).

#### NOTE
The PyPrimeMesh client release has one-to-one compatibility with the Ansys Prime Server release.
That is, the PyPrimeMesh client is only compatible with its corresponding Ansys Prime Server.

This table provides compatibility information:

| PyPrimeMesh client release                                                       | Ansys Prime Server release                                                                                                                             | Supported python versions                                                                                             |
|----------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| 0.2.x<br/><br/>0.3.x<br/><br/>0.4.x<br/><br/>0.5.x<br/><br/>0.6.x<br/><br/>0.7.x | 23.1.0 (2023 R1)<br/><br/>23.1.1 (2023 R1 SP1)<br/><br/>23.2.0 (2023 R2)<br/><br/>24.1.0 (2024 R1)<br/><br/>24.2.0 (2024 R2)<br/><br/>25.1.0 (2025 R1) | 3.7 to 3.11<br/><br/>3.7 to 3.11<br/><br/>3.8 to 3.11<br/><br/>3.8 to 3.11<br/><br/>3.8 to 3.11<br/><br/>3.10 to 3.12 |

<a id="installation"></a>

## Installation

The `ansys-meshing-prime` package currently supports Python 3.10
to Python 3.12 on the Windows and Linux operating systems.

You can install PyPrimeMesh with all dependencies directly from [PyPI](https://pypi.org/)  with this command:

```default
pip install ansys-meshing-prime[all]
```

Alternatively, you can clone this repository and install the client using these commands:

```default
git clone https://github.com/ansys/pyprimemesh
cd pyprimemesh
pip install -e .[all]
```

The preceding commands install all features that are important to development.
To install a basic version of the client, use this command instead:

```default
pip install -e .
```

<a id="dependencies"></a>

## Dependencies

You must have Ansys 2023 R1 or later installed to have access to Ansys Prime
Server. Optionally, CAD readers can be configured.

Ansys Prime Server requires one of the following licenses to run. The system
checks out the first available license from the list in the following order:

1. CFD PrepPost
2. CFD PrepPost Pro
3. Mechanical Enterprise PrepPost
4. Mechanical Enterprise
5. Mechanical Pro
6. Mechanical Premium
7. Ansys LS-DYNA

<a id="launch-pyprimemesh"></a>

## Launch PyPrimeMesh

To launch PyPrimeMesh, use this code:

```python
import ansys.meshing.prime as prime

with prime.launch_prime() as prime_client:
    model = prime_client.model
```
