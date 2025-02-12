# AnalysisOppositeTravel.GetDataForLoadCase Method 
 

Gets the data for load case.

**Namespace:**&nbsp;<a href="08e6b2d8-bba2-0a01-1fdc-133a5d5f82b4">VM.Managed.DAFUL.Car</a><br />**Assembly:**&nbsp;VMDCar (in VMDCar.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public override void GetDataForLoadCase(
	int nStep,
	Dictionary<SuspensionLoadCase.Column, double[]> dicCol,
	SuspensionLoadCase.SuspensionMode mode
)
```

**VB**<br />
``` VB
Public Overrides Sub GetDataForLoadCase ( 
	nStep As Integer,
	dicCol As Dictionary(Of SuspensionLoadCase.Column, Double()),
	mode As SuspensionLoadCase.SuspensionMode
)
```

**C++**<br />
``` C++
public:
virtual void GetDataForLoadCase(
	int nStep, 
	Dictionary<SuspensionLoadCase.Column, array<double>^>^ dicCol, 
	SuspensionLoadCase.SuspensionMode^ mode
) override
```

**F#**<br />
``` F#
abstract GetDataForLoadCase : 
        nStep : int * 
        dicCol : Dictionary<SuspensionLoadCase.Column, float[]> * 
        mode : SuspensionLoadCase.SuspensionMode -> unit 
override GetDataForLoadCase : 
        nStep : int * 
        dicCol : Dictionary<SuspensionLoadCase.Column, float[]> * 
        mode : SuspensionLoadCase.SuspensionMode -> unit 
```


#### Parameters
&nbsp;<dl><dt>nStep</dt><dd>Type: System.Int32<br />The step.</dd><dt>dicCol</dt><dd>Type: System.Collections.Generic.Dictionary(<a href="2af8e57f-93b3-34ce-37b3-cfa7da093e22">SuspensionLoadCase.Column</a>, Double[])<br />The column information.</dd><dt>mode</dt><dd>Type: <a href="96a9c6e9-44a5-954a-220b-138dbb4d7c26">VM.Managed.DAFUL.Car.SuspensionLoadCase.SuspensionMode</a><br />The mode.</dd></dl>

## See Also


#### Reference
<a href="b00eb831-5ce0-c7c9-715d-87ecda7c6dcd">AnalysisOppositeTravel Class</a><br /><a href="08e6b2d8-bba2-0a01-1fdc-133a5d5f82b4">VM.Managed.DAFUL.Car Namespace</a><br />