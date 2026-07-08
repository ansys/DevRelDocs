#  Class IObjectExtensions

Namespace: [VM](VM.md)  
Assembly: VM.Operations.Pre.dll  

IObject extension methods

```csharp
public static class IObjectExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IObjectExtensions](VM.IObjectExtensions.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_IObjectExtensions_OperationSetValue_VM_Models_Pre_IObject_System_String_System_Object_"></a> OperationSetValue\(IObject, string, object\)

Operation set value

```csharp
public static void OperationSetValue(this IObject target, string propertyName, object value)
```

#### Parameters

`target` IObject

Target

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Member name

`value` [object](https://learn.microsoft.com/dotnet/api/system.object)

Value

### <a id="VM_IObjectExtensions_TryOperationSetValue_VM_Models_Pre_IObject_System_String_System_Object_"></a> TryOperationSetValue\(IObject, string, object\)

Operation set value

```csharp
public static bool TryOperationSetValue(this IObject target, string propertyName, object value)
```

#### Parameters

`target` IObject

Target

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Member name

`value` [object](https://learn.microsoft.com/dotnet/api/system.object)

Value

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Result

