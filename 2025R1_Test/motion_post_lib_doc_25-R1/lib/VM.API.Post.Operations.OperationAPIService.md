#  Class OperationAPIService

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

A utility class that provides methods to convert string values to specific types.

```csharp
public static class OperationAPIService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OperationAPIService](VM.API.Post.Operations.OperationAPIService.md)

## Methods

### <a id="VM_API_Post_Operations_OperationAPIService_GetColorFrameRGB_System_Int32_System_Int32_System_Int32_"></a> GetColorFrameRGB\(int, int, int\)

Converts the specified RGB values into a <xref href="System.Windows.Media.Color" data-throw-if-not-resolved="false"></xref> object.

```csharp
public static Color GetColorFrameRGB(int r, int g, int b)
```

#### Parameters

`r` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The red component of the color, ranging from 0 to 255.

`g` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The green component of the color, ranging from 0 to 255.

`b` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The blue component of the color, ranging from 0 to 255.

#### Returns

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

A <xref href="System.Windows.Media.Color" data-throw-if-not-resolved="false"></xref> object representing the color defined by the specified RGB values.

#### Examples

The following example demonstrates how to use the <code>GetColorFromHexCode</code> method:
<pre><code class="lang-csharp">color = OperationAPIService.GetColorFrameRGB(255, 255, 255);</code></pre>

#### Remarks

This method takes integer values for the red, green, and blue components and converts them into a <xref href="System.Windows.Media.Color" data-throw-if-not-resolved="false"></xref>. Each parameter should be within the range of 0 to 255 to ensure valid color representation.

### <a id="VM_API_Post_Operations_OperationAPIService_GetColorFromHexCode_System_String_"></a> GetColorFromHexCode\(string\)

Converts a hex color code to a <xref href="System.Windows.Media.Color" data-throw-if-not-resolved="false"></xref>.

```csharp
public static Color GetColorFromHexCode(string color)
```

#### Parameters

`color` [string](https://learn.microsoft.com/dotnet/api/system.string)

The hex color code string to be converted.

#### Returns

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

A <xref href="System.Windows.Media.Color" data-throw-if-not-resolved="false"></xref> that represents the converted color.

#### Examples

The following example demonstrates how to use the <code>GetColorFromHexCode</code> method:
<pre><code class="lang-csharp">color = OperationAPIService.GetColorFromHexCode("#FF1D2C35");</code></pre>

#### Remarks

This method converts a hex color code (e.g., "#FF5733") to a <xref href="System.Windows.Media.Color" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Post_Operations_OperationAPIService_GetFontFaceFromString_System_String_"></a> GetFontFaceFromString\(string\)

Converts a font face string to a <xref href="System.Windows.Media.FontFamily" data-throw-if-not-resolved="false"></xref>.

```csharp
public static FontFamily GetFontFaceFromString(string fontface)
```

#### Parameters

`fontface` [string](https://learn.microsoft.com/dotnet/api/system.string)

The font face string to be converted.

#### Returns

 [FontFamily](https://learn.microsoft.com/dotnet/api/system.windows.media.fontfamily)

A <xref href="System.Windows.Media.FontFamily" data-throw-if-not-resolved="false"></xref> that represents the converted font face.

#### Examples

The following example demonstrates how to use the <code>GetFontFaceFromString</code> method:
<pre><code class="lang-csharp">fontface = OperationAPIService.GetFontFaceFromString("Arial");</code></pre>

#### Remarks

This method converts a font face string (e.g., "Arial") to a <xref href="System.Windows.Media.FontFamily" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Post_Operations_OperationAPIService_GetFontStyleFromString_System_String_"></a> GetFontStyleFromString\(string\)

Converts a font style string to a <xref href="System.Windows.FontStyle" data-throw-if-not-resolved="false"></xref>.

```csharp
public static FontStyle GetFontStyleFromString(string fontstyle)
```

#### Parameters

`fontstyle` [string](https://learn.microsoft.com/dotnet/api/system.string)

The font style string to be converted (e.g., "Normal", "Italic", "Oblique").

#### Returns

 [FontStyle](https://learn.microsoft.com/dotnet/api/system.windows.fontstyle)

A <xref href="System.Windows.FontStyle" data-throw-if-not-resolved="false"></xref> that represents the converted font style.

#### Examples

The following example demonstrates how to use the <code>GetFontStyleFromString</code> method:
<pre><code class="lang-csharp">fontstyle = OperationAPIService.GetFontStyleFromString("Normal");</code></pre>

#### Remarks

This method converts a font style string (e.g., "Normal", "Italic", "Oblique") to a <xref href="System.Windows.FontStyle" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Post_Operations_OperationAPIService_GetFontWeightFromString_System_String_"></a> GetFontWeightFromString\(string\)

Converts a font weight string to a <xref href="System.Windows.FontWeight" data-throw-if-not-resolved="false"></xref>.

```csharp
public static FontWeight GetFontWeightFromString(string fontweight)
```

#### Parameters

`fontweight` [string](https://learn.microsoft.com/dotnet/api/system.string)

The font weight string to be converted (e.g., "Normal", "Bold", "Thin").

#### Returns

 [FontWeight](https://learn.microsoft.com/dotnet/api/system.windows.fontweight)

A <xref href="System.Windows.FontWeight" data-throw-if-not-resolved="false"></xref> that represents the converted font weight.

#### Examples

The following example demonstrates how to use the <code>GetFontWeightFromString</code> method:
<pre><code class="lang-csharp">fontweight = OperationAPIService.GetFontWeightFromString("Normal");</code></pre>

#### Remarks

This method converts a font weight string (e.g., "Normal", "Bold", "Thin") to a <xref href="System.Windows.FontWeight" data-throw-if-not-resolved="false"></xref>.

