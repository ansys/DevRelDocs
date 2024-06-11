# Class JournalService

Namespace: [VM.Operations.Post.Utilities](VM.Operations.Post.Utilities.md)  
Assembly: VM.Operations.Post.dll  

```csharp
public static class JournalService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[JournalService](VM.Operations.Post.Utilities.JournalService.md)

## Methods

### CreateProperty\(string, string, object\)

```csharp
public static string CreateProperty(string script, string propertyName, object value)
```

#### Parameters

`script` [string](https://learn.microsoft.com/dotnet/api/system.string)

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`value` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetColorFromHexCode\(string\)

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

### GetFontFaceFromString\(string\)

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

### GetFontStyleFromString\(string\)

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

### GetFontWeightFromString\(string\)

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


