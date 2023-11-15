# Weld.GetWeldPoint Method (Range, VectorBase[], VectorBase[])
 

Gets the weld point.

**Namespace:**&nbsp;<a href="8de27067-0dbb-4037-14da-18b5cdbd081c">VM.Managed.DAFUL.MeshFree</a><br />**Assembly:**&nbsp;VMDMeshFree (in VMDMeshFree.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public bool GetWeldPoint(
	Range par,
	ref VectorBase[] vecUpper,
	ref VectorBase[] vecLower
)
```

**VB**<br />
``` VB
Public Function GetWeldPoint ( 
	par As Range,
	ByRef vecUpper As VectorBase(),
	ByRef vecLower As VectorBase()
) As Boolean
```

**C++**<br />
``` C++
public:
bool GetWeldPoint(
	Range^ par, 
	array<VectorBase^>^% vecUpper, 
	array<VectorBase^>^% vecLower
)
```

**F#**<br />
``` F#
member GetWeldPoint : 
        par : Range * 
        vecUpper : VectorBase[] byref * 
        vecLower : VectorBase[] byref -> bool 

```


#### Parameters
&nbsp;<dl><dt>par</dt><dd>Type: <a href="57bba2e5-d2b0-a79a-e9f2-06f4b3adcc70">VM.Managed.Range</a><br />The par.</dd><dt>vecUpper</dt><dd>Type: <a href="d8618877-ab49-d81c-7742-73c124462921">VM.Managed.VectorBase</a>[]<br />The vec upper.</dd><dt>vecLower</dt><dd>Type: <a href="d8618877-ab49-d81c-7742-73c124462921">VM.Managed.VectorBase</a>[]<br />The vec lower.</dd></dl>

#### Return Value
Type: Boolean<br />

## See Also


#### Reference
<a href="8363aa17-b3a1-c15c-fda8-8a8290667629">Weld Class</a><br /><a href="f2ed3f51-9df3-24ce-d413-43a741d83efd">GetWeldPoint Overload</a><br /><a href="8de27067-0dbb-4037-14da-18b5cdbd081c">VM.Managed.DAFUL.MeshFree Namespace</a><br />