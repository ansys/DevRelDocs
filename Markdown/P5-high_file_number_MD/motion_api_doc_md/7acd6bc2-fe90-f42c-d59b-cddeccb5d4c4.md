# ImprintUtil.ImprintWithCircle Method (Document3D, SolidBody, Double, VectorBase, DirectionBase, Double)
 

Imprint with circle

**Namespace:**&nbsp;<a href="fc4482f8-f667-ee99-4fe3-be1e2e92bf38">VM.Managed.DAFUL.Operation</a><br />**Assembly:**&nbsp;VMOP (in VMOP.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public static bool ImprintWithCircle(
	Document3D doc,
	SolidBody solidBody,
	double dTestRadius,
	VectorBase vecSeed,
	DirectionBase dirZ,
	double dRadius
)
```

**VB**<br />
``` VB
Public Shared Function ImprintWithCircle ( 
	doc As Document3D,
	solidBody As SolidBody,
	dTestRadius As Double,
	vecSeed As VectorBase,
	dirZ As DirectionBase,
	dRadius As Double
) As Boolean
```

**C++**<br />
``` C++
public:
static bool ImprintWithCircle(
	Document3D^ doc, 
	SolidBody^ solidBody, 
	double dTestRadius, 
	VectorBase^ vecSeed, 
	DirectionBase^ dirZ, 
	double dRadius
)
```

**F#**<br />
``` F#
static member ImprintWithCircle : 
        doc : Document3D * 
        solidBody : SolidBody * 
        dTestRadius : float * 
        vecSeed : VectorBase * 
        dirZ : DirectionBase * 
        dRadius : float -> bool 

```


#### Parameters
&nbsp;<dl><dt>doc</dt><dd>Type: <a href="84efeb1f-fcf6-dda7-c768-14ce12a029f2">VM.Managed.Document3D</a><br />The document</dd><dt>solidBody</dt><dd>Type: <a href="1fe26b85-134a-9d7b-d7d0-ab1f9b2b1cf6">VM.Managed.DAFUL.SolidBody</a><br />The solid body</dd><dt>dTestRadius</dt><dd>Type: System.Double<br />The radius</dd><dt>vecSeed</dt><dd>Type: <a href="d8618877-ab49-d81c-7742-73c124462921">VM.Managed.VectorBase</a><br />The seed position</dd><dt>dirZ</dt><dd>Type: <a href="e766a5cd-064f-37a0-f7d1-fc7cadc8fad5">VM.Managed.DirectionBase</a><br />The z direction</dd><dt>dRadius</dt><dd>Type: System.Double<br />The radius</dd></dl>

#### Return Value
Type: Boolean<br />

## See Also


#### Reference
<a href="b60fb3c5-8c4b-f025-0474-5387a4bf61de">ImprintUtil Class</a><br /><a href="7821ee7e-0455-5747-ece3-578748b1a87c">ImprintWithCircle Overload</a><br /><a href="fc4482f8-f667-ee99-4fe3-be1e2e92bf38">VM.Managed.DAFUL.Operation Namespace</a><br />