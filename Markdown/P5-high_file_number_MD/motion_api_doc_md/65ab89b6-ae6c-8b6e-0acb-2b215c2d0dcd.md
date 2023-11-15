# SplineFile.GetPoints Method (List(Double), List(Double), String)
 

Gets the points.

**Namespace:**&nbsp;<a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL</a><br />**Assembly:**&nbsp;VMDSB (in VMDSB.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public override void GetPoints(
	List<double> lstX,
	List<double> lstY,
	string strDocumentFilePath
)
```

**VB**<br />
``` VB
Public Overrides Sub GetPoints ( 
	lstX As List(Of Double),
	lstY As List(Of Double),
	strDocumentFilePath As String
)
```

**C++**<br />
``` C++
public:
virtual void GetPoints(
	List<double>^ lstX, 
	List<double>^ lstY, 
	String^ strDocumentFilePath
) override
```

**F#**<br />
``` F#
abstract GetPoints : 
        lstX : List<float> * 
        lstY : List<float> * 
        strDocumentFilePath : string -> unit 
override GetPoints : 
        lstX : List<float> * 
        lstY : List<float> * 
        strDocumentFilePath : string -> unit 
```


#### Parameters
&nbsp;<dl><dt>lstX</dt><dd>Type: System.Collections.Generic.List(Double)<br />The LST X.</dd><dt>lstY</dt><dd>Type: System.Collections.Generic.List(Double)<br />The LST Y.</dd><dt>strDocumentFilePath</dt><dd>Type: System.String<br />The Document file path.</dd></dl>

## See Also


#### Reference
<a href="df51da34-3420-5fad-a3b6-df271a39b4c8">SplineFile Class</a><br /><a href="21fa72d7-893c-c3c1-1a22-f68668462d78">GetPoints Overload</a><br /><a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL Namespace</a><br />