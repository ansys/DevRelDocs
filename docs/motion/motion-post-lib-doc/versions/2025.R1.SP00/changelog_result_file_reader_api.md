# Result File Reader

## Common setting

Import the ResultFileReaderAPI.py file from the "Ansys installed path/Motion/Document/Postprocessor API for Python.zip" file.

## Added

- The GetAssemblyInfo() function, which retrieves assembly information for a specific type, has been added.

## Changed

- The prototype of the GetFlexibleBodyReferenceFrame function has been changed. It now takes two parameters instead of one, and if the second parameter is not provided, it defaults to false.
- IDictionary<string, IList&lt;Point&gt;> GetCurves(IPlotParameters parameters) -> **IDictionary<string, IList&lt;Point2D&gt;>** GetCurves(IPlotParameters parameters)
- **IDictionary<string, IList&lt;Point2D&gt;>** GetCurves(IPlotParameters parameters) -> **IDictionary<string, Point2D[]>** GetCurves(IPlotParameters parameters)
- IDictionary<string, IVectorDisplayAnimatinoData> GetVector() -> **IDictionary<string, IVectorDisplayAnimationData>**	GetVector()

## Deprecated