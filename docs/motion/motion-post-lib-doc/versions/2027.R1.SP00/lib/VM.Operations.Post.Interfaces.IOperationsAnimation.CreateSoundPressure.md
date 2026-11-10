# Method CreateSoundPressure
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsAnimation.CreateSoundPressure.md" download="VM.Operations.Post.Interfaces.IOperationsAnimation.CreateSoundPressure.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Operations_Post_Interfaces_IOperationsAnimation_CreateSoundPressure_System_Collections_Generic_IList_System_String__System_Collections_Generic_IList_System_String__System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Int32_System_Int32_System_Boolean_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsAnimation_CreateSoundPressure_System_Collections_Generic_IList_System_String__System_Collections_Generic_IList_System_String__System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Int32_System_Int32_System_Boolean_"></a> CreateSoundPressure\(IList<string\>, IList<string\>, double, double, double, double, double, double, int, int, bool\)

Creates sound-pressure curve data for selected bodies and coordinate systems.

For a complete operations, see [Operation API Example - Sound Pressure](../document/operation-api/example/example_analysis_for_operation_api.md#sound-pressure).

```csharp
IEnumerable<IOperationsLineDataSeriesViewModelBase> CreateSoundPressure(IList<string> bodyNames, IList<string> coordinateNames, double coarseningRate, double maxAreaFactor, double maxAspectRatio, double airDensity, double soundVelocity, double frequency, int start, int end, bool isDeicbelScale)
```

### Parameters

`bodyNames` IList<string\>

Full names of body entities in the analysis result. Obtain each name from a public entity property or lookup result.

<Danger>
The collection must contain at least one full name, and every name must identify a body in the associated analysis result.
</Danger>

`coordinateNames` IList<string\>

Full names of coordinate systems used as microphone positions. Obtain each value from [`FullName`](VM.Operations.Post.Interfaces.IOperationsCSYSViewModel.FullName.md) after retrieving or creating the coordinate system.

<Danger>
The collection must contain at least one full name, and every name must identify a coordinate system in the associated analysis result.
</Danger>

`coarseningRate` double

Surface sampling rate.

`maxAreaFactor` double

Maximum sampled element area relative to the average area.

`maxAspectRatio` double

Maximum sampled element aspect ratio.

`airDensity` double

Air density.

`soundVelocity` double

Sound velocity.

`frequency` double

Analysis frequency.

`start` int

First frame in the analysis range.

`end` int

Last frame in the analysis range.

`isDeicbelScale` bool

`true` to return decibel-scaled results.

### Returns

 IEnumerable<[IOperationsLineDataSeriesViewModelBase](VM.Operations.Post.Interfaces.IOperationsLineDataSeriesViewModelBase.md)\>

Curve data created for the requested microphone positions.

<Danger>
The return value is `null` when either name collection is empty or contains an invalid entity name.
</Danger>

### Examples

```python
# Get the document and dynamic analysis result.
# RESULT_FILE_PATH : .dfr result file path (e.g., D:\PostprocessorAPI\Results\Tutorial_ModalFlex.dfr)
# The document opened from the result file.
document = application_handler.GetDocument(RESULT_FILE_PATH)
# The type of the analysis result to retrieve.
analysis_result_type = AnalysisResultType.Dynamics
# The dynamic analysis result of the document.
dynamic_analysis = document.GetAnalysisResultViewModel(analysis_result_type)

# Create the animation view.
# The name of the page.
page_name = "Page"
# The page with the specified name.
page = application_handler.GetPage(page_name)
# The name of the new animation view.
animation_view_name = "ResultAnimation"
# The animation view created on the page.
animation_view = page.CreateAnimation(dynamic_analysis, animation_view_name)

# Prepare body and microphone coordinate names.
# The full name of the entity whose surface generates the sound pressure.
body_name = "FEBody_01"
# The full names of the entities whose surfaces generate the sound pressure.
body_names = List[str]()
body_names.Add(body_name)
# The name of the new coordinate system.
coordinate_system_name = "Example_CSYS"
# The full names of the coordinate systems used as microphone positions.
coordinate_names = List[str]()
coordinate_names.Add(coordinate_system_name)
# The full name of the entity that owns the coordinate system.
parent_full_name = "Ground"
animation_view.CreateCoordinateSystem(coordinate_system_name, parent_full_name)
# The percentage of the number of nodes remaining in the sampling result with respect to the initial number of nodes.
coarsening_rate = 10.0
# The maximum allowable area of each element generated by the sampling result, so that the area of each element cannot be greater than (Max Area Factor) * (Average element area).
max_area_factor = 100.0
# The maximum allowable aspect ratio of each element generated by the sampling result.
max_aspect_ratio = 3.0
# The density of the air.
air_density = 1.21e-9
# The speed of sound in air.
sound_velocity = 343000.0
# The analysis frequency, which determines the number of analysis results per second as 10*analysis frequency.
frequency = 2000.0
# The start frame of the time range to be analyzed.
start_frame = 1
# The end frame of the time range to be analyzed.
end_frame = 10
# True to return decibel-scaled results.
is_decibel_scale = False
# The sound pressure curves created for the microphones.
sound_pressure = animation_view.CreateSoundPressure(body_names, coordinate_names, coarsening_rate, max_area_factor, max_aspect_ratio, air_density, sound_velocity, frequency, start_frame, end_frame, is_decibel_scale)
```

### Remarks

This operation uses the Rayleigh Integral to analyze sound pressure generated by vibrations on the selected body surfaces. It creates curve data with [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md), and each computed result is returned as a curve for the requested microphone positions.

Each returned curve represents the sound pressure calculated for one requested microphone position.
