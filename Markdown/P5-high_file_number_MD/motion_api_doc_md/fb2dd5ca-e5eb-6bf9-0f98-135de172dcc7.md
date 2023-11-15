# BuilderImport.LinkAddedToDocument Method 
 

Add linked object to a document.

**Namespace:**&nbsp;<a href="bdeeb71e-08d7-cd91-e11a-795ab9385ff7">VM.Managed.CAD</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public override void LinkAddedToDocument(
	Object objNotifier,
	AddToDocEventArgs arg
)
```

**VB**<br />
``` VB
Public Overrides Sub LinkAddedToDocument ( 
	objNotifier As Object,
	arg As AddToDocEventArgs
)
```

**C++**<br />
``` C++
public:
virtual void LinkAddedToDocument(
	Object^ objNotifier, 
	AddToDocEventArgs^ arg
) override
```

**F#**<br />
``` F#
abstract LinkAddedToDocument : 
        objNotifier : Object * 
        arg : AddToDocEventArgs -> unit 
override LinkAddedToDocument : 
        objNotifier : Object * 
        arg : AddToDocEventArgs -> unit 
```


#### Parameters
&nbsp;<dl><dt>objNotifier</dt><dd>Type: System.Object<br />The linked object.</dd><dt>arg</dt><dd>Type: <a href="42822aa1-ff1d-18b7-7312-5ef980bbb9d7">VM.Managed.AddToDocEventArgs</a><br />The <a href="42822aa1-ff1d-18b7-7312-5ef980bbb9d7">AddToDocEventArgs</a> instance containing the event data.</dd></dl>

## See Also


#### Reference
<a href="4a52f44a-2a90-71cf-d8fb-bb77e6d78d48">BuilderImport Class</a><br /><a href="bdeeb71e-08d7-cd91-e11a-795ab9385ff7">VM.Managed.CAD Namespace</a><br />