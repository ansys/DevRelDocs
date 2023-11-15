# LinkCollectionWithFixedAddition(*T*, *TLink*, *TCollection*) Class
 


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;<a href="e4824ae8-33d1-6a5e-988d-10e4a4b41048">VM.Managed.Collections.LinkCollection</a>(*T*, *TLink*, *TCollection*)<br />&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.Collections.LinkCollectionWithFixedAddition(T, TLink, TCollection)<br />
**Namespace:**&nbsp;<a href="73323b4e-37e3-2ba2-8f90-2d0dd58949a8">VM.Managed.Collections</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public sealed class LinkCollectionWithFixedAddition<T, TLink, TCollection> : LinkCollection<T, TLink, TCollection>
where T : class
where TLink : class, Object, ITypedLink<T>
where TCollection : new(), Object, ICollection<TLink>

```

**VB**<br />
``` VB
<SerializableAttribute>
Public NotInheritable Class LinkCollectionWithFixedAddition(Of T As Class, TLink As {Class, Object, ITypedLink(Of T)}, TCollection As {New, Object, ICollection(Of TLink)})
	Inherits LinkCollection(Of T, TLink, TCollection)
```

**C++**<br />
``` C++
[SerializableAttribute]
generic<typename T, typename TLink, typename TCollection>
where T : ref class
where TLink : ref class, Object, ITypedLink<T>
where TCollection : gcnew(), Object, ICollection<TLink>
public ref class LinkCollectionWithFixedAddition sealed : public LinkCollection<T, TLink, TCollection>
```

**F#**<br />
``` F#
[<SealedAttribute>]
[<SerializableAttribute>]
type LinkCollectionWithFixedAddition<'T, 'TLink, 'TCollection when 'T : not struct when 'TLink : not struct and Object and ITypedLink<'T> when 'TCollection : new() and Object and ICollection<'TLink>> =  
    class
        inherit LinkCollection<'T, 'TLink, 'TCollection>
    end
```


#### Type Parameters
&nbsp;<dl><dt>T</dt><dd /><dt>TLink</dt><dd /><dt>TCollection</dt><dd /></dl>

## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="f55c848a-99b8-313a-ce70-eaa27b6925b2">LinkCollectionWithFixedAddition(T, TLink, TCollection)(ILinkContainer, Int32)</a></td><td>
Initializes a new instance of the LinkCollectionWithFixedAddition(T, TLink, TCollection) class</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="c973bdba-89d2-f4d7-7a0d-cee8efd665d4">LinkCollectionWithFixedAddition(T, TLink, TCollection)(ILinkContainer, TCollection, Int32)</a></td><td>
Initializes a new instance of the LinkCollectionWithFixedAddition(T, TLink, TCollection) class</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="f7b84425-d0d9-4d08-7603-bb56e228f8c1">LinkCollectionWithFixedAddition(T, TLink, TCollection)(ILinkContainer, Int32, Int32)</a></td><td>
Initializes a new instance of the LinkCollectionWithFixedAddition(T, TLink, TCollection) class</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="badc9c4a-3f21-8d4a-75b6-2f3afb79968b">LinkCollectionWithFixedAddition(T, TLink, TCollection)(ILinkContainer, TCollection, Int32, Int32)</a></td><td>
Initializes a new instance of the LinkCollectionWithFixedAddition(T, TLink, TCollection) class</td></tr></table>&nbsp;
<a href="#linkcollectionwithfixedaddition(*t*,-*tlink*,-*tcollection*)-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="60b2d1bd-4d3d-dd24-bddb-0486b0896b3e">Add(T)</a></td><td> (Overrides <a href="733e927f-f91e-e230-1393-dd7062f8d6bf">LinkCollection(T, TLink, TCollection).Add(T)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="f52156bd-1734-1737-89b2-a3980335b0e0">Add(T, Boolean)</a></td><td> (Overrides <a href="6d51bfac-80ec-bf2a-4558-d6f4c59402cb">LinkCollection(T, TLink, TCollection).Add(T, Boolean)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="8bb0a875-728a-98ce-f4b2-0d8c2b92d46f">Remove(T)</a></td><td> (Overrides <a href="f377b650-e286-b305-e995-1342331bdfba">LinkCollection(T, TLink, TCollection).Remove(T)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="d4f0198f-4f2b-b7bc-2753-22d78a4df104">Remove(T, Boolean)</a></td><td> (Overrides <a href="8d58f594-cb53-3fa4-0202-ac0d951b5405">LinkCollection(T, TLink, TCollection).Remove(T, Boolean)</a>.)</td></tr></table>&nbsp;
<a href="#linkcollectionwithfixedaddition(*t*,-*tlink*,-*tcollection*)-class">Back to Top</a>

## See Also


#### Reference
<a href="73323b4e-37e3-2ba2-8f90-2d0dd58949a8">VM.Managed.Collections Namespace</a><br />