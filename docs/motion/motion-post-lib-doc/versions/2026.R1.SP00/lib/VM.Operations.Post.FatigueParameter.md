# Class FatigueParameter
<a id="VM_Operations_Post_FatigueParameter"></a>

Namespace: [VM.Operations.Post](VM.Operations.Post.md)  
Assembly: VM.Operations.Post.dll  

Represents the parameters required for fatigue analysis.
Implements the <xref href="VM.ViewModels.Post.IFatigueParameter" data-throw-if-not-resolved="false"></xref> interface.

```csharp
[Obsolete("This property is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the Targets property of the FEBody class instead.", true)]
public class FatigueParameter : IFatigueParameter
```

#### Inheritance

object ← 
[FatigueParameter](VM.Operations.Post.FatigueParameter.md)

#### Implements

IFatigueParameter

## Examples

To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# FatigueParameter.py
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
parameter = FatigueParameter()
parameter.BodyName = "FEBody_01"
parameter.MaterialName = "2014_HV_O"

# AnalysisType - Type of fatigue analysis.
# FatigueAnalysisType can be one of the following:
# - FatigueAnalysisType.SN - SN Curve
# - FatigueAnalysisType.EN - EN Curve
parameter.AnalysisType = FatigueAnalysisType.SN

# Scale - The result for fatigue life is calculated by dividing by the scale.
parameter.Scale = 1.0

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
parameter.StressStrainCombinationType = StressStrainCombinationType.VonMises

# MeanStressCorrection - Method for mean stress correction.
# MeanStressCorrection can be one of the following:
# - MeanStressCorrection.Neglect - Neglect
# - MeanStressCorrection.ModifiedGerber - Modified Gerber
# - MeanStressCorrection.GerberLocus - GerberLocus
# - MeanStressCorrection.Sodeberg - Sodeberg
# - MeanStressCorrection.DEelliptic - DEelliptic
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

For more details, refer to the online manual "5.4. Fatigue".

## Constructors

### <a id="VM_Operations_Post_FatigueParameter__ctor"></a> FatigueParameter\(\)

```csharp
public FatigueParameter()
```

## Properties

### <a id="VM_Operations_Post_FatigueParameter_AnalysisMethod"></a> AnalysisMethod

Gets or sets the analysis method used for EN (Strain-Life) fatigue analysis.

```csharp
[Obsolete("This property will be deprecated in the near future.")]
public AnalysisMethodEN AnalysisMethod { get; set; }
```

#### Property Value

 AnalysisMethodEN

#### Examples

For an example that includes this property, see the [Class FatigueParameter](VM.Operations.Post.FatigueParameter.md).

#### Remarks

This property is applicable only when the <xref href="VM.Models.Post.FatigueAnalysisType" data-throw-if-not-resolved="false"></xref> is set to EN.
It determines the specific method used for strain-life fatigue analysis, such as:
<ul><li><xref href="VM.Models.Post.AnalysisMethodEN.Neglect" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.AnalysisMethodEN.Morrow" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.AnalysisMethodEN.SWT" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_FatigueParameter_AnalysisType"></a> AnalysisType

Gets or sets the type of fatigue analysis to be performed.

```csharp
[Obsolete("This property will be deprecated in the near future.")]
public FatigueAnalysisType AnalysisType { get; set; }
```

#### Property Value

 FatigueAnalysisType

#### Examples

For an example that includes this property, see the [Class FatigueParameter](VM.Operations.Post.FatigueParameter.md).

#### Remarks

This property determines the method used for fatigue analysis, such as Stress-Life (SN) or Strain-Life (EN).
Available values for <xref href="VM.Models.Post.FatigueAnalysisType" data-throw-if-not-resolved="false"></xref>
<ul><li><xref href="VM.Models.Post.FatigueAnalysisType.SN" data-throw-if-not-resolved="false"></xref></li><li><xref href="VM.Models.Post.FatigueAnalysisType.EN" data-throw-if-not-resolved="false"></xref></li></ul>

### <a id="VM_Operations_Post_FatigueParameter_BodyName"></a> BodyName

Gets or sets the name of the body for which fatigue analysis is performed.

```csharp
[Obsolete("This property will be deprecated in the near future.")]
public string BodyName { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Class FatigueParameter](VM.Operations.Post.FatigueParameter.md).

#### Remarks

This property is required to identify the specific body in the fatigue analysis process.

### <a id="VM_Operations_Post_FatigueParameter_MaterialName"></a> MaterialName

Gets or sets the name of the material used in the fatigue analysis.

```csharp
[Obsolete("This property will be deprecated in the near future.")]
public string MaterialName { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Class FatigueParameter](VM.Operations.Post.FatigueParameter.md).

#### Remarks

This property is required to specify the material properties for the fatigue analysis process.

### <a id="VM_Operations_Post_FatigueParameter_MeanStressCorrection"></a> MeanStressCorrection

Gets or sets the mean stress correction method used in the fatigue analysis.

```csharp
[Obsolete("This property will be deprecated in the near future.")]
public MeanStressCorrection MeanStressCorrection { get; set; }
```

#### Property Value

 MeanStressCorrection

#### Examples

For an example that includes this property, see the [Class FatigueParameter](VM.Operations.Post.FatigueParameter.md).

#### Remarks

This property is used to define how mean stress is accounted for during the fatigue analysis process.

### <a id="VM_Operations_Post_FatigueParameter_PlasticityCorrection"></a> PlasticityCorrection

Gets or sets the plasticity correction method used in the fatigue analysis.

```csharp
[Obsolete("This property will be deprecated in the near future.")]
public PlasticityCorrection PlasticityCorrection { get; set; }
```

#### Property Value

 PlasticityCorrection

#### Examples

For an example that includes this property, see the [Class FatigueParameter](VM.Operations.Post.FatigueParameter.md).

#### Remarks

This property is used to define how plasticity effects are accounted for during the fatigue analysis process.
It is applicable when strain-based fatigue analysis is performed.

### <a id="VM_Operations_Post_FatigueParameter_Scale"></a> Scale

Gets or sets the scale factor used in the fatigue analysis.

```csharp
[Obsolete("This property will be deprecated in the near future.")]
public double Scale { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Class FatigueParameter](VM.Operations.Post.FatigueParameter.md).

#### Remarks

This property is used to adjust the magnitude of the analysis results, allowing for scaling based on specific requirements.

### <a id="VM_Operations_Post_FatigueParameter_StressStrainCombinationType"></a> StressStrainCombinationType

Gets or sets the type of stress-strain combination used in the fatigue analysis.

```csharp
[Obsolete("This property will be deprecated in the near future.")]
public StressStrainCombinationType StressStrainCombinationType { get; set; }
```

#### Property Value

 StressStrainCombinationType

#### Examples

For an example that includes this property, see the [Class FatigueParameter](VM.Operations.Post.FatigueParameter.md).

#### Remarks

This property is used to define how stress and strain are combined during the fatigue analysis process.

