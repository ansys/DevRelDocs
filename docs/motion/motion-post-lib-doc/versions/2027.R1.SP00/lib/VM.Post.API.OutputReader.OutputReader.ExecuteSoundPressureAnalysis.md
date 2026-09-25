# Method ExecuteSoundPressureAnalysis
<a id="VM_Post_API_OutputReader_OutputReader_ExecuteSoundPressureAnalysis_System_Collections_Generic_IList_System_String__System_Collections_Generic_IList_System_Double____System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Boolean_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_ExecuteSoundPressureAnalysis_System_Collections_Generic_IList_System_String__System_Collections_Generic_IList_System_Double____System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Boolean_"></a> ExecuteSoundPressureAnalysis\(IList<string\>, IList<double\[\]\>, double, double, double, double, double, double, double, double, bool\)

Calculates sound-pressure curves for selected finite-element bodies and microphone positions.

```csharp
public IList<Point2D[]> ExecuteSoundPressureAnalysis(IList<string> bodynames, IList<double[]> microPhones, double coarseningRate, double maxAreaFactor, double maxAspectRatio, double airDensity, double frequency, double soundVelocity, double startTime, double endTime, bool decibelScale)
```

### Parameters

`bodynames` IList<string\>

Full names of finite-element bodies included in the calculation.

`microPhones` IList<double\[\]\>

Microphone positions used to calculate sound-pressure curves.

`coarseningRate` double

Surface coarsening rate used before calculation.

`maxAreaFactor` double

Maximum allowed area factor for surface coarsening.

`maxAspectRatio` double

Maximum allowed aspect ratio for surface coarsening.

`airDensity` double

Air density used by the sound-pressure calculation.

`frequency` double

Frequency used by the sound-pressure calculation.

`soundVelocity` double

Sound velocity used by the sound-pressure calculation.

`startTime` double

Start time mapped to the nearest available result state.

`endTime` double

End time mapped to the nearest available result state.

`decibelScale` bool

`true` to return sound-pressure levels on a decibel scale.

### Returns

 IList<[Point2D](VM.Point2D.md)\[\]\>

List of point arrays containing one sound-pressure curve for each microphone position.

### Examples

```python
# Build the entity name list.
body_names = List[str]()
entity_name = "FEBody_01"
body_names.Add(entity_name)

# Define the microphone position list.
microphones = List[Array[Double]]()
microphones.Add(Array[Double]([0.0, 300.0, 0.0]))

# Configure the analysis parameters.
start_frequency = 10.0
end_frequency = 100.0
frequency_step = 3.0
air_density = 1.21e-09
reference_pressure = 2000.0
sound_speed = 343000.0
reference_distance = 1.0
sampling_interval = 10.0
use_half_space = False

# Calculate sound-pressure curves for a body and microphone position.
sound_pressure_curves = output_reader.ExecuteSoundPressureAnalysis(
    body_names,
    microphones,
    start_frequency,
    end_frequency,
    frequency_step,
    air_density,
    reference_pressure,
    sound_speed,
    reference_distance,
    sampling_interval,
    use_half_space,
)
```

### Remarks

The method maps `startTime` and `endTime` to the nearest available states with [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md) before calculating the curves. Body surfaces and node values are read from the primary analysis result.

> [!IMPORTANT]
> Every name in `bodynames` must identify an FE body.

### Exceptions

 ArgumentException

Thrown when `startTime` is greater than `endTime`.
