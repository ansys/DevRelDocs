# CouplerRackPinion Class
 

This class is to represent the coupler rack & pinion.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="b7ba26fe-7ea3-f11c-600a-be06c9e96e17">EntityEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="b2d0c579-7ceb-1a07-eb60-7fbc0ec075d4">VM.Managed.ContainerObject</a>(<a href="b7ba26fe-7ea3-f11c-600a-be06c9e96e17">EntityEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="aeaf9d38-7c25-8cd9-c83a-920b7c91fda1">VM.Managed.EntityBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="b2ea4aac-7430-3c78-7c9d-956eda731718">VM.Managed.Entity</a>(<a href="aa526909-e299-cded-4526-2043e45d26cf">PropertyCouplerRackPinion</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="73e56b4a-08a3-dc9b-6e22-b485d2640353">VM.Managed.DAFUL.Constraints.CouplerBase</a>(<a href="aa526909-e299-cded-4526-2043e45d26cf">PropertyCouplerRackPinion</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.Constraints.CouplerRackPinion<br />
**Namespace:**&nbsp;<a href="b5e7d154-f6c2-cdc8-0dc3-9407b97f82b2">VM.Managed.DAFUL.Constraints</a><br />**Assembly:**&nbsp;VMDCP (in VMDCP.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class CouplerRackPinion : CouplerBase<PropertyCouplerRackPinion>
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class CouplerRackPinion
	Inherits CouplerBase(Of PropertyCouplerRackPinion)
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class CouplerRackPinion : public CouplerBase<PropertyCouplerRackPinion^>
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type CouplerRackPinion =  
    class
        inherit CouplerBase<PropertyCouplerRackPinion>
    end
```

The CouplerRackPinion type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="9826c304-85b4-2908-4291-02951b28160d">CouplerRackPinion()</a></td><td>
Initializes a new instance of the CouplerRackPinion class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="6aaed412-d4da-e748-189b-af178980c592">CouplerRackPinion(String)</a></td><td>
Initializes a new instance of the CouplerRackPinion class.</td></tr></table>&nbsp;
<a href="#couplerrackpinion-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="d529f731-0a7f-d056-cde9-7b801154aa62">Draw</a></td><td>
Draws the icon.
 (Overrides <a href="c4838f85-dcb3-68c9-e137-643d6632ff7e">CouplerBase(TProperty).Draw(Canvas)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="3449c9f2-4852-9671-daaa-9ea41d192331">Initialize</a></td><td>
Initializes member through unit convert factor.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="6df5f3dc-2bbc-d662-ffe8-5ba436ac7ecf">ReadTemplateImpl</a></td><td>
Reads the template document [implementation].
 (Overrides <a href="6290b2b8-7d4b-8745-0736-f0cf29be75a1">CouplerBase(TProperty).ReadTemplateImpl(XmlReader)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="b586eafd-134e-019a-a7c0-775d7c9836bf">WriteTemplateImpl</a></td><td>
Writes the template document [implementation].
 (Overrides <a href="ec464716-93fe-ee5f-971c-15b85c474a1d">CouplerBase(TProperty).WriteTemplateImpl(XmlWriter)</a>.)</td></tr></table>&nbsp;
<a href="#couplerrackpinion-class">Back to Top</a>

## See Also


#### Reference
<a href="b5e7d154-f6c2-cdc8-0dc3-9407b97f82b2">VM.Managed.DAFUL.Constraints Namespace</a><br />