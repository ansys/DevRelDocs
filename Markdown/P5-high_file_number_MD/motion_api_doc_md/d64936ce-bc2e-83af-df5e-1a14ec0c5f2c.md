# ArgumentList.Arguments Property 
 

Gets or sets the argument's link list.

**Namespace:**&nbsp;<a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL</a><br />**Assembly:**&nbsp;VMDSB (in VMDSB.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public List<Link<IArgument, LinkContainer.Update, LinkContainer.Destroy, LinkContainer.None>> Arguments { get; set; }
```

**VB**<br />
``` VB
Public Property Arguments As List(Of Link(Of IArgument, LinkContainer.Update, LinkContainer.Destroy, LinkContainer.None))
	Get
	Set
```

**C++**<br />
``` C++
public:
property List<Link<IArgument^, LinkContainer.Update, LinkContainer.Destroy, LinkContainer.None>^>^ Arguments {
	List<Link<IArgument^, LinkContainer.Update, LinkContainer.Destroy, LinkContainer.None>^>^ get ();
	void set (List<Link<IArgument^, LinkContainer.Update, LinkContainer.Destroy, LinkContainer.None>^>^ value);
}
```

**F#**<br />
``` F#
member Arguments : List<Link<IArgument, LinkContainer.Update, LinkContainer.Destroy, LinkContainer.None>> with get, set

```


#### Property Value
Type: List(<a href="3aa46222-0ace-f629-167e-4fa342a635cf">Link</a>(IArgument, <a href="1ae84535-90ee-5317-eabc-56c5f6a15a02">LinkContainer.Update</a>, <a href="c8e4a1ba-dfa0-4c2d-c03d-6f7a977cc956">LinkContainer.Destroy</a>, <a href="b2001993-3a4f-93d9-32e7-431dd410f16d">LinkContainer.None</a>))<br />The argument's link list.

## See Also


#### Reference
<a href="f04d60e5-1d6f-e17e-77b1-7755936ab9d1">ArgumentList Class</a><br /><a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL Namespace</a><br />