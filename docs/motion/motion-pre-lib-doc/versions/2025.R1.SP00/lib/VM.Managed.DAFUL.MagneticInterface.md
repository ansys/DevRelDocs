#  Class MagneticInterface

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

### <a id="VM_Managed_DAFUL_MagneticInterface__ctor_System_String_"></a> MagneticInterface\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MagneticInterface" data-throw-if-not-resolved="false"></xref> class

```csharp
public MagneticInterface(string strPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The interface dll path.

## Methods

### <a id="VM_Managed_DAFUL_MagneticInterface_CloseProject"></a> CloseProject\(\)

```csharp
public bool CloseProject()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MagneticInterface_CreateProject_System_String_System_String_"></a> CreateProject\(string, string\)

```csharp
public bool CreateProject(string projectFilePath, string geometryFilePath)
```

#### Parameters

`projectFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`geometryFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MagneticInterface_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
[HandleProcessCorruptedStateExceptions]
protected virtual void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MagneticInterface_Dispose"></a> Dispose\(\)

```csharp
public override sealed void Dispose()
```

### <a id="VM_Managed_DAFUL_MagneticInterface_Finalize"></a> \~MagneticInterface\(\)

Releases unmanaged resources and performs other cleanup operations before the
<xref href="VM.Managed.DAFUL.MagneticInterface" data-throw-if-not-resolved="false"></xref> is reclaimed by garbage collection.

```csharp
protected ~MagneticInterface()
```

### <a id="VM_Managed_DAFUL_MagneticInterface_GetMaxwellDesigns_System_String_System_String____"></a> GetMaxwellDesigns\(string, ref string\[\]\)

```csharp
public bool GetMaxwellDesigns(string projectFilePath, ref string[] designList)
```

#### Parameters

`projectFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`designList` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MagneticInterface_GetMessages_System_String____"></a> GetMessages\(ref string\[\]\)

```csharp
public bool GetMessages(ref string[] arMessage)
```

#### Parameters

`arMessage` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MagneticInterface_InitGeometry_System_String_"></a> InitGeometry\(string\)

```csharp
public bool InitGeometry(string geometryFilePath)
```

#### Parameters

`geometryFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MagneticInterface_InitMagneticObjects_VM_Managed_DAFUL_MagneticInterface_Group___System_Collections_Generic_Dictionary_System_String_VM_Managed_DAFUL_MagneticInterface_Material__"></a> InitMagneticObjects\(Group\[\], Dictionary<string, Material\>\)

```csharp
public bool InitMagneticObjects(MagneticInterface.Group[] groups, Dictionary<string, MagneticInterface.Material> materialInfo)
```

#### Parameters

`groups` [MagneticInterface](VM.Managed.DAFUL.MagneticInterface.md).[Group](VM.Managed.DAFUL.MagneticInterface.Group.md)\[\]

`materialInfo` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [MagneticInterface](VM.Managed.DAFUL.MagneticInterface.md).[Material](VM.Managed.DAFUL.MagneticInterface.Material.md)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MagneticInterface_InitMagneticObjects_VM_Managed_DAFUL_MagneticInterface_Group___"></a> InitMagneticObjects\(Group\[\]\)

```csharp
public bool InitMagneticObjects(MagneticInterface.Group[] groups)
```

#### Parameters

`groups` [MagneticInterface](VM.Managed.DAFUL.MagneticInterface.md).[Group](VM.Managed.DAFUL.MagneticInterface.Group.md)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MagneticInterface_OpenProject_System_String_System_String_"></a> OpenProject\(string, string\)

```csharp
public bool OpenProject(string projectFilePath, string designName)
```

#### Parameters

`projectFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`designName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MagneticInterface_QuitApplication"></a> QuitApplication\(\)

```csharp
public bool QuitApplication()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MagneticInterface_ReleaseApplication"></a> ReleaseApplication\(\)

```csharp
public bool ReleaseApplication()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MagneticInterface_SaveProject"></a> SaveProject\(\)

```csharp
public bool SaveProject()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

