# MotorDesigner.StatorSection.CADImportCreation.AnalysisCAD Method 
 

Analysis CAD

**Namespace:**&nbsp;<a href="faae22d6-2802-465b-a817-230732284684">VM.Managed.DAFUL.GearTrain</a><br />**Assembly:**&nbsp;VMDGearTrain (in VMDGearTrain.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public static (double , int , int , double , double ) AnalysisCAD(
	Document3D document,
	string strFilePath
)
```

**VB**<br />
``` VB
Public Shared Function AnalysisCAD ( 
	document As Document3D,
	strFilePath As String
) As ( As Double,  As Integer,  As Integer,  As Double,  As Double)
```

**C++**<br />
``` C++
public:
static ValueTuple<double, int, int, double, double> AnalysisCAD(
	Document3D^ document, 
	String^ strFilePath
)
```

**F#**<br />
``` F#
static member AnalysisCAD : 
        document : Document3D * 
        strFilePath : string -> ValueTuple<float, int, int, float, float> 

```


#### Parameters
&nbsp;<dl><dt>document</dt><dd>Type: <a href="84efeb1f-fcf6-dda7-c768-14ce12a029f2">VM.Managed.Document3D</a><br />The document</dd><dt>strFilePath</dt><dd>Type: System.String<br />The file path</dd></dl>

#### Return Value
Type: ValueTuple(Double, Int32, Int32, Double, Double)<br />geometry paramter item1 : Depth item2 : NumberOfSlot item3 : NumberOfMounting item4 : MountingRadius item5 : MountingOuterRound

## See Also


#### Reference
<a href="fe77b53e-66af-d382-860f-3f0d193f132f">MotorDesigner.StatorSection.CADImportCreation Class</a><br /><a href="faae22d6-2802-465b-a817-230732284684">VM.Managed.DAFUL.GearTrain Namespace</a><br />