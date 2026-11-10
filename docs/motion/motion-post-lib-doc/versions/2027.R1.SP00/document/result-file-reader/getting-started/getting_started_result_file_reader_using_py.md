# Getting Started
<div align="right"><a href="/document/result-file-reader/getting-started/getting_started_result_file_reader_using_py.md" download="getting_started_result_file_reader_using_py.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

## System Requirements

The Result File Reader API supports Windows only and targets .NET Framework 4.8.

It also requires the Motion Postprocessor API assemblies and the ResultFileReaderAPI.py module. The assemblies are installed with Ansys Motion.

When running from CPython, Python.NET is required to load the .NET API. Use the Python version supported by the installed Python.NET package.

## API Entry Point

[`OutputReader`](../../../lib/VM.Post.API.OutputReader.OutputReader.md) is the entry point for a Result File Reader API script.

Construct it with the path of a result file before reading result information or exporting data.

## Basic Setup

```python
# ResultFileReaderAPI_BasicSetup.py
import sys
# BINARY_FOLDER_PATH : path to the folder containing the Postprocessor dll files (e.g., D:\Motion\bin)
# RESULT_FILE_READER_API_MODULE_PATH : path to the folder containing ResultFileReaderAPI.py
sys.path.append(BINARY_FOLDER_PATH)
sys.path.append(RESULT_FILE_READER_API_MODULE_PATH)

from ResultFileReaderAPI import *

# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The reader that opens the result file.
output_reader = OutputReader(RESULT_FILE_PATH)
output_reader.Close()
```

<Note>ResultFileReaderAPI.py is the module that loads the assemblies and namespaces needed by Result File Reader API scripts. All scripts in the Result File Reader API documentation use this module for convenience. You can get ResultFileReaderAPI.py from [Introduction - Downloads](../../../index.md#downloads).</Note>

BINARY_FOLDER_PATH must be the folder that contains Postprocessor.exe in the Motion installation of the product version the script targets.

## Quick Start

The following script opens a result file, reads its primary analysis type and state information, and prints them.

```python
# ResultFileReaderAPI_QuickStart.py
import sys

# BINARY_FOLDER_PATH : path to the folder containing the Postprocessor dll files (e.g., D:\Motion\bin)
# RESULT_FILE_READER_API_MODULE_PATH : path to the folder containing ResultFileReaderAPI.py
sys.path.append(BINARY_FOLDER_PATH)
sys.path.append(RESULT_FILE_READER_API_MODULE_PATH)

from ResultFileReaderAPI import *

# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The reader that opens the result file.
output_reader = OutputReader(RESULT_FILE_PATH)

# Read the primary analysis type
analysis_type = output_reader.GetPrimaryAnalysisResultType()
print(analysis_type)

# Read the state IDs and the reference times
state_ids = output_reader.GetStateIDArray()
# The reference time of each state.
reference_times = output_reader.GetReferenceTimeArray()
for state_id, reference_time in zip(state_ids, reference_times):
    print(state_id, reference_time)
output_reader.Close()
```
