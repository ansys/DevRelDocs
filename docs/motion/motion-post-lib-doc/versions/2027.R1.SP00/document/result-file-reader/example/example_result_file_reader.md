# Example
The following sample code illustrates how to create a simple example.

- For downloadable Example scripts, see [Introduction - Downloads](../../../index.md#downloads).

## Create a Coordinate System
The Coordinate system can be created from various entities in the result as below, and this example describes how to create the Coordinate System.
* Rigid Body
* FE Node
* Marker
```python
import sys

# BINARY_FOLDER_PATH : path to the folder containing the Postprocessor dll files
# RESULT_FILE_READER_API_MODULE_PATH : path to the folder containing ResultFileReaderAPI.py
sys.path.append(BINARY_FOLDER_PATH)
sys.path.append(RESULT_FILE_READER_API_MODULE_PATH)

# Import necessary modules
from ResultFileReaderAPI import *

# RESULT_FILE_PATH : .dfr result file path
output_reader = OutputReader(RESULT_FILE_PATH)

# Create a coordinate system attached to the Crank entity.
# coordinate_system_name : coordinate-system name used by the result reader
coordinate_system_name = "Crank_CSYS"
# parent_name : full name of the entity that owns the coordinate system
parent_name = "Crank"
crank_csys = output_reader.CreateCoordinateSystem(coordinate_system_name, parent_name)
angle_offset = Vector(0, 10, 0)
position_offset = Vector(10, 10, 10)
crank_csys.TransformationOffsetParameters.Angle = angle_offset
crank_csys.TransformationOffsetParameters.Position = position_offset
crank_csys.TransformationOffsetParameters.RotationAxis = RotationAxes.XYZ
crank_csys.TransformationOffsetParameters.RotationType = RotationTypes.FixedAngle

# Select the cylindrical coordinate-system representation.
crank_csys.GeneralMarkerType = GeneralMarkerType.CYLINDRICAL

if crank_csys.GeneralMarkerType == GeneralMarkerType.SPHERICAL:
    # Select the two spherical coordinate axes.
    crank_csys.PrimaryAxis = CoordinateType.X
    crank_csys.SecondaryAxis = CoordinateType.Y
elif crank_csys.GeneralMarkerType == GeneralMarkerType.CYLINDRICAL:
    # Select the radial and axial cylindrical coordinate axes.
    crank_csys.PrimaryAxis = CoordinateType.Z
    crank_csys.SecondaryAxis = CoordinateType.X

# Rigid Body
print (f"Marker Name : {crank_csys.FullName}")

# Create a coordinate system attached to a finite-element node.
# coordinate_system_name : coordinate-system name used by the result reader
coordinate_system_name = "NodeCSYS"
# parent_name : body and node path for the coordinate-system parent
parent_name = "FEBody_01/Node/754"
fenode_csys = output_reader.CreateCoordinateSystem(coordinate_system_name, parent_name)
print (f"Marker Name : {fenode_csys.FullName}")

# Create a coordinate system attached to a marker.
# coordinate_system_name : coordinate-system name used by the result reader
coordinate_system_name = "MarkerCSYS"
# parent_name : body and marker path for the coordinate-system parent
parent_name = "Crank/CM"
marker_csys = output_reader.CreateCoordinateSystem(coordinate_system_name, parent_name)
print (f"Marker Name : {marker_csys.FullName}")

# Close
output_reader.Close()
```

## Get Curve
It is the simplest example of a Python script to get curve data.

```python
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
target_name = "Crank"
plot_parameters.Target = target_name

# Set the paths for the curves you want to retrieve.
# This is where you specify the characteristics and components you want to plot.
plot_parameters.Paths = paths

# There are two ways to retrieve the results of the curve:
# 1. PlotDataType.DEFAULT - Uses the default PlotDataType setting.
# 2. PlotDataType.PlotResult - If a Plt result exists, you can set PlotResult and obtain the result from Plt.
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

## Export Contour
Export contour results to a file

```python
import sys

# BINARY_FOLDER_PATH : path to the folder containing the Postprocessor dll files
# RESULT_FILE_READER_API_MODULE_PATH : path to the folder containing ResultFileReaderAPI.py
sys.path.append(BINARY_FOLDER_PATH)
sys.path.append(RESULT_FILE_READER_API_MODULE_PATH)

# Import necessary modules
from ResultFileReaderAPI import *
import os
import struct

# RESULT_FILE_PATH : .dfr result file path
output_reader = OutputReader(RESULT_FILE_PATH)

# OUTPUT_DIR : path to the folder where exported files are written
export_result_file_path = os.path.join(OUTPUT_DIR, RFR_CONTOUR_OUTPUT_FILENAME)

# State ID Array
state_ids = output_reader.GetStateIDArray()
# contour_path : fixed characteristic/component path for the Top Stress X contour result
contour_path = "Top Stress/X"

# GetGeometryInfoArray
geometries = output_reader.GetGeometryInfoArray()

# Find Item
body_name = "FEBody_01"
febody = next((item for item in geometries if item.FullName == body_name), None)

# resultpath - Specifies the file path to export
# mode - Specifies how the operating system should open a file.
# stateids - Specifies the id list of the states to time.
# fullName - Specifies the names of the entities.
# type - Specifies the type of the target for displaying contour(None, FENode, FEElement, FEElementNode, FEMaterial, BeamGroup, Contact, ChainedSystem, Usersubroutine).
# path - Specifies the path of result to save.
# analysisResultType - Specifies the type of analysis result type for displaying contour.
# formatType - Specifies a file format type.
output_reader.ExportContourResultToFile(export_result_file_path, FileMode.Create, state_ids, febody.FullName, ContourMappingType.FENode, contour_path, analysisResultType=AnalysisResultType.Dynamics, formatType=FileFormatType.BINARY)

state_ids = output_reader.GetStateIDArray()
total_steps = len(list(state_ids))
data_part = output_reader.GetGeometryInfo(febody.FullName)
node_count = data_part.NodesCount
time_array = output_reader.GetReferenceTimeArray()

print('===================== Top Stress X =======================:')
print('total steps :', total_steps)
print('total nodes :', node_count)
with open(export_result_file_path, 'rb') as file:
    for state_id in state_ids:
        print('===================== state id =======================:', id)
        print('===================== ref time =======================:', time_array[state_id - 1])
        double_values = struct.unpack('d' * node_count, file.read(struct.calcsize('d') * node_count))
        
        print(*double_values, sep=',')
        print(f"\n")

# Close
output_reader.Close()
```

## Export Vector
Export vector results to a file
```python
import sys

# BINARY_FOLDER_PATH : path to the folder containing the Postprocessor dll files
# RESULT_FILE_READER_API_MODULE_PATH : path to the folder containing ResultFileReaderAPI.py
sys.path.append(BINARY_FOLDER_PATH)
sys.path.append(RESULT_FILE_READER_API_MODULE_PATH)

# Import necessary modules
from ResultFileReaderAPI import *
import os

# RESULT_FILE_PATH : .dfr result file path
output_reader = OutputReader(RESULT_FILE_PATH)

state_ids = output_reader.GetStateIDArray()

# target - Specifies the name of vector displayable entity
# path - Specifies characteristc on vector display
target_name = "TJ_01"
# vector_path : fixed vector characteristic path for the Base Force result
vector_path = "Base Force"

targets = List[IVectorDisplay]()
vector_name = "vector"
vector = output_reader.CreateVector(vector_name, target_name, vector_path)
targets.Add(vector)
print ("===ExportVectorDisplayToFile===")

# OUTPUT_DIR : path to the folder where exported files are written
export_vector_file_path = os.path.join(OUTPUT_DIR, RFR_VECTOR_TARGETS_OUTPUT_FILENAME)
output_reader.ExportVectorDisplayToFile(export_vector_file_path, state_ids, targets, True, True, True, AnalysisResultType.Dynamics)

export_vector_file_path = os.path.join(OUTPUT_DIR, RFR_VECTOR_TARGET_OUTPUT_FILENAME)
output_reader.ExportVectorDisplayToFile(export_vector_file_path, state_ids, target_name, vector_path, True, True, True, AnalysisResultType.Dynamics)

# Close
output_reader.Close()
```

## Get Vector
Get results from the Vector.

```python
import sys

# BINARY_FOLDER_PATH : path to the folder containing the Postprocessor dll files
# RESULT_FILE_READER_API_MODULE_PATH : path to the folder containing ResultFileReaderAPI.py
sys.path.append(BINARY_FOLDER_PATH)
sys.path.append(RESULT_FILE_READER_API_MODULE_PATH)

# Import necessary modules
from ResultFileReaderAPI import *

# RESULT_FILE_PATH : .dfr result file path
output_reader = OutputReader(RESULT_FILE_PATH)

print ("===GetVector===")
# target - Specifies the name of vector displayable entity
# path - Specifies characteristc on vector display
target_name = "TJ_01"
# vector_path : fixed vector characteristic path for the Action Force result
vector_path = "Action Force"
vectors = output_reader.GetVector(target_name, vector_path)
for vector in vectors:
    print(f"Vector : {vector.Key}")
    animation_data = vector.Value

    positions = len(list(animation_data.Positions))
    for i in range(positions):
        first_positions = len(list(animation_data.Positions[i]))
        for j in range(first_positions):
            second_positions = list(animation_data.Positions[i][j])
            print("Positions :", *second_positions, sep=',')

    vectors = len(list(animation_data.Vectors))
    for i in range(vectors):
        first_vectors = len(list(animation_data.Vectors[i]))
        for j in range(first_vectors):
            second_vectors = list(animation_data.Vectors[i][j])
            print("Vectors :", *second_vectors, sep=',')
# Close
output_reader.Close()
```
