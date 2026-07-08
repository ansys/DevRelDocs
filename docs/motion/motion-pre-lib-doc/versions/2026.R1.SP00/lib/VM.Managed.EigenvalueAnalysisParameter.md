# Class EigenvalueAnalysisParameter
<a id="VM_Managed_EigenvalueAnalysisParameter"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent the eigenvalue analysis parameter.

```csharp
public class EigenvalueAnalysisParameter
```

#### Inheritance

object ← 
[EigenvalueAnalysisParameter](VM.Managed.EigenvalueAnalysisParameter.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_EigenvalueAnalysisParameter__ctor"></a> EigenvalueAnalysisParameter\(\)

Initializes a new instance of the <xref href="VM.Managed.EigenvalueAnalysisParameter" data-throw-if-not-resolved="false"></xref> class.

```csharp
public EigenvalueAnalysisParameter()
```

### <a id="VM_Managed_EigenvalueAnalysisParameter__ctor_System_UInt32_System_Boolean_System_Double_System_Double_System_Double_System_Double_"></a> EigenvalueAnalysisParameter\(uint, bool, double, double, double, double\)

Initializes a new instance of the <xref href="VM.Managed.EigenvalueAnalysisParameter" data-throw-if-not-resolved="false"></xref> class.

```csharp
public EigenvalueAnalysisParameter(uint nMaximumNumberOfMode, bool bUseBound, double dLowerBound, double dUpperBound, double dShiftValue, double dPenaltyValue)
```

#### Parameters

`nMaximumNumberOfMode` uint

The n maximum number of mode.

`bUseBound` bool

if set to <code>true</code> [b use bound].

`dLowerBound` double

The lower bound.

`dUpperBound` double

The upper bound.

`dShiftValue` double

The shift value.

`dPenaltyValue` double

The penalty value.

## Properties

### <a id="VM_Managed_EigenvalueAnalysisParameter_IsUseAutoPenalty"></a> IsUseAutoPenalty

Gets or sets a value indicating whether [auto penalty].

```csharp
public bool IsUseAutoPenalty { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_EigenvalueAnalysisParameter_IsUseAutoShift"></a> IsUseAutoShift

Gets or sets a value indicating whether [auto shift].

```csharp
public bool IsUseAutoShift { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_EigenvalueAnalysisParameter_IsUseBound"></a> IsUseBound

Gets or sets a value indicating whether [use bound].

```csharp
public bool IsUseBound { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_EigenvalueAnalysisParameter_IsUseFullMethod"></a> IsUseFullMethod

Gets or sets a value indicating whether [use full method].

```csharp
public bool IsUseFullMethod { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_EigenvalueAnalysisParameter_IsUseLocalRefinement"></a> IsUseLocalRefinement

Gets or sets a value indicating whether [use local refinement].

```csharp
public bool IsUseLocalRefinement { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_EigenvalueAnalysisParameter_IsUseNumberOfDomain"></a> IsUseNumberOfDomain

Gets or sets a value indicating whether [use number of domain].

```csharp
public bool IsUseNumberOfDomain { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_EigenvalueAnalysisParameter_LowerBoundGlobal"></a> LowerBoundGlobal

Gets or sets the lower bound global.

```csharp
public static double LowerBoundGlobal { get; }
```

#### Property Value

 double

### <a id="VM_Managed_EigenvalueAnalysisParameter_LowerBoundValue"></a> LowerBoundValue

Gets or sets the lower bound.

```csharp
public double LowerBoundValue { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_EigenvalueAnalysisParameter_MaxNumberOfMode"></a> MaxNumberOfMode

Gets or sets the maximum number of mode.

```csharp
public uint MaxNumberOfMode { get; set; }
```

#### Property Value

 uint

### <a id="VM_Managed_EigenvalueAnalysisParameter_MaximumNumberOfModeGlobal"></a> MaximumNumberOfModeGlobal

Gets or sets the maximum number of mode global.

```csharp
public static uint MaximumNumberOfModeGlobal { get; }
```

#### Property Value

 uint

### <a id="VM_Managed_EigenvalueAnalysisParameter_MinMassRatio"></a> MinMassRatio

Gets or sets the minimum mass ratio.

```csharp
public double MinMassRatio { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_EigenvalueAnalysisParameter_NumOfCluster"></a> NumOfCluster

Gets or sets the number of cluster.

```csharp
public int NumOfCluster { get; set; }
```

#### Property Value

 int

### <a id="VM_Managed_EigenvalueAnalysisParameter_NumOfDomain"></a> NumOfDomain

Gets or sets the number of domain.

```csharp
public int NumOfDomain { get; set; }
```

#### Property Value

 int

### <a id="VM_Managed_EigenvalueAnalysisParameter_NumOfParentDomain"></a> NumOfParentDomain

Gets or sets the number of parent domain.

```csharp
public int NumOfParentDomain { get; set; }
```

#### Property Value

 int

### <a id="VM_Managed_EigenvalueAnalysisParameter_OrderValue"></a> OrderValue

Gets or sets the order.

```csharp
public int OrderValue { get; set; }
```

#### Property Value

 int

### <a id="VM_Managed_EigenvalueAnalysisParameter_OwnerLinkContainer"></a> OwnerLinkContainer

Gets the owner.

```csharp
public LinkContainer OwnerLinkContainer { set; }
```

#### Property Value

 LinkContainer

### <a id="VM_Managed_EigenvalueAnalysisParameter_ParameterArray"></a> ParameterArray

Gets or sets the parameters.

```csharp
public double[] ParameterArray { get; set; }
```

#### Property Value

 double\[\]

### <a id="VM_Managed_EigenvalueAnalysisParameter_PenaltyVal"></a> PenaltyVal

Gets or sets the penalty value.

```csharp
public double PenaltyVal { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_EigenvalueAnalysisParameter_PenaltyValueGlobal"></a> PenaltyValueGlobal

Gets the penalty value global.

```csharp
public static double PenaltyValueGlobal { get; }
```

#### Property Value

 double

### <a id="VM_Managed_EigenvalueAnalysisParameter_RatioVal"></a> RatioVal

Gets or sets the ratio.

```csharp
public double RatioVal { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_EigenvalueAnalysisParameter_ReferenceStressVal"></a> ReferenceStressVal

Gets or sets the reference stress.

```csharp
public double ReferenceStressVal { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_EigenvalueAnalysisParameter_RefinedDomainLevel"></a> RefinedDomainLevel

Gets or sets the level of refined domain.

```csharp
public int RefinedDomainLevel { get; set; }
```

#### Property Value

 int

### <a id="VM_Managed_EigenvalueAnalysisParameter_ShiftVal"></a> ShiftVal

Gets or sets the shift value.

```csharp
public double ShiftVal { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_EigenvalueAnalysisParameter_ShiftValueGlobal"></a> ShiftValueGlobal

Gets the shift value global.

```csharp
public static double ShiftValueGlobal { get; }
```

#### Property Value

 double

### <a id="VM_Managed_EigenvalueAnalysisParameter_TypeOfMode"></a> TypeOfMode

Gets or sets the analysis mode.

```csharp
public EigenvalueAnalysisParameter.ModeType TypeOfMode { get; set; }
```

#### Property Value

 [EigenvalueAnalysisParameter](VM.Managed.EigenvalueAnalysisParameter.md).[ModeType](VM.Managed.EigenvalueAnalysisParameter.ModeType.md)

### <a id="VM_Managed_EigenvalueAnalysisParameter_UpperBoundGlobal"></a> UpperBoundGlobal

Gets or sets the upper bound global.

```csharp
public static double UpperBoundGlobal { get; }
```

#### Property Value

 double

### <a id="VM_Managed_EigenvalueAnalysisParameter_UpperBoundValue"></a> UpperBoundValue

Gets or sets the upper bound.

```csharp
public double UpperBoundValue { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_EigenvalueAnalysisParameter_UseAutoPenaltyGlobal"></a> UseAutoPenaltyGlobal

Gets or sets a value indicating whether [use auto penalty].

```csharp
public static bool UseAutoPenaltyGlobal { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_EigenvalueAnalysisParameter_UseAutoShiftGlobal"></a> UseAutoShiftGlobal

Gets or sets a value indicating whether [use auto shift].

```csharp
public static bool UseAutoShiftGlobal { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_EigenvalueAnalysisParameter_UseBoundGlobal"></a> UseBoundGlobal

Gets or sets a value indicating whether [use bound global].

```csharp
public static bool UseBoundGlobal { get; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_EigenvalueAnalysisParameter_Initialize_System_UInt32_System_Boolean_System_Double_System_Double_System_Double_System_Boolean_System_Double_System_Boolean_"></a> Initialize\(uint, bool, double, double, double, bool, double, bool\)

Initializes parameter.

```csharp
public static void Initialize(uint nMaximumNumberOfMode, bool bUseBound, double dLowerBound, double dUpperBound, double dShiftValue, bool bAutoShift, double dPenaltyValue, bool bAutoPenalty)
```

#### Parameters

`nMaximumNumberOfMode` uint

The n maximum number of mode.

`bUseBound` bool

if set to <code>true</code> [b use bound].

`dLowerBound` double

The lower bound.

`dUpperBound` double

The upper bound.

`dShiftValue` double

The shift value.

`bAutoShift` bool

if set to <code>true</code> [auto shift value].

`dPenaltyValue` double

The penalty value.

`bAutoPenalty` bool

if set to <code>true</code> [auto penalty value].

### <a id="VM_Managed_EigenvalueAnalysisParameter_OnDeserializationAttribute"></a> OnDeserializationAttribute\(\)

Called when [deserialization attribute].

```csharp
public void OnDeserializationAttribute()
```

### <a id="VM_Managed_EigenvalueAnalysisParameter_Replace_VM_Managed_EigenvalueAnalysisParameter_"></a> Replace\(EigenvalueAnalysisParameter\)

Replaces the specified parameter.

```csharp
public void Replace(EigenvalueAnalysisParameter parameter)
```

#### Parameters

`parameter` [EigenvalueAnalysisParameter](VM.Managed.EigenvalueAnalysisParameter.md)

The parameter.

