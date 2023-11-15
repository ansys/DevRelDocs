# SetFace.GetPointAndConnectivity Method 
 

Gets point and connectivity

**Namespace:**&nbsp;<a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL</a><br />**Assembly:**&nbsp;VMDFBase (in VMDFBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public virtual void GetPointAndConnectivity(
	ref VectorBase[] arPt,
	ref int[] arConnectivity,
	ref int[] arNumOfConnectivity,
	Reference reference,
	double dLengthFactor
)
```

**VB**<br />
``` VB
Public Overridable Sub GetPointAndConnectivity ( 
	ByRef arPt As VectorBase(),
	ByRef arConnectivity As Integer(),
	ByRef arNumOfConnectivity As Integer(),
	reference As Reference,
	dLengthFactor As Double
)
```

**C++**<br />
``` C++
public:
virtual void GetPointAndConnectivity(
	array<VectorBase^>^% arPt, 
	array<int>^% arConnectivity, 
	array<int>^% arNumOfConnectivity, 
	Reference^ reference, 
	double dLengthFactor
)
```

**F#**<br />
``` F#
abstract GetPointAndConnectivity : 
        arPt : VectorBase[] byref * 
        arConnectivity : int[] byref * 
        arNumOfConnectivity : int[] byref * 
        reference : Reference * 
        dLengthFactor : float -> unit 
override GetPointAndConnectivity : 
        arPt : VectorBase[] byref * 
        arConnectivity : int[] byref * 
        arNumOfConnectivity : int[] byref * 
        reference : Reference * 
        dLengthFactor : float -> unit 
```


#### Parameters
&nbsp;<dl><dt>arPt</dt><dd>Type: <a href="d8618877-ab49-d81c-7742-73c124462921">VM.Managed.VectorBase</a>[]<br />The points</dd><dt>arConnectivity</dt><dd>Type: System.Int32[]<br />The connectivity</dd><dt>arNumOfConnectivity</dt><dd>Type: System.Int32[]<br />The number of connectivity</dd><dt>reference</dt><dd>Type: <a href="161cfbad-1497-c4f8-ac66-49608cd40359">VM.Managed.Reference</a><br />The reference entity</dd><dt>dLengthFactor</dt><dd>Type: System.Double<br />The length factor.</dd></dl>

#### Implements
<a href="a7f0d187-0dc6-60f8-b774-1c1a5456ecb4">IFaceInformation.GetPointAndConnectivity(VectorBase[], Int32[], Int32[], Reference, Double)</a><br />

## See Also


#### Reference
<a href="b6249cf5-8ef8-acb2-3271-2796fafbd70f">SetFace Class</a><br /><a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL Namespace</a><br />