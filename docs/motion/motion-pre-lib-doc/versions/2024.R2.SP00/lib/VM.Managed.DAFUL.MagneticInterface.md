# Class MagneticInterface

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMAppCore.dll  

```csharp
public class MagneticInterface
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MagneticInterface](VM.Managed.DAFUL.MagneticInterface.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### MagneticInterface\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MagneticInterface" data-throw-if-not-resolved="false"></xref> class

```csharp
public MagneticInterface(string strPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The interface dll path.

## Methods

### CloseProject\(\)

```csharp
public bool CloseProject()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CreateProject\(string, string\)

```csharp
public bool CreateProject(string projectFilePath, string geometryFilePath)
```

#### Parameters

`projectFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`geometryFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Dispose\(bool\)

```csharp
[HandleProcessCorruptedStateExceptions]
protected virtual void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Dispose\(\)

```csharp
public override sealed void Dispose()
```

### \~MagneticInterface\(\)

Releases unmanaged resources and performs other cleanup operations before the
<xref href="VM.Managed.DAFUL.MagneticInterface" data-throw-if-not-resolved="false"></xref> is reclaimed by garbage collection.

```csharp
protected ~MagneticInterface()
```

### GetMaxwellDesigns\(string, ref string\[\]\)

```csharp
public bool GetMaxwellDesigns(string projectFilePath, ref string[] designList)
```

#### Parameters

`projectFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`designList` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetMessages\(ref string\[\]\)

```csharp
public bool GetMessages(ref string[] arMessage)
```

#### Parameters

`arMessage` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InitGeometry\(string\)

```csharp
public bool InitGeometry(string geometryFilePath)
```

#### Parameters

`geometryFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InitMagneticObjects\(Group\[\], Dictionary<string, Material\>\)

```csharp
public bool InitMagneticObjects(MagneticInterface.Group[] groups, Dictionary<string, MagneticInterface.Material> materialInfo)
```

#### Parameters

`groups` [MagneticInterface](VM.Managed.DAFUL.MagneticInterface.md).[Group](VM.Managed.DAFUL.MagneticInterface.Group.md)\[\]

`materialInfo` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [MagneticInterface](VM.Managed.DAFUL.MagneticInterface.md).[Material](VM.Managed.DAFUL.MagneticInterface.Material.md)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InitMagneticObjects\(Group\[\]\)

```csharp
public bool InitMagneticObjects(MagneticInterface.Group[] groups)
```

#### Parameters

`groups` [MagneticInterface](VM.Managed.DAFUL.MagneticInterface.md).[Group](VM.Managed.DAFUL.MagneticInterface.Group.md)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OpenProject\(string, string\)

```csharp
public bool OpenProject(string projectFilePath, string designName)
```

#### Parameters

`projectFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`designName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### QuitApplication\(\)

```csharp
public bool QuitApplication()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ReleaseApplication\(\)

```csharp
public bool ReleaseApplication()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SaveProject\(\)

```csharp
public bool SaveProject()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


