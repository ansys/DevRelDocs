# Class INamedImpl
<a id="VM_Managed_INamedImpl"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the name.

```csharp
public class INamedImpl
```

#### Inheritance

object ← 
[INamedImpl](VM.Managed.INamedImpl.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_INamedImpl__ctor"></a> INamedImpl\(\)

```csharp
public INamedImpl()
```

## Properties

### <a id="VM_Managed_INamedImpl_NameSeperator"></a> NameSeperator

Gets or sets the name seperator.

```csharp
public static char NameSeperator { get; set; }
```

#### Property Value

 char

### <a id="VM_Managed_INamedImpl_PredefinedFlag"></a> PredefinedFlag

Gets or sets the predefined flag.

```csharp
public static char PredefinedFlag { get; set; }
```

#### Property Value

 char

## Methods

### <a id="VM_Managed_INamedImpl_EnsureLocalName_System_String_"></a> EnsureLocalName\(string\)

Ensure local name.

```csharp
public static void EnsureLocalName(string strName)
```

#### Parameters

`strName` string

The name.

### <a id="VM_Managed_INamedImpl_GetChildName_System_String_"></a> GetChildName\(string\)

Get child name.

```csharp
public static string GetChildName(string strName)
```

#### Parameters

`strName` string

The name.

#### Returns

 string

The child name

### <a id="VM_Managed_INamedImpl_GetFullName_VM_Models_Pre_IObject_"></a> GetFullName\(IObject\)

Get full name.

```csharp
public static string GetFullName(IObject obj)
```

#### Parameters

`obj` IObject

The object.

#### Returns

 string

The name

### <a id="VM_Managed_INamedImpl_GetFullName_VM_Managed_INamed_"></a> GetFullName\(INamed\)

Get full name.

```csharp
public static string GetFullName(INamed namedObj)
```

#### Parameters

`namedObj` [INamed](VM.Managed.INamed.md)

The object has name.

#### Returns

 string

The name

### <a id="VM_Managed_INamedImpl_GetImportedCADBodyDirectory_System_String_System_String_"></a> GetImportedCADBodyDirectory\(string, string\)

Get imported cad body directory path.

```csharp
public static string GetImportedCADBodyDirectory(string strDir, string strBodyName)
```

#### Parameters

`strDir` string

The directory.

`strBodyName` string

The body name

#### Returns

 string

### <a id="VM_Managed_INamedImpl_GetImportedCADBodyFilePath_System_String_System_String_System_String_"></a> GetImportedCADBodyFilePath\(string, string, string\)

Get imported cad body file path.

```csharp
public static string GetImportedCADBodyFilePath(string strDir, string strBodyName, string strExtension)
```

#### Parameters

`strDir` string

The directory.

`strBodyName` string

The body name

`strExtension` string

The extension name

#### Returns

 string

### <a id="VM_Managed_INamedImpl_GetImportedCADBodyName_VM_Managed_Document_System_String_System_Boolean_"></a> GetImportedCADBodyName\(Document, string, bool\)

Get imported cad body name.

```csharp
public static string GetImportedCADBodyName(Document doc, string strName, bool bAllowDuplication)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

The document.

`strName` string

Object Name

`bAllowDuplication` bool

#### Returns

 string

The new name

### <a id="VM_Managed_INamedImpl_GetNonSymmetricName_System_String_"></a> GetNonSymmetricName\(string\)

Get non symmetric name.

```csharp
public static string GetNonSymmetricName(string strName)
```

#### Parameters

`strName` string

The name.

#### Returns

 string

The name

### <a id="VM_Managed_INamedImpl_GetOwnerFullName_System_String_"></a> GetOwnerFullName\(string\)

Get owner name from fullname.

```csharp
public static string GetOwnerFullName(string strFullName)
```

#### Parameters

`strFullName` string

The full name.

#### Returns

 string

The owner's full name

### <a id="VM_Managed_INamedImpl_GetOwnerName_System_String_"></a> GetOwnerName\(string\)

Get owner name.

```csharp
public static string GetOwnerName(string strName)
```

#### Parameters

`strName` string

The name.

#### Returns

 string

The owner name

### <a id="VM_Managed_INamedImpl_GetSymmetricTypeFromName_System_String_"></a> GetSymmetricTypeFromName\(string\)

Get symmetric type from name.

```csharp
public static SymmetricType GetSymmetricTypeFromName(string strName)
```

#### Parameters

`strName` string

The name.

#### Returns

 [SymmetricType](VM.Managed.SymmetricType.md)

The symmetric type

### <a id="VM_Managed_INamedImpl_IsChildName_System_String_"></a> IsChildName\(string\)

whether this name is child name.

```csharp
public static bool IsChildName(string strName)
```

#### Parameters

`strName` string

The object has name.

#### Returns

 bool

The name

### <a id="VM_Managed_INamedImpl_IsExistNameInDoc_VM_Models_Pre_IDocument_System_String_System_String_"></a> IsExistNameInDoc\(IDocument, string, string\)

whether this name is exist to document.

```csharp
public static bool IsExistNameInDoc(IDocument doc, string strName, string strNameForMessage)
```

#### Parameters

`doc` IDocument

The document.

`strName` string

The name.

`strNameForMessage` string

The name for message.

#### Returns

 bool

The name

### <a id="VM_Managed_INamedImpl_IsExistNameInDoc_VM_Models_Pre_IDocument_System_String_"></a> IsExistNameInDoc\(IDocument, string\)

whether this name is exist to document.

```csharp
public static bool IsExistNameInDoc(IDocument doc, string strName)
```

#### Parameters

`doc` IDocument

The document.

`strName` string

The name.

#### Returns

 bool

The name

### <a id="VM_Managed_INamedImpl_IsValidName_System_String_System_Boolean_"></a> IsValidName\(string, bool\)

whether this name is valid.

```csharp
public static bool IsValidName(string strName, bool showMsg)
```

#### Parameters

`strName` string

Object Name

`showMsg` bool

Whether show error messages.

#### Returns

 bool

<code>true</code> if the specified name is valid; otherwise, <code>false</code>.

### <a id="VM_Managed_INamedImpl_IsValidName_System_String_"></a> IsValidName\(string\)

whether this name is valid.

```csharp
public static bool IsValidName(string strName)
```

#### Parameters

`strName` string

Object Name

#### Returns

 bool

<code>true</code> if the specified name is valid; otherwise, <code>false</code>.

### <a id="VM_Managed_INamedImpl_MakeOppositeSymmetricName_System_String_"></a> MakeOppositeSymmetricName\(string\)

Make opposite symmetric name.

```csharp
public static string MakeOppositeSymmetricName(string strName)
```

#### Parameters

`strName` string

The name.

#### Returns

 string

The opposite symmetric name

### <a id="VM_Managed_INamedImpl_MakeSymmetricName_System_String_VM_Managed_SymmetricType_"></a> MakeSymmetricName\(string, SymmetricType\)

Make symmetric name.

```csharp
public static string MakeSymmetricName(string strNameOriginal, SymmetricType type)
```

#### Parameters

`strNameOriginal` string

The original name.

`type` [SymmetricType](VM.Managed.SymmetricType.md)

The symmetric type.

#### Returns

 string

The name

