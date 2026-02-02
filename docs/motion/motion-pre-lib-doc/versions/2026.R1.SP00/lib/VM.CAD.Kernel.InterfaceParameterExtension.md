# Class InterfaceParameterExtension
<a id="VM_CAD_Kernel_InterfaceParameterExtension"></a>

Namespace: [VM.CAD.Kernel](VM.CAD.Kernel.md)  
Assembly: VM.CAD.Kernel.dll  

```csharp
public static class InterfaceParameterExtension
```

#### Inheritance

object ← 
[InterfaceParameterExtension](VM.CAD.Kernel.InterfaceParameterExtension.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_CAD_Kernel_InterfaceParameterExtension_GetArrayData__1_System_UIntPtr_System_UInt64_"></a> GetArrayData<T\>\(UIntPtr, ulong\)

```csharp
public static T[] GetArrayData<T>(this UIntPtr pArr, ulong nSize)
```

#### Parameters

`pArr` UIntPtr

`nSize` ulong

#### Returns

 T\[\]

#### Type Parameters

`T` 

### <a id="VM_CAD_Kernel_InterfaceParameterExtension_GetArrayData__1_System_UIntPtr_"></a> GetArrayData<T\>\(UIntPtr\)

```csharp
public static T[] GetArrayData<T>(this UIntPtr pArr)
```

#### Parameters

`pArr` UIntPtr

#### Returns

 T\[\]

#### Type Parameters

`T` 

### <a id="VM_CAD_Kernel_InterfaceParameterExtension_GetArrayElementCount_System_UIntPtr_"></a> GetArrayElementCount\(UIntPtr\)

```csharp
public static ulong GetArrayElementCount(this UIntPtr pArr)
```

#### Parameters

`pArr` UIntPtr

#### Returns

 ulong

### <a id="VM_CAD_Kernel_InterfaceParameterExtension_SetArrayData__1_System_UIntPtr___0___"></a> SetArrayData<T\>\(UIntPtr, T\[\]\)

```csharp
public static void SetArrayData<T>(this UIntPtr pArr, T[] arr)
```

#### Parameters

`pArr` UIntPtr

`arr` T\[\]

#### Type Parameters

`T` 

