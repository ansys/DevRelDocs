#  Interface IContainer

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

This interface is to represent the DAFUL object container.

```csharp
public interface IContainer : ILinkContainer, IOwned, IHasID
```

#### Implements

[ILinkContainer](VM.Models.Pre.ILinkContainer.md), 
[IOwned](VM.Models.Pre.IOwned.md), 
IHasID

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Pre_IContainer_Find_System_String_"></a> Find\(string\)

Find DAFUL object from the container by full name.

```csharp
IObjectBase Find(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object full name.

#### Returns

 [IObjectBase](VM.Models.Pre.IObjectBase.md)

The DAFUL object.

### <a id="VM_Models_Pre_IContainer_FindLocal_System_String_"></a> FindLocal\(string\)

Find DAFUL object from the container by name.

```csharp
IObjectBase FindLocal(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object name.

#### Returns

 [IObjectBase](VM.Models.Pre.IObjectBase.md)

The DAFUL object.

### <a id="VM_Models_Pre_IContainer_GetNewEntityName_System_String_"></a> GetNewEntityName\(string\)

Generate an unique DAFUL object name from the container using the prefix name.

```csharp
string GetNewEntityName(string prefix)
```

#### Parameters

`prefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object prefix name.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object name.

### <a id="VM_Models_Pre_IContainer_GetNewEntityName_System_String_System_Boolean_System_Int32_"></a> GetNewEntityName\(string, bool, int\)

Generate an unique DAFUL object name from the container using the prefix name.

```csharp
string GetNewEntityName(string prefix, bool useUnderLine, int numFigure)
```

#### Parameters

`prefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object prefix name.

`useUnderLine` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether use underline.

`numFigure` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The Number of Figure.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object name.

### <a id="VM_Models_Pre_IContainer_GetNewEntityName_System_String_System_Boolean_System_Int32_System_Int32_"></a> GetNewEntityName\(string, bool, int, int\)

Generate an unique DAFUL object name from the container using the prefix name.

```csharp
string GetNewEntityName(string prefix, bool useUnderLine, int numFigure, int startIndex)
```

#### Parameters

`prefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object prefix name.

`useUnderLine` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether use underline.

`numFigure` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The Number of Figure.

`startIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The start index.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object name.

### <a id="VM_Models_Pre_IContainer_GetUnnamedObjectName_System_Object_"></a> GetUnnamedObjectName\(object\)

Get an unnamed object name.

```csharp
string GetUnnamedObjectName(object @object)
```

#### Parameters

`object` [object](https://learn.microsoft.com/dotnet/api/system.object)

The unnamed object.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The unnamed object name.

