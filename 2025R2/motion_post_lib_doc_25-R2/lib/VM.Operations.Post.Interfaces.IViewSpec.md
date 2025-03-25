# Interface IViewSpec

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents a specification for a view in a 3D space, providing properties to control the camera's position, target, and orientation.

```python
public interface IViewSpec
```

## Examples

To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># IViewSpec.py
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
    animationview = findViews[0]
    
    viewSpec = ViewSpec()
    viewSpec.Eye = Vector(10,20,30)
    viewSpec.Target = Vector(5, 10, 15)
    viewSpec.UpVector = Vector(1, 0, 0)
    animationview.SetViewSpec(viewSpec)

# Close the Pages
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

## Properties

### Eye

Gets or sets the position of the camera in a 3D space.

```python
Vector Eye { get; set; }
```

#### Property Value

 Vector

#### Examples

For an example that includes this property, see the [Interface IViewSpec](#VM_Operations_Post_Interfaces_IViewSpec).

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IViewSpec.Eye" data-throw-if-not-resolved="false"></xref> property allows you to get or set the position of the camera in a 3D space.
This property is essential for controlling the viewpoint from which the 3D scene is rendered.

### Target

Gets or sets the position of the target that the camera is looking at.

```python
Vector Target { get; set; }
```

#### Property Value

 Vector

#### Examples

The following example demonstrates how to use the <code>Target</code> property:
<pre><code class="lang-python"># IViewSpec.py
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
    animationview = findViews[0]
    
    viewSpec = ViewSpec()
    viewSpec.Eye = Vector(10,20,30)
    viewSpec.Target = Vector(5, 10, 15)
    viewSpec.UpVector = Vector(1, 0, 0)
    animationview.SetViewSpec(viewSpec)

# Close the Pages
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IViewSpec.Target" data-throw-if-not-resolved="false"></xref> property allows you to get or set the position of the target that the camera is focused on in a 3D space.
This property is essential for defining the direction the camera is pointed towards.

### UpVector

Gets or sets the up direction vector of the camera in a 3D space.

```python
Vector UpVector { get; set; }
```

#### Property Value

 Vector

#### Examples

For an example that includes this property, see the [Interface IViewSpec](#VM_Operations_Post_Interfaces_IViewSpec).

#### Remarks

The <xref href="VM.Operations.Post.Interfaces.IViewSpec.UpVector" data-throw-if-not-resolved="false"></xref> property allows you to get or set the up direction vector of the camera in a 3D space.
This vector determines whether the camera's direction is standard (upright) or inverted.


