# Class DurabilityAnalysisParameter
<a id="VM_Operations_Post_DurabilityAnalysisParameter"></a>

Namespace: [VM.Operations.Post](VM.Operations.Post.md)  
Assembly: VM.Operations.Post.dll  

Represents a parameter used for durability analysis.

```csharp
public sealed class DurabilityAnalysisParameter : IDurabilityAnalysisParameter
```

#### Inheritance

object ← 
[DurabilityAnalysisParameter](VM.Operations.Post.DurabilityAnalysisParameter.md)

#### Implements

IDurabilityAnalysisParameter

## Examples

To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# DurabilityAnalysisParameter.py
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

# Loading Animation - Use this only when the current Active View is an Animation View.
# This method is used to load the animation in the active view.
applicationHandler.LoadingAnimation()

# Set values for fatigue analysis.
# BodyName - Name of the FEBody to assign the material.
# MaterialName - Name of the material to assign to the FEBody.
# AnalysisType - Type of fatigue analysis.
# FatigueAnalysisType can be one of the following:
# - FatigueAnalysisType.SN - SN Curve
# - FatigueAnalysisType.EN - EN Curve
# Scale - The result for fatigue life is calculated by dividing by the scale.
# StressStrainCombinationType - Type of stress-strain combination.
# StressStrainCombinationType can be one of the following:
# - StressStrainCombinationType.VonMises - VonMises
# - StressStrainCombinationType.Signed_VonMises - Signed VonMises
# - StressStrainCombinationType.Max_Principal - 1st Principal
# - StressStrainCombinationType.Min_Principal - 3rd Principal
# - StressStrainCombinationType.Max_ABS_Principal - Max Abs Principal
# - StressStrainCombinationType.Max_Shear - Max Shear
# - StressStrainCombinationType.Signed_Max_Shear - Signed Max Shear
# - StressStrainCombinationType.Average_Principal - Average Principal
# MeanStressCorrection - Method for mean stress correction.
# MeanStressCorrection can be one of the following:
# - MeanStressCorrection.Neglect - Neglect
# - MeanStressCorrection.ModifiedGerber - Modified Gerber
# - MeanStressCorrection.GerberLocus - GerberLocus
# - MeanStressCorrection.Sodeberg - Sodeberg
# - MeanStressCorrection.DEelliptic - DEelliptic
parameter = FatigueParameter()
parameter.BodyName = "FEBody_01"
parameter.MaterialName = "2014_HV_O"
parameter.AnalysisType = FatigueAnalysisType.SN
parameter.Scale = 1.0
parameter.StressStrainCombinationType = StressStrainCombinationType.VonMises
parameter.MeanStressCorrection = MeanStressCorrection.Neglect

# Create a DurabilityAnalysisParameter
# FilePath - The path to the result file.
# ResultName - Name of the fatigue result. The result will be saved in the Fatigue folder under the result file directory.
# NoOfRepeatedLoad - Number of repeated loads
# LowerValue - Start time
# UpperValue - End time
# Parameters.Add - Adds a target. The target is a FatigueParameter that contains values for setting the FEBody.
durabilityParameter = DurabilityAnalysisParameter()
durabilityParameter.FilePath = result_file_path
durabilityParameter.ResultName = "Beam1"
durabilityParameter.NoOfRepeatedLoad = 1
durabilityParameter.LowerValue = 1
durabilityParameter.UpperValue = 10
durabilityParameter.Parameters.Add(parameter)
applicationHandler.DurabilityAnalysis(durabilityParameter)

# Close the Pages
# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close Document
applicationHandler.CloseDocument(result_file_path)
```

## Remarks

This class provides properties and methods to define and manage the parameters required for performing a durability analysis.
It implements the <xref href="VM.ViewModels.Post.IDurabilityAnalysisParameter" data-throw-if-not-resolved="false"></xref> interface and the <xref href="System.IDisposable" data-throw-if-not-resolved="false"></xref> interface for resource management.
For more details, refer to the online manual "5.4. Fatigue".

## Constructors

### <a id="VM_Operations_Post_DurabilityAnalysisParameter__ctor"></a> DurabilityAnalysisParameter\(\)

Initializes a new instance of the <xref href="VM.Operations.Post.DurabilityAnalysisParameter" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DurabilityAnalysisParameter()
```

#### Examples

For an example that includes this property, see the [Class DurabilityAnalysisParameter](VM.Operations.Post.DurabilityAnalysisParameter.md).

#### Remarks

This constructor initializes the <xref href="VM.Operations.Post.DurabilityAnalysisParameter.Targets" data-throw-if-not-resolved="false"></xref> property with an empty list of <xref href="VM.Operations.Post.Interfaces.IOperationsFEBody" data-throw-if-not-resolved="false"></xref> objects.
It ensures that the <xref href="VM.Operations.Post.DurabilityAnalysisParameter.Targets" data-throw-if-not-resolved="false"></xref> collection is ready for use immediately after the object is created.

## Properties

### <a id="VM_Operations_Post_DurabilityAnalysisParameter_DocumentFilePath"></a> DocumentFilePath

Gets or sets the file path of the document associated with the durability analysis.

```csharp
public string DocumentFilePath { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Class DurabilityAnalysisParameter](VM.Operations.Post.DurabilityAnalysisParameter.md).

#### Remarks

This property is used to specify the location of the document file that is analyzed for durability.

### <a id="VM_Operations_Post_DurabilityAnalysisParameter_End"></a> End

Gets or sets the end value for the durability analysis range.

```csharp
public int End { get; set; }
```

#### Property Value

 int

#### Examples

For an example that includes this property, see the [Interface DurabilityAnalysisParameter](VM.Operations.Post.DurabilityAnalysisParameter.md).

#### Remarks

This property specifies the upper limit of the range used in the durability analysis.

### <a id="VM_Operations_Post_DurabilityAnalysisParameter_FilePath"></a> FilePath

Gets or sets the file path of the document associated with the durability analysis.

```csharp
[Obsolete("This property is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the DocumentFilePath property of the DurabilityAnalysisParameter class instead.", true)]
public string FilePath { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface DurabilityAnalysisParameter](VM.Operations.Post.DurabilityAnalysisParameter.md).

#### Remarks

This property is marked as obsolete. Use <xref href="VM.Operations.Post.DurabilityAnalysisParameter.DocumentFilePath" data-throw-if-not-resolved="false"></xref> instead.

### <a id="VM_Operations_Post_DurabilityAnalysisParameter_LowerValue"></a> LowerValue

Gets or sets the lower value for the durability analysis range.

```csharp
[Obsolete("This property is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the Start property of the DurabilityAnalysisParameter class instead.", true)]
public int LowerValue { get; set; }
```

#### Property Value

 int

#### Examples

For an example that includes this property, see the [Interface DurabilityAnalysisParameter](VM.Operations.Post.DurabilityAnalysisParameter.md).

#### Remarks

This property is marked as obsolete. Use <xref href="VM.Operations.Post.DurabilityAnalysisParameter.Start" data-throw-if-not-resolved="false"></xref> instead.

### <a id="VM_Operations_Post_DurabilityAnalysisParameter_NoOfRepeatedLoad"></a> NoOfRepeatedLoad

Gets or sets the number of repeated loads for the durability analysis.

```csharp
public double NoOfRepeatedLoad { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface DurabilityAnalysisParameter](VM.Operations.Post.DurabilityAnalysisParameter.md).

#### Remarks

This property specifies the total count of repeated load cycles applied during the durability analysis.

### <a id="VM_Operations_Post_DurabilityAnalysisParameter_Parameters"></a> Parameters

Gets the list of fatigue parameters used in the durability analysis.

```csharp
[Obsolete("This property is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the Targets property of the DurabilityAnalysisParameter class instead.")]
public IList<IFatigueParameter> Parameters { get; }
```

#### Property Value

 IList<IFatigueParameter\>

#### Examples

For an example that includes this property, see the [Interface DurabilityAnalysisParameter](VM.Operations.Post.DurabilityAnalysisParameter.md).

#### Remarks

This property provides access to the collection of fatigue parameters that define the characteristics of the durability analysis.

### <a id="VM_Operations_Post_DurabilityAnalysisParameter_ResultName"></a> ResultName

Gets or sets the name of the result associated with the durability analysis.

```csharp
public string ResultName { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface DurabilityAnalysisParameter](VM.Operations.Post.DurabilityAnalysisParameter.md).

#### Remarks

This property is used to specify or retrieve the name of the result generated from the durability analysis.

### <a id="VM_Operations_Post_DurabilityAnalysisParameter_Start"></a> Start

Gets or sets the start value for the durability analysis range.

```csharp
public int Start { get; set; }
```

#### Property Value

 int

#### Examples

For an example that includes this property, see the [Interface DurabilityAnalysisParameter](VM.Operations.Post.DurabilityAnalysisParameter.md).

#### Remarks

This property specifies the lower limit of the range used in the durability analysis.

### <a id="VM_Operations_Post_DurabilityAnalysisParameter_Targets"></a> Targets

Gets or sets the collection of target finite element bodies for the durability analysis.

```csharp
public IEnumerable<Guid> Targets { get; }
```

#### Property Value

 IEnumerable<Guid\>

#### Examples

For an example that includes this property, see the [Interface DurabilityAnalysisParameter](VM.Operations.Post.DurabilityAnalysisParameter.md).

#### Remarks

This property specifies the finite element bodies that are analyzed during the durability analysis.
Each target in the collection represents a specific body with its own material and analysis properties.

### <a id="VM_Operations_Post_DurabilityAnalysisParameter_UpperValue"></a> UpperValue

Gets or sets the upper value for the durability analysis range.

```csharp
[Obsolete("This property is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the End property of the DurabilityAnalysisParameter class instead.", true)]
public int UpperValue { get; set; }
```

#### Property Value

 int

#### Examples

For an example that includes this property, see the [Interface DurabilityAnalysisParameter](VM.Operations.Post.DurabilityAnalysisParameter.md).

#### Remarks

This property is marked as obsolete. Use <xref href="VM.Operations.Post.DurabilityAnalysisParameter.End" data-throw-if-not-resolved="false"></xref> instead.

## Methods

### <a id="VM_Operations_Post_DurabilityAnalysisParameter_AddTarget_System_Guid_"></a> AddTarget\(Guid\)

Adds a target finite element body to the collection of targets for the durability analysis.

```csharp
public void AddTarget(Guid target)
```

#### Parameters

`target` Guid

The unique identifier of the target finite element body to add.

#### Examples

For an example that includes this property, see the [Interface DurabilityAnalysisParameter](VM.Operations.Post.DurabilityAnalysisParameter.md).

#### Remarks

This method attempts to add the specified <code class="paramref">target</code> to the <xref href="VM.Operations.Post.DurabilityAnalysisParameter.Targets" data-throw-if-not-resolved="false"></xref> collection.
If the <xref href="VM.Operations.Post.DurabilityAnalysisParameter.Targets" data-throw-if-not-resolved="false"></xref> collection is not a modifiable list, an <xref href="System.InvalidOperationException" data-throw-if-not-resolved="false"></xref> is thrown.

#### Exceptions

 InvalidOperationException

Thrown when the <xref href="VM.Operations.Post.DurabilityAnalysisParameter.Targets" data-throw-if-not-resolved="false"></xref> collection is not modifiable.

### <a id="VM_Operations_Post_DurabilityAnalysisParameter_RemoveTarget_System_Guid_"></a> RemoveTarget\(Guid\)

Removes a target finite element body from the collection of targets for the durability analysis.

```csharp
public void RemoveTarget(Guid target)
```

#### Parameters

`target` Guid

The unique identifier of the target finite element body to remove.

#### Examples

For an example that includes this property, see the [Interface DurabilityAnalysisParameter](VM.Operations.Post.DurabilityAnalysisParameter.md).

#### Remarks

This method attempts to remove the specified <code class="paramref">target</code> from the <xref href="VM.Operations.Post.DurabilityAnalysisParameter.Targets" data-throw-if-not-resolved="false"></xref> collection.  
If the <xref href="VM.Operations.Post.DurabilityAnalysisParameter.Targets" data-throw-if-not-resolved="false"></xref> collection is not a modifiable list, an <xref href="System.InvalidOperationException" data-throw-if-not-resolved="false"></xref> is thrown.

#### Exceptions

 InvalidOperationException

Thrown when the <xref href="VM.Operations.Post.DurabilityAnalysisParameter.Targets" data-throw-if-not-resolved="false"></xref> collection is not modifiable.

