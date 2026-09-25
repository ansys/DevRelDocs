# Method GetFontWeightFromString
<a id="VM_API_Post_Operations_OperationAPIService_GetFontWeightFromString_System_String_"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_OperationAPIService_GetFontWeightFromString_System_String_"></a> GetFontWeightFromString\(string\)

Converts a font weight string to `FontWeight`.

```csharp
public static FontWeight GetFontWeightFromString(string fontweight)
```

### Parameters

`fontweight` string

The case-sensitive weight name `Normal` or `Bold`.

### Returns

 FontWeight

The matching `FontWeight` value.

### Examples

```python
page_name = "Page"
page = application_handler.GetPage(page_name)
chart_name = "Chart"
chart = page.CreateChart(chart_name)
# font_weight_name : case-sensitive font weight name supported by the Operation API
font_weight_name = "Bold"
chart.Legend.FontWeight = OperationAPIService.GetFontWeightFromString(font_weight_name)
```

### Remarks

The method returns `FontWeights.Normal` for any value other than `Bold`, including `Normal` and unsupported names.
