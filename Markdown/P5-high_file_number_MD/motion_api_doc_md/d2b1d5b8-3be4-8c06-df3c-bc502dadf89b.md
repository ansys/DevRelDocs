# Water.CreateWaveMesh Method (Document, TransformBase, Double, Vector[], Int32[])
 

Create Rectangular Mesh

**Namespace:**&nbsp;<a href="8e793c5e-767c-cc4b-9aa5-75c227049da5">VM.Managed.DAFUL.Track</a><br />**Assembly:**&nbsp;VMDTrackBase (in VMDTrackBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public void CreateWaveMesh(
	Document doc,
	TransformBase transform,
	double dWidth,
	ref Vector[] arPos,
	ref int[] arConnectivity
)
```

**VB**<br />
``` VB
Public Sub CreateWaveMesh ( 
	doc As Document,
	transform As TransformBase,
	dWidth As Double,
	ByRef arPos As Vector(),
	ByRef arConnectivity As Integer()
)
```

**C++**<br />
``` C++
public:
void CreateWaveMesh(
	Document^ doc, 
	TransformBase^ transform, 
	double dWidth, 
	array<Vector>^% arPos, 
	array<int>^% arConnectivity
)
```

**F#**<br />
``` F#
member CreateWaveMesh : 
        doc : Document * 
        transform : TransformBase * 
        dWidth : float * 
        arPos : Vector[] byref * 
        arConnectivity : int[] byref -> unit 

```


#### Parameters
&nbsp;<dl><dt>doc</dt><dd>Type: <a href="3dea251e-faa0-432d-002f-eefcd34d482f">VM.Managed.Document</a><br />The document</dd><dt>transform</dt><dd>Type: <a href="0257b55b-f437-6f07-b674-7156d6d4b79b">VM.Managed.TransformBase</a><br />The Transform</dd><dt>dWidth</dt><dd>Type: System.Double<br />The width</dd><dt>arPos</dt><dd>Type: Vector[]<br />The position array</dd><dt>arConnectivity</dt><dd>Type: System.Int32[]<br />The Connectivity array</dd></dl>

## See Also


#### Reference
<a href="5b67b52c-16a2-f9f8-5d6a-348d8d60faf4">Water Class</a><br /><a href="4459a8cf-91a0-b446-3d46-3c6af1202a45">CreateWaveMesh Overload</a><br /><a href="8e793c5e-767c-cc4b-9aa5-75c227049da5">VM.Managed.DAFUL.Track Namespace</a><br />