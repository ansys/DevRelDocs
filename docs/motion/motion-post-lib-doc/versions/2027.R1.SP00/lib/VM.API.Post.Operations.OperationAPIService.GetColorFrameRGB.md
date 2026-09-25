# Method GetColorFrameRGB
<a id="VM_API_Post_Operations_OperationAPIService_GetColorFrameRGB_System_Int32_System_Int32_System_Int32_"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_OperationAPIService_GetColorFrameRGB_System_Int32_System_Int32_System_Int32_"></a> GetColorFrameRGB\(int, int, int\)

Converts the specified RGB values into `Color` data.

```csharp
public static Color GetColorFrameRGB(int r, int g, int b)
```

### Parameters

`r` int

The red channel value from `0` through `255`.

`g` int

The green channel value from `0` through `255`.

`b` int

The blue channel value from `0` through `255`.

### Returns

 Color

The `Color` value defined by the three channel values.

### Examples

```python
page_name = "Page"
page = application_handler.GetPage(page_name)
chart_name = "Chart"
chart = page.CreateChart(chart_name)
red_channel = 255
green_channel = 87
blue_channel = 51
chart.Legend.FontColor = OperationAPIService.GetColorFrameRGB(red_channel, green_channel, blue_channel)
```

### Exceptions

 OverflowException

Thrown when `r`, `g`, or `b` is outside the range `0` through `255`.
