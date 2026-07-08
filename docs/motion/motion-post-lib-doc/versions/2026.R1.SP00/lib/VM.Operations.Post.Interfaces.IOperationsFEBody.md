# Interface IOperationsFEBody
<a id="VM_Operations_Post_Interfaces_IOperationsFEBody"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Interface representing information for an FEBody.

```csharp
public interface IOperationsFEBody
```

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# IOperationsFEBodyViewModel.py
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

# Get all created pages.
# This retrieves all pages created in the application.
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
    # result_file_path - Get the document from the result file path.
    document = applicationHandler.GetDocument(result_file_path)

    # This retrieves the analysis result from the document.
    # Types of Analysis Results
    # - Dynamics
    # - Eigenvalue
    # - Statics
    analysis = document.GetAnalysisResultViewModel(AnalysisResultType.Dynamics)    

    # Get a material
    material = analysis.GetViewModel("2014_HV_O")

    # Get a febody
    febody = analysis.GetViewModel("FEBody_01")
    febody.Material = material

    # Suppress deformation
    febody.IsDeformationSuppressed = True

    # Create Node
    node = febody.CreateNode(754)    
    node.ChangeID(755)

    # Create Element
    element = febody.CreateElement(2343)
    element.ChangeID(2601)

# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
```

## Remarks

This interface provides essential properties and methods for finite element body operations.
It is designed to support fatigue analysis, material property evaluation, and finite element configuration.

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_AlphaX"></a> AlphaX

Gets or sets the X-axis rotation factor for the FEBody.

```csharp
double AlphaX { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationsFEBody](VM.Operations.Post.Interfaces.IOperationsFEBody.md).

#### Remarks

This property defines the scaling factor applied to the X-axis rotation of the FEBody.
It is used to adjust the rotational behavior of the FEBody during analysis.

### <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_AlphaY"></a> AlphaY

Gets or sets the Y-axis rotation factor for the FEBody.

```csharp
double AlphaY { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationsFEBody](VM.Operations.Post.Interfaces.IOperationsFEBody.md).

#### Remarks

This property defines the scaling factor applied to the Y-axis rotation of the FEBody.
It is used to adjust the rotational behavior of the FEBody during analysis.

### <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_AlphaZ"></a> AlphaZ

Gets or sets the Z-axis rotation factor for the FEBody.

```csharp
double AlphaZ { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationsFEBody](VM.Operations.Post.Interfaces.IOperationsFEBody.md).

#### Remarks

This property defines the scaling factor applied to the Z-axis rotation of the FEBody.
It is used to adjust the rotational behavior of the FEBody during analysis.

### <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_AnalysisMethodEN"></a> AnalysisMethodEN

Gets or sets the analysis method used in the FEBody (Mean Stress Effect).

```csharp
AnalysisMethodEN AnalysisMethodEN { get; set; }
```

#### Property Value

 AnalysisMethodEN

#### Examples

For an example that includes this property, see the [Interface IOperationsFEBody](VM.Operations.Post.Interfaces.IOperationsFEBody.md).

#### Remarks

Use to set the mean stress effect. This property specifies the method used for analysis in the FEBody.
It determines how the fatigue analysis is performed.
For more details, refer to the online manual section "Mean Stress Effect."

### <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_AnalysisType"></a> AnalysisType

Gets or sets the type of fatigue analysis.

```csharp
FatigueAnalysisType AnalysisType { get; set; }
```

#### Property Value

 FatigueAnalysisType

#### Examples

For an example that includes this property, see the [Interface IOperationsFEBody](VM.Operations.Post.Interfaces.IOperationsFEBody.md).

#### Remarks

Use to set the method for fatigue life evaluation.
This property defines whether the fatigue analysis is based on stress-life (SN) or strain-life (EN) methods.
See "Fatigue Life Evaluation" in the online manual for more details.
<p>
The available values for <xref href="VM.Models.Post.FatigueAnalysisType" data-throw-if-not-resolved="false"></xref> are:
<ul><li><span class="term"><xref href="VM.Models.Post.FatigueAnalysisType.SN" data-throw-if-not-resolved="false"></xref></span></li><li><span class="term"><xref href="VM.Models.Post.FatigueAnalysisType.EN" data-throw-if-not-resolved="false"></xref></span></li></ul>
</p>

### <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_IsDeformationSuppressed"></a> IsDeformationSuppressed

Gets or sets a value indicating whether deformation is suppressed for this body in analysis or visualization.

```csharp
bool IsDeformationSuppressed { get; set; }
```

#### Property Value

 bool

#### Examples

For an example that includes this property, see the [Interface IOperationsFEBody](VM.Operations.Post.Interfaces.IOperationsFEBody.md).

#### Remarks

This property is typically used to control whether deformation effects are considered during post-processing or visualization.
When set to <code>true</code>, the FEBody will be treated as rigid, and any deformation results will be ignored. 
This can be useful for simplifying analysis or focusing on other aspects of the simulation, such as rigid body motion.

### <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_Material"></a> Material

Gets or sets the material used in the FEBody.

```csharp
IOperationMaterial Material { get; set; }
```

#### Property Value

 [IOperationMaterial](VM.Operations.Post.Interfaces.IOperationMaterial.md)

#### Examples

For an example that includes this property, see the [Interface IOperationsFEBody](VM.Operations.Post.Interfaces.IOperationsFEBody.md).

#### Remarks

Use to set the material properties. This property provides access to the material characteristics
associated with the FEBody, including physical and mechanical properties. Properly setting this value
ensures accurate analysis and evaluation of the FEBody's behavior under various conditions.

### <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_MeanStressCorrection"></a> MeanStressCorrection

Gets or sets the mean stress correction method (Mean Stress Effect).

```csharp
MeanStressCorrection MeanStressCorrection { get; set; }
```

#### Property Value

 MeanStressCorrection

#### Examples

For an example that includes this property, see the [Interface IOperationsFEBody](VM.Operations.Post.Interfaces.IOperationsFEBody.md).

#### Remarks

Use to set the mean stress effect. This property specifies the method used to correct for mean stress effects in fatigue analysis.
The available values for <xref href="VM.Operations.Post.Interfaces.IOperationsFEBody.MeanStressCorrection" data-throw-if-not-resolved="false"></xref> are:
<ul><li><span class="term"><xref href="VM.Models.Post.MeanStressCorrection.Neglect" data-throw-if-not-resolved="false"></xref></span></li><li><span class="term"><xref href="VM.Models.Post.MeanStressCorrection.ModifiedGoodman" data-throw-if-not-resolved="false"></xref></span></li><li><span class="term"><xref href="VM.Models.Post.MeanStressCorrection.GerberLocus" data-throw-if-not-resolved="false"></xref></span></li><li><span class="term"><xref href="VM.Models.Post.MeanStressCorrection.Sodeberg" data-throw-if-not-resolved="false"></xref></span></li><li><span class="term"><xref href="VM.Models.Post.MeanStressCorrection.DEelliptic" data-throw-if-not-resolved="false"></xref></span></li></ul>
<p>
For more details about "Mean Stress Effect," refer to the online manual.
</p>

### <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_PlasticityCorrection"></a> PlasticityCorrection

Gets or sets the plasticity correction method.

```csharp
PlasticityCorrection PlasticityCorrection { get; set; }
```

#### Property Value

 PlasticityCorrection

#### Examples

For an example that includes this property, see the [Interface IOperationsFEBody](VM.Operations.Post.Interfaces.IOperationsFEBody.md).

#### Remarks

Use to set the method for plastic correction of the EN curve.
The available values for <xref href="VM.Operations.Post.Interfaces.IOperationsFEBody.PlasticityCorrection" data-throw-if-not-resolved="false"></xref> are:
<ul><li><span class="term"><xref href="VM.Models.Post.PlasticityCorrection.Neuber" data-throw-if-not-resolved="false"></xref></span></li><li><span class="term"><xref href="VM.Models.Post.PlasticityCorrection.Glinka_ESED" data-throw-if-not-resolved="false"></xref></span></li></ul>
Properly setting this value ensures accurate fatigue analysis by accounting for plasticity effects.
For more details, refer to the "Plasticity Correction" section in the online manual.

### <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_Properties"></a> Properties

Gets the collection of finite element properties associated with the FEBody.

```csharp
IEnumerable<IViewModel> Properties { get; }
```

#### Property Value

 IEnumerable<IViewModel\>

#### Examples

For an example that includes this property, see the [Interface IOperationsFEBody](VM.Operations.Post.Interfaces.IOperationsFEBody.md).

#### Remarks

This property provides access to the finite element properties associated with the FEBody.
Each property in the collection represents a specific configuration or characteristic
of the finite elements within the FEBody.

### <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_Scale"></a> Scale

Gets or sets the scale factor applied to the FEBody.

```csharp
double Scale { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationsFEBody](VM.Operations.Post.Interfaces.IOperationsFEBody.md).

#### Remarks

Use to set the scale. The result for fatigue life is calculated
by dividing the scale. This property defines the scale factor used to adjust the size of the FEBody.
It is typically used to normalize or resize the FEBody for analysis purposes.

### <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_StressStrainCombination"></a> StressStrainCombination

Gets or sets the stress-strain combination type used in the FEBody.

```csharp
StressStrainCombinationType StressStrainCombination { get; set; }
```

#### Property Value

 StressStrainCombinationType

#### Examples

For an example that includes this property, see the [Interface IOperationsFEBody](VM.Operations.Post.Interfaces.IOperationsFEBody.md).

#### Remarks

Use to set the design stress or strain type. You can select one of the following options:
<ul><li><span class="term"><xref href="VM.Models.StressStrainCombinationType.VonMises" data-throw-if-not-resolved="false"></xref></span></li><li><span class="term"><xref href="VM.Models.StressStrainCombinationType.Signed_VonMises" data-throw-if-not-resolved="false"></xref></span></li><li><span class="term"><xref href="VM.Models.StressStrainCombinationType.Max_Principal" data-throw-if-not-resolved="false"></xref></span></li><li><span class="term"><xref href="VM.Models.StressStrainCombinationType.Min_Principal" data-throw-if-not-resolved="false"></xref></span></li><li><span class="term"><xref href="VM.Models.StressStrainCombinationType.Max_ABS_Principal" data-throw-if-not-resolved="false"></xref></span></li><li><span class="term"><xref href="VM.Models.StressStrainCombinationType.Max_Shear" data-throw-if-not-resolved="false"></xref></span></li><li><span class="term"><xref href="VM.Models.StressStrainCombinationType.Signed_Max_Shear" data-throw-if-not-resolved="false"></xref></span></li><li><span class="term"><xref href="VM.Models.StressStrainCombinationType.Average_Principal" data-throw-if-not-resolved="false"></xref></span></li></ul>
Properly setting this value ensures accurate stress-strain evaluation during analysis.
For more details, refer to the "Stress/Strain Combination" section in the online manual.

## Methods

### <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_CreateElement_System_Int32_"></a> CreateElement\(int\)

Creates an element entity within an FEBody.

```csharp
IOperationsElementViewModel CreateElement(int elementID)
```

#### Parameters

`elementID` int

The unique ID of the element to be created.

#### Returns

 [IOperationsElementViewModel](VM.Operations.Post.Interfaces.IOperationsElementViewModel.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsNodeViewModel" data-throw-if-not-resolved="false"></xref> representing the created element entity.

#### Examples

For an example that includes this property, see the [Interface IOperationsFEBody](VM.Operations.Post.Interfaces.IOperationsFEBody.md).

#### Remarks

This method creates an element entity within an FEBody using the specified element ID.

### <a id="VM_Operations_Post_Interfaces_IOperationsFEBody_CreateNode_System_Int32_VM_Models_PlotDataType_"></a> CreateNode\(int, PlotDataType\)

Creates a node entity within an FEBody.

```csharp
IOperationsNodeViewModel CreateNode(int nodeID, PlotDataType fileType = PlotDataType.DEFAULT)
```

#### Parameters

`nodeID` int

The unique ID of the node to be created.

`fileType` PlotDataType

The type of plot data file. Default is <xref href="VM.Models.PlotDataType.DEFAULT" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [IOperationsNodeViewModel](VM.Operations.Post.Interfaces.IOperationsNodeViewModel.md)

An instance of <xref href="VM.Operations.Post.Interfaces.IOperationsNodeViewModel" data-throw-if-not-resolved="false"></xref> representing the created node entity.

#### Examples

For an example that includes this property, see the [Interface IOperationsFEBody](VM.Operations.Post.Interfaces.IOperationsFEBody.md).

#### Remarks

This method creates a node entity within an FEBody using the specified node ID and plot data file type.

