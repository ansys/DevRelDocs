# Interface IFileProperty

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

### AbsolutePath

Gets the absolute path.

```csharp
string AbsolutePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### PropertyDocument

Gets the property document.

```csharp
PropertyDocumentBase PropertyDocument { get; }
```

#### Property Value

 [PropertyDocumentBase](VM.Managed.PropertyDocumentBase.md)

### Unit

Gets the unit.

```csharp
Unit Unit { get; }
```

#### Property Value

 Unit

## Methods

### GetRelativePath\(string\)

Gets the relative path.

```csharp
string GetRelativePath(string strRefDir)
```

#### Parameters

`strRefDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The reference directory.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The relative path.

### LoadExtraData\(SerializationInfo\)

Load extra data

```csharp
void LoadExtraData(SerializationInfo info)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

### SaveExtraData\(SerializationInfo\)

Save extra data

```csharp
void SaveExtraData(SerializationInfo info)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)


