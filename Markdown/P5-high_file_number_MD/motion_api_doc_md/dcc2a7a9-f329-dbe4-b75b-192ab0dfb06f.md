# CreateSubEntity.CreateStringValue Method (Document3D, String, Boolean)
 

Create the stringValue.

**Namespace:**&nbsp;<a href="b7bb79bf-42b7-6ccd-0f4e-1a2b938a9a1a">VM.Managed.DAFUL.Operation.Util</a><br />**Assembly:**&nbsp;VMOpCore (in VMOpCore.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public static StringValue CreateStringValue(
	Document3D document,
	string stringValue,
	bool isInterface
)
```

**VB**<br />
``` VB
Public Shared Function CreateStringValue ( 
	document As Document3D,
	stringValue As String,
	isInterface As Boolean
) As StringValue
```

**C++**<br />
``` C++
public:
static StringValue^ CreateStringValue(
	Document3D^ document, 
	String^ stringValue, 
	bool isInterface
)
```

**F#**<br />
``` F#
static member CreateStringValue : 
        document : Document3D * 
        stringValue : string * 
        isInterface : bool -> StringValue 

```


#### Parameters
&nbsp;<dl><dt>document</dt><dd>Type: <a href="84efeb1f-fcf6-dda7-c768-14ce12a029f2">VM.Managed.Document3D</a><br />The document.</dd><dt>stringValue</dt><dd>Type: System.String<br />The string value.</dd><dt>isInterface</dt><dd>Type: System.Boolean<br />The flag of interface.</dd></dl>

#### Return Value
Type: <a href="d68d3945-3a08-282a-52ab-c5b71c42cecf">StringValue</a><br />The new string value.

## See Also


#### Reference
<a href="9b1582bb-c37c-7592-f2ed-73e1a0a55770">CreateSubEntity Class</a><br /><a href="591def38-9fe5-5972-96ee-f64db2f48e29">CreateStringValue Overload</a><br /><a href="b7bb79bf-42b7-6ccd-0f4e-1a2b938a9a1a">VM.Managed.DAFUL.Operation.Util Namespace</a><br />