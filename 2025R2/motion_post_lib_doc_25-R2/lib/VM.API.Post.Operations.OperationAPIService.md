#  Class OperationAPIService

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

A utility class that provides methods to convert string values to specific types.

```python
public static class OperationAPIService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OperationAPIService](VM.API.Post.Operations.OperationAPIService.md)

## Examples

For an example that includes information about interfaces, see this example.
To view the examples, refer to the location of the 'Install_Path\Motion\Document\Postprocessor API for Python.zip' file.
<pre><code class="lang-python"># OperationAPIService.py
import sys

current_dir = __file__.rsplit('\\', 1)[0]
external_modules_path = current_dir + '\\..\\..\\Modules'
sys.path.append(external_modules_path)

from OperationAPI import *

# Start the headless application interface
applicationHandler = ApplicationHandler()

# Import result file
result_file_path = get_result_file_path()

# Set array about result file
filepaths = List[str]()
filepaths.Add(result_file_path)

# Open about result files
applicationHandler.AddDocument(filepaths)

# Get Page
page = applicationHandler.GetActivePage()

# Create PlotView
chartView = page.CreateChart("Chart")

chartView.Legend.Background = OperationAPIService.GetColorFromHexCode("#FF000000")
chartView.Legend.FontColor = OperationAPIService.GetColorFrameRGB(255,255,255)
chartView.Legend.FontFace = OperationAPIService.GetFontFaceFromString("Arial")
chartView.Legend.FontStyle = OperationAPIService.GetFontStyleFromString("Italic")
chartView.Legend.FontWeight = OperationAPIService.GetFontWeightFromString("Bold")

pages = applicationHandler.GetPages()
for page in pages :
    page.Close()

# Close the Document
applicationHandler.CloseDocument(result_file_path)
</code></pre>

## Methods

### <a id="VM_API_Post_Operations_OperationAPIService_GetColorFrameRGB_System_Int32_System_Int32_System_Int32_"></a> GetColorFrameRGB\(int, int, int\)

Converts the specified RGB values into a <xref href="System.Windows.Media.Color" data-throw-if-not-resolved="false"></xref> object.

```python
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

For an example that includes this property, see the [OperationAPIService](#VM_API_Post_Operations_OperationAPIService).

#### Remarks

This method takes integer values for the red, green, and blue components and converts them into a <xref href="System.Windows.Media.Color" data-throw-if-not-resolved="false"></xref>. Each parameter should be within the range of 0 to 255 to ensure valid color representation.

### <a id="VM_API_Post_Operations_OperationAPIService_GetColorFromHexCode_System_String_"></a> GetColorFromHexCode\(string\)

Converts a hex color code to a <xref href="System.Windows.Media.Color" data-throw-if-not-resolved="false"></xref>.

```python
public static Color GetColorFromHexCode(string color)
```

#### Parameters

`color` [string](https://learn.microsoft.com/dotnet/api/system.string)

The hex color code string to be converted.

#### Returns

 [Color](https://learn.microsoft.com/dotnet/api/system.windows.media.color)

A <xref href="System.Windows.Media.Color" data-throw-if-not-resolved="false"></xref> that represents the converted color.

#### Examples

For an example that includes this property, see the [OperationAPIService](#VM_API_Post_Operations_OperationAPIService).

#### Remarks

This method converts a hex color code (e.g., "#FF5733") to a <xref href="System.Windows.Media.Color" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Post_Operations_OperationAPIService_GetFontFaceFromString_System_String_"></a> GetFontFaceFromString\(string\)

Converts a font face string to a <xref href="System.Windows.Media.FontFamily" data-throw-if-not-resolved="false"></xref>.

```python
public static FontFamily GetFontFaceFromString(string fontface)
```

#### Parameters

`fontface` [string](https://learn.microsoft.com/dotnet/api/system.string)

The font face string to be converted.

#### Returns

 [FontFamily](https://learn.microsoft.com/dotnet/api/system.windows.media.fontfamily)

A <xref href="System.Windows.Media.FontFamily" data-throw-if-not-resolved="false"></xref> that represents the converted font face.

#### Examples

For an example that includes this property, see the [OperationAPIService](#VM_API_Post_Operations_OperationAPIService).

#### Remarks

This method converts a font face string (e.g., "Arial") to a <xref href="System.Windows.Media.FontFamily" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Post_Operations_OperationAPIService_GetFontStyleFromString_System_String_"></a> GetFontStyleFromString\(string\)

Converts a font style string to a <xref href="System.Windows.FontStyle" data-throw-if-not-resolved="false"></xref>.

```python
public static FontStyle GetFontStyleFromString(string fontstyle)
```

#### Parameters

`fontstyle` [string](https://learn.microsoft.com/dotnet/api/system.string)

The font style string to be converted (e.g., "Normal", "Italic", "Oblique").

#### Returns

 [FontStyle](https://learn.microsoft.com/dotnet/api/system.windows.fontstyle)

A <xref href="System.Windows.FontStyle" data-throw-if-not-resolved="false"></xref> that represents the converted font style.

#### Examples

For an example that includes this property, see the [OperationAPIService](#VM_API_Post_Operations_OperationAPIService).

#### Remarks

This method converts a font style string (e.g., "Normal", "Italic", "Oblique") to a <xref href="System.Windows.FontStyle" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Post_Operations_OperationAPIService_GetFontWeightFromString_System_String_"></a> GetFontWeightFromString\(string\)

Converts a font weight string to a <xref href="System.Windows.FontWeight" data-throw-if-not-resolved="false"></xref>.

```python
public static FontWeight GetFontWeightFromString(string fontweight)
```

#### Parameters

`fontweight` [string](https://learn.microsoft.com/dotnet/api/system.string)

The font weight string to be converted (e.g., "Normal", "Bold", "Thin").

#### Returns

 [FontWeight](https://learn.microsoft.com/dotnet/api/system.windows.fontweight)

A <xref href="System.Windows.FontWeight" data-throw-if-not-resolved="false"></xref> that represents the converted font weight.

#### Examples

For an example that includes this property, see the [OperationAPIService](#VM_API_Post_Operations_OperationAPIService).

#### Remarks

This method converts a font weight string (e.g., "Normal", "Bold", "Thin") to a <xref href="System.Windows.FontWeight" data-throw-if-not-resolved="false"></xref>.


