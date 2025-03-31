# Class SegmentPlacingInfo

Namespace: [VM.Managed.DAFUL.Chained](VM.Managed.DAFUL.Chained.md)  
Assembly: VMDChainedBase.dll  

This class represents segment`s transformation data.

```csharp
public class SegmentPlacingInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SegmentPlacingInfo](VM.Managed.DAFUL.Chained.SegmentPlacingInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### SegmentPlacingInfo\(\)

```csharp
public SegmentPlacingInfo()
```

## Fields

### m\_arOrientation

The segment orientation.

```csharp
public double[] m_arOrientation
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### m\_bEffectSprocketOn

The calculated value internally.

```csharp
public bool m_bEffectSprocketOn
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m\_bSprocketOn

The calculated value internally.

```csharp
public bool m_bSprocketOn
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m\_dAngleHalfSegment

The calculated value internally.

```csharp
public double m_dAngleHalfSegment
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### m\_dSegement\_AssembleLength

The chaned length od segment.

```csharp
public double m_dSegement_AssembleLength
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### m\_dSegement\_OriginalLength

The original length of segment.

```csharp
public double m_dSegement_OriginalLength
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### m\_dTheta

The calculated value internally.

```csharp
public double m_dTheta
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### m\_nInvolvedPath

The index of path.

```csharp
public int m_nInvolvedPath
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m\_nNoOfSegment

The number of segment.

```csharp
public int m_nNoOfSegment
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m\_nStage

The stage.

```csharp
public int m_nStage
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m\_ptLengthMEnd

The position of segment end to assembled reverse direction.

```csharp
public double[] m_ptLengthMEnd
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### m\_ptLengthPEnd

The position of segment end to assembled direction.

```csharp
public double[] m_ptLengthPEnd
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### m\_ptPosi

The segment position.

```csharp
public double[] m_ptPosi
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### m\_ptTangent

The calculated value internally.

```csharp
public VectorBase m_ptTangent
```

#### Field Value

 VectorBase

### m\_vecTangent

The calculated value internally.

```csharp
public VectorBase m_vecTangent
```

#### Field Value

 VectorBase

## Methods

### initialize\(\)

Initialize member variables.

```csharp
public void initialize()
```


