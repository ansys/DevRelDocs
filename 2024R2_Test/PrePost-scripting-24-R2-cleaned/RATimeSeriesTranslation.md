# RATimeSeriesTranslation

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RATimeSeriesTranslation"></a>

### *class* RATimeSeriesTranslation

Rocky PrePost Scripting wrapper representing a Time Series Translation motion.

Retrieve this specific wrapper after setting the correct motion type on a [`RAMotion`](RAMotion.md#generated.RAMotion). For
example:

```python
motions = motion_frame.GetMotions()
motion_1 = motions.New()
motion_1.SetType('Time Series Translation')
time_series_translation = motion_1.GetTypeObject()
```

**Methods:**

| Name | Description |
|----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| [`ImportTimeSeriesMotion`](#generated.RATimeSeriesTranslation.ImportTimeSeriesMotion)(file_path)   | Generate the Time Series Motion Frame described on the contents of the file.   |

<a id="generated.RATimeSeriesTranslation.ImportTimeSeriesMotion"></a>

#### ImportTimeSeriesMotion(file_path: str)

Generate the Time Series Motion Frame described on the contents of the file.

The accepted file extensions are CSV and XLSX.
