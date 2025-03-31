# Class CreateMarker

Namespace: [VM.Managed.DAFUL.Operation](VM.Managed.DAFUL.Operation.md)  
Assembly: VMOpCore.dll  

Create marker class

```csharp
public class CreateMarker
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CreateMarker](VM.Managed.DAFUL.Operation.CreateMarker.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### CreateMarker\(\)

```csharp
public CreateMarker()
```

## Methods

### CreateMarkerOnBody\(Document, IConnectable, TransformBase, string, bool\)

Create the marker

```csharp
public static Marker CreateMarkerOnBody(Document document, IConnectable conParent, TransformBase transform, string name, bool isPrefix = true)
```

#### Parameters

`document` Document

The document

`conParent` IConnectable

The parent body

`transform` TransformBase

The transform

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name

`isPrefix` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 Marker

### CreatePartMarkerOnBody\(Document3D, IPartMarkerParent, TransformBase, string\)

Create the marker in part

```csharp
public static Marker CreatePartMarkerOnBody(Document3D activeDocument, IPartMarkerParent conParent, TransformBase transform, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The document

`conParent` IPartMarkerParent

The parent body

`transform` TransformBase

The transform

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The pre-fix name

#### Returns

 Marker


