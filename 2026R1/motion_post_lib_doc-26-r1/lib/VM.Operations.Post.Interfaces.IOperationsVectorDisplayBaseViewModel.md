#  Interface IOperationsVectorDisplayBaseViewModel

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing information for the vector display view model.

```python
public interface IOperationsVectorDisplayBaseViewModel
```

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># IOperationsVectorDisplayBaseViewModel.py
import sys

current_dir = __file__.rsplit('\\', 1)[0]
external_modules_path = current_dir + '\\..\\..\\Modules'
sys.path.append(external_modules_path)

from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
result_file_path = get_result_file_path()

# Set array about result file
filepaths = List[str]()
filepaths.Add(result_file_path)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Find Page
pages = applicationHandler.GetPages()

findViews = list()
for page in pages :
    views = page.GetViews()
    animationViews = [view for view in views if view.ViewType == ViewType.Animation]
    for animationView in animationViews :
        if animationView.DocumentFilePath == result_file_path and animationView.AnalysisResultType == AnalysisResultType.Dynamics :
            findViews.append(animationView)

viewCount = len(findViews)
if viewCount > 0 :
    document = applicationHandler.GetDocument(result_file_path)
    analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)

    # Create Vector Display
    vector = analysis.CreateVectorDisplay("TJ_01", "Base Force")
    vector.FullName = "TJ_VectorDisplay"
    vector.IsLabel = True
    vector.LabelBackgroundColor = OperationAPIService.GetColorFrameRGB(255,255,255)
    vector.LabelTextColor = OperationAPIService.GetColorFrameRGB(0,0,0)
    vector.IsVisible = True
    vector.SetCharacteristic("Base Torque")

# Close the Pages
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsVectorDisplayBaseViewModel_FullName"></a> FullName

Gets or sets the full name of the vector display.

```python
string FullName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Examples

For an example that includes this property, see the [Interface IOperationsVectorDisplayBaseViewModel](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.md).

#### Remarks

Use this property to specify or retrieve the full name of the vector display.

### <a id="VM_Operations_Post_Interfaces_IOperationsVectorDisplayBaseViewModel_IsLabel"></a> IsLabel

Gets or sets a value indicating whether to display or hide the object name, and force and position vectors in the animation view.

```python
bool IsLabel { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

For an example that includes this property, see the [Interface IOperationsVectorDisplayBaseViewModel](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.md).

#### Remarks

Use this property to specify or retrieve the visibility of the object name, and force and position vectors in the animation view.

### <a id="VM_Operations_Post_Interfaces_IOperationsVectorDisplayBaseViewModel_IsVisible"></a> IsVisible

Gets or sets a value indicating whether the vector display is visible in the animation view.

```python
bool IsVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Examples

The following example demonstrates how to use the <code>IsVisible</code> property:
<pre><code class="lang-python">For an example that includes this property, see the [Interface IOperationsVectorDisplayBaseViewModel](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.md).</code></pre>

#### Remarks

Use this property to specify or retrieve the visibility of the vector display in the animation view.

### <a id="VM_Operations_Post_Interfaces_IOperationsVectorDisplayBaseViewModel_LabelBackgroundColor"></a> LabelBackgroundColor

Gets or sets the background color of the label in the vector display.

```python
Color LabelBackgroundColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

The following example demonstrates how to use the <code>LabelBackGroundColor</code> property:
<pre><code class="lang-python">For an example that includes this property, see the [Interface IOperationsVectorDisplayBaseViewModel](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.md).</code></pre>

#### Remarks

Use this property to specify or retrieve the background color of the label in the vector display.

### <a id="VM_Operations_Post_Interfaces_IOperationsVectorDisplayBaseViewModel_LabelTextColor"></a> LabelTextColor

Gets or sets the text color of the label in the vector display.

```python
Color LabelTextColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

#### Examples

The following example demonstrates how to use the <code>LabelTextColor</code> property:
<pre><code class="lang-python">For an example that includes this property, see the [Interface IOperationsVectorDisplayBaseViewModel](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.md).</code></pre>

#### Remarks

Use this property to specify or retrieve the text color of the label in the vector display.

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsVectorDisplayBaseViewModel_SetCharacteristic_System_String_"></a> SetCharacteristic\(string\)

Sets the characteristic for the vector display.

```python
void SetCharacteristic(string characteristic)
```

#### Parameters

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

The characteristic to be set.

#### Examples

The following example demonstrates how to use the <code>SetCharacteristic</code> method:
<pre><code class="lang-python">For an example that includes this property, see the [Interface IOperationsVectorDisplayBaseViewModel](VM.Operations.Post.Interfaces.IOperationsVectorDisplayBaseViewModel.md).</code></pre>

#### Remarks

This method sets or changes the characteristic for the vector display.


