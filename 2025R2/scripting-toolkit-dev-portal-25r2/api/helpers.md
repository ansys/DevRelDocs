# Helper functions

<a id="functions"></a>

<a id="helper-functions"></a>

<a id="GRANTA_MIScriptingToolkit.granta.mi.connect"></a>

### connect(service_layer_url, user_name=None, password=None, domain=None, autologon=None, timeout=300000, existing_session=None, oidc=False, auth_token=None, refresh_token=None, use_stored_token=False, store_password=False, max_retries=0)

Establishes a connection to the Granta MI server and returns a [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object.

An existing session may be specified.

* **Parameters:**
  * **service_layer_url** – str
  * **user_name** – str
  * **password** – str
  * **domain** – str
  * **autologon** – bool
  * **timeout** – int (maximum time to wait for a response, in milliseconds)
  * **existing_session** – Foundation API [`GRANTA_MIScriptingToolkit.GRANTA_MISession`](../foundation/api.md#module-GRANTA_MIScriptingToolkit.GRANTA_MISession) class
  * **oidc** – bool
  * **auth_token** – str
  * **refresh_token** – str
  * **use_stored_token** – bool
  * **store_password** – bool (Default value False. Set to True when the password is given and needs to be saved
    for the session’s duration, for example when parallelisation is required.)
  * **max_retries** – int (Default value 0. Maximum number of times to retry requests sent to the Service Layer.)
* **Returns:**
  [`Session`](session.md#GRANTA_MIScriptingToolkit.granta.mi.Session) object

#### NOTE
If MI Scripting Toolkit has been installed on the same server machine as Granta MI, then the Granta MI
server name *must* be specified in full in the url parameter. If you use ‘localhost’ or a loopback address, MI
Scripting Toolkit will be unable to use the specified user account to connect to Granta MI.

<a id="GRANTA_MIScriptingToolkit.granta.mi_functions.extract_parameter_value"></a>

### extract_parameter_value(param_value)

Returns the data value stored in a Foundation API [`GRANTA_MIScriptingToolkit.ParameterValue`](../foundation/api.md#module-GRANTA_MIScriptingToolkit.ParameterValue) object.

#### Deprecated
Deprecated since version 4.2: This function will be removed in a future release.

* **Parameters:**
  **param_value** – Foundation API [`GRANTA_MIScriptingToolkit.ParameterValue`](../foundation/api.md#module-GRANTA_MIScriptingToolkit.ParameterValue) class
* **Returns:**
  str or float

<a id="GRANTA_MIScriptingToolkit.granta.mi_functions.get_foundation_logger"></a>

### get_foundation_logger()

Return the logger used by the Foundation API (has the name “GDL”).

* **Returns:**
  [`logging.Logger`](https://docs.python.org/3/library/logging.html#logging.Logger) class

<a id="GRANTA_MIScriptingToolkit.granta.mi_functions.log_to_file_in_local_app_data"></a>

### log_to_file_in_local_app_data(path='Granta Design\\\\MIScriptingToolkit\\\\Python')

Set up the built-in Granta logger to log to a file in the user’s local app data directory
(%LOCALAPPDATA% on Windows, ‘~/.appdata/’ on Linux).
The log file name is MIScriptingToolkitForPython_YYYY.MM.DD.log and you can
specify the filepath. The default filepath is Granta Design/MIScriptingToolkit/Python.

#### WARNING
This function is deprecated and will be removed in a future version. To log messages
to a file, use the Python logging module. The Foundation Layer logger can be obtained
with the function [`get_foundation_logger()`](#GRANTA_MIScriptingToolkit.granta.mi_functions.get_foundation_logger).

* **Parameters:**
  **path** – str
* **Returns:**
  None
