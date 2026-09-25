# Method GetFontFaceFromString
<a id="VM_API_Post_Operations_OperationAPIService_GetFontFaceFromString_System_String_"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_OperationAPIService_GetFontFaceFromString_System_String_"></a> GetFontFaceFromString\(string\)

Converts a font face string to `FontFamily`.

```csharp
public static FontFamily GetFontFaceFromString(string fontface)
```

### Parameters

`fontface` string

The font family name accepted by `FontFamily` constructor.

### Returns

 FontFamily

The `FontFamily` value created from <code class="paramref">fontface</code>.

### Examples

```python
page_name = "Page"
page = application_handler.GetPage(page_name)
chart_name = "Chart"
chart = page.CreateChart(chart_name)
# font_name : font family name accepted by FontFamily
font_name = "Arial"
chart.Legend.FontFace = OperationAPIService.GetFontFaceFromString(font_name)
```

### Remarks

A value such as `Arial` creates a font family that can be assigned to a font-face property.
