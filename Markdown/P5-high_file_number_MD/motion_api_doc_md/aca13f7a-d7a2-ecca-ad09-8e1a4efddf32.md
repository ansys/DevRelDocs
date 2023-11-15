# AddRackToRBEInFE.ExecutePickOperation Method 
 

Executes the pick operation.

**Namespace:**&nbsp;<a href="f69f4f48-6c25-4b7a-c6dc-c253dd218fde">VM.Managed.DAFUL.GearTrain.Operation</a><br />**Assembly:**&nbsp;VMOpGearTrain (in VMOpGearTrain.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
protected override bool ExecutePickOperation(
	XmlDocument dom,
	string[] arPickResult,
	string[] arPickOp,
	int start,
	int end
)
```

**VB**<br />
``` VB
Protected Overrides Function ExecutePickOperation ( 
	dom As XmlDocument,
	arPickResult As String(),
	arPickOp As String(),
	start As Integer,
	end As Integer
) As Boolean
```

**C++**<br />
``` C++
protected:
virtual bool ExecutePickOperation(
	XmlDocument^ dom, 
	array<String^>^ arPickResult, 
	array<String^>^ arPickOp, 
	int start, 
	int end
) override
```

**F#**<br />
``` F#
abstract ExecutePickOperation : 
        dom : XmlDocument * 
        arPickResult : string[] * 
        arPickOp : string[] * 
        start : int * 
        end : int -> bool 
override ExecutePickOperation : 
        dom : XmlDocument * 
        arPickResult : string[] * 
        arPickOp : string[] * 
        start : int * 
        end : int -> bool 
```


#### Parameters
&nbsp;<dl><dt>dom</dt><dd>Type: System.Xml.XmlDocument<br />The DOM.</dd><dt>arPickResult</dt><dd>Type: System.String[]<br />The ar pick result.</dd><dt>arPickOp</dt><dd>Type: System.String[]<br />The ar pick op.</dd><dt>start</dt><dd>Type: System.Int32<br />The start.</dd><dt>end</dt><dd>Type: System.Int32<br />The end.</dd></dl>

#### Return Value
Type: Boolean<br />

## See Also


#### Reference
<a href="df3d8b81-927f-516d-5854-7f81c5c843ab">AddRackToRBEInFE Class</a><br /><a href="f69f4f48-6c25-4b7a-c6dc-c253dd218fde">VM.Managed.DAFUL.GearTrain.Operation Namespace</a><br />