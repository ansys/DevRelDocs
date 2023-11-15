# LinkDictionaryCollectionBase(*T*, *TValue*, *TValueWrapper*, *TValueConverter*).DestroyCollection Method 
 

**Namespace:**&nbsp;<a href="73323b4e-37e3-2ba2-8f90-2d0dd58949a8">VM.Managed.Collections</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
internal void DestroyCollection(
	Object objNotifier,
	LinkEventArgs arg
)
```

**VB**<br />
``` VB
Friend Sub DestroyCollection ( 
	objNotifier As Object,
	arg As LinkEventArgs
)
```

**C++**<br />
``` C++
internal:
virtual void DestroyCollection(
	Object^ objNotifier, 
	LinkEventArgs^ arg
) sealed
```

**F#**<br />
``` F#
internal abstract DestroyCollection : 
        objNotifier : Object * 
        arg : LinkEventArgs -> unit 
internal override DestroyCollection : 
        objNotifier : Object * 
        arg : LinkEventArgs -> unit 
```


#### Parameters
&nbsp;<dl><dt>objNotifier</dt><dd>Type: System.Object<br /></dd><dt>arg</dt><dd>Type: <a href="fce56426-d69f-2183-7b9b-55717442720f">VM.Managed.LinkEventArgs</a><br /></dd></dl>

#### Implements
<a href="510eceac-28c5-cefb-d9ec-d9a3cd6add1b">ILinkCollection.DestroyObject(Object, LinkEventArgs)</a><br />

## See Also


#### Reference
<a href="45e41539-65c5-8c38-8071-9f7e8a5c6fd0">LinkDictionaryCollectionBase(T, TValue, TValueWrapper, TValueConverter) Class</a><br /><a href="73323b4e-37e3-2ba2-8f90-2d0dd58949a8">VM.Managed.Collections Namespace</a><br />