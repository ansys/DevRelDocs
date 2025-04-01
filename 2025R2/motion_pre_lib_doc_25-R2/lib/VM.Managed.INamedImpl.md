# Class INamedImpl

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the name.

```csharp
public class INamedImpl
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[INamedImpl](VM.Managed.INamedImpl.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### INamedImpl\(\)

```csharp
public INamedImpl()
```

## Properties

### NameSeperator

Gets or sets the name seperator.

```csharp
public static char NameSeperator { get; set; }
```

#### Property Value

 [char](https://learn.microsoft.com/dotnet/api/system.char)

### PredefinedFlag

Gets or sets the predefined flag.

```csharp
public static char PredefinedFlag { get; set; }
```

#### Property Value

 [char](https://learn.microsoft.com/dotnet/api/system.char)

## Methods

### EnsureLocalName\(string\)

Ensure local name.

```csharp
public static void EnsureLocalName(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name.

### GetChildName\(string\)

Get child name.

```csharp
public static string GetChildName(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The child name

### GetFullName\(IObject\)

Get full name.

```csharp
public static string GetFullName(IObject obj)
```

#### Parameters

`obj` IObject

The object.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The name

### GetFullName\(INamed\)

Get full name.

```csharp
public static string GetFullName(INamed namedObj)
```

#### Parameters

`namedObj` [INamed](VM.Managed.INamed.md)

The object has name.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The name

### GetImportedCADBodyDirectory\(string, string\)

Get imported cad body directory path.

```csharp
public static string GetImportedCADBodyDirectory(string strDir, string strBodyName)
```

#### Parameters

`strDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The directory.

`strBodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The body name

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetImportedCADBodyFilePath\(string, string, string\)

Get imported cad body file path.

```csharp
public static string GetImportedCADBodyFilePath(string strDir, string strBodyName, string strExtension)
```

#### Parameters

`strDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The directory.

`strBodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The body name

`strExtension` [string](https://learn.microsoft.com/dotnet/api/system.string)

The extension name

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetImportedCADBodyName\(Document, string, bool\)

Get imported cad body name.

```csharp
public static string GetImportedCADBodyName(Document doc, string strName, bool bAllowDuplication)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

The document.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Object Name

`bAllowDuplication` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The new name

### GetNonSymmetricName\(string\)

Get non symmetric name.

```csharp
public static string GetNonSymmetricName(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The name

### GetOwnerFullName\(string\)

Get owner name from fullname.

```csharp
public static string GetOwnerFullName(string strFullName)
```

#### Parameters

`strFullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The full name.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The owner's full name

### GetOwnerName\(string\)

Get owner name.

```csharp
public static string GetOwnerName(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The owner name

### GetSymmetricTypeFromName\(string\)

Get symmetric type from name.

```csharp
public static SymmetricType GetSymmetricTypeFromName(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name.

#### Returns

 [SymmetricType](VM.Managed.SymmetricType.md)

The symmetric type

### IsChildName\(string\)

whether this name is child name.

```csharp
public static bool IsChildName(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The object has name.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The name

### IsExistNameInDoc\(IDocument, string, string\)

whether this name is exist to document.

```csharp
public static bool IsExistNameInDoc(IDocument doc, string strName, string strNameForMessage)
```

#### Parameters

`doc` IDocument

The document.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name.

`strNameForMessage` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name for message.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The name

### IsExistNameInDoc\(IDocument, string\)

whether this name is exist to document.

```csharp
public static bool IsExistNameInDoc(IDocument doc, string strName)
```

#### Parameters

`doc` IDocument

The document.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The name

### IsValidName\(string, bool\)

whether this name is valid.

```csharp
public static bool IsValidName(string strName, bool showMsg)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Object Name

`showMsg` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether show error messages.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if the specified name is valid; otherwise, <code>false</code>.

### IsValidName\(string\)

whether this name is valid.

```csharp
public static bool IsValidName(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Object Name

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if the specified name is valid; otherwise, <code>false</code>.

### MakeOppositeSymmetricName\(string\)

Make opposite symmetric name.

```csharp
public static string MakeOppositeSymmetricName(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The opposite symmetric name

### MakeSymmetricName\(string, SymmetricType\)

Make symmetric name.

```csharp
public static string MakeSymmetricName(string strNameOriginal, SymmetricType type)
```

#### Parameters

`strNameOriginal` [string](https://learn.microsoft.com/dotnet/api/system.string)

The original name.

`type` [SymmetricType](VM.Managed.SymmetricType.md)

The symmetric type.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The name


