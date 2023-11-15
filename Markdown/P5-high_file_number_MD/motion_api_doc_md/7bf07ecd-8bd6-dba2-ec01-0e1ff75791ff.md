# ChainedPlacing Class
 

The class defines all data for construction chained system.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="95892e40-8811-f191-46ab-8245b03d9b4c">ObjectEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="61bad1fc-9c79-8373-d3d7-757a740487fc">VM.Managed.DAFUL.Chained.ChainedPlacingBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.Chained.ChainedPlacing<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="015a3aa1-8f5d-f61f-f829-d5b961241297">VM.Managed.DAFUL.Track.TrackPlacing</a><br />
**Namespace:**&nbsp;<a href="5c907013-811e-af21-bd63-e55b810522b2">VM.Managed.DAFUL.Chained</a><br />**Assembly:**&nbsp;VMDChainedBase (in VMDChainedBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class ChainedPlacing : ChainedPlacingBase, 
	IPostOpenDocumentForChainedSystem
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class ChainedPlacing
	Inherits ChainedPlacingBase
	Implements IPostOpenDocumentForChainedSystem
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class ChainedPlacing : public ChainedPlacingBase, 
	IPostOpenDocumentForChainedSystem
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type ChainedPlacing =  
    class
        inherit ChainedPlacingBase
        interface IPostOpenDocumentForChainedSystem
    end
```

The ChainedPlacing type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="09b4f7c8-3a95-5d2d-2d21-b68c5c8a089a">ChainedPlacing()</a></td><td>
Initializes a new instance of the ChainedPlacing class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="c61de2bb-bc6e-ab6e-2b08-ac074a2c8518">ChainedPlacing(String)</a></td><td>
Initializes a new instance of the ChainedPlacing class.</td></tr></table>&nbsp;
<a href="#chainedplacing-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="d7d59e40-311d-2440-a667-346202f5b2c9">BearingFrictionLossList</a></td><td>
Gets or sets the bearing friction loss list.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="2ab6f4f1-613b-97bd-72c5-5598dbf815dc">Connectors</a></td><td>
Gets or sets connector dictionary.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="06c96610-b151-d1fb-e7a0-c1a26d773325">Contacts</a></td><td>
Gets or sets contact dictionary.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="1fcf25db-0bdc-bfc4-751a-902fbf16c587">MtoNContacts</a></td><td>
Gets or sets contact dictionary.</td></tr><tr><td>![Protected property](media/protproperty.gif "Protected property")</td><td><a href="ba505cbb-0c89-8679-bc0e-8b96180367aa">Paths</a></td><td>
Gets the paths.
 (Overrides <a href="994f3201-e72a-2ca8-e595-5947feac4a12">ChainedPlacingBase.Paths</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="3f6fa8ed-0dbc-2880-ebf4-85825aae2ac1">Placing</a></td><td>
Gets or sets the position data for construction chained system</td></tr></table>&nbsp;
<a href="#chainedplacing-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="8ace6e17-449d-80a3-cd44-ee71cbe297b8">AddBearingFrictionLoss</a></td><td>
Adds the bearing friction loss.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="cf173da7-0067-2b2d-0fb7-4bc20ce2395e">Initialize</a></td><td>
Initializes member through unit convert factor.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="bac28291-7f48-0b8c-a3bb-23681e15f1e9">LinkRequestDestroy</a></td><td>
Request for destroy the linked object.
 (Overrides <a href="1785a93e-876e-a127-7054-e5bd9e3694cb">ObjectBase.LinkRequestDestroy(Object, LinkEventArgs)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="55246d1b-bb8b-ad82-0f02-0c3dff979490">LinkRequestUpdate</a></td><td>
Request for update the linked object.
 (Overrides <a href="fafe46d5-01d2-a48b-21f0-7095376bfbd3">ObjectBase.LinkRequestUpdate(Object, LinkEventArgs)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="6960f504-fbb0-cac8-bf7d-c0a040b43344">OnDeserialization</a></td><td>
Called when [deserialization].
 (Overrides <a href="813cce07-9d6c-01b2-d2d0-c3779606b10d">Object(TEventCore).OnDeserialization(Object)</a>.)</td></tr></table>&nbsp;
<a href="#chainedplacing-class">Back to Top</a>

## Fields
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="026695cd-a063-02ed-7c44-1fe68143d4ca">m_dicConnectors</a></td><td>
This is connector dictionary.</td></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="8928fca0-63b4-b211-53b1-d5de353e159e">m_dicContacts</a></td><td>
This is contact dictionary.</td></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="41a94ab8-0d12-d2f5-2858-ec868182e674">m_dicMtoNContacts</a></td><td>
This is contact dictionary.</td></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="726eeb90-6c5b-bcc1-c5c7-194fa62e0844">m_Placing</a></td><td>
This is the position data for construction chained system.</td></tr></table>&nbsp;
<a href="#chainedplacing-class">Back to Top</a>

## See Also


#### Reference
<a href="5c907013-811e-af21-bd63-e55b810522b2">VM.Managed.DAFUL.Chained Namespace</a><br />