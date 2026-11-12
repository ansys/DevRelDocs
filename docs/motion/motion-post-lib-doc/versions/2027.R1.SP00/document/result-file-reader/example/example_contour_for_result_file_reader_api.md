# Contour
<div align="right"><a href="/document/result-file-reader/example/example_contour_for_result_file_reader_api.md" download="example_contour_for_result_file_reader_api.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

The following sample code illustrates how to read and export contour data from a result file.

- For downloadable Example scripts, see [Introduction - Downloads](../../../index.md#downloads).

## Get Contour
This example reads contour values for selected states through a callback.

Running this example prints the state ID and the number of value groups of the Top Stress contour with the X component of FEBody_01 to the console for each state.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_ResultFileReaderAPI_GetContour.py
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

# State ID Array
state_ids = output_reader.GetStateIDArray()

# Select the entity and the characteristic/component path to read.
# The name of the target finite-element body.
entity_name = "FEBody_01"
# Characteristic/component path for the Top Stress X contour result.
characteristic_name = "Top Stress/X"

# Define the callback that receives contour values for each state.
def write_result(state_id, result_groups):
    print(f"State ID: {state_id}")
    print(f"Value groups: {len(result_groups)}")
# The callback that receives the contour values of each state.
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

Running this example saves the Top Stress contour result with the X component of FEBody_01 to ExportContourResultToFile.txt, a binary file in OUTPUT_DIR.
It then reads the saved values back and prints the total steps, the node count, and the values of each state to the console.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_ResultFileReaderAPI_Contour.py
import sys

# BINARY_FOLDER_PATH : path to the folder containing the Postprocessor dll files (e.g., D:\Motion\bin)
# RESULT_FILE_READER_API_MODULE_PATH : path to the folder containing ResultFileReaderAPI.py
sys.path.append(BINARY_FOLDER_PATH)
sys.path.append(RESULT_FILE_READER_API_MODULE_PATH)

# Import necessary modules
from ResultFileReaderAPI import *
import os
import struct

# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The reader that opens the result file.
output_reader = OutputReader(RESULT_FILE_PATH)

# OUTPUT_DIR : path to the folder where exported files are written (e.g., D:\PostprocessorAPI\Output)
# The path of the exported contour result file.
export_result_file_path = os.path.join(OUTPUT_DIR, RFR_CONTOUR_OUTPUT_FILENAME)

# State ID Array
state_ids = output_reader.GetStateIDArray()
# Characteristic/component path for the Top Stress X contour result.
characteristic_name = "Top Stress/X"

# The name of the target finite-element body.
entity_name = "FEBody_01"

# Export the contour result of the entity to the file.
# FileMode.Create specifies how the operating system should open the file.
# ContourMappingType.FENode specifies the type of the target for displaying contour (None, FENode, FEElement, FEElementNode, FEMaterial, BeamGroup, Contact, ChainedSystem, Usersubroutine).
# analysisResultType specifies the type of analysis result type for displaying contour.
# formatType specifies a file format type.
output_reader.ExportContourResultToFile(export_result_file_path, FileMode.Create, state_ids, entity_name, ContourMappingType.FENode, characteristic_name, analysisResultType=AnalysisResultType.Dynamics, formatType=FileFormatType.BINARY)

# The number of states in the result file.
total_steps = len(list(state_ids))
# The geometry data of the body.
data_part = output_reader.GetGeometryInfo(entity_name)
# The number of nodes of the body.
node_count = data_part.NodesCount
# The reference time of each state.
time_array = output_reader.GetReferenceTimeArray()

print('===================== Top Stress X =======================:')
print('total steps :', total_steps)
print('total nodes :', node_count)
with open(export_result_file_path, 'rb') as file:
    for state_id in state_ids:
        print('===================== state id =======================:', state_id)
        print('===================== ref time =======================:', time_array[state_id - 1])
        # The contour values of the nodes in the state.
        double_values = struct.unpack('d' * node_count, file.read(struct.calcsize('d') * node_count))
        
        print(*double_values, sep=',')
        print(f"\n")

# Close
output_reader.Close()
```
