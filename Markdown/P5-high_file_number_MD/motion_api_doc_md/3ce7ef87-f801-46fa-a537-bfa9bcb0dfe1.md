# IContactableRigid3D.GetPointDirectionOnGeometry Method 
 

Gets the point and direction.

**Namespace:**&nbsp;<a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL</a><br />**Assembly:**&nbsp;VMDFBase (in VMDFBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
bool GetPointDirectionOnGeometry(
	ref VectorBase point,
	ref VectorBase direction,
	IReferencable reference
)
```

**VB**<br />
``` VB
Function GetPointDirectionOnGeometry ( 
	ByRef point As VectorBase,
	ByRef direction As VectorBase,
	reference As IReferencable
) As Boolean
```

**C++**<br />
``` C++
bool GetPointDirectionOnGeometry(
	VectorBase^% point, 
	VectorBase^% direction, 
	IReferencable^ reference
)
```

**F#**<br />
``` F#
abstract GetPointDirectionOnGeometry : 
        point : VectorBase byref * 
        direction : VectorBase byref * 
        reference : IReferencable -> bool 

```


#### Parameters
&nbsp;<dl><dt>point</dt><dd>Type: <a href="d8618877-ab49-d81c-7742-73c124462921">VM.Managed.VectorBase</a><br />The point.</dd><dt>direction</dt><dd>Type: <a href="d8618877-ab49-d81c-7742-73c124462921">VM.Managed.VectorBase</a><br />The direction.</dd><dt>reference</dt><dd>Type: <a href="b38585ba-c24b-8947-6d91-4d46aacf3364">VM.Managed.IReferencable</a><br />The reference.</dd></dl>

#### Return Value
Type: Boolean<br />`true` if success; otherwise, `false`.

## See Also


#### Reference
<a href="fb95d43c-5a4a-8308-6cdc-ae23af91e9f2">IContactableRigid3D Interface</a><br /><a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL Namespace</a><br />