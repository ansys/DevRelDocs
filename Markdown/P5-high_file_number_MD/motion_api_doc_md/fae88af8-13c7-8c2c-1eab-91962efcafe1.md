# CreateConstraint.GetConnectorParameter Method (IDocument, String, IConnectable, IConnectable, CreateConstraint.ParameterType, Double, Object[])
 

Gets connector parameter.

**Namespace:**&nbsp;<a href="b7bb79bf-42b7-6ccd-0f4e-1a2b938a9a1a">VM.Managed.DAFUL.Operation.Util</a><br />**Assembly:**&nbsp;VMOpCore (in VMOpCore.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public static bool GetConnectorParameter(
	IDocument doc,
	string strName,
	IConnectable connectableFirst,
	IConnectable connectableSecond,
	CreateConstraint.ParameterType parameterType,
	double dTolerance,
	ref Object[] pickedResults
)
```

**VB**<br />
``` VB
Public Shared Function GetConnectorParameter ( 
	doc As IDocument,
	strName As String,
	connectableFirst As IConnectable,
	connectableSecond As IConnectable,
	parameterType As CreateConstraint.ParameterType,
	dTolerance As Double,
	ByRef pickedResults As Object()
) As Boolean
```

**C++**<br />
``` C++
public:
static bool GetConnectorParameter(
	IDocument^ doc, 
	String^ strName, 
	IConnectable^ connectableFirst, 
	IConnectable^ connectableSecond, 
	CreateConstraint.ParameterType parameterType, 
	double dTolerance, 
	array<Object^>^% pickedResults
)
```

**F#**<br />
``` F#
static member GetConnectorParameter : 
        doc : IDocument * 
        strName : string * 
        connectableFirst : IConnectable * 
        connectableSecond : IConnectable * 
        parameterType : CreateConstraint.ParameterType * 
        dTolerance : float * 
        pickedResults : Object[] byref -> bool 

```


#### Parameters
&nbsp;<dl><dt>doc</dt><dd>Type: IDocument<br /></dd><dt>strName</dt><dd>Type: System.String<br /></dd><dt>connectableFirst</dt><dd>Type: <a href="98d125cc-f82d-e9ce-57ae-6b17c2b5e0c2">VM.Managed.DAFUL.IConnectable</a><br /></dd><dt>connectableSecond</dt><dd>Type: <a href="98d125cc-f82d-e9ce-57ae-6b17c2b5e0c2">VM.Managed.DAFUL.IConnectable</a><br /></dd><dt>parameterType</dt><dd>Type: <a href="f61231dc-5390-3f5d-0b42-47788c3a81b1">VM.Managed.DAFUL.Operation.Util.CreateConstraint.ParameterType</a><br /></dd><dt>dTolerance</dt><dd>Type: System.Double<br /></dd><dt>pickedResults</dt><dd>Type: System.Object[]<br /></dd></dl>

#### Return Value
Type: Boolean

## See Also


#### Reference
<a href="c8fd8880-7c36-47ef-e472-324201e16562">CreateConstraint Class</a><br /><a href="8c9d8e68-6dcd-c67a-4487-cb6425e29ce6">GetConnectorParameter Overload</a><br /><a href="b7bb79bf-42b7-6ccd-0f4e-1a2b938a9a1a">VM.Managed.DAFUL.Operation.Util Namespace</a><br />