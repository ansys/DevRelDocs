# Vector
<div align="right"><a href="/document/result-file-reader/example/example_vector_for_result_file_reader_api.md" download="example_vector_for_result_file_reader_api.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

The following sample code illustrates how to read and export vector data from a result file.

- For downloadable Example scripts, see [Introduction - Downloads](../../../index.md#downloads).

## Get Vector
This example retrieves vector data for a target entity and characteristic.

Running this example prints the name, positions, and vectors of each vector of the Action Force characteristic of TJ_01 to the console.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_ResultFileReaderAPI_Vector.py
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

print ("===GetVector===")
# Specifies the name of the vector displayable entity.
entity_name = "TJ_01"
# Vector characteristic for the Action Force result.
characteristic_name = "Action Force"
# The vector animation data of the entity and characteristic.
vectors = output_reader.GetVector(entity_name, characteristic_name)
for vector in vectors:
    print(f"Vector : {vector.Key}")
    # The animation data of the vector.
    animation_data = vector.Value

    # The number of position groups in the animation data.
    position_count = len(list(animation_data.Positions))
    for i in range(position_count):
        # The number of position arrays in the group.
        first_position_count = len(list(animation_data.Positions[i]))
        for j in range(first_position_count):
            # The position values of the vector.
            second_positions = list(animation_data.Positions[i][j])
            print("Positions :", *second_positions, sep=',')

    # The number of vector groups in the animation data.
    vector_count = len(list(animation_data.Vectors))
    for i in range(vector_count):
        # The number of vector arrays in the group.
        first_vector_count = len(list(animation_data.Vectors[i]))
        for j in range(first_vector_count):
            # The vector component values.
            second_vectors = list(animation_data.Vectors[i][j])
            print("Vectors :", *second_vectors, sep=',')
# Close
output_reader.Close()
```

## Export Vector
This example exports vector results to files.

Running this example saves the vector results of the Base Force characteristic of TJ_01 to ExportVectorDisplayToFile_Targets.txt and ExportVectorDisplayToFile_Target.txt in OUTPUT_DIR.

This example uses the Tutorial_ModalFlex.dfr result file. You can get the Tutorial_ModalFlex.dfr file from [Introduction - Downloads](../../../index.md#downloads).
```python
# Example_ResultFileReaderAPI_ExportVectorFile.py
import sys

# BINARY_FOLDER_PATH : path to the folder containing the Postprocessor dll files (e.g., D:\Motion\bin)
# RESULT_FILE_READER_API_MODULE_PATH : path to the folder containing ResultFileReaderAPI.py
sys.path.append(BINARY_FOLDER_PATH)
sys.path.append(RESULT_FILE_READER_API_MODULE_PATH)

# Import necessary modules
from ResultFileReaderAPI import *
import os

# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The reader that opens the result file.
output_reader = OutputReader(RESULT_FILE_PATH)

# The IDs of the states in the result file.
state_ids = output_reader.GetStateIDArray()

# Specifies the name of the vector displayable entity.
entity_name = "TJ_01"
# Vector characteristic for the Base Force result.
characteristic_name = "Base Force"

# The vector displays to export.
targets = List[IVectorDisplay]()
# The name of the vector.
vector_name = "vector"
# The vector definition created for the entity and characteristic.
vector = output_reader.CreateVector(vector_name, entity_name, characteristic_name)
targets.Add(vector)
print ("===ExportVectorDisplayToFile===")

# OUTPUT_DIR : path to the folder where exported files are written (e.g., D:\PostprocessorAPI\Output)
# The path of the exported vector display file for the target list.
export_vector_targets_file_path = os.path.join(OUTPUT_DIR, RFR_VECTOR_TARGETS_OUTPUT_FILENAME)
output_reader.ExportVectorDisplayToFile(export_vector_targets_file_path, state_ids, targets, True, True, True, AnalysisResultType.Dynamics)

# The path of the exported vector display file for a single target.
export_vector_target_file_path = os.path.join(OUTPUT_DIR, RFR_VECTOR_TARGET_OUTPUT_FILENAME)
output_reader.ExportVectorDisplayToFile(export_vector_target_file_path, state_ids, entity_name, characteristic_name, True, True, True, AnalysisResultType.Dynamics)

# Close
output_reader.Close()
```
