# ImprintUtil.FindNearestTopologyIndex Method (Document3D, Body, VectorBase, List(Int32), VectorBase)
 

Find nearest topology index

**Namespace:**&nbsp;<a href="fc4482f8-f667-ee99-4fe3-be1e2e92bf38">VM.Managed.DAFUL.Operation</a><br />**Assembly:**&nbsp;VMOP (in VMOP.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public static bool FindNearestTopologyIndex(
	Document3D doc,
	Body target,
	VectorBase vecSeed,
	ref List<int> lstIndex,
	ref VectorBase vecResult
)
```

**VB**<br />
``` VB
Public Shared Function FindNearestTopologyIndex ( 
	doc As Document3D,
	target As Body,
	vecSeed As VectorBase,
	ByRef lstIndex As List(Of Integer),
	ByRef vecResult As VectorBase
) As Boolean
```

**C++**<br />
``` C++
public:
static bool FindNearestTopologyIndex(
	Document3D^ doc, 
	Body^ target, 
	VectorBase^ vecSeed, 
	List<int>^% lstIndex, 
	VectorBase^% vecResult
)
```

**F#**<br />
``` F#
static member FindNearestTopologyIndex : 
        doc : Document3D * 
        target : Body * 
        vecSeed : VectorBase * 
        lstIndex : List<int> byref * 
        vecResult : VectorBase byref -> bool 

```


#### Parameters
&nbsp;<dl><dt>doc</dt><dd>Type: <a href="84efeb1f-fcf6-dda7-c768-14ce12a029f2">VM.Managed.Document3D</a><br />The document</dd><dt>target</dt><dd>Type: <a href="dc98f941-e8ef-25f9-9a55-0151997e3c14">VM.Managed.CAD.Body</a><br />The target</dd><dt>vecSeed</dt><dd>Type: <a href="d8618877-ab49-d81c-7742-73c124462921">VM.Managed.VectorBase</a><br />The seed vector</dd><dt>lstIndex</dt><dd>Type: System.Collections.Generic.List(Int32)<br />The index array</dd><dt>vecResult</dt><dd>Type: <a href="d8618877-ab49-d81c-7742-73c124462921">VM.Managed.VectorBase</a><br />The result vector</dd></dl>

#### Return Value
Type: Boolean<br />

## See Also


#### Reference
<a href="b60fb3c5-8c4b-f025-0474-5387a4bf61de">ImprintUtil Class</a><br /><a href="5a75cb7a-575c-ddd1-fac9-1b232bc95d0d">FindNearestTopologyIndex Overload</a><br /><a href="fc4482f8-f667-ee99-4fe3-be1e2e92bf38">VM.Managed.DAFUL.Operation Namespace</a><br />