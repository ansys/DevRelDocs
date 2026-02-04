# Class PythonFunctionIntellisenseService
<a id="VM_Models_Pre_PythonFunctionIntellisenseService"></a>

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

This class represents the service for supporting intellisense of user defined python code

```csharp
public static class PythonFunctionIntellisenseService
```

#### Inheritance

object ← 
[PythonFunctionIntellisenseService](VM.Models.Pre.PythonFunctionIntellisenseService.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Fields

### <a id="VM_Models_Pre_PythonFunctionIntellisenseService_OnUpdatePythonModule"></a> OnUpdatePythonModule

Raised when user defined python module is updated

```csharp
public static EventHandler OnUpdatePythonModule
```

#### Field Value

 EventHandler

## Methods

### <a id="VM_Models_Pre_PythonFunctionIntellisenseService_GetImportStrings_VM_Models_Pre_IDocument_System_Boolean_"></a> GetImportStrings\(IDocument, bool\)

Gets python herder string to import user defined puthon codes.

```csharp
public static IEnumerable<string> GetImportStrings(IDocument document, bool includeAddToPathCommand = false)
```

#### Parameters

`document` [IDocument](VM.Models.Pre.IDocument.md)

The <xref href="VM.Models.Pre.IDocument" data-throw-if-not-resolved="false"></xref> of user defined python modules.

`includeAddToPathCommand` bool

if true, include command to add path of module directory.

#### Returns

 IEnumerable<string\>

The header strings.

### <a id="VM_Models_Pre_PythonFunctionIntellisenseService_GetModulePath_VM_Models_Pre_IDocument_"></a> GetModulePath\(IDocument\)

Gets the path to the reorganized user defined python module

```csharp
public static string GetModulePath(IDocument document)
```

#### Parameters

`document` [IDocument](VM.Models.Pre.IDocument.md)

The <xref href="VM.Models.Pre.IDocument" data-throw-if-not-resolved="false"></xref> of user defined python modules.

#### Returns

 string

The path to the reorganized user defined python module.

### <a id="VM_Models_Pre_PythonFunctionIntellisenseService_IsRegistered_VM_Models_Pre_IDocument_"></a> IsRegistered\(IDocument\)

```csharp
public static bool IsRegistered(IDocument document)
```

#### Parameters

`document` [IDocument](VM.Models.Pre.IDocument.md)

#### Returns

 bool

### <a id="VM_Models_Pre_PythonFunctionIntellisenseService_Register_VM_Models_Pre_IDocument_"></a> Register\(IDocument\)

Register the <xref href="VM.Models.Pre.IDocument" data-throw-if-not-resolved="false"></xref>.

```csharp
public static void Register(IDocument document)
```

#### Parameters

`document` [IDocument](VM.Models.Pre.IDocument.md)

the <xref href="VM.Models.Pre.IDocument" data-throw-if-not-resolved="false"></xref> to register.

#### Exceptions

 ArgumentNullException

Raised when document is null.

