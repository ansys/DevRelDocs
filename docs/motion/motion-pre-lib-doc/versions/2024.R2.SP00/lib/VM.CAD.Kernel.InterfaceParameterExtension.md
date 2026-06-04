# Class InterfaceParameterExtension

Namespace: [VM.CAD.Kernel](VM.CAD.Kernel.md)  
Assembly: VM.CAD.Kernel.dll  

```csharp
public static class InterfaceParameterExtension
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[InterfaceParameterExtension](VM.CAD.Kernel.InterfaceParameterExtension.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### GetArrayData<T\>\(UIntPtr, ulong\)

```csharp
public static T[] GetArrayData<T>(this UIntPtr pArr, ulong nSize)
```

#### Parameters

`pArr` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`nSize` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

 T\[\]

#### Type Parameters

`T` 

### GetArrayData<T\>\(UIntPtr\)

```csharp
public static T[] GetArrayData<T>(this UIntPtr pArr)
```

#### Parameters

`pArr` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

#### Returns

 T\[\]

#### Type Parameters

`T` 

### GetArrayElementCount\(UIntPtr\)

```csharp
public static ulong GetArrayElementCount(this UIntPtr pArr)
```

#### Parameters

`pArr` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

#### Returns

 [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### SetArrayData<T\>\(UIntPtr, T\[\]\)

```csharp
public static void SetArrayData<T>(this UIntPtr pArr, T[] arr)
```

#### Parameters

`pArr` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`arr` T\[\]

#### Type Parameters

`T` 


