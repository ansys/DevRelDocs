# Method ExportImage
<a id="VM_Operations_Post_Interfaces_IView_ExportImage_System_String_VM_Models_Post_ImageFormat_System_Nullable_System_Double__System_Nullable_System_Double__"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IView_ExportImage_System_String_VM_Models_Post_ImageFormat_System_Nullable_System_Double__System_Nullable_System_Double__"></a> ExportImage\(string, ImageFormat, double?, double?\)

Exports the image to the specified file path in the specified format.

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
page_name = "Page"
page = application_handler.GetPage(page_name)
view_name = "Chart"
view = page.CreateChart(view_name)

# Build the output file path for the exported image.
# PATH : path to the folder where exported files are written
# IMAGE_OUTPUT_FILENAME : output filename for the exported view image
output_path = os.path.join(PATH, IMAGE_OUTPUT_FILENAME)

# Export the view image at the requested size.
image_format = ImageFormat.Png
width = 1920
height = 1080
view.ExportImage(output_path, image_format, width, height)
```

### Remarks

> [!NOTE]
> Omitting <code class="paramref">width</code> or <code class="paramref">height</code> preserves the corresponding original image dimension.
