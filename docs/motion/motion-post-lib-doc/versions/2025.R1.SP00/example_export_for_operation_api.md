# Example

The following sample code illustrates how to create a simple example.
* Refer to  operationapi.py in "Ansys installed path/Motion/Document/Postprocessor API for Python.zip"
* The example was created using "Ansys installed path/Motion/Document/Postprocessor API for Python.zip"

## Export All Curves

Export all curves on active plot view.
* Refer to [Create Curve](example_chart_for_operation_api.md) for curve generation.

```
# Example_OperationAPI_ExportCurves.py
# Set the save file path
chartView.ExportAllCurves(r'file path')
```

## Numeric Import

Here is an example of importing curve results from a file.

* Refer to [Create Curve](example_chart_for_operation_api.md) for curve generation.
* Refer to [Export Curve](##export-all-curves) for the method of extracting curve data.
  
```
# Example_OperationAPI_NumericImport.py
parameters = List[INumericParameter](2);
parameter = NumericParameter();
parameter.Name = r'NameChange_10';
parameter.TargetX = r'X(sec)';
parameter.TargetY = r'NameChange_1';
parameters.Add(parameter);
chartView.ImportNumeric(r"D:\curvedata.txt", parameters);
```