# DesignFrame.InstantiateImpl Method 
 

Instantiates the specified reference.

**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMObjBase (in VMObjBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
protected virtual void InstantiateImpl(
	Reference reference,
	Canvas canvas
)
```

**VB**<br />
``` VB
Protected Overridable Sub InstantiateImpl ( 
	reference As Reference,
	canvas As Canvas
)
```

**C++**<br />
``` C++
protected:
virtual void InstantiateImpl(
	Reference^ reference, 
	Canvas^ canvas
)
```

**F#**<br />
``` F#
abstract InstantiateImpl : 
        reference : Reference * 
        canvas : Canvas -> unit 
override InstantiateImpl : 
        reference : Reference * 
        canvas : Canvas -> unit 
```


#### Parameters
&nbsp;<dl><dt>reference</dt><dd>Type: <a href="161cfbad-1497-c4f8-ac66-49608cd40359">VM.Managed.Reference</a><br />The reference</dd><dt>canvas</dt><dd>Type: Canvas<br />The canvas</dd></dl>

## See Also


#### Reference
<a href="c0295196-6569-df51-6899-78f73d4d18e7">DesignFrame Class</a><br /><a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />