# Operation API

## Common setting
Import the OperationAPI.py file from the "Ansys installed path/Motion/Document/Postprocessor API for Python.zip" file.

## Added
- Support for reading RPC file formats has been added to the Import feature.

## Changed
- The Following Camera has been changed.
- The UI for NumericImport has been changed.

## Deprecated
- **ApplicationHandler.ImportNumeric()** is deprecated and will be removed soon; it is recommended to transition to **IOperationsChartViewModel.ImportNumeric()**.