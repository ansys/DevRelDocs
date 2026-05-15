# Interface IOperationFEProperty
<a id="VM_Operations_Post_Interfaces_IOperationFEProperty"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents finite element properties for beam or shell elements.

```csharp
public interface IOperationFEProperty : IHasName, IVisible
```

#### Implements

IHasName, 
IVisible

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# IOperationFEProperty.py
# -*- coding: utf-8 -*-
import sys

# Get the current file's path and set the path for external modules.
current_dir = __file__.rsplit('\\', 1)[0]
external_modules_path = current_dir + '\\..\\..\\Modules'
sys.path.append(external_modules_path)

# Import necessary modules
from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
result_file_path = get_result_file_path()

# Set array about result file
filepaths = List[str]()
filepaths.Add(result_file_path)

# Open about result files
# This will open the result file in the application.
# When the result is first opened, a Page is created and an Animation View is created on that Page.
applicationHandler.AddDocument(filepaths)

# Get Active Page
# This retrieves the currently active page in the application.
page = applicationHandler.GetActivePage()

# Get Active View
# This retrieves the currently active view in the page.
activeView = page.GetActiveView()

# Get instance of entity
# The GetViewModelByName method retrieves the target by its name.
febody = activeView.GetViewModelByName("FEBody_01")
febodyProperties = list(febody.Properties)

# Print all ElementIndexes of the FEBody properties.
# This will print the ElementIndexes of each property in the FEBody.
output_lines = []
for i, prop in enumerate(febodyProperties):
    prop.IsVisible = True
    elementIndexes = prop.ElementIndexes
    for idx in elementIndexes:
        output_lines.append(str(idx))
    output_lines.append("")

# Write the output to a text file
output_text = "\n".join(output_lines)
output_dir = get_output_directory()
output_path = combine_path(output_dir, "FEBody_01_All_ElementIndexes.txt")
with open(output_path, "w") as out_f:
    out_f.write(output_text)

# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close Document
applicationHandler.CloseDocument(result_file_path)
```

## Remarks

This interface defines the common contract for various finite element properties
that can be associated with either beam or shell elements within a structural analysis context.
Implementations of this interface should provide specific property data
relevant to the element type they represent.
It extends <xref href="VM.IHasName" data-throw-if-not-resolved="false"></xref> and <xref href="VM.IVisible" data-throw-if-not-resolved="false"></xref> to include naming and visibility functionality.

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationFEProperty_ElementIndexes"></a> ElementIndexes

Gets the indexes of the elements associated with this property.

```csharp
uint[] ElementIndexes { get; }
```

#### Property Value

 uint\[\]

#### Examples

For an example that includes this property, see the [Interface IOperationFEProperty](VM.Operations.Post.Interfaces.IOperationFEProperty.md).

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IOperationFEProperty.ElementIndexes" data-throw-if-not-resolved="false"></xref> property provides an array of unsigned integers
that represent the indexes of elements relevant to the operation.

