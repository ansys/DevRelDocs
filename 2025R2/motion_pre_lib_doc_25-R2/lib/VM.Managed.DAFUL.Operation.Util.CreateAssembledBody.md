# Class CreateAssembledBody

Namespace: [VM.Managed.DAFUL.Operation.Util](VM.Managed.DAFUL.Operation.Util.md)  
Assembly: VMOpCore.dll  

The utility class for an assembled body creation.

```csharp
public class CreateAssembledBody
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CreateAssembledBody](VM.Managed.DAFUL.Operation.Util.CreateAssembledBody.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### CreateAssembledBody\(\)

```csharp
public CreateAssembledBody()
```

## Methods

### Create\(Document3D, string, TransformBase, string\)

Create the assembled body.

```csharp
public static AssembledBody Create(Document3D activeDocument, string strPartFilePath, TransformBase transf, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`strPartFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The part file path.

`transf` TransformBase

The assembled body transformation.

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The assembled body prefix name.

#### Returns

 AssembledBody

The new assembled body.

### Create\(Document3D, PartDocument, TransformBase, string\)

Create the assembled body.

```csharp
public static AssembledBody Create(Document3D activeDocument, PartDocument docPart, TransformBase transf, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`docPart` PartDocument

The part document.

`transf` TransformBase

The assembled body transformation.

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The assembled body prefix name.

#### Returns

 AssembledBody

The new assembled body.

### ImportAssembledBody\(SubSystemDocument, PartDocument, string\)

Import assembled body

```csharp
public static AssembledBody ImportAssembledBody(SubSystemDocument docSub, PartDocument docPart, string strName)
```

#### Parameters

`docSub` SubSystemDocument

The subsystem document

`docPart` PartDocument

The part document

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name

#### Returns

 AssembledBody

nodal body

### ImportAssembledBody\(SubSystemDocument, PartDocument, TransformBase, string\)

Import assembled body

```csharp
public static AssembledBody ImportAssembledBody(SubSystemDocument docSub, PartDocument docPart, TransformBase transform, string strName)
```

#### Parameters

`docSub` SubSystemDocument

The subsystem document

`docPart` PartDocument

The part document

`transform` TransformBase

The transform

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name

#### Returns

 AssembledBody

nodal body


