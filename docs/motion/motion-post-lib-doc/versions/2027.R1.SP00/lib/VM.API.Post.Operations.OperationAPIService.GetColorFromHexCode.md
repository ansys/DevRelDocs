# Method GetColorFromHexCode
<a id="VM_API_Post_Operations_OperationAPIService_GetColorFromHexCode_System_String_"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_OperationAPIService_GetColorFromHexCode_System_String_"></a> GetColorFromHexCode\(string\)

Converts a hex color code to `Color`.

```csharp
public static Color GetColorFromHexCode(string color)
```

### Parameters

`color` string

A color string in a format accepted by `ColorConverter`.

### Returns

 Color

The converted `Color` value.

### Examples

```python
page_name = "Page"
page = application_handler.GetPage(page_name)
chart_name = "Chart"
chart = page.CreateChart(chart_name)
# color : hexadecimal color code accepted by ColorConverter
color = "#FF5733"
chart.Legend.Background = OperationAPIService.GetColorFromHexCode(color)
```

### Remarks

A value such as `#FF5733` can be used to create a color with the specified channel values.

### Exceptions

 Exception

Thrown when `color` is not a valid color string.
