# Getting Started

## System Requirements

The Operation API supports Windows only and targets .NET Framework 4.8.

It runs in the IronPython 2.7.12 engine included with the Motion Postprocessor. The Motion Postprocessor must be installed and running before an Operation API script is executed.

## API Entry Point

[`ApplicationHandler`](../../../lib/VM.API.Post.Operations.ApplicationHandler.md) is the root object for an Operation API script. 

Create it at the beginning of the script to configure the application, access document and page management features, and coordinate subsequent postprocessing operations. 

Use the dedicated Feature pages for importing result data, managing pages and views, running analyses, and exporting results. Call [`Close()`](../../../lib/VM.API.Post.Operations.ApplicationHandler.Close.md) when the script is complete.

## Basic Setup

```python
import sys
# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

from OperationAPI import *

applicationHandler = ApplicationHandler()
applicationHandler.IsShowMessageBox = False
```

`OPERATION_API_MODULE_PATH` must be the `Modules` folder inside the package downloaded from [Introduction - Downloads](../../../index.md#downloads), which contains `OperationAPI.py`. Call `sys.path.append(OPERATION_API_MODULE_PATH)` before importing `OperationAPI`.

## Quick Start

The following script creates `ApplicationHandler`, imports a result file, obtains the active page and its dynamic analysis result, creates an animation, and closes the opened objects.

```python
import sys
# OPERATION_API_MODULE_PATH : path to the folder containing OperationAPI.py
sys.path.append(OPERATION_API_MODULE_PATH)

from OperationAPI import *

applicationHandler = ApplicationHandler()
applicationHandler.IsShowMessageBox = False

# RESULT_FILE_PATH : .dfr result file path
filepaths = List[str]()
filepaths.Add(RESULT_FILE_PATH)
applicationHandler.AddDocument(filepaths)

page = applicationHandler.GetActivePage()
document = applicationHandler.GetDocument(RESULT_FILE_PATH)
dynamicAnalysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)
animation = page.CreateAnimation(dynamicAnalysis, "ResultAnimation")

page.Close()
applicationHandler.CloseDocument(RESULT_FILE_PATH)
applicationHandler.Close()
```