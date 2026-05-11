# Class SegmentInfo

Namespace: [VM.Managed.DAFUL.Chained](VM.Managed.DAFUL.Chained.md)  
Assembly: VMDChainedBase.dll  

This class represents segment`s information

```csharp
public class SegmentInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SegmentInfo](VM.Managed.DAFUL.Chained.SegmentInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### SegmentInfo\(\)

```csharp
public SegmentInfo()
```

## Fields

### m\_TransCurrentPlane

The transformation matrix of current plane.

```csharp
public TMatrix m_TransCurrentPlane
```

#### Field Value

 TMatrix

### m\_TransGRF

The transformation matrix of geometry reference frame.

```csharp
public TMatrix m_TransGRF
```

#### Field Value

 TMatrix

### m\_dHeight1

The height1 of segment.

```csharp
public double m_dHeight1
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### m\_dHeight2

The height2 of segment.

```csharp
public double m_dHeight2
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### m\_dLength

The length of segment.

```csharp
public double m_dLength
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### m\_dOriginalLength

The original length of segment.

```csharp
public double m_dOriginalLength
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### initialize\(\)

```csharp
public void initialize()
```


