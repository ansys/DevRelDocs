# Method ExportImage
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IView.ExportImage.md" download="VM.Operations.Post.Interfaces.IView.ExportImage.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IView_ExportImage_System_String_VM_Models_Post_ImageFormat_System_Nullable_System_Double__System_Nullable_System_Double__"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IView_ExportImage_System_String_VM_Models_Post_ImageFormat_System_Nullable_System_Double__System_Nullable_System_Double__"></a> ExportImage\(string, ImageFormat, double?, double?\)

Exports the image to the specified file path in the specified format.

For a complete operations, see [Operation API Example - Image Capture](../document/operation-api/example/example_animation_for_operation_api.md#image-capture).

```csharp
void ExportImage(string filepath, ImageFormat format, double? width = null, double? height = null)
```

### Parameters

`filepath` string

The path where the image file will be saved.

`format` [ImageFormat](VM.Models.Post.ImageFormat.md)

Format selected from [`ImageFormat`](VM.Models.Post.ImageFormat.md).

`width` double?

Optional output width in pixels. If omitted, the original width is used.

`height` double?

Optional output height in pixels. If omitted, the original height is used.

### Examples

```python
# Get the page and create a chart view.
# The name of the page.
page_name = "Page"
# The page with the specified name.
page = application_handler.GetPage(page_name)
# The name of the new chart view.
chart_name = "Chart"
# The chart view created on the page.
view = page.CreateChart(chart_name)

# Build the output file path for the exported image.
# PATH : path to the folder where exported files are written (e.g., D:\PostprocessorAPI\Output)
# IMAGE_OUTPUT_FILENAME : output filename for the exported view image (e.g., chart_image.png)
# The path of the exported image file.
output_path = Path.Combine(PATH, IMAGE_OUTPUT_FILENAME)

# Export the view image at the requested size.
# The format of the exported image.
image_format = ImageFormat.Png
# The width of the exported image.
image_width = 1920
# The height of the exported image.
image_height = 1080
view.ExportImage(output_path, image_format, image_width, image_height)
```

### Remarks

<Note>
Omitting <code class="paramref">width</code> or <code class="paramref">height</code> preserves the corresponding original image dimension.
</Note>
