# PropertyDocumentBase.OwnedList Property 
 

**Note: This API is now obsolete.**

Gets or sets the object list in propery document.

**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMObjBase (in VMObjBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[ObsoleteAttribute]
public List<Link<ObjectBase, LinkContainer.None, LinkContainer.None, LinkContainer.None>> OwnedList { get; }
```

**VB**<br />
``` VB
<ObsoleteAttribute>
Public ReadOnly Property OwnedList As List(Of Link(Of ObjectBase, LinkContainer.None, LinkContainer.None, LinkContainer.None))
	Get
```

**C++**<br />
``` C++
public:
[ObsoleteAttribute]
property List<Link<ObjectBase^, LinkContainer.None, LinkContainer.None, LinkContainer.None>^>^ OwnedList {
	List<Link<ObjectBase^, LinkContainer.None, LinkContainer.None, LinkContainer.None>^>^ get ();
}
```

**F#**<br />
``` F#
[<ObsoleteAttribute>]
member OwnedList : List<Link<ObjectBase, LinkContainer.None, LinkContainer.None, LinkContainer.None>> with get

```


#### Property Value
Type: List(<a href="3aa46222-0ace-f629-167e-4fa342a635cf">Link</a>(<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">ObjectBase</a>, <a href="b2001993-3a4f-93d9-32e7-431dd410f16d">LinkContainer.None</a>, <a href="b2001993-3a4f-93d9-32e7-431dd410f16d">LinkContainer.None</a>, <a href="b2001993-3a4f-93d9-32e7-431dd410f16d">LinkContainer.None</a>))<br />The object list.

## See Also


#### Reference
<a href="18e05d7a-efef-691f-e13b-71d3c21b42ce">PropertyDocumentBase Class</a><br /><a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />