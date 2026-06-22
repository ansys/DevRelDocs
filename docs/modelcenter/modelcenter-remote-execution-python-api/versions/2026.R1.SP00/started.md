# Getting started

## Overview

This guide helps Python developers use the ModelCenter Remote Execution Python ScriptWrapper API. The API provides runtime services for Script Wrapper components in ModelCenter Remote Execution (MCRE), including variables, file handling, and run-share monitoring.

For the full class reference, see the [Python API](modelcenter-python-api.md). For Script Wrapper authoring concepts, see the [MCRE ScriptWrapper documentation](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/ModelCenter/v252/en/ModelCenter_Rem_Exec/ModelCenter_Rem_Exec/mcre_functions/wrappers_components/ScriptWrapper/index_scriptWrapper.html).

## Prerequisites

- A supported Python version for your ModelCenter Remote Execution installation
- ModelCenter Remote Execution installed and licensed on the target machine, or reachable over the network
- A Script Wrapper component configured to use the Python API

## Use the API in a Script Wrapper

1. In your Script Wrapper script, the `wrapper` global object is an instance of `PHXScriptWrapperObject`.
2. Declare variables at the top of your script using the standard Script Wrapper syntax.
3. Use the API methods to add variables, publicize methods, and access run directories at runtime.

Example:

```python
# wrapper is provided by the Script Wrapper runtime
wrapper.addMethod("runAnalysis", "Run Analysis")
directory = wrapper.getDirectory()
```

## Key classes

- **PHXScriptWrapperObject** — Entry point passed to Script Wrapper scripts as the `wrapper` global object. See [PHXScriptWrapperObject](modelcenter-python-api.md#phxscriptwrapperobject).
- **PHXRunShareObject** — Process control and monitoring (returned from `getRunShare()`). See [PHXRunShareObject](modelcenter-python-api.md#phxrunshareobject).
- **PHXSimpleType** and typed subclasses — Variable value types (boolean, double, long, string, file). See [PHXSimpleType](modelcenter-python-api.md#phxsimpletype).

## Next steps

- Browse the [Python API reference](modelcenter-python-api.md) for method signatures and inline examples.
- Review the [MCRE ScriptWrapper documentation](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/ModelCenter/v252/en/ModelCenter_Rem_Exec/ModelCenter_Rem_Exec/mcre_functions/wrappers_components/ScriptWrapper/index_scriptWrapper.html) for wrapper authoring and deployment.
