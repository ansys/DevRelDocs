# Gravity Class
 

This class is to represent the gravity.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="95892e40-8811-f191-46ab-8245b03d9b4c">ObjectEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.Gravity<br />
**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMObjBase (in VMObjBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class Gravity : Object<ObjectEventCore>, 
	IDraw, IDrawIcon, IReferencable, IVisible
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class Gravity
	Inherits Object(Of ObjectEventCore)
	Implements IDraw, IDrawIcon, IReferencable, IVisible
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class Gravity : public Object<ObjectEventCore^>, 
	IDraw, IDrawIcon, IReferencable, IVisible
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type Gravity =  
    class
        inherit Object<ObjectEventCore>
        interface IDraw
        interface IDrawIcon
        interface IReferencable
        interface IVisible
    end
```

The Gravity type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="6d2b6468-d968-88d7-fa44-ea69735c9ae5">Gravity()</a></td><td>
Initializes a new instance of the Gravity class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="d1d0208a-cf15-33b4-4eff-411bd9749994">Gravity(Vector)</a></td><td>
Initializes a new instance of the Gravity class.</td></tr></table>&nbsp;
<a href="#gravity-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="c22c13bb-10ec-71d2-fc67-b10ed7321bf6">Hide</a></td><td>
Gets or sets a value indicating whether this instance is hide.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="e8611d1d-b3a0-c9e6-e22a-76b2d45133cd">IsVisible</a></td><td>
Gets or sets the visible state.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="91766592-523a-97ce-05af-529b1a0a968a">Layer</a></td><td>
Gets or sets the layer.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="4bd8b2e3-1d95-460f-6162-6333d1a5defd">Vector</a></td><td>
Gets or sets the vector of gravity x,y,z coordinate.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="788938b7-ec76-0625-fe6d-d784ba1ec8c4">X</a></td><td>
Gets or sets the X coordinate of gravity.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="ef66ab7a-67aa-f2e6-f0f4-e2d2cce9f065">Y</a></td><td>
Gets or sets the Y coordinate of gravity.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="c72dd2ce-3689-d86f-e0ca-d13e3babc7d2">Z</a></td><td>
Gets or sets the Z coordinate of gravity.</td></tr></table>&nbsp;
<a href="#gravity-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="f2fb78f4-0948-1356-5047-bd68e2466f71">Draw</a></td><td>
Draws the icon.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="3ceb7a53-3d39-dbe0-b29b-105130acf74d">ReDraw</a></td><td>
Redraw.</td></tr></table>&nbsp;
<a href="#gravity-class">Back to Top</a>

## See Also


#### Reference
<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />