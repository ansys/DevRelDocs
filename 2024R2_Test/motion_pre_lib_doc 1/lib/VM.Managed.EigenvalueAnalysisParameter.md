# Class EigenvalueAnalysisParameter

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent the eigenvalue analysis parameter.

```csharp
public class EigenvalueAnalysisParameter
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EigenvalueAnalysisParameter](VM.Managed.EigenvalueAnalysisParameter.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### EigenvalueAnalysisParameter\(\)

Initializes a new instance of the <xref href="VM.Managed.EigenvalueAnalysisParameter" data-throw-if-not-resolved="false"></xref> class.

```csharp
public EigenvalueAnalysisParameter()
```

### EigenvalueAnalysisParameter\(uint, bool, double, double, double, double\)

Initializes a new instance of the <xref href="VM.Managed.EigenvalueAnalysisParameter" data-throw-if-not-resolved="false"></xref> class.

```csharp
public EigenvalueAnalysisParameter(uint nMaximumNumberOfMode, bool bUseBound, double dLowerBound, double dUpperBound, double dShiftValue, double dPenaltyValue)
```

#### Parameters

`nMaximumNumberOfMode` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The n maximum number of mode.

`bUseBound` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b use bound].

`dLowerBound` [double](https://learn.microsoft.com/dotnet/api/system.double)

The lower bound.

`dUpperBound` [double](https://learn.microsoft.com/dotnet/api/system.double)

The upper bound.

`dShiftValue` [double](https://learn.microsoft.com/dotnet/api/system.double)

The shift value.

`dPenaltyValue` [double](https://learn.microsoft.com/dotnet/api/system.double)

The penalty value.

## Properties

### IsUseAutoPenalty

Gets or sets a value indicating whether [auto penalty].

```csharp
public bool IsUseAutoPenalty { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsUseAutoShift

Gets or sets a value indicating whether [auto shift].

```csharp
public bool IsUseAutoShift { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsUseBound

Gets or sets a value indicating whether [use bound].

```csharp
public bool IsUseBound { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsUseFullMethod

Gets or sets a value indicating whether [use full method].

```csharp
public bool IsUseFullMethod { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsUseLocalRefinement

Gets or sets a value indicating whether [use local refinement].

```csharp
public bool IsUseLocalRefinement { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsUseNumberOfDomain

Gets or sets a value indicating whether [use number of domain].

```csharp
public bool IsUseNumberOfDomain { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LowerBoundGlobal

Gets or sets the lower bound global.

```csharp
public static double LowerBoundGlobal { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### LowerBoundValue

Gets or sets the lower bound.

```csharp
public double LowerBoundValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### MaxNumberOfMode

Gets or sets the maximum number of mode.

```csharp
public uint MaxNumberOfMode { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### MaximumNumberOfModeGlobal

Gets or sets the maximum number of mode global.

```csharp
public static uint MaximumNumberOfModeGlobal { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### MinMassRatio

Gets or sets the minimum mass ratio.

```csharp
public double MinMassRatio { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### NumOfCluster

Gets or sets the number of cluster.

```csharp
public int NumOfCluster { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumOfDomain

Gets or sets the number of domain.

```csharp
public int NumOfDomain { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumOfParentDomain

Gets or sets the number of parent domain.

```csharp
public int NumOfParentDomain { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OrderValue

Gets or sets the order.

```csharp
public int OrderValue { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OwnerLinkContainer

Gets the owner.

```csharp
public LinkContainer OwnerLinkContainer { set; }
```

#### Property Value

 LinkContainer

### ParameterArray

Gets or sets the parameters.

```csharp
public double[] ParameterArray { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### PenaltyVal

Gets or sets the penalty value.

```csharp
public double PenaltyVal { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### PenaltyValueGlobal

Gets the penalty value global.

```csharp
public static double PenaltyValueGlobal { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### RatioVal

Gets or sets the ratio.

```csharp
public double RatioVal { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ReferenceStressVal

Gets or sets the reference stress.

```csharp
public double ReferenceStressVal { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### RefinedDomainLevel

Gets or sets the level of refined domain.

```csharp
public int RefinedDomainLevel { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ShiftVal

Gets or sets the shift value.

```csharp
public double ShiftVal { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ShiftValueGlobal

Gets the shift value global.

```csharp
public static double ShiftValueGlobal { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### TypeOfMode

Gets or sets the analysis mode.

```csharp
public EigenvalueAnalysisParameter.ModeType TypeOfMode { get; set; }
```

#### Property Value

 [EigenvalueAnalysisParameter](VM.Managed.EigenvalueAnalysisParameter.md).[ModeType](VM.Managed.EigenvalueAnalysisParameter.ModeType.md)

### UpperBoundGlobal

Gets or sets the upper bound global.

```csharp
public static double UpperBoundGlobal { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### UpperBoundValue

Gets or sets the upper bound.

```csharp
public double UpperBoundValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### UseAutoPenaltyGlobal

Gets or sets a value indicating whether [use auto penalty].

```csharp
public static bool UseAutoPenaltyGlobal { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseAutoShiftGlobal

Gets or sets a value indicating whether [use auto shift].

```csharp
public static bool UseAutoShiftGlobal { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseBoundGlobal

Gets or sets a value indicating whether [use bound global].

```csharp
public static bool UseBoundGlobal { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### Initialize\(uint, bool, double, double, double, bool, double, bool\)

Initializes parameter.

```csharp
public static void Initialize(uint nMaximumNumberOfMode, bool bUseBound, double dLowerBound, double dUpperBound, double dShiftValue, bool bAutoShift, double dPenaltyValue, bool bAutoPenalty)
```

#### Parameters

`nMaximumNumberOfMode` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The n maximum number of mode.

`bUseBound` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b use bound].

`dLowerBound` [double](https://learn.microsoft.com/dotnet/api/system.double)

The lower bound.

`dUpperBound` [double](https://learn.microsoft.com/dotnet/api/system.double)

The upper bound.

`dShiftValue` [double](https://learn.microsoft.com/dotnet/api/system.double)

The shift value.

`bAutoShift` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [auto shift value].

`dPenaltyValue` [double](https://learn.microsoft.com/dotnet/api/system.double)

The penalty value.

`bAutoPenalty` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [auto penalty value].

### OnDeserializationAttribute\(\)

Called when [deserialization attribute].

```csharp
public void OnDeserializationAttribute()
```

### Replace\(EigenvalueAnalysisParameter\)

Replaces the specified parameter.

```csharp
public void Replace(EigenvalueAnalysisParameter parameter)
```

#### Parameters

`parameter` [EigenvalueAnalysisParameter](VM.Managed.EigenvalueAnalysisParameter.md)

The parameter.


