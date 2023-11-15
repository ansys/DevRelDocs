# DirectionBase Class
 

This class is to represent the direction base. Getting the information of VectorBase(x, y, z) through Value property. After picking, Getting information of DirectionBase through picker.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="61a8a328-b3bc-8c9a-50d7-bb860f7c67ef">VM.Managed.LinkContainer</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DirectionBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#inheritance-hierarchy">More...</a>
**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public abstract class DirectionBase : LinkContainer, 
	IXmlSerializable
```

**VB**<br />
``` VB
<SerializableAttribute>
Public MustInherit Class DirectionBase
	Inherits LinkContainer
	Implements IXmlSerializable
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class DirectionBase abstract : public LinkContainer, 
	IXmlSerializable
```

**F#**<br />
``` F#
[<AbstractClassAttribute>]
[<SerializableAttribute>]
type DirectionBase =  
    class
        inherit LinkContainer
        interface IXmlSerializable
    end
```

The DirectionBase type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="0454cadb-7df4-82f9-abb1-f4ddaa3df965">DirectionBase</a></td><td>
Initializes a new instance of the DirectionBase class</td></tr></table>&nbsp;
<a href="#directionbase-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="fd9e9281-9f2b-b686-d4a0-435e18538098">IsParameterized</a></td><td>
Gets the parametric.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="3a35ff16-1c23-7a0f-d75c-0d59ca518670">Reverse</a></td><td>
Gets the reverse direction.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="2baa022f-751f-62c3-ae39-605e6a1e28e1">Value</a></td><td>
Gets the VectorBase(x, y, z).</td></tr></table>&nbsp;
<a href="#directionbase-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="46fff7cd-d04e-71b8-8cef-55569edf6637">GetSchema</a></td><td>
This method is reserved and should not be used. When implementing the IXmlSerializable interface, you should return nullNothingnullptra null reference (Nothing in Visual Basic) (Nothing in Visual Basic) from this method, and instead, if specifying a custom schema is required, apply the XmlSchemaProviderAttribute to the class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="c30ee1af-2054-fbd6-304b-f4fe290f746e">IsParametric(Primitive.enRefType)</a></td><td>
Gets parametric.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="55ea28f7-b503-71ba-8469-5d28e9d94c2e">IsParametric(String)</a></td><td>
Gets parametric.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="65473c5e-ea9a-5940-0cec-58b112e821fe">ReadXml</a></td><td>
Generates an object from its XML representation.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="239f8571-b3de-ffb5-2473-87aa2a8d19da">WriteXml</a></td><td>
Converts an object into its XML representation.</td></tr></table>&nbsp;
<a href="#directionbase-class">Back to Top</a>

## Fields
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="bf526da6-9f5c-905a-7721-81a952634ec6">m_bReverse</a></td><td>
The flag of reverse.</td></tr></table>&nbsp;
<a href="#directionbase-class">Back to Top</a>

## See Also


#### Reference
<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />

## Inheritance HierarchySystem.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="61a8a328-b3bc-8c9a-50d7-bb860f7c67ef">VM.Managed.LinkContainer</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DirectionBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="f39bbbc0-d896-1824-e257-ab87a4ca3a0a">VM.Managed.DirectionBaseAxis</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="2978cdb2-0569-0c47-4ba7-c19810707b6a">VM.Managed.DirectionExpression</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="7910cd57-368b-ff43-9028-67afd21286f7">VM.Managed.DirectionLink</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="0b735505-7b51-0c73-5492-45d2ab84c6b5">VM.Managed.DirectionOnGeometryBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="0f714ad9-3cc0-98ce-7c1b-7716778cbc90">VM.Managed.DirectionThreePoints</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="dbab0f97-43de-1354-67a4-ede61ae4073d">VM.Managed.DirectionTwoPoints</a><br />