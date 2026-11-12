# Run Postprocessor
<div align="right"><a href="/document/operation-api/example/example_run_postprocessor_for_operation_api.md" download="example_run_postprocessor_for_operation_api.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

The following sample code illustrates how to start the Postprocessor and run an Operation API script in it.
- For downloadable Example scripts, see [Introduction - Downloads](../../../index.md#downloads).

## Run an Operation API Script
This example starts the Postprocessor executable, waits for its remoting service, and runs an Operation API script in the Postprocessor.

Starting the Postprocessor and importing the OperationAPI module cannot be done in the same script file. The Operation API operates on the Postprocessor application in the process that runs the script. The script that starts the Postprocessor runs outside the started Postprocessor process, so there is no Postprocessor application for the module to operate on.

- The script below only starts the Postprocessor and runs another script in it. It loads VM.Windows.Post.Remoting with `clr.AddReference` and does not import OperationAPI.
- The script at IMPORT_SCRIPT_FILE_PATH runs in the Postprocessor. Import OperationAPI at the beginning of that script, see [Getting Started](../getting-started/getting_started_operation_api_using_py.md#basic-setup).

Running this example starts the Postprocessor and runs the script at IMPORT_SCRIPT_FILE_PATH in it.
The script at IMPORT_SCRIPT_FILE_PATH opens a result file and creates a page named FirstPage in the Postprocessor.
```python
# Example_OperationAPI_RunPostprocessor.py
import sys
import clr

# BINARY_FOLDER_PATH : path to the folder containing Postprocessor.exe in the installed Motion (e.g., D:\Motion\bin)
sys.path.append(BINARY_FOLDER_PATH)

clr.AddReference("VM.Windows.Post.Remoting")

from System.Reflection import AssemblyName
from VM.Windows.Post import PostprocessorRemotingUtil

# POSTPROCESSOR_EXE_PATH : full path to the Postprocessor executable (e.g., D:\Motion\bin\Postprocessor.exe)
# The version of Postprocessor.exe.
version = AssemblyName.GetAssemblyName(POSTPROCESSOR_EXE_PATH).Version
# The remoting utility that starts Postprocessor and runs scripts in it.
postprocessor = PostprocessorRemotingUtil(version, False)
postprocessor.RunPostprocessor(POSTPROCESSOR_EXE_PATH).Wait()

# IMPORT_SCRIPT_FILE_PATH : full path to the Operation API script to run in the Postprocessor (e.g., D:\PostprocessorAPI\Example\Example_OperationAPI_ScriptForImportScriptFile.py)
postprocessor.ImportScriptFile(IMPORT_SCRIPT_FILE_PATH).Wait()
```
