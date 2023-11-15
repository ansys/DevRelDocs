# Direction Class
 

This class is to represent the information of direction through expression(string) parsing.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="61a8a328-b3bc-8c9a-50d7-bb860f7c67ef">VM.Managed.LinkContainer</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="3d2a2f23-aace-4fe0-7750-0fc5ef2b0eea">VM.Managed.Expression</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.Direction<br />
**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class Direction : Expression
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class Direction
	Inherits Expression
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class Direction : public Expression
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type Direction =  
    class
        inherit Expression
    end
```

The Direction type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="f1644b8b-6071-c92f-768e-dca5218ba07f">Direction()</a></td><td>
Initializes a new instance of the Direction class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="5080ad33-54c5-fcb5-03ae-1c91c57d40d1">Direction(String)</a></td><td>
Initializes a new instance of the Direction class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="57ae1189-8fac-a263-1458-7ed881b43d87">Direction(VectorBase)</a></td><td>
Initializes a new instance of the Direction class.</td></tr></table>&nbsp;
<a href="#direction-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="9c4ce65f-7b7e-181d-efd6-7d865342aa5b">Value</a></td><td>
Gets or sets the value of direction.</td></tr></table>&nbsp;
<a href="#direction-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="a58e4ac2-63d9-ff90-a021-b139c02b1473">ConvertToValue</a></td><td> (Overrides <a href="1e71df7c-9041-6579-a829-df15a6e84091">Expression.ConvertToValue(String)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="94988499-11aa-78bb-2a91-bfd392a8c961">OnDeserialization</a></td><td> (Overrides <a href="cf4152fd-1950-3213-9ba4-831ce3d745e2">Expression.OnDeserialization(Object)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="c819ddb3-3238-848d-6ad8-f31eb7867b67">ParseToValue</a></td><td> (Overrides <a href="c74c1128-711c-534f-c85a-4be7af0b5e0e">Expression.ParseToValue(Char*)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="3dd5c652-d5ab-28d8-d224-558aaf7560bd">SetDefaultString</a></td><td> (Overrides <a href="042d1556-d674-e6d7-022e-c050c5bfc2dd">Expression.SetDefaultString(String)</a>.)</td></tr></table>&nbsp;
<a href="#direction-class">Back to Top</a>

## See Also


#### Reference
<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />