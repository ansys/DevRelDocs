# Interface IHasModal

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This interface is to represent the object that has modal.

```csharp
public interface IHasModal
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### GetModalPath\(\)

Gets the modal information.

```csharp
string GetModalPath()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetModes\(\)

Gets the Modes.

```csharp
ObjectBase[] GetModes()
```

#### Returns

 ObjectBase\[\]

The modes.

### SetModalPath\(string, string\)

Sets the modal information.

```csharp
void SetModalPath(string strPath, string strDocumentDir)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The modal absolute path

`strDocumentDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The document directory

### SetModalPath\(string\)

Sets the modal information.

```csharp
void SetModalPath(string strPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The modal absolute path


