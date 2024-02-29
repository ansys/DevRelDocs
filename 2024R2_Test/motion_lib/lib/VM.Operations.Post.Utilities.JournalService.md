# <a id="VM_Operations_Post_Utilities_JournalService"></a> Class JournalService

Namespace: [VM.Operations.Post.Utilities](VM.Operations.Post.Utilities.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public static class JournalService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[JournalService](VM.Operations.Post.Utilities.JournalService.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Operations_Post_Utilities_JournalService_CreateProperty_System_String_System_String_System_Object_"></a> CreateProperty\(string, string, object\)

```csharp
public static string CreateProperty(string script, string propertyName, object value)
```

#### Parameters

`script` [string](https://learn.microsoft.com/dotnet/api/system.string)

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`value` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Operations_Post_Utilities_JournalService_GetColorFromHexCode_System_String_"></a> GetColorFromHexCode\(string\)

Convert from hex color code to System.Windows.Media.Color ​

```csharp
public static Color GetColorFromHexCode(string color)
```

#### Parameters

`color` [string](https://learn.microsoft.com/dotnet/api/system.string)

Hex color code​

#### Returns

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

Color instance converted from hex color code​

### <a id="VM_Operations_Post_Utilities_JournalService_GetFontFaceFromString_System_String_"></a> GetFontFaceFromString\(string\)

Convert from fontface to System.Windows.Media.FontFamily​

```csharp
public static FontFamily GetFontFaceFromString(string fontface)
```

#### Parameters

`fontface` [string](https://learn.microsoft.com/dotnet/api/system.string)

The type of fontface​

#### Returns

 [FontFamily](https://learn.microsoft.com/dotnet/api/system.windows.media.fontfamily)

FontFamily instance converted from fontface​

### <a id="VM_Operations_Post_Utilities_JournalService_GetFontStyleFromString_System_String_"></a> GetFontStyleFromString\(string\)

Convert from fontstyle to System.Windows.Media.FontStyle​

```csharp
public static FontStyle GetFontStyleFromString(string fontstyle)
```

#### Parameters

`fontstyle` [string](https://learn.microsoft.com/dotnet/api/system.string)

The type of fontstyle​

#### Returns

 [FontStyle](https://learn.microsoft.com/dotnet/api/system.windows.fontstyle)

FontStyle instance converted from fontstyle​

### <a id="VM_Operations_Post_Utilities_JournalService_GetFontWeightFromString_System_String_"></a> GetFontWeightFromString\(string\)

Convert from fontweight to System.Windows.Media.FontWeight​

```csharp
public static FontWeight GetFontWeightFromString(string fontweight)
```

#### Parameters

`fontweight` [string](https://learn.microsoft.com/dotnet/api/system.string)

The type of font weight​

#### Returns

 [FontWeight](https://learn.microsoft.com/dotnet/api/system.windows.fontweight)

FontWeight instance converted from fontwight​

