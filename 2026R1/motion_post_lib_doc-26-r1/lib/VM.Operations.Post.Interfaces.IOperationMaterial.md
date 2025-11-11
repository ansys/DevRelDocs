# Interface IOperationMaterial
<a id="VM_Operations_Post_Interfaces_IOperationMaterial"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Represents the material properties and parameters used for fatigue analysis.

```csharp
public interface IOperationMaterial : IViewModel, IObservableObject, IDisposableObject, IEnabled, IExpanded, ISelected, IVisible
```

#### Implements

IViewModel, 
IObservableObject, 
IDisposableObject, 
IEnabled, 
IExpanded, 
ISelected, 
IVisible

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
```python
# IOperationMaterial.py
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
material = activeView.GetViewModelByName("2014_HV_O")

# Material Setting
material.UTS = "10"

# Get all created pages.
# This retrieves all pages created in the application.
pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close Document
applicationHandler.CloseDocument(result_file_path)
```

## Remarks

This interface defines the properties required for material,
including physical and mechanical properties, as well as additional metadata.
These properties are utilized as the material property of FE or EF (EasyFlex) bodies for fatigue analysis.

## Properties

### <a id="VM_Operations_Post_Interfaces_IOperationMaterial_B"></a> B

Gets or sets the fatigue strength exponent (b).

```csharp
string B { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationMaterial](VM.Operations.Post.Interfaces.IOperationMaterial.md).

#### Remarks

Used to set the fatigue strength exponent. This property is critical for determining the material's
resistance to fatigue under cyclic loading conditions. Properly setting this value ensures accurate
fatigue life predictions and material performance evaluations.

### <a id="VM_Operations_Post_Interfaces_IOperationMaterial_B1"></a> B1

Gets or sets the first fatigue strength exponent (b1).

```csharp
string B1 { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationMaterial](VM.Operations.Post.Interfaces.IOperationMaterial.md).

#### Remarks

Used to set the first exponent of fatigue strength. This property is critical for defining the material's
behavior under cyclic loading conditions, particularly in fatigue strength calculations. Properly setting
this value ensures accurate fatigue life predictions and material performance evaluations.

### <a id="VM_Operations_Post_Interfaces_IOperationMaterial_B2"></a> B2

Gets or sets the second fatigue strength exponent (b2).

```csharp
string B2 { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationMaterial](VM.Operations.Post.Interfaces.IOperationMaterial.md).

#### Remarks

Used to set the second exponent of fatigue strength. This property is critical for defining the material's
behavior under cyclic loading conditions, particularly in advanced fatigue strength calculations.
Properly setting this value ensures accurate fatigue life predictions and material performance evaluations.

### <a id="VM_Operations_Post_Interfaces_IOperationMaterial_C"></a> C

Gets or sets the fatigue ductility exponent (c).

```csharp
string C { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationMaterial](VM.Operations.Post.Interfaces.IOperationMaterial.md).

#### Remarks

Used to set the fatigue ductility exponent. This property is critical for determining the material's
ability to undergo plastic deformation under cyclic loading conditions. Properly setting this value
ensures accurate fatigue life predictions and material performance evaluations.

### <a id="VM_Operations_Post_Interfaces_IOperationMaterial_Comment"></a> Comment

Gets or sets additional comments or notes about the material.

```csharp
string Comment { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationMaterial](VM.Operations.Post.Interfaces.IOperationMaterial.md).

#### Remarks

Used to enter a comment for the material. This property allows users to provide descriptive or contextual
information about the material, which can be useful for documentation, analysis, or communication purposes.
Properly setting this value ensures that relevant details about the material are captured and accessible.

### <a id="VM_Operations_Post_Interfaces_IOperationMaterial_DataType"></a> DataType

Gets or sets the material property type.

```csharp
DataType DataType { get; set; }
```

#### Property Value

 DataType

#### Examples

For an example that includes this property, see the [Interface IOperationMaterial](VM.Operations.Post.Interfaces.IOperationMaterial.md).

#### Remarks

Used to set the material property type. You can select either <xref href="VM.Windows.Controls.Fatigue.Enums.DataType.SN" data-throw-if-not-resolved="false"></xref> or <xref href="VM.Windows.Controls.Fatigue.Enums.DataType.EN" data-throw-if-not-resolved="false"></xref>,
which determines how to evaluate the fatigue life.
<p>
<ul><li><span class="term"><xref href="VM.Windows.Controls.Fatigue.Enums.DataType.SN" data-throw-if-not-resolved="false"></xref></span></li><li><span class="term"><xref href="VM.Windows.Controls.Fatigue.Enums.DataType.EN" data-throw-if-not-resolved="false"></xref></span></li></ul>
Selecting the appropriate data type is crucial as it directly impacts the underlying calculations and accuracy of the fatigue life prediction.
</p>

### <a id="VM_Operations_Post_Interfaces_IOperationMaterial_E"></a> E

Gets or sets the Young's modulus (E) of the material.

```csharp
string E { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationMaterial](VM.Operations.Post.Interfaces.IOperationMaterial.md).

#### Remarks

Used to set the Young's modulus of the material. The Young's modulus, also known as the modulus of elasticity,
is a measure of the material's stiffness and is a critical property in determining how a material deforms
under stress. Properly setting this value ensures accurate material performance evaluations and structural
integrity under applied loads.

### <a id="VM_Operations_Post_Interfaces_IOperationMaterial_Ef_"></a> Ef\_

Gets or sets the fatigue ductility coefficient (Ef').

```csharp
string Ef_ { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationMaterial](VM.Operations.Post.Interfaces.IOperationMaterial.md).

#### Remarks

Used to set the fatigue ductility coefficient. This property is critical for determining the material's
ability to resist fatigue under cyclic loading conditions. Properly setting this value ensures accurate
fatigue life predictions and material performance evaluations.

### <a id="VM_Operations_Post_Interfaces_IOperationMaterial_FinishValue"></a> FinishValue

Gets or sets the finish value of the material.

```csharp
double FinishValue { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationMaterial](VM.Operations.Post.Interfaces.IOperationMaterial.md).

#### Remarks

Used to show the finish type. Only User Defined is available.
Surface finish is the surface roughness and waviness which are determined by manufacturing processes
such as cutting, abrasion, casting, and forming.

### <a id="VM_Operations_Post_Interfaces_IOperationMaterial_K"></a> K

Gets or sets the strength hardening coefficient (K).

```csharp
string K { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationMaterial](VM.Operations.Post.Interfaces.IOperationMaterial.md).

#### Remarks

Used to set the strength hardening coefficient. This property is critical for determining the material's
ability to resist deformation under applied stress. Properly setting this value ensures accurate material
performance evaluations and structural integrity under various loading conditions.

### <a id="VM_Operations_Post_Interfaces_IOperationMaterial_K_"></a> K\_

Gets or sets the cyclic strength coefficient (K').

```csharp
string K_ { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationMaterial](VM.Operations.Post.Interfaces.IOperationMaterial.md).

#### Remarks

Used to set the cyclic strength coefficient. This property is critical for determining the material's
behavior under cyclic loading conditions, particularly its ability to resist fatigue.
Properly setting this value ensures accurate fatigue life predictions and material performance evaluations.

### <a id="VM_Operations_Post_Interfaces_IOperationMaterial_N"></a> N

Gets or sets the strain hardening exponent (n).

```csharp
string N { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationMaterial](VM.Operations.Post.Interfaces.IOperationMaterial.md).

#### Remarks

Used to set the strain hardening exponent. This property is critical for determining the material's
ability to strengthen as it undergoes plastic deformation. Properly setting this value ensures accurate
material performance evaluations and structural integrity under cyclic loading conditions.

### <a id="VM_Operations_Post_Interfaces_IOperationMaterial_N_"></a> N\_

Gets or sets the cyclic strain-hardening exponent (n').

```csharp
string N_ { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationMaterial](VM.Operations.Post.Interfaces.IOperationMaterial.md).

#### Remarks

Used to set the cyclic strain-hardening exponent. This property is critical for determining the material's
behavior under cyclic loading conditions, particularly its ability to harden as strain increases.
Properly setting this value ensures accurate fatigue life predictions and material performance evaluations.

### <a id="VM_Operations_Post_Interfaces_IOperationMaterial_Nc1"></a> Nc1

Gets or sets the first fatigue life (Nc1).

```csharp
string Nc1 { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationMaterial](VM.Operations.Post.Interfaces.IOperationMaterial.md).

#### Remarks

Used to set the fatigue transition point. This property defines the first fatigue life value,
which is critical for determining the material's behavior under cyclic loading conditions.
Properly setting this value ensures accurate fatigue life predictions and material performance evaluations.

### <a id="VM_Operations_Post_Interfaces_IOperationMaterial_PressureUnit"></a> PressureUnit

Gets or sets the unit for pressure values.

```csharp
PressureUnitType PressureUnit { get; set; }
```

#### Property Value

 PressureUnitType

#### Examples

For an example that includes this property, see the [Interface IOperationMaterial](VM.Operations.Post.Interfaces.IOperationMaterial.md).

#### Remarks

Used to set the unit for pressure values. This property ensures that all pressure-related calculations
and operations are consistent with the specified unit, such as Pascal or PSI.
Properly setting this value is essential for accurate material property evaluations and fatigue analysis.
<p>
<ul><li><span class="term"><xref href="VM.Windows.Controls.Fatigue.Enums.PressureUnitType.MPa" data-throw-if-not-resolved="false"></xref></span></li><li><span class="term"><xref href="VM.Windows.Controls.Fatigue.Enums.PressureUnitType.Psi" data-throw-if-not-resolved="false"></xref></span></li><li><span class="term"><xref href="VM.Windows.Controls.Fatigue.Enums.PressureUnitType.Ksi" data-throw-if-not-resolved="false"></xref></span></li><li><span class="term"><xref href="VM.Windows.Controls.Fatigue.Enums.PressureUnitType.N_mm2" data-throw-if-not-resolved="false"></xref></span></li><li><span class="term"><xref href="VM.Windows.Controls.Fatigue.Enums.PressureUnitType.MN_mm2" data-throw-if-not-resolved="false"></xref></span></li></ul>
Selecting the appropriate pressure unit is crucial for ensuring consistency and accuracy in calculations.
</p>

### <a id="VM_Operations_Post_Interfaces_IOperationMaterial_Rc"></a> Rc

Gets or sets the Rockwell hardness (Rc).

```csharp
string Rc { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationMaterial](VM.Operations.Post.Interfaces.IOperationMaterial.md).

#### Remarks

Used to set the endurance limit. The <xref href="VM.Operations.Post.Interfaces.IOperationMaterial.Rc" data-throw-if-not-resolved="false"></xref> property specifies the Rockwell hardness value,
which is a measure of the material's resistance to permanent deformation or penetration.
Properly setting this value is essential for ensuring accurate material performance evaluations
and fatigue life predictions.

### <a id="VM_Operations_Post_Interfaces_IOperationMaterial_SRI1"></a> SRI1

Gets or sets the stress range intercept (SRI1).

```csharp
string SRI1 { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationMaterial](VM.Operations.Post.Interfaces.IOperationMaterial.md).

#### Remarks

Used to set the stress range intercept. This property is critical for defining the material's
behavior under cyclic loading conditions, particularly in fatigue analysis. Properly setting
this value ensures accurate fatigue life predictions and material performance evaluations.

### <a id="VM_Operations_Post_Interfaces_IOperationMaterial_Sf_"></a> Sf\_

Gets or sets the fatigue strength coefficient (Sf').

```csharp
string Sf_ { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationMaterial](VM.Operations.Post.Interfaces.IOperationMaterial.md).

#### Remarks

Used to set the fatigue strength coefficient. This property is critical for determining the material's
resistance to fatigue under cyclic loading conditions. Properly setting this value ensures accurate
fatigue life predictions and material performance evaluations.

### <a id="VM_Operations_Post_Interfaces_IOperationMaterial_TreatmentValue"></a> TreatmentValue

Gets or sets the treatment value of the material.

```csharp
double TreatmentValue { get; set; }
```

#### Property Value

 double

#### Examples

For an example that includes this property, see the [Interface IOperationMaterial](VM.Operations.Post.Interfaces.IOperationMaterial.md).

#### Remarks

Used to set the value for treatment. This value is generally greater than 1,
and will increase the fatigue strength as shown in the figure below.
Properly setting this value is essential for ensuring accurate fatigue strength predictions
and material performance evaluations.

### <a id="VM_Operations_Post_Interfaces_IOperationMaterial_UTS"></a> UTS

Gets or sets the ultimate tensile strength (UTS) of the material.

```csharp
string UTS { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationMaterial](VM.Operations.Post.Interfaces.IOperationMaterial.md).

#### Remarks

Used to set the ultimate tensile strength of the material. The ultimate tensile strength (UTS) is the maximum stress
that a material can withstand while being stretched or pulled before breaking. Properly setting this value is critical
for ensuring accurate material performance evaluations and structural integrity under applied loads.

### <a id="VM_Operations_Post_Interfaces_IOperationMaterial_YS"></a> YS

Gets or sets the yield strength (YS) of the material.

```csharp
string YS { get; set; }
```

#### Property Value

 string

#### Examples

For an example that includes this property, see the [Interface IOperationMaterial](VM.Operations.Post.Interfaces.IOperationMaterial.md).

#### Remarks

Used to set the yield strength of the material. The yield strength is a critical property that defines
the stress at which a material begins to deform plastically. Properly setting this value ensures accurate
material performance evaluations and structural integrity under applied loads.

