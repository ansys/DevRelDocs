#  Class PythonCodeAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.PythonCode" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class PythonCodeAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PythonCodeAPI](VM.API.Pre.PythonCodeAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_PythonCodeAPI_ImportPythonCode_VM_Managed_Document_System_String___"></a> ImportPythonCode\(Document, params string\[\]\)

Import python code

```csharp
public static Obj[] ImportPythonCode(this Document document, params string[] additionalCodes)
```

#### Parameters

`document` Document

The <xref href="VM.Managed.Document" data-throw-if-not-resolved="false"></xref> to import python code

`additionalCodes` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

Additional pathes to python codes.

#### Returns

 [Obj](VM.API.Pre.Obj.md)\[\]

Array of the created <xref href="VM.Managed.DAFUL.PythonCode" data-throw-if-not-resolved="false"></xref> entities.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Raised when document or codes are null or empty.

### <a id="VM_API_Pre_PythonCodeAPI_ImportPythonCode_VM_Managed_Document_System_Collections_Generic_IEnumerable_System_String__"></a> ImportPythonCode\(Document, IEnumerable<string\>\)

Import python code

```csharp
public static Obj[] ImportPythonCode(this Document document, IEnumerable<string> codes)
```

#### Parameters

`document` Document

The <xref href="VM.Managed.Document" data-throw-if-not-resolved="false"></xref> to import python code

`codes` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

Pathes to python codes.

#### Returns

 [Obj](VM.API.Pre.Obj.md)\[\]

Array of the created <xref href="VM.Managed.DAFUL.PythonCode" data-throw-if-not-resolved="false"></xref> entities.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Raised when document or codes are null or empty.

