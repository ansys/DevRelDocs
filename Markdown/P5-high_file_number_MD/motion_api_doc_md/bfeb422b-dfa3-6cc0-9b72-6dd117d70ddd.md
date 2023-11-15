# Document.ChildAdded Event
 

Occurs when [on added child].

Occurs when [on added child].

**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
public virtual event EventHandler<Identifier> ChildAdded
```

**VB**<br />
``` VB
Public Overridable Event ChildAdded As EventHandler(Of Identifier)
```

**C++**<br />
``` C++
public:
virtual  event EventHandler<Identifier>^ ChildAdded {
	void add (EventHandler<Identifier>^ value);
	void remove (EventHandler<Identifier>^ value);
}
```

**F#**<br />
``` F#
abstract ChildAdded : IEvent<EventHandler<Identifier>,
    Identifier>
override ChildAdded : IEvent<EventHandler<Identifier>,
    Identifier>
```


#### Value
Type: System.EventHandler(Identifier)

#### Implements
IDocument.ChildAdded<br />

## See Also


#### Reference
<a href="3dea251e-faa0-432d-002f-eefcd34d482f">Document Class</a><br /><a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />