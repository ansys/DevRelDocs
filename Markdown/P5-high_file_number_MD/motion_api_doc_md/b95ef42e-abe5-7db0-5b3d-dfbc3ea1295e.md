# ObjectBase.IsEqualArray(*T*) Method 
 

Equal two array

**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public static bool IsEqualArray<T>(
	T[] arA,
	T[] arB
)

```

**VB**<br />
``` VB
Public Shared Function IsEqualArray(Of T) ( 
	arA As T(),
	arB As T()
) As Boolean
```

**C++**<br />
``` C++
public:
generic<typename T>
static bool IsEqualArray(
	array<T>^ arA, 
	array<T>^ arB
)
```

**F#**<br />
``` F#
static member IsEqualArray : 
        arA : 'T[] * 
        arB : 'T[] -> bool 

```


#### Parameters
&nbsp;<dl><dt>arA</dt><dd>Type: *T*[]<br />The array A.</dd><dt>arB</dt><dd>Type: *T*[]<br />The array B.</dd></dl>

#### Type Parameters
&nbsp;<dl><dt>T</dt><dd /></dl>

#### Return Value
Type: Boolean

## See Also


#### Reference
<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">ObjectBase Class</a><br /><a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />