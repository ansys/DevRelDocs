# ILinkCollection.DestroyObject Method 
 

Destroy this link

**Namespace:**&nbsp;<a href="73323b4e-37e3-2ba2-8f90-2d0dd58949a8">VM.Managed.Collections</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
void DestroyObject(
	Object objNotifier,
	LinkEventArgs arg
)
```

**VB**<br />
``` VB
Sub DestroyObject ( 
	objNotifier As Object,
	arg As LinkEventArgs
)
```

**C++**<br />
``` C++
void DestroyObject(
	Object^ objNotifier, 
	LinkEventArgs^ arg
)
```

**F#**<br />
``` F#
abstract DestroyObject : 
        objNotifier : Object * 
        arg : LinkEventArgs -> unit 

```


#### Parameters
&nbsp;<dl><dt>objNotifier</dt><dd>Type: System.Object<br />
The linked object.</dd><dt>arg</dt><dd>Type: <a href="fce56426-d69f-2183-7b9b-55717442720f">VM.Managed.LinkEventArgs</a><br />
The <a href="fce56426-d69f-2183-7b9b-55717442720f">LinkEventArgs</a> instance containing the event data.</dd></dl>

## See Also


#### Reference
<a href="9bee1464-9565-75bf-ae93-486a310b8ce3">ILinkCollection Interface</a><br /><a href="73323b4e-37e3-2ba2-8f90-2d0dd58949a8">VM.Managed.Collections Namespace</a><br />