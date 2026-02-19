# Class ObjectMapper

Namespace: [OpenTD.Utility](OpenTD.Utility.md)  
Assembly: OpenTD.dll  

Can be used to perform a shallow copy of an object.

```csharp
public static class ObjectMapper
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ObjectMapper](OpenTD.Utility.ObjectMapper.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Methods

### CopyProperties\(object, object\)

Copies the matching properties from one object to another.

```csharp
public static void CopyProperties(object source, object target)
```

#### Parameters

`source` [object](https://learn.microsoft.com/dotnet/api/system.object)

The source.

`target` [object](https://learn.microsoft.com/dotnet/api/system.object)

The target.

### GetMatchingProperties\(Type, Type\)

```csharp
public static IList<PropertyMap> GetMatchingProperties(Type sourceType, Type targetType)
```

#### Parameters

`sourceType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`targetType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[PropertyMap](OpenTD.Utility.PropertyMap.md)\>


