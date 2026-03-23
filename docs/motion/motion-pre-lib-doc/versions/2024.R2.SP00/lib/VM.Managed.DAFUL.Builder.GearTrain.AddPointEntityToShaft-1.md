# Class AddPointEntityToShaft<T\>

Namespace: [VM.Managed.DAFUL.Builder.GearTrain](VM.Managed.DAFUL.Builder.GearTrain.md)  
Assembly: VMBldGearTrain.dll  

```csharp
public abstract class AddPointEntityToShaft<T> : BuilderNamed<T>, IBuilder where T : ObjectBase, new()
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderBase<T\> ← 
BuilderSymmetric<T\> ← 
BuilderNamed<T\> ← 
[AddPointEntityToShaft<T\>](VM.Managed.DAFUL.Builder.GearTrain.AddPointEntityToShaft\-1.md)

#### Implements

IBuilder

#### Inherited Members

BuilderNamed<T\>.OnPostBuild\(ObjectBase, Document\), 
BuilderNamed<T\>.CheckUnit\(Document3D, Document3D, string\), 
BuilderNamed<T\>.Name, 
BuilderSymmetric<T\>.Build\(Document\), 
BuilderSymmetric<T\>.Symmetric, 
BuilderSymmetric<T\>.CurrentSymmetric, 
BuilderBase<T\>.m\_bSuccess, 
BuilderBase<T\>.Build\(Document\), 
BuilderBase<T\>.Build\(Document, List<string\>\), 
BuilderBase<T\>.Validate\(IList<string\>\), 
BuilderBase<T\>.Success\(\), 
BuilderBase<T\>.OnPostBuild\(ObjectBase, Document\), 
BuilderBase<T\>.OnFinalBuild\(string, Document\), 
BuilderBase<T\>.OnObjectChangeBuild\(string, Document\), 
BuilderBase<T\>.OnPostAddDoc\(ObjectBase\), 
BuilderBase<T\>.Parameters, 
BuilderBase<T\>.AddToDoc, 
BuilderBase<T\>.UseChangedObject, 
BuilderBase<T\>.SetPointKey, 
BuilderBase<T\>.BuildObject, 
BuilderBase<T\>.BuildDocument, 
BuilderBase<T\>.UseInterface, 
BuilderBase<T\>.ErrorMessage

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### AddPointEntityToShaft\(\)

```csharp
protected AddPointEntityToShaft()
```

## Fields

### m\_dOffset

```csharp
protected double m_dOffset
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### m\_dReferPoint

```csharp
protected double m_dReferPoint
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### m\_dWitdh

```csharp
protected double m_dWitdh
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### m\_typeRef

```csharp
protected PointEntityOnShaftSet.ReferenceType m_typeRef
```

#### Field Value

 PointEntityOnShaftSet.ReferenceType

## Properties

### InputArray

```csharp
public string[] InputArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

## Methods

### CheckContainsEntity\(HiddenShaftSetDocument\)

```csharp
protected virtual bool CheckContainsEntity(HiddenShaftSetDocument hiddenDoc)
```

#### Parameters

`hiddenDoc` HiddenShaftSetDocument

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CheckOnShaftSet\(Document\)

```csharp
protected bool CheckOnShaftSet(Document doc)
```

#### Parameters

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OnPostAddDoc\(ObjectBase\)

```csharp
protected override void OnPostAddDoc(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase


