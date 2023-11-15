# PropertyTranslational Class
 

This class is to represent the translational constraint properties.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="0f03e2d9-3f38-2cc4-2948-f69c90eb4094">PropertyEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="b2d0c579-7ceb-1a07-eb60-7fbc0ec075d4">VM.Managed.ContainerObject</a>(<a href="0f03e2d9-3f38-2cc4-2948-f69c90eb4094">PropertyEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="ca5ca8f9-9e64-2928-b254-5da53733d0b0">VM.Managed.Property</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="b32542e0-cbb0-081b-8230-f022a238c0b2">VM.Managed.DAFUL.Constraints.PropertyConstraint</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.Constraints.PropertyTranslational<br />
**Namespace:**&nbsp;<a href="b5e7d154-f6c2-cdc8-0dc3-9407b97f82b2">VM.Managed.DAFUL.Constraints</a><br />**Assembly:**&nbsp;VMDCB (in VMDCB.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class PropertyTranslational : PropertyConstraint, 
	ILinkOwner, ILinkUpdateOwner
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class PropertyTranslational
	Inherits PropertyConstraint
	Implements ILinkOwner, ILinkUpdateOwner
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class PropertyTranslational : public PropertyConstraint, 
	ILinkOwner, ILinkUpdateOwner
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type PropertyTranslational =  
    class
        inherit PropertyConstraint
        interface ILinkOwner
        interface ILinkUpdateOwner
    end
```

The PropertyTranslational type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="d6fab67e-b012-06f4-8227-77b84be30249">PropertyTranslational</a></td><td>
Initializes a new instance of the PropertyTranslational class.</td></tr></table>&nbsp;
<a href="#propertytranslational-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="85ab4911-2251-9d29-fba6-3255ae65bf9e">ArgumentType</a></td><td> (Overrides <a href="cbd391b1-f7a4-0b7a-4294-e5680adccdb6">PropertyConstraint.ArgumentType</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="29399e27-18cf-7f68-5b27-bff390f5e190">Clearance</a></td><td>
Gets or sets the clearance.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="e1fe36bc-5ff8-7fd4-aa1a-e1e818c8c28b">Driver</a></td><td>
Gets or sets the driver.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="a7f20b52-6caf-6f05-e3da-1ffa07b7509b">Friction</a></td><td>
Gets or sets the friction.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="e67a936c-f6aa-58f1-d8f3-7eff046d86cc">ReferenceType</a></td><td> (Overrides <a href="09570aa2-f4b5-310d-2a94-9960c50a2ae4">PropertyConstraint.ReferenceType</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="a54df423-76b1-ceec-8a42-a88d0ecbe09a">Restriction</a></td><td>
Gets or sets the restriction.</td></tr></table>&nbsp;
<a href="#propertytranslational-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="6991490d-8c82-a23d-d3ac-59016d266e44">Initialize</a></td><td>
Initializes member through unit convert factor.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="8ba20b97-2487-93fb-bdc1-717b2e4955cc">OnDeserialization</a></td><td>
Called when [deserialization].
 (Overrides <a href="813cce07-9d6c-01b2-d2d0-c3779606b10d">Object(TEventCore).OnDeserialization(Object)</a>.)</td></tr></table>&nbsp;
<a href="#propertytranslational-class">Back to Top</a>

## Fields
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="2eacd43f-37bd-7087-a4ff-5d842c0c1be9">LinkAttribute</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="33335942-b1a1-3d62-4c02-eb1aae606f42">LinkUpdateAttribute</a></td><td /></tr></table>&nbsp;
<a href="#propertytranslational-class">Back to Top</a>

## See Also


#### Reference
<a href="b5e7d154-f6c2-cdc8-0dc3-9407b97f82b2">VM.Managed.DAFUL.Constraints Namespace</a><br />