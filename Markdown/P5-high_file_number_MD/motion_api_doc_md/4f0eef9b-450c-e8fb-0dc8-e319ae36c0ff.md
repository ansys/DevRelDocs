# Link(*T*, *TUpdate*, *TDestroy*, *TOwnerDestroy*).Object Property 
 

Gets or sets the linked object.

**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public virtual T Object { get; set; }
```

**VB**<br />
``` VB
Public Overridable Property Object As T
	Get
	Set
```

**C++**<br />
``` C++
public:
virtual property T Object {
	T get ();
	void set (T value);
}
```

**F#**<br />
``` F#
abstract Object : 'T with get, set
override Object : 'T with get, set
```


#### Property Value
Type: <a href="3aa46222-0ace-f629-167e-4fa342a635cf">*T*</a><br />The linked object.

#### Implements
<a href="437b381e-e49f-69e5-0b9f-efd63c1c26c2">ITypedLink(T).Object</a><br />

## See Also


#### Reference
<a href="3aa46222-0ace-f629-167e-4fa342a635cf">Link(T, TUpdate, TDestroy, TOwnerDestroy) Class</a><br /><a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />