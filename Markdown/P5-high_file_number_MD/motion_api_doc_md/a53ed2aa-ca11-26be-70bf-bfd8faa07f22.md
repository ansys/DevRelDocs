# ReferenceConnectable.GetPointDirection Method 
 

Gets the geometry's point and direction.

**Namespace:**&nbsp;<a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL</a><br />**Assembly:**&nbsp;VMDFBase (in VMDFBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public virtual bool GetPointDirection(
	ref VectorBase point,
	ref VectorBase direction,
	IReferencable reference
)
```

**VB**<br />
``` VB
Public Overridable Function GetPointDirection ( 
	ByRef point As VectorBase,
	ByRef direction As VectorBase,
	reference As IReferencable
) As Boolean
```

**C++**<br />
``` C++
public:
virtual bool GetPointDirection(
	VectorBase^% point, 
	VectorBase^% direction, 
	IReferencable^ reference
)
```

**F#**<br />
``` F#
abstract GetPointDirection : 
        point : VectorBase byref * 
        direction : VectorBase byref * 
        reference : IReferencable -> bool 
override GetPointDirection : 
        point : VectorBase byref * 
        direction : VectorBase byref * 
        reference : IReferencable -> bool 
```


#### Parameters
&nbsp;<dl><dt>point</dt><dd>Type: <a href="d8618877-ab49-d81c-7742-73c124462921">VM.Managed.VectorBase</a><br />The point.</dd><dt>direction</dt><dd>Type: <a href="d8618877-ab49-d81c-7742-73c124462921">VM.Managed.VectorBase</a><br />The direction.</dd><dt>reference</dt><dd>Type: <a href="b38585ba-c24b-8947-6d91-4d46aacf3364">VM.Managed.IReferencable</a><br />The reference [no use].</dd></dl>

#### Return Value
Type: Boolean<br />`true` if success; otherwise, `false`.

#### Implements
<a href="b27e7982-d2ce-e80b-7a9c-6b9bb86c3e60">IContactableGeometry2Dot5D.GetPointDirection(VectorBase, VectorBase, IReferencable)</a><br />

## See Also


#### Reference
<a href="09a002aa-7ae4-cfdf-13de-9d240665de0f">ReferenceConnectable Class</a><br /><a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL Namespace</a><br />