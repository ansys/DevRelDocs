# Class PathInfo

Namespace: [VM.Managed.DAFUL.Chained](VM.Managed.DAFUL.Chained.md)  
Assembly: VMDChainedBase.dll  

This class represents path`s information

```csharp
public class PathInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PathInfo](VM.Managed.DAFUL.Chained.PathInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### PathInfo\(\)

```csharp
public PathInfo()
```

## Fields

### m\_PlaneOrientation

The Orietation matrix of plane
The calculated value internally.

```csharp
public OMatrix m_PlaneOrientation
```

#### Field Value

 OMatrix

### m\_arAngle

The calculated value internally.

```csharp
public double[] m_arAngle
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### m\_arOrientation

The orientation of path

```csharp
public double[] m_arOrientation
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### m\_bCrossTangentLine

The determined value internally.

```csharp
public bool m_bCrossTangentLine
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m\_dArc\_Angle

The calculated value internally.

```csharp
public double m_dArc_Angle
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### m\_dArc\_Length

The calculated value internally.

```csharp
public double m_dArc_Length
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### m\_dAssembledRadius

The calculated assemble radius internally.

```csharp
public double m_dAssembledRadius
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### m\_dDirectionValue

The calculated value internally.

```csharp
public double m_dDirectionValue
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### m\_dExtendedRadius

The calculated extended radius internally.

```csharp
public double m_dExtendedRadius
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### m\_dFactor

The calculated value internally.

```csharp
public double m_dFactor
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### m\_dMaxSegmentLength

The calculated value internally.

```csharp
public double m_dMaxSegmentLength
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### m\_dRadius

The origianal assemble radius internally.

```csharp
public double m_dRadius
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### m\_dRtheta

The calculated value internally.

```csharp
public double m_dRtheta
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### m\_dTan\_Length

The calculated value internally.

```csharp
public double m_dTan_Length
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### m\_dtheta

The calculated value internally.

```csharp
public double m_dtheta
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### m\_enEngageType

The Engagement Type.

```csharp
public EngageType m_enEngageType
```

#### Field Value

 [EngageType](VM.Managed.DAFUL.Chained.EngageType.md)

### m\_enSprocket

The Sprocket Type

```csharp
public GapExpressionType m_enSprocket
```

#### Field Value

 [GapExpressionType](VM.Managed.DAFUL.Chained.GapExpressionType.md)

### m\_ndirection

<code>0</code> if direction is CW; else if direction is CCW <code>1</code>

```csharp
public int m_ndirection
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### m\_ptCenterPosition

The center position of path.

```csharp
public double[] m_ptCenterPosition
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### m\_ptLocalTangent1

Local tangent point
The calculated value internally.

```csharp
public double[] m_ptLocalTangent1
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### m\_ptLocalTangent2

Local tangent point
The calculated value internally.

```csharp
public double[] m_ptLocalTangent2
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### m\_ptTangent1

Global tangent point
The calculated value internally.

```csharp
public double[] m_ptTangent1
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### m\_ptTangent2

Global tangent point
The calculated value internally.

```csharp
public double[] m_ptTangent2
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### m\_vecRotationAxis

The rotation axis.

```csharp
public VectorBase m_vecRotationAxis
```

#### Field Value

 VectorBase

## Methods

### initialize\(\)

```csharp
public void initialize()
```


