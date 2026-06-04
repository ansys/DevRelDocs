# Package overview

<a id="package-overview"></a>

MI Scripting Toolkit is a Granta MI component that facilitates Python-based automation and integration with Granta MI servers. It
allows access to common Granta MI functions such as searching for records, reading and writing data, and managing links
between records.

MI Scripting Toolkit provides two separate Python interfaces.

* The Foundation API provides a low-level wrapper around the base functionality provided by the Service Layer SOAP API,
  and is provided by the `ansys.grantami.backend.soap` package as a collection of Python and binary files.
* The Streamlined API is an abstraction on top of the Foundation API, and is provided by the `ansys.grantami.core`
  package as a set of Python modules.

Both packages are required to use MI Scripting Toolkit, and both are installed automatically when following the
[Getting started](../getting_started/index.md) guide. However, the Streamlined API should be used exclusively unless there is a
specific need to use the Foundation API directly. This document provides an overview of both APIs, and guidance on
when to use each.

<a id="streamlined-api"></a>

## Streamlined API

The Streamlined API is provided by the `ansys.grantami.core` package, and is accessed as follows:

```python
>>> import ansys.grantami.core as mpy
mpy  # Contains the Streamlined API
```

#### Versionchanged
Changed in version 5.0: The Streamlined API is now provided as a package called `ansys.grantami.core`.

The Streamlined API provides a high-level interface to Granta MI, designed to be easy to use and to provide good
performance out of the box. It abstracts away many of the complexities of the underlying Service Layer SOAP API by
pre-emptively fetching information from the server and performing client-side validation to accelerate development.
It aims to enable development to all Python users, even those without detailed experience of working with web APIs.

Additional Streamlined API information:

* [Streamlined API structure](streamlined_api_structure.md): Overview of the API structure.
* [Streamlined API reference](../streamlined_api/index.md): All the classes and functions that make up the interface.
* [Example notebooks](../examples/index.md): Examples for the Streamlined API, including both API-specific usage and examples of typical
  use-case.

<a id="foundation-api"></a>

<a id="id1"></a>

## Foundation API

The Foundation API is provided by the `ansys.grantami.backend.soap` package, and is accessed as follows:

```python
>>> import ansys.grantami.backend.soap as gdl
gdl  # Contains the Foundation API
```

#### Versionchanged
Changed in version 5.0: The Foundation API is provided as a separate package called `ansys.grantami.backend.soap`. It is a dependency of
`ansys.grantami.core` and is installed automatically during MI Scripting Toolkit installation. It may be installed separately
if required.

The Foundation API provides a low-level wrapper around the base functionality provided by the Server Layer SOAP API. As
a result, a detailed knowledge of both the Service Layer SOAP API and working with web APIs in general is required. Care
is needed around managing request size and sequencing to achieve satisfactory performance and stability.

However, this granularity can be a benefit if it is used correctly. For example, the Foundation API may be appropriate
in the following situations:

* Making changes in bulk without consideration to the current state of the data. For example, deleting all data in a
  certain attribute regardless if it is populated or not.
* When full control is needed over the requests made to the server to optimize performance for a specific use case.
* When needing to access functionality that is not yet exposed in the Streamlined API.

#### WARNING
Only use the Foundation API after consultation with your ACE representative to confirm that it is necessary for your
use case.

Additional Foundation API information:

* [Foundation API reference](../foundation_api.md): All the classes and functions that make up the interface.
* [Foundation API example notebooks](../examples/foundation_examples.md): Examples for the Foundation API.
