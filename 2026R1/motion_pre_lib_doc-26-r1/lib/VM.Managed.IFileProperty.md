# Interface IFileProperty
<a id="VM_Managed_IFileProperty"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This interface is to represent the property for file.

```csharp
public interface IFileProperty
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_IFileProperty_AbsolutePath"></a> AbsolutePath

Gets the absolute path.

```csharp
string AbsolutePath { get; }
```

#### Property Value

 string

### <a id="VM_Managed_IFileProperty_PropertyDocument"></a> PropertyDocument

Gets the property document.

```csharp
PropertyDocumentBase PropertyDocument { get; }
```

#### Property Value

 [PropertyDocumentBase](VM.Managed.PropertyDocumentBase.md)

### <a id="VM_Managed_IFileProperty_Unit"></a> Unit

Gets the unit.

```csharp
Unit Unit { get; }
```

#### Property Value

 Unit

## Methods

### <a id="VM_Managed_IFileProperty_GetRelativePath_System_String_"></a> GetRelativePath\(string\)

Gets the relative path.

```csharp
string GetRelativePath(string strRefDir)
```

#### Parameters

`strRefDir` string

The reference directory.

#### Returns

 string

The relative path.

### <a id="VM_Managed_IFileProperty_LoadExtraData_System_Runtime_Serialization_SerializationInfo_"></a> LoadExtraData\(SerializationInfo\)

Load extra data

```csharp
void LoadExtraData(SerializationInfo info)
```

#### Parameters

`info` SerializationInfo

### <a id="VM_Managed_IFileProperty_SaveExtraData_System_Runtime_Serialization_SerializationInfo_"></a> SaveExtraData\(SerializationInfo\)

Save extra data

```csharp
void SaveExtraData(SerializationInfo info)
```

#### Parameters

`info` SerializationInfo

