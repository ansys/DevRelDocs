# Vector

The following sample code illustrates how to read and export vector data from a result file.

- For downloadable Example scripts, see [Introduction - Downloads](../../../index.md#downloads).

## Get Vector
This example retrieves vector data for a target entity and characteristic.
```python
# Example_ResultFileReaderAPI_Vector.py
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
# target : Specifies the name of vector displayable entity
# path : Specifies characteristc on vector display
entity_name = "TJ_01"
# characteristic_name : vector characteristic for the Action Force result
characteristic_name = "Action Force"
vectors = output_reader.GetVector(entity_name, characteristic_name)
for vector in vectors:
    print(f"Vector : {vector.Key}")
    animation_data = vector.Value

    position_count = len(list(animation_data.Positions))
    for i in range(position_count):
        first_position_count = len(list(animation_data.Positions[i]))
        for j in range(first_position_count):
            second_positions = list(animation_data.Positions[i][j])
            print("Positions :", *second_positions, sep=',')

    vector_count = len(list(animation_data.Vectors))
    for i in range(vector_count):
        first_vector_count = len(list(animation_data.Vectors[i]))
        for j in range(first_vector_count):
            second_vectors = list(animation_data.Vectors[i][j])
            print("Vectors :", *second_vectors, sep=',')
# Close
output_reader.Close()
```

## Export Vector
This example exports vector results to files.
```python
# Example_ResultFileReaderAPI_ExportVectorFile.py
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

# target : Specifies the name of vector displayable entity
# path : Specifies characteristc on vector display
entity_name = "TJ_01"
# characteristic_name : vector characteristic for the Base Force result
characteristic_name = "Base Force"

targets = List[IVectorDisplay]()
vector_name = "vector"
vector = output_reader.CreateVector(vector_name, entity_name, characteristic_name)
targets.Add(vector)
print ("===ExportVectorDisplayToFile===")

# OUTPUT_DIR : path to the folder where exported files are written
export_vector_targets_file_path = os.path.join(OUTPUT_DIR, RFR_VECTOR_TARGETS_OUTPUT_FILENAME)
output_reader.ExportVectorDisplayToFile(export_vector_targets_file_path, state_ids, targets, True, True, True, AnalysisResultType.Dynamics)

export_vector_target_file_path = os.path.join(OUTPUT_DIR, RFR_VECTOR_TARGET_OUTPUT_FILENAME)
output_reader.ExportVectorDisplayToFile(export_vector_target_file_path, state_ids, entity_name, characteristic_name, True, True, True, AnalysisResultType.Dynamics)

# Close
output_reader.Close()
```

<a href="/document/result-file-reader/example/example_vector_for_result_file_reader_api.md" download="example_vector_for_result_file_reader_api.md">Download this page as Markdown</a>
