# Connector(*TProperty*).MakeReference Method 
 

Makes the reference.

**Namespace:**&nbsp;<a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL</a><br />**Assembly:**&nbsp;VMDFBase (in VMDFBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public void MakeReference(
	LinkedList<Reference> lstRef
)
```

**VB**<br />
``` VB
Public Sub MakeReference ( 
	lstRef As LinkedList(Of Reference)
)
```

**C++**<br />
``` C++
public:
virtual void MakeReference(
	LinkedList<Reference^>^ lstRef
) sealed
```

**F#**<br />
``` F#
abstract MakeReference : 
        lstRef : LinkedList<Reference> -> unit 
override MakeReference : 
        lstRef : LinkedList<Reference> -> unit 
```


#### Parameters
&nbsp;<dl><dt>lstRef</dt><dd>Type: System.Collections.Generic.LinkedList(<a href="161cfbad-1497-c4f8-ac66-49608cd40359">Reference</a>)<br />The referece container.</dd></dl>

#### Implements
<a href="b293e0e9-6855-7f3d-5bf0-bc7b401f3564">IReferencable.MakeReference(LinkedList(Reference))</a><br />

## See Also


#### Reference
<a href="66ac882a-92c3-dc90-fd6b-70b9a6a7d20b">Connector(TProperty) Class</a><br /><a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL Namespace</a><br />