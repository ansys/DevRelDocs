# Contour

The following sample code illustrates how to read and export contour data from a result file.

- For downloadable Example scripts, see [Introduction - Downloads](../../../index.md#downloads).

## Get Contour
This example reads contour values for selected states through a callback.
```python
# Example_ResultFileReaderAPI_GetContour.py
import sys

# BINARY_FOLDER_PATH : path to the folder containing the Postprocessor dll files
# RESULT_FILE_READER_API_MODULE_PATH : path to the folder containing ResultFileReaderAPI.py
sys.path.append(BINARY_FOLDER_PATH)
sys.path.append(RESULT_FILE_READER_API_MODULE_PATH)

# Import necessary modules
from ResultFileReaderAPI import *

# RESULT_FILE_PATH : .dfr result file path
output_reader = OutputReader(RESULT_FILE_PATH)

# State ID Array
state_ids = output_reader.GetStateIDArray()

# Select the entity and the characteristic/component path to read.
entity_name = "FEBody_01"
# characteristic_name : characteristic/component path for the Top Stress X contour result
characteristic_name = "Top Stress/X"

# Define the callback that receives contour values for each state.
def write_result(state_id, result_groups):
    print(f"State ID: {state_id}")
    print(f"Value groups: {len(result_groups)}")
action = Action[Int32, IList[Array[Double]]](write_result)

# Read contour values for the selected entity and each requested state.
output_reader.GetContourResult(
    state_ids,
    entity_name,
    ContourMappingType.FENode,
    characteristic_name,
    action,
    AnalysisResultType.Dynamics,
)

# Close
output_reader.Close()
```

## Export Contour
This example exports contour results to a binary file.
```python
# Example_ResultFileReaderAPI_Contour.py
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
# characteristic_name : characteristic/component path for the Top Stress X contour result
characteristic_name = "Top Stress/X"

# GetGeometryInfoArray
geometries = output_reader.GetGeometryInfoArray()

# Find Item
entity_name = "FEBody_01"
febody = next((item for item in geometries if item.FullName == entity_name), None)

# resultpath - Specifies the file path to export
# mode - Specifies how the operating system should open a file.
# stateids - Specifies the id list of the states to time.
# fullName - Specifies the names of the entities.
# type - Specifies the type of the target for displaying contour(None, FENode, FEElement, FEElementNode, FEMaterial, BeamGroup, Contact, ChainedSystem, Usersubroutine).
# path - Specifies the path of result to save.
# analysisResultType - Specifies the type of analysis result type for displaying contour.
# formatType - Specifies a file format type.
output_reader.ExportContourResultToFile(export_result_file_path, FileMode.Create, state_ids, febody.FullName, ContourMappingType.FENode, characteristic_name, analysisResultType=AnalysisResultType.Dynamics, formatType=FileFormatType.BINARY)

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
        print('===================== state id =======================:', state_id)
        print('===================== ref time =======================:', time_array[state_id - 1])
        double_values = struct.unpack('d' * node_count, file.read(struct.calcsize('d') * node_count))
        
        print(*double_values, sep=',')
        print(f"\n")

# Close
output_reader.Close()
```
