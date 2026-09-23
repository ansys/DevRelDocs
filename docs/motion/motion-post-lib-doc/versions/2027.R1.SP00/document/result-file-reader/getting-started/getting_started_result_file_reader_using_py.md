# Getting Started

## System Requirements

The Result File Reader API supports Windows only and targets .NET Framework 4.8.

It also requires the Motion Postprocessor API assemblies and the `ResultFileReaderAPI.py` module.

When running from CPython, Python.NET is required to load the .NET API. Use the Python version supported by the installed Python.NET package.

## API Entry Point

[`OutputReader`](../../../lib/VM.Post.API.OutputReader.OutputReader.md) is the entry point for a Result File Reader API script.

Construct it with the path of a result file before reading result information or exporting data. Call `Close()` on the `OutputReader` after the script is complete.

## Basic Setup

```python
import sys
# BINARY_FOLDER_PATH : path to the folder containing the Postprocessor dll files
# RESULT_FILE_READER_API_MODULE_PATH : path to the folder containing ResultFileReaderAPI.py
sys.path.append(BINARY_FOLDER_PATH)
sys.path.append(RESULT_FILE_READER_API_MODULE_PATH)

from ResultFileReaderAPI import *

# RESULT_FILE_PATH : .dfr result file path
outputReader = OutputReader(RESULT_FILE_PATH)
```

`BINARY_FOLDER_PATH` must be the folder that contains `Postprocessor.exe` in the Motion product installation. `RESULT_FILE_READER_API_MODULE_PATH` must be the `Modules` folder inside the package downloaded from [Introduction - Downloads](../../index.md#downloads), which contains `ResultFileReaderAPI.py`. Call `sys.path.append(BINARY_FOLDER_PATH)` and `sys.path.append(RESULT_FILE_READER_API_MODULE_PATH)` before importing `ResultFileReaderAPI`.

## Quick Start

The following script opens a result file, reads its primary analysis type and state information, and closes the result reader.

```python
from ResultFileReaderAPI import *

# RESULT_FILE_PATH : .dfr result file path
outputReader = OutputReader(RESULT_FILE_PATH)

analysisType = outputReader.GetPrimaryAnalysisResultType()
stateIDs = outputReader.GetStateIDArray()
referenceTimes = outputReader.GetReferenceTimeArray()

outputReader.Close()
```