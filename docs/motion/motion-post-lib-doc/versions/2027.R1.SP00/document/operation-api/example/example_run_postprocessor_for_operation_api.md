# Run Postprocessor

The following sample code illustrates how to start the Postprocessor and run an Operation API script in it.
- For downloadable Example scripts, see [Introduction - Downloads](../../../index.md#downloads).

## Run an Operation API Script
This example starts the Postprocessor executable, waits for its remoting service, and runs an Operation API script in the Postprocessor.

Starting the Postprocessor and importing the `OperationAPI` module cannot be done in the same script file. The Operation API operates on the Postprocessor application in the process that runs the script. The script that starts the Postprocessor runs outside the started Postprocessor process, so there is no Postprocessor application for the module to operate on.

- The script above only starts the Postprocessor and runs another script in it. It loads `VM.Windows.Post.Remoting` with `clr.AddReference` and does not import `OperationAPI`.
- The script at `IMPORT_SCRIPT_FILE_PATH` runs in the Postprocessor. Import `OperationAPI` at the beginning of that script, see [Getting Started](../getting-started/getting_started_operation_api_using_py.md#basic-setup).

```python
# Example_OperationAPI_RunPostprocessor.py
import sys
import clr

# BINARY_FOLDER_PATH : path to the folder containing Postprocessor.exe in the installed Motion
sys.path.append(BINARY_FOLDER_PATH)

clr.AddReference("VM.Windows.Post.Remoting")

from System.Reflection import AssemblyName
from VM.Windows.Post import PostprocessorRemotingUtil

# POSTPROCESSOR_EXE_PATH : full path to the Postprocessor executable
version = AssemblyName.GetAssemblyName(POSTPROCESSOR_EXE_PATH).Version
postprocessor = PostprocessorRemotingUtil(version, False)
postprocessor.RunPostprocessor(POSTPROCESSOR_EXE_PATH).Wait()

# IMPORT_SCRIPT_FILE_PATH : full path to the Operation API script to run in the Postprocessor
postprocessor.ImportScriptFile(IMPORT_SCRIPT_FILE_PATH).Wait()
```
