# Class ExtractFaceSetBase

Namespace: [VM.Managed.DAFUL.Builder.Contact](VM.Managed.DAFUL.Builder.Contact.md)  
Assembly: VMBldCt.dll  

```csharp
public class ExtractFaceSetBase : IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ExtractFaceSetBase](VM.Managed.DAFUL.Builder.Contact.ExtractFaceSetBase.md)

#### Derived

[ExtractFaceSet](VM.Managed.DAFUL.Builder.Contact.ExtractFaceSet.md), 
[ExtractFaceSetMF](VM.Managed.DAFUL.Builder.Contact.ExtractFaceSetMF.md)

#### Implements

IBuilder

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ExtractFaceSetBase\(\)

```csharp
public ExtractFaceSetBase()
```

## Properties

### FirstConnectable

```csharp
protected virtual Body FirstConnectable { get; }
```

#### Property Value

 Body

### FirstFaceSetName

```csharp
public string FirstFaceSetName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### InputArray

```csharp
public string[] InputArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### Parameters

```csharp
public PickedResult[] Parameters { get; set; }
```

#### Property Value

 PickedResult\[\]

### SecondConnectable

```csharp
protected virtual Body SecondConnectable { get; }
```

#### Property Value

 Body

### SecondFaceSetName

```csharp
public string SecondFaceSetName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SplitFirstBody

```csharp
public bool SplitFirstBody { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SplitSecondBody

```csharp
public bool SplitSecondBody { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TargetFaces

```csharp
protected virtual Face[] TargetFaces { get; }
```

#### Property Value

 Face\[\]

### Tolerance

```csharp
public double Tolerance { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### UseTolerance

```csharp
public bool UseTolerance { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### CreateFaceSet\(string, SolidBody, Face\[\], Document3D\)

```csharp
protected virtual void CreateFaceSet(string strName, SolidBody sbParent, Face[] arFace, Document3D doc3D)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`sbParent` SolidBody

`arFace` Face\[\]

`doc3D` Document3D

### CreateFaceSet\(string, Body, Face\[\], Document3D\)

```csharp
protected virtual void CreateFaceSet(string strName, Body sbParent, Face[] arFace, Document3D doc3D)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`sbParent` Body

`arFace` Face\[\]

`doc3D` Document3D

### Success\(\)

```csharp
public bool Success()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


