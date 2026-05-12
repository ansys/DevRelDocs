#  Class ArrayAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for array.

```csharp
public static class ArrayAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ArrayAPI](VM.API.Pre.ArrayAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_ArrayAPI_CreateArray_VM_Managed_DAFUL_SubSystemDocument_VM_Models_Pre_ExpressionValueVariable_System_String_VM_Managed_SymmetricType_System_Boolean_"></a> CreateArray\(SubSystemDocument, ExpressionValueVariable, string, SymmetricType, bool\)

Create <xref href="VM.Managed.DAFUL.Array" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[GreaterThanZero(new string[] { "size" })]
public static Obj CreateArray(this SubSystemDocument document, ExpressionValueVariable size, string name = "", SymmetricType symmetricType = SymmetricType.None, bool isInterface = false)
```

#### Parameters

`document` SubSystemDocument

The document to create the array.

`size` ExpressionValueVariable

The number of array size.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of array.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Array" data-throw-if-not-resolved="false"></xref>

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of interface.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Array" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'size' values less than 0.

