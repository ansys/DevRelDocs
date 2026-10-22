# Coordinate System

The following sample code illustrates how to create a coordinate system from result data.

- For downloadable Example scripts, see [Introduction - Downloads](../../../index.md#downloads).

## Create a Coordinate System
This example creates coordinate systems attached to a rigid body, a finite-element node, and a marker.
```python
# Example_ResultFileReaderAPI_CoordinateSystem.py
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
# parent_full_name : full name of the entity that owns the coordinate system
parent_full_name = "Crank"
crank_csys = output_reader.CreateCoordinateSystem(coordinate_system_name, parent_full_name)
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
# parent_full_name : body and node path for the coordinate-system parent
parent_full_name = "FEBody_01/Node/754"
fenode_csys = output_reader.CreateCoordinateSystem(coordinate_system_name, parent_full_name)
print (f"Marker Name : {fenode_csys.FullName}")

# Create a coordinate system attached to a marker.
# coordinate_system_name : coordinate-system name used by the result reader
coordinate_system_name = "MarkerCSYS"
# parent_full_name : body and marker path for the coordinate-system parent
parent_full_name = "Crank/CM"
marker_csys = output_reader.CreateCoordinateSystem(coordinate_system_name, parent_full_name)
print (f"Marker Name : {marker_csys.FullName}")

# Close
output_reader.Close()
```

<a href="/document/result-file-reader/example/example_coordinate_system_for_result_file_reader_api.md" download="example_coordinate_system_for_result_file_reader_api.md">Download this page as Markdown</a>
