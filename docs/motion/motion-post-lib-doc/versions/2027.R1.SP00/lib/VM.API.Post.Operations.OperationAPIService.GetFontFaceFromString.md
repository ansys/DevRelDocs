# Method GetFontFaceFromString
<div align="right"><a href="/lib/VM.API.Post.Operations.OperationAPIService.GetFontFaceFromString.md" download="VM.API.Post.Operations.OperationAPIService.GetFontFaceFromString.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
# The name of the page.
page_name = "Page"
# The page with the specified name.
page = application_handler.GetPage(page_name)
# The name of the new chart view.
chart_name = "Chart"
# The chart view created on the page.
chart = page.CreateChart(chart_name)
# Font family name accepted by FontFamily.
font_name = "Arial"
chart.Legend.FontFace = OperationAPIService.GetFontFaceFromString(font_name)
```

### Remarks

A value such as `Arial` creates a font family that can be assigned to a font-face property.
