#  Class UserSubroutineAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class UserSubroutineAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UserSubroutineAPI](VM.API.Pre.UserSubroutineAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_UserSubroutineAPI_CreateUserSubroutine_VM_Managed_DAFUL_SubSystemDocument_System_String_System_String_System_String_System_Collections_Generic_IEnumerable_VM_API_Pre_UserSubroutineResult__System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_String_System_Boolean_VM_Managed_SymmetricType_System_Boolean_"></a> CreateUserSubroutine\(SubSystemDocument, string, string, string, IEnumerable<UserSubroutineResult\>, IEnumerable<Obj\>, string, bool, SymmetricType, bool\)

Create <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "functionName", "dllName" })]
public static Obj CreateUserSubroutine(this SubSystemDocument document, string functionName, string dllName, string parameter = "", IEnumerable<UserSubroutineResult> results = null, IEnumerable<Obj> arguments = null, string name = "", bool isReportOnly = true, SymmetricType symmetricType = SymmetricType.None, bool isInterface = false)
```

#### Parameters

`document` SubSystemDocument

The document to create a user subroutine.

`functionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The function name of a user subroutine.

`dllName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The dll name of the user subroutine. the input file type is 'dll' or 'so'.

`parameter` [string](https://learn.microsoft.com/dotnet/api/system.string)

The parameter of a user subroutine..

`results` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[UserSubroutineResult](VM.API.Pre.UserSubroutineResult.md)\>

The results of a user subroutine.

`arguments` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

The expressions of a user subroutine..

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a user subroutine.

`isReportOnly` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

'true' if it is report Only. Otherwise, 'false'.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref>

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'functionName', 'dllName' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the extension of 'dllName' is not 'dll', 'so'.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'arguement' is not <xref href="VM.Models.Pre.IArgument" data-throw-if-not-resolved="false"></xref>.

