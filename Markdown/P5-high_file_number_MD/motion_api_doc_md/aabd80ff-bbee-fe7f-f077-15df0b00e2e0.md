# GearSetCrossHelical.GetPositionsForMeshing Method 
 

Get positions for meshing.

**Namespace:**&nbsp;<a href="faae22d6-2802-465b-a817-230732284684">VM.Managed.DAFUL.GearTrain</a><br />**Assembly:**&nbsp;VMDGearTrain (in VMDGearTrain.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
protected override void GetPositionsForMeshing(
	List<IGearBuilder> lstOrder,
	int i,
	ref VectorBase vec1,
	ref VectorBase vec2
)
```

**VB**<br />
``` VB
Protected Overrides Sub GetPositionsForMeshing ( 
	lstOrder As List(Of IGearBuilder),
	i As Integer,
	ByRef vec1 As VectorBase,
	ByRef vec2 As VectorBase
)
```

**C++**<br />
``` C++
protected:
virtual void GetPositionsForMeshing(
	List<IGearBuilder^>^ lstOrder, 
	int i, 
	VectorBase^% vec1, 
	VectorBase^% vec2
) override
```

**F#**<br />
``` F#
abstract GetPositionsForMeshing : 
        lstOrder : List<IGearBuilder> * 
        i : int * 
        vec1 : VectorBase byref * 
        vec2 : VectorBase byref -> unit 
override GetPositionsForMeshing : 
        lstOrder : List<IGearBuilder> * 
        i : int * 
        vec1 : VectorBase byref * 
        vec2 : VectorBase byref -> unit 
```


#### Parameters
&nbsp;<dl><dt>lstOrder</dt><dd>Type: System.Collections.Generic.List(<a href="fa495c45-ef33-44b4-cf7d-0a970531183f">IGearBuilder</a>)<br />The builder list</dd><dt>i</dt><dd>Type: System.Int32<br />The gear index</dd><dt>vec1</dt><dd>Type: <a href="d8618877-ab49-d81c-7742-73c124462921">VM.Managed.VectorBase</a><br />The first gear position</dd><dt>vec2</dt><dd>Type: <a href="d8618877-ab49-d81c-7742-73c124462921">VM.Managed.VectorBase</a><br />The second gear position</dd></dl>

## See Also


#### Reference
<a href="b4aff73a-4adb-c26c-a5ff-8a30ec77abf3">GearSetCrossHelical Class</a><br /><a href="faae22d6-2802-465b-a817-230732284684">VM.Managed.DAFUL.GearTrain Namespace</a><br />