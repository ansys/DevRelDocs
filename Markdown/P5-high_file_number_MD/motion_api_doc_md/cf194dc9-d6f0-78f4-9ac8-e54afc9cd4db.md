# CreateForce.CreateVector Method (Document, String, IConnectable, IConnectable, PointBase, PointBase, OrientationBase, OrientationBase, IMarker)
 

Creates the vector.

**Namespace:**&nbsp;<a href="b7bb79bf-42b7-6ccd-0f4e-1a2b938a9a1a">VM.Managed.DAFUL.Operation.Util</a><br />**Assembly:**&nbsp;VMOpCore (in VMOpCore.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public static Vector CreateVector(
	Document document,
	string name,
	IConnectable baseBody,
	IConnectable actionBody,
	PointBase basePosi,
	PointBase actionPosi,
	OrientationBase baseOri,
	OrientationBase actionOri,
	IMarker markerReference
)
```

**VB**<br />
``` VB
Public Shared Function CreateVector ( 
	document As Document,
	name As String,
	baseBody As IConnectable,
	actionBody As IConnectable,
	basePosi As PointBase,
	actionPosi As PointBase,
	baseOri As OrientationBase,
	actionOri As OrientationBase,
	markerReference As IMarker
) As Vector
```

**C++**<br />
``` C++
public:
static Vector^ CreateVector(
	Document^ document, 
	String^ name, 
	IConnectable^ baseBody, 
	IConnectable^ actionBody, 
	PointBase^ basePosi, 
	PointBase^ actionPosi, 
	OrientationBase^ baseOri, 
	OrientationBase^ actionOri, 
	IMarker^ markerReference
)
```

**F#**<br />
``` F#
static member CreateVector : 
        document : Document * 
        name : string * 
        baseBody : IConnectable * 
        actionBody : IConnectable * 
        basePosi : PointBase * 
        actionPosi : PointBase * 
        baseOri : OrientationBase * 
        actionOri : OrientationBase * 
        markerReference : IMarker -> Vector 

```


#### Parameters
&nbsp;<dl><dt>document</dt><dd>Type: <a href="3dea251e-faa0-432d-002f-eefcd34d482f">VM.Managed.Document</a><br />The active document.</dd><dt>name</dt><dd>Type: System.String<br />The name.</dd><dt>baseBody</dt><dd>Type: <a href="98d125cc-f82d-e9ce-57ae-6b17c2b5e0c2">VM.Managed.DAFUL.IConnectable</a><br />The base body.</dd><dt>actionBody</dt><dd>Type: <a href="98d125cc-f82d-e9ce-57ae-6b17c2b5e0c2">VM.Managed.DAFUL.IConnectable</a><br />The action body.</dd><dt>basePosi</dt><dd>Type: <a href="3805f939-06a5-1628-55f0-df0b6182a01f">VM.Managed.PointBase</a><br />The base position.</dd><dt>actionPosi</dt><dd>Type: <a href="3805f939-06a5-1628-55f0-df0b6182a01f">VM.Managed.PointBase</a><br />The action position.</dd><dt>baseOri</dt><dd>Type: <a href="543e5794-0f7d-8fb3-1a5e-3408fb00bf2e">VM.Managed.OrientationBase</a><br />The base orientation.</dd><dt>actionOri</dt><dd>Type: <a href="543e5794-0f7d-8fb3-1a5e-3408fb00bf2e">VM.Managed.OrientationBase</a><br />The action orientation.</dd><dt>markerReference</dt><dd>Type: <a href="62b6b393-7276-c397-ff0c-75a1264a77be">VM.Managed.IMarker</a><br />The reference marekr.</dd></dl>

#### Return Value
Type: <a href="375dc349-4ef1-781f-ca66-282507b65c2b">Vector</a><br />

## See Also


#### Reference
<a href="bfd22091-c1f6-a60c-846a-a85c975c43b5">CreateForce Class</a><br /><a href="1b96bef2-304e-c67c-7457-de26bd3691f7">CreateVector Overload</a><br /><a href="b7bb79bf-42b7-6ccd-0f4e-1a2b938a9a1a">VM.Managed.DAFUL.Operation.Util Namespace</a><br />