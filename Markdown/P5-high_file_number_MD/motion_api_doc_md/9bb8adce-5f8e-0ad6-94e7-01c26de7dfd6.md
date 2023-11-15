# Body.FaceContainer.Remove Method 
 

Removes the specified name [Not Supported].

**Namespace:**&nbsp;<a href="bdeeb71e-08d7-cd91-e11a-795ab9385ff7">VM.Managed.CAD</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public bool Remove(
	Face A_0
)
```

**VB**<br />
``` VB
Public Function Remove ( 
	A_0 As Face
) As Boolean
```

**C++**<br />
``` C++
public:
virtual bool Remove(
	Face^ A_0
) sealed
```

**F#**<br />
``` F#
abstract Remove : 
        A_0 : Face -> bool 
override Remove : 
        A_0 : Face -> bool 
```


#### Parameters
&nbsp;<dl><dt>A_0</dt><dd>Type: <a href="df5e9ae2-e525-acdc-77a2-e0af221d13c7">VM.Managed.CAD.Face</a><br /></dd></dl>

#### Return Value
Type: Boolean<br />`true` if success; otherwise, `false`.

#### Implements
ICollection(T).Remove(T)<br />

## See Also


#### Reference
<a href="d115ad49-934d-7b06-ad19-c14f93d95701">Body.FaceContainer Class</a><br /><a href="bdeeb71e-08d7-cd91-e11a-795ab9385ff7">VM.Managed.CAD Namespace</a><br />