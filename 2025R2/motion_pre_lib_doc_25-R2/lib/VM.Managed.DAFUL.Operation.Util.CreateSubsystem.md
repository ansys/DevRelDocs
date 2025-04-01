# Class CreateSubsystem

Namespace: [VM.Managed.DAFUL.Operation.Util](VM.Managed.DAFUL.Operation.Util.md)  
Assembly: VMOpCore.dll  

The utility class for a subsystem creation.

```csharp
public class CreateSubsystem
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CreateSubsystem](VM.Managed.DAFUL.Operation.Util.CreateSubsystem.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### CreateSubsystem\(\)

```csharp
public CreateSubsystem()
```

## Methods

### Create\(Document3D, string, TransformBase, string\)

Create the subsystem.

```csharp
public static SubSystem Create(Document3D activeDocument, string strSubsystemFilePath, TransformBase transf, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`strSubsystemFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The subsystem file path.

`transf` TransformBase

The subsystem transformation.

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The subsystem prefix name.

#### Returns

 SubSystem

The new subsystem.

### Create\(Document3D, SubSystemDocument, TransformBase, string\)

Create the subsystem.

```csharp
public static SubSystem Create(Document3D activeDocument, SubSystemDocument docSubsystem, TransformBase transf, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`docSubsystem` SubSystemDocument

The subsystem document.

`transf` TransformBase

The subsystem transformation.

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The subsystem prefix name.

#### Returns

 SubSystem

The new subsystem.

### ImportSubSystem\(SubSystemDocument, SubSystemDocument, string\)

Import subsystem

```csharp
public static SubSystem ImportSubSystem(SubSystemDocument docParent, SubSystemDocument docChild, string strName)
```

#### Parameters

`docParent` SubSystemDocument

The parent subsystem document

`docChild` SubSystemDocument

The child subsystem document

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name

#### Returns

 SubSystem

nodal body


