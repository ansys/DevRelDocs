# ReferenceSetCurve Class
 

This class is to represent the reference for curve set.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="95892e40-8811-f191-46ab-8245b03d9b4c">ObjectEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="161cfbad-1497-c4f8-ac66-49608cd40359">VM.Managed.Reference</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.ReferenceSetCurve<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="ad6f661d-f508-6dfa-8a51-0f0b108ff5be">VM.Managed.DAFUL.ReferencePartSetCurve</a><br />
**Namespace:**&nbsp;<a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL</a><br />**Assembly:**&nbsp;VMDFBase (in VMDFBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class ReferenceSetCurve : Reference, 
	IContactableRigid2D, IContactableRigid, IContactable, IGeometricalComponent, IEntityRelation, 
	IBodyAnalysisType, IHasBody, IReferedTopologyset, ITopologyset
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class ReferenceSetCurve
	Inherits Reference
	Implements IContactableRigid2D, IContactableRigid, IContactable, IGeometricalComponent, 
	IEntityRelation, IBodyAnalysisType, IHasBody, IReferedTopologyset, ITopologyset
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class ReferenceSetCurve : public Reference, 
	IContactableRigid2D, IContactableRigid, IContactable, IGeometricalComponent, IEntityRelation, 
	IBodyAnalysisType, IHasBody, IReferedTopologyset, ITopologyset
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type ReferenceSetCurve =  
    class
        inherit Reference
        interface IContactableRigid2D
        interface IContactableRigid
        interface IContactable
        interface IGeometricalComponent
        interface IEntityRelation
        interface IBodyAnalysisType
        interface IHasBody
        interface IReferedTopologyset
        interface ITopologyset
    end
```

The ReferenceSetCurve type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="868b689c-e7ce-0683-fd53-03656472ca3d">ReferenceSetCurve(ObjectBase)</a></td><td>
Initializes a new instance of the ReferenceSetCurve class.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="4dc6d8e8-17bb-e0cd-a1c9-dda9150e85fe">ReferenceSetCurve(SerializationInfo, StreamingContext)</a></td><td>
Initializes a new instance of the ReferenceSetCurve class.</td></tr></table>&nbsp;
<a href="#referencesetcurve-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="1f638221-6b48-d5ce-4364-d9e92faa5981">AnalysisType</a></td><td>
Gets the analysis type.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="f125fd92-8727-328e-5afd-75e3b4fcadf3">Body</a></td><td>
Gets the body.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="f4403a48-c4cf-da72-3f22-3becf566b872">Connectable</a></td><td>
Gets the connectable.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="e9068581-3308-efec-6b17-b0beb0cd9cd0">GeometryFullName</a></td><td>
Gets the geometry full name</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="20b8eb34-0e4b-cdb9-60a7-6a25bb87ba53">GeometryNameForMultiContact</a></td><td>
Gets the name for multiple contact</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="867eb274-7d71-27cc-ff17-6c246f2d7e1e">IsActionGeometry</a></td><td>
Gets or sets a value indicating whether this instance is action geometry.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="9cb43969-2cbd-1bbf-6f98-5170eb140952">IsBaseGeometry</a></td><td>
Gets or sets a value indicating whether this instance is base geometry.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="b2ae1f20-394b-d94f-214d-0fd5a89d1bb8">IsCloseLoop</a></td><td>
Gets value indicating whether this instance is close loop.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="83473419-16d4-6d34-ecc9-2c83ab374491">ParentBody</a></td><td>
Gets or sets the parent body.</td></tr></table>&nbsp;
<a href="#referencesetcurve-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="0adf8f92-156a-1b08-49b9-32e26c267377">GetConnectableImpl</a></td><td>
Gets the connectable [implementation].</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="89f371aa-c5e2-687b-6e31-5dde96a7a135">GetDefaultMaxPenetration</a></td><td>
Gets the default maximum penetration.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="e5a605f5-4392-5fb0-bc31-82435780191b">GetGeometryNavigatorInformation</a></td><td>
Gets the geometry information for model navigator .</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="938a7b71-1ed2-dedf-7a70-84ffbb2399c5">GetPointDirection</a></td><td>
Gets the point direction. (using facet information)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="e7e814d6-5b76-dbe3-5120-224972fa9b06">GetPoints</a></td><td>
Gets the points.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="31037170-b340-da88-9668-fbf8a15b3a0d">GetPointsAboutOrigin</a></td><td>
Gets the points.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="f5cecf85-ac28-4d5a-a95e-5b6596ee6b18">GetProfilePoint</a></td><td>
Gets the profile point.</td></tr></table>&nbsp;
<a href="#referencesetcurve-class">Back to Top</a>

## See Also


#### Reference
<a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL Namespace</a><br />