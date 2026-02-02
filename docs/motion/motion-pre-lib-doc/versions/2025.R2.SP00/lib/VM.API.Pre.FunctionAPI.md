#  Class FunctionAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class FunctionAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FunctionAPI](VM.API.Pre.FunctionAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_FunctionAPI_CreateFunction_VM_Managed_DAFUL_SubSystemDocument_System_String_System_Collections_Generic_IEnumerable_System_ValueTuple_System_String_VM_API_Pre_Obj___System_String_VM_Managed_SymmetricType_System_Boolean_"></a> CreateFunction\(SubSystemDocument, string, IEnumerable<\(string, Obj\)\>, string, SymmetricType, bool\)

Create <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "expression" })]
public static Obj CreateFunction(this SubSystemDocument document, string expression, IEnumerable<(string, Obj)> arguments = null, string name = "", SymmetricType symmetricType = SymmetricType.None, bool isInterface = false)
```

#### Parameters

`document` SubSystemDocument

The document to create a function.

`expression` [string](https://learn.microsoft.com/dotnet/api/system.string)

The expression of a function.

`arguments` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<\([string](https://learn.microsoft.com/dotnet/api/system.string), [Obj](VM.API.Pre.Obj.md)\)\>

The arguments of a function.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a function.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'expression' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the second element of 'arguments' is not <xref href="VM.Models.Pre.IArgument" data-throw-if-not-resolved="false"></xref>.

