# Curve

The following sample code illustrates how to retrieve curve data from a result file.

- For downloadable Example scripts, see [Introduction - Downloads](../../../index.md#downloads).

## Get Curve
This example retrieves the Y component of an acceleration curve for a target entity.
```python
# Example_ResultFileReaderAPI_Plot.py
import sys

# BINARY_FOLDER_PATH : path to the folder containing the Postprocessor dll files
# RESULT_FILE_READER_API_MODULE_PATH : path to the folder containing ResultFileReaderAPI.py
sys.path.append(BINARY_FOLDER_PATH)
sys.path.append(RESULT_FILE_READER_API_MODULE_PATH)

# Import necessary modules
from ResultFileReaderAPI import *

# RESULT_FILE_PATH : .dfr result file path
# Create an OutputReader instance to read the result file.
output_reader = OutputReader(RESULT_FILE_PATH)

# Specify the paths for the curves you want to retrieve.
# For example, Acceleration represents the Characteristic, and Y after the / represents the Component.
# In this case, we are retrieving the Y component of Acceleration for the Crank.
# You can check the available Characteristics and Components for the target by using Add Curve in the Postprocessor.
paths = List[str]()
# curve_path : fixed characteristic/component path for the acceleration Y curve
curve_path = "Acceleration/Y"
paths.Add(curve_path)

# Create a PlotParameters object to specify the parameters for the plot.
plot_parameters = PlotParameters()

# Set the Entity to Plot.
# The Target is the name of the target for which you want to retrieve the curves.
entity_name = "Crank"
plot_parameters.Target = entity_name

# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
plot_parameters.Paths = paths

# There are two ways to retrieve the results of the curve:
# 1. PlotDataType.DEFAULT : Uses the default PlotDataType setting.
# 2. PlotDataType.PlotResult : If a Plt result exists, you can set PlotResult and obtain the result from Plt.
# If PlotDataType is not set, it is set to Default by default.
plot_parameters.PlotDataType = PlotDataType.DEFAULT

# Get curve data from the result.
results = output_reader.GetCurves(plot_parameters)

# Print the results in a formatted way.
for result in results:
    print(['Time\t', "Y", '\n'])
    for plot_data in result.Value:
        print([str(plot_data.X), '\t', str(plot_data.Y), '\n'])
 
# Close
output_reader.Close()
```
