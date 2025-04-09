<a id="user-guide"></a>

# User guide

![|project| communicates to Granta MI via a SOAP API](_static/architecture.png)

<a id="introduction"></a>

## Introduction

MI Scripting Toolkit is a Python package that connects to your Granta MI application server (MI Server) via the Service Layer using
the SOAP API. The package consists of the Streamlined API, the Foundation API, and C++ libraries, as shown in the
diagram below.

This user guide focuses on the [Streamlined API](). It provides guidance and best practice on how to develop scripts and
applications that interact with Granta MI during their operation.

<a id="streamlined-api"></a>

### Streamlined API

The Streamlined API is provided by the `granta` submodule and can be accessed as follows:

```python
from GRANTA_MIScriptingToolkit import granta as mpy
mpy  # Contains the Streamlined API
```

See the links below for more information about specific aspects of the Streamlined API.

* [Streamlined API structure](streamlined_api.md): Learn more about how the Streamlined API is structured.
* [Versioning](versioning.md): Understand the Streamlined API versioning strategy.
* [Authentication](authentication.md): Learn more about the available authentication schemes and how to connect securely in
  interactive and batch operation.
* [Performance optimization](performance_optimization.md): Understand how to use bulk operations to optimize script performance.
* [Logging](logging.md): Use the Python logging library with Scripting Toolkit.
* [MI Scripting Toolkit and PyAnsys](pyansys.md): How MI Scripting Toolkit and PyAnsys can be used together.

<a id="foundation-api"></a>

### Foundation API

<!-- foundation_api -->

The Foundation API provides a low-level wrapper around the base functionality provided by the Server Layer SOAP API. As
a result, a detailed knowledge of the Service Layer SOAP API is required, and care is needed around managing request
size to achieve satisfactory performance and stability.

#### WARNING
The Foundation API is included for compatibility purposes only. The Streamlined API should be used for all new
solutions.

#### WARNING
The Foundation API does not follow Semantic Versioning. Breaking changes may be introduced with any release and will
in general not be documented.

<!-- foundation_api_end -->

Examples and API documentation for the Foundation API are provided [here](../foundation/index.md).
