# Interface IObjectSet

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the object that has a name.

```csharp
public interface IObjectSet
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### GetCount\(\)

Gets object set count.

```csharp
int GetCount()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of object in object set.

### GetElementKey\(int\)

Gets the n-th object's element key.

```csharp
UIntPtr GetElementKey(int nIndex)
```

#### Parameters

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The index of object set.

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The n-th object's element key.

### GetElementType\(\)

Gets the elememt type.

```csharp
Type GetElementType()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

The element type.


