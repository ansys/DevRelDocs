# Logging

In MI Scripting Toolkit v2.1 and later, Python messages are no longer logged to a file by default. Configuration of
logging is best handled by the application developer, who knows their target audience and what handlers are most
appropriate for their application.  For comprehensive Python logging capabilities, we recommend using the Python
[`logging`](https://docs.python.org/3/library/logging.html#module-logging) module.

A Helper Function ([`log_to_file_in_local_app_data()`](stream_api.md#GRANTA_MIScriptingToolkit.granta.mi_functions.log_to_file_in_local_app_data)) can be used to output a log file in the Streamlined API when
one is required for troubleshooting.

Note that the underlying C libraries in the MI Scripting Toolkit will still perform their own logging, which can be
found in %LOCALAPPDATA%\\Granta Design\\MIScriptingToolkit (or the Linux equivalent), but this is independent of
Python logging.
