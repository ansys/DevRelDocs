# Coordinate System
<div align="right"><a href="/document/result-file-reader/example/example_coordinate_system_for_result_file_reader_api.md" download="example_coordinate_system_for_result_file_reader_api.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

The following sample code illustrates how to create a coordinate system from result data.

- For downloadable Example scripts, see [Introduction - Downloads](../../../index.md#downloads).

## Create a Coordinate System
This example creates coordinate systems attached to a rigid body, a finite-element node, and a marker.

Running this example creates the coordinate systems Crank_CSYS, NodeCSYS, and MarkerCSYS and prints the name of each one to the console.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_ResultFileReaderAPI_CoordinateSystem.py
import sys

# BINARY_FOLDER_PATH : path to the folder containing the Postprocessor dll files (e.g., D:\Motion\bin)
# RESULT_FILE_READER_API_MODULE_PATH : path to the folder containing ResultFileReaderAPI.py
sys.path.append(BINARY_FOLDER_PATH)
sys.path.append(RESULT_FILE_READER_API_MODULE_PATH)

# Import necessary modules
from ResultFileReaderAPI import *

# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The reader that opens the result file.
output_reader = OutputReader(RESULT_FILE_PATH)

# Create a coordinate system attached to the Crank entity.
# Coordinate-system name used by the result reader.
coordinate_system_name = "Crank_CSYS"
# Full name of the entity that owns the coordinate system.
parent_full_name = "Crank"
# The coordinate system attached to the Crank entity.
crank_csys = output_reader.CreateCoordinateSystem(coordinate_system_name, parent_full_name)
# The angle offset of the coordinate system.
angle_offset = Vector(0, 10, 0)
# The position offset of the coordinate system.
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
# Coordinate-system name used by the result reader.
coordinate_system_name = "NodeCSYS"
# Body and node path for the coordinate-system parent.
parent_full_name = "FEBody_01/Node/754"
# The coordinate system attached to a finite-element node.
fenode_csys = output_reader.CreateCoordinateSystem(coordinate_system_name, parent_full_name)
print (f"Marker Name : {fenode_csys.FullName}")

# Create a coordinate system attached to a marker.
# Coordinate-system name used by the result reader.
coordinate_system_name = "MarkerCSYS"
# Body and marker path for the coordinate-system parent.
parent_full_name = "Crank/CM"
# The coordinate system attached to a marker.
marker_csys = output_reader.CreateCoordinateSystem(coordinate_system_name, parent_full_name)
print (f"Marker Name : {marker_csys.FullName}")

# Close
output_reader.Close()
```
