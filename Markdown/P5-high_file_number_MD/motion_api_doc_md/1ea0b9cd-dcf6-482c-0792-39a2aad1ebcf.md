# UpdateRackInFE Constructor (Document3D, String, String, String, Boolean, Boolean, String, String)
 

Initializes a new instance of the <a href="5452b1a2-b245-5edb-a98d-2c5d0ff1f121">UpdateRackInFE</a> class.

**Namespace:**&nbsp;<a href="f69f4f48-6c25-4b7a-c6dc-c253dd218fde">VM.Managed.DAFUL.GearTrain.Operation</a><br />**Assembly:**&nbsp;VMOpGearTrain (in VMOpGearTrain.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public UpdateRackInFE(
	Document3D document3D,
	string strRackGeometryName,
	string strStartRBEName,
	string strEndRBEName,
	bool bUseStart,
	bool bUseEnd,
	string strZAxis,
	string strInitialAngle
)
```

**VB**<br />
``` VB
Public Sub New ( 
	document3D As Document3D,
	strRackGeometryName As String,
	strStartRBEName As String,
	strEndRBEName As String,
	bUseStart As Boolean,
	bUseEnd As Boolean,
	strZAxis As String,
	strInitialAngle As String
)
```

**C++**<br />
``` C++
public:
UpdateRackInFE(
	Document3D^ document3D, 
	String^ strRackGeometryName, 
	String^ strStartRBEName, 
	String^ strEndRBEName, 
	bool bUseStart, 
	bool bUseEnd, 
	String^ strZAxis, 
	String^ strInitialAngle
)
```

**F#**<br />
``` F#
new : 
        document3D : Document3D * 
        strRackGeometryName : string * 
        strStartRBEName : string * 
        strEndRBEName : string * 
        bUseStart : bool * 
        bUseEnd : bool * 
        strZAxis : string * 
        strInitialAngle : string -> UpdateRackInFE
```


#### Parameters
&nbsp;<dl><dt>document3D</dt><dd>Type: <a href="84efeb1f-fcf6-dda7-c768-14ce12a029f2">VM.Managed.Document3D</a><br />The document.</dd><dt>strRackGeometryName</dt><dd>Type: System.String<br />Name of the string rack geometry.</dd><dt>strStartRBEName</dt><dd>Type: System.String<br />Name of the string start rbe.</dd><dt>strEndRBEName</dt><dd>Type: System.String<br />Name of the string end rbe.</dd><dt>bUseStart</dt><dd>Type: System.Boolean<br />if set to `true` [b use start].</dd><dt>bUseEnd</dt><dd>Type: System.Boolean<br />if set to `true` [b use end].</dd><dt>strZAxis</dt><dd>Type: System.String<br />The string z axis.</dd><dt>strInitialAngle</dt><dd>Type: System.String<br />The Initial angle.</dd></dl>

## See Also


#### Reference
<a href="5452b1a2-b245-5edb-a98d-2c5d0ff1f121">UpdateRackInFE Class</a><br /><a href="41c4fdc5-124b-23c5-6377-7aa6fc09c9c4">UpdateRackInFE Overload</a><br /><a href="f69f4f48-6c25-4b7a-c6dc-c253dd218fde">VM.Managed.DAFUL.GearTrain.Operation Namespace</a><br />