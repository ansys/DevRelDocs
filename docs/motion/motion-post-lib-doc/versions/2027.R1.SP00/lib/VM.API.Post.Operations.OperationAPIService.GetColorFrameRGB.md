# Method GetColorFrameRGB
<div align="right"><a href="/lib/VM.API.Post.Operations.OperationAPIService.GetColorFrameRGB.md" download="VM.API.Post.Operations.OperationAPIService.GetColorFrameRGB.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
# The name of the page.
page_name = "Page"
# The page with the specified name.
page = application_handler.GetPage(page_name)
# The name of the new chart view.
chart_name = "Chart"
# The chart view created on the page.
chart = page.CreateChart(chart_name)
# The red channel of the color, from 0 to 255.
red_channel = 255
# The green channel of the color, from 0 to 255.
green_channel = 87
# The blue channel of the color, from 0 to 255.
blue_channel = 51
chart.Legend.FontColor = OperationAPIService.GetColorFrameRGB(red_channel, green_channel, blue_channel)
```

### Exceptions

 OverflowException

Thrown when `r`, `g`, or `b` is outside the range `0` through `255`.
