# Method GetFontStyleFromString
<a id="VM_API_Post_Operations_OperationAPIService_GetFontStyleFromString_System_String_"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_OperationAPIService_GetFontStyleFromString_System_String_"></a> GetFontStyleFromString\(string\)

Converts a font style string to `FontStyle`.

```csharp
public static FontStyle GetFontStyleFromString(string fontstyle)
```

### Parameters

`fontstyle` string

The case-sensitive style name `Normal`, `Italic`, or `Oblique`.

### Returns

 FontStyle

The matching `FontStyle` value.

### Examples

```python
page_name = "Page"
page = application_handler.GetPage(page_name)
chart_name = "Chart"
chart = page.CreateChart(chart_name)
# font_style_name : case-sensitive font style name supported by the Operation API
font_style_name = "Italic"
chart.Legend.FontStyle = OperationAPIService.GetFontStyleFromString(font_style_name)
```

### Remarks

The method returns the matching style for the three supported names. Any other value returns `FontStyles.Normal`.
