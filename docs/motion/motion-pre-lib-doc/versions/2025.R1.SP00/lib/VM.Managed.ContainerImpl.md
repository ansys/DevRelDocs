#  Class ContainerImpl

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the DAFUL object container.

```csharp
public class ContainerImpl
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ContainerImpl](VM.Managed.ContainerImpl.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_ContainerImpl__ctor"></a> ContainerImpl\(\)

```csharp
public ContainerImpl()
```

## Properties

### <a id="VM_Managed_ContainerImpl_NewNamePattern"></a> NewNamePattern

Gets or sets new DAFUL object name pattern. (PREFIX_DDD)

```csharp
public static string NewNamePattern { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_ContainerImpl_Find_VM_Models_Pre_IContainer_System_String_"></a> Find\(IContainer, string\)

Generate an unique DAFUL object name from the container using the prefix name.

```csharp
public static IObjectBase Find(IContainer container, string strName)
```

#### Parameters

`container` IContainer

The DAFUL object container.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object name.

#### Returns

 IObjectBase

The DAFUL object.

### <a id="VM_Managed_ContainerImpl_GetNewEntityName_VM_Models_Pre_IContainer_System_String_System_Boolean_System_Int32_System_Int32_"></a> GetNewEntityName\(IContainer, string, bool, int, int\)

Generate an unique DAFUL object name from the container using the prefix name.

```csharp
public static string GetNewEntityName(IContainer container, string strPrefix, bool bUseUnderLine, int nNumFigure, int nStartIndex)
```

#### Parameters

`container` IContainer

The DAFUL object container.

`strPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object prefix name.

`bUseUnderLine` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether use underline.

`nNumFigure` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The Number of Figure.

`nStartIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The start index.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object name.

### <a id="VM_Managed_ContainerImpl_GetNewEntityName_VM_Models_Pre_IContainer_System_String_System_Boolean_System_Int32_"></a> GetNewEntityName\(IContainer, string, bool, int\)

Generate an unique DAFUL object name from the container using the prefix name.

```csharp
public static string GetNewEntityName(IContainer container, string strPrefix, bool bUseUnderLine, int nNumFigure)
```

#### Parameters

`container` IContainer

The DAFUL object container.

`strPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object prefix name.

`bUseUnderLine` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether use underline.

`nNumFigure` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The Number of Figure.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object name.

### <a id="VM_Managed_ContainerImpl_GetNewEntityName_VM_Models_Pre_IContainer_System_String_"></a> GetNewEntityName\(IContainer, string\)

Generate an unique DAFUL object name from the container using the prefix name.

```csharp
public static string GetNewEntityName(IContainer container, string strPrefix)
```

#### Parameters

`container` IContainer

The DAFUL object container.

`strPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object prefix name.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object name.

