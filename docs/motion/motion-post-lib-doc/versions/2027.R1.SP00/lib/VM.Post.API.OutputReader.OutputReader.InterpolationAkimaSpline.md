# Method InterpolationAkimaSpline
<a id="VM_Post_API_OutputReader_OutputReader_InterpolationAkimaSpline_System_Double___System_Double___System_Int32_System_Int32_System_Double_System_Double_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_InterpolationAkimaSpline_System_Double___System_Double___System_Int32_System_Int32_System_Double_System_Double_"></a> InterpolationAkimaSpline\(double\[\], double\[\], int, int, double, double\)

Builds interpolated points from X and Y arrays with the Akima spline method.

```csharp
public (InterpolationErrorType, double[], double[]) InterpolationAkimaSpline(double[] X, double[] Y, int NoOfPnt, int NoOfDesiredPnt, double StartPnt, double EndPnt)
```

### Parameters

`X` double\[\]

Input X values.

`Y` double\[\]

Input Y values corresponding to `X`.

`NoOfPnt` int

Number of input points used from `X` and `Y`.

`NoOfDesiredPnt` int

Number of points requested in the output arrays.

`StartPnt` double

Start of the interpolation range.

`EndPnt` double

End of the interpolation range.

### Returns

 \([InterpolationErrorType](VM.Models.Post.InterpolationErrorType.md), double\[\], double\[\]\)

Tuple containing the [`InterpolationErrorType`](VM.Models.Post.InterpolationErrorType.md), interpolated X values, and interpolated Y values.

### Examples

```python
# Build interpolated points from X and Y values.
x_values = [1.0, 2.0, 3.0, 4.0, 5.0]
y_values = [1.0, 4.0, 9.0, 16.0, 25.0]
data_point_count = 5
sample_count = 10
start_value = 1.0
end_value = 5.0
interpolation_result = output_reader.InterpolationAkimaSpline(
    x_values,
    y_values,
    data_point_count,
    sample_count,
    start_value,
    end_value,
)
```

### Remarks

Output arrays contain `NoOfDesiredPnt` values. Adjacent duplicate X values are removed by the interpolation implementation before the spline is calculated.

> [!NOTE]
> When adjacent X-values are duplicated, duplicate samples are removed before interpolation.

> [!IMPORTANT]
> `X`, `Y`, `NoOfPnt`, `NoOfDesiredPnt`, `StartPnt`, and `EndPnt` must describe compatible input and output ranges.
