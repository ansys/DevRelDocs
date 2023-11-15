# LinkCollection(*T*, *TLink*, *TCollection*).CopyTo Method 
 

**Namespace:**&nbsp;<a href="73323b4e-37e3-2ba2-8f90-2d0dd58949a8">VM.Managed.Collections</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public virtual void CopyTo(
	T[] ar,
	int arrayIndex
)
```

**VB**<br />
``` VB
Public Overridable Sub CopyTo ( 
	ar As T(),
	arrayIndex As Integer
)
```

**C++**<br />
``` C++
public:
virtual void CopyTo(
	array<T>^ ar, 
	int arrayIndex
)
```

**F#**<br />
``` F#
abstract CopyTo : 
        ar : 'T[] * 
        arrayIndex : int -> unit 
override CopyTo : 
        ar : 'T[] * 
        arrayIndex : int -> unit 
```


#### Parameters
&nbsp;<dl><dt>ar</dt><dd>Type: <a href="e4824ae8-33d1-6a5e-988d-10e4a4b41048">*T*</a>[]<br /></dd><dt>arrayIndex</dt><dd>Type: System.Int32<br /></dd></dl>

#### Implements
ICollection(T).CopyTo(T[], Int32)<br />

## See Also


#### Reference
<a href="e4824ae8-33d1-6a5e-988d-10e4a4b41048">LinkCollection(T, TLink, TCollection) Class</a><br /><a href="73323b4e-37e3-2ba2-8f90-2d0dd58949a8">VM.Managed.Collections Namespace</a><br />