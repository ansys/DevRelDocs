# Getting Started
<div align="right"><a href="/document/operation-api/getting-started/getting_started_operation_api_using_py.md" download="getting_started_operation_api_using_py.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

## System Requirements

The Operation API supports Windows only and targets .NET Framework 4.8.

The Motion Postprocessor must be installed and running before an Operation API script is executed.

Install Ansys Motion to get the Motion Postprocessor.

## API Entry Point

[`ApplicationHandler`](../../../lib/VM.API.Post.Operations.ApplicationHandler.md) is the root object for an Operation API script.

Create it at the beginning of the script to configure the application, access document and page management features, and coordinate subsequent postprocessing operations.

Use the dedicated Feature pages for importing result data, managing pages and views, running analyses, and exporting results.

## Basic Setup

```python
# OperationAPI_BasicSetup.py
import sys
# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

from OperationAPI import *

# The entry point of the Operation API script.
application_handler = ApplicationHandler()
application_handler.IsShowMessageBox = False
```

<Note>OperationAPI.py is the module that loads the assemblies and namespaces needed by Operation API scripts. All scripts in the Operation API documentation use this module for convenience. You can get OperationAPI.py from [Introduction - Downloads](../../../index.md#downloads).</Note>

To run the script, see [Run Postprocessor](../example/example_run_postprocessor_for_operation_api.md).

## Quick Start

The following script creates `ApplicationHandler`, imports a result file, obtains the active page and its dynamic analysis result, and creates an animation.

```python
# OperationAPI_QuickStart.py
import sys
# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

from OperationAPI import *

# The entry point of the Operation API script.
application_handler = ApplicationHandler()
application_handler.IsShowMessageBox = False

# Create a list of result file paths
filepaths = List[str]()
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
filepaths.Add(RESULT_FILE_PATH)

# Open the result file
# This opens the result file in the application.
# When a result file is opened for the first time, a page and an Animation View are created automatically.
application_handler.AddDocument(filepaths)

# Get the active page and the dynamic analysis result
page = application_handler.GetActivePage()
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)
# The dynamic analysis result of the document.
dynamic_analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

# Create an animation view
# The name of the new animation view.
animation_view_name = "ResultAnimation"
page.CreateAnimation(dynamic_analysis, animation_view_name)
```
