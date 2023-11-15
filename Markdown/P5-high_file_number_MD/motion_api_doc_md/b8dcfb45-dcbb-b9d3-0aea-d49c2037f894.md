# RequestConnectedEntity Class
 

This class is to represent the connected entity request.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="95892e40-8811-f191-46ab-8245b03d9b4c">ObjectEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="326ae057-e04b-3e21-97fa-1695be65af8d">VM.Managed.SubEntity</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="a87e4496-7a53-215b-29b3-dac033ebca2a">VM.Managed.DAFUL.RequestBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.RequestConnectedEntity<br />
**Namespace:**&nbsp;<a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL</a><br />**Assembly:**&nbsp;VMDSB (in VMDSB.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class RequestConnectedEntity : RequestBase, 
	IRequestEntity
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class RequestConnectedEntity
	Inherits RequestBase
	Implements IRequestEntity
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class RequestConnectedEntity : public RequestBase, 
	IRequestEntity
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type RequestConnectedEntity =  
    class
        inherit RequestBase
        interface IRequestEntity
    end
```

The RequestConnectedEntity type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="d956aa31-c3b8-9847-37a8-512b107bd46c">RequestConnectedEntity()</a></td><td>
Initializes a new instance of the RequestConnectedEntity class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="07ddb0de-463d-2562-0fda-fce947102043">RequestConnectedEntity(String)</a></td><td>
Initializes a new instance of the RequestConnectedEntity class.</td></tr></table>&nbsp;
<a href="#requestconnectedentity-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected property](media/protproperty.gif "Protected property")</td><td><a href="229a1fbc-c581-0a97-df4d-7e2374de63a3">NavigatorEntityName</a></td><td> (Overrides <a href="a7bed153-4d94-f32d-9db7-60d9f3838fdd">RequestBase.NavigatorEntityName</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="b51bffd7-f236-6164-bd62-6636f40a7cd4">WriteToOutFile</a></td><td>
Gets or sets the [Write to out file] flag.</td></tr></table>&nbsp;
<a href="#requestconnectedentity-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="9073896e-815c-8edf-eb48-2c632ffaf3f9">AddNavigatorInfo</a></td><td> (Overrides <a href="39bd5f29-b4ad-15a4-cb71-554f9c4368d0">RequestBase.AddNavigatorInfo(XmlDocument, XmlElement, String, ObjectBase, String, Boolean)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="9f7ad2d9-4225-33f6-7017-4e0eee322e30">EntityFiltering</a></td><td>
Entity filtering function</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="4a53e674-7db4-7a72-dcd8-bfdf7ae725aa">Initialize</a></td><td>
Initializes member through unit convert factor.
 (Overrides <a href="83788d27-060a-36f6-63ca-b324351fcc89">RequestBase.Initialize(ConvertFactor)</a>.)</td></tr></table>&nbsp;
<a href="#requestconnectedentity-class">Back to Top</a>

## See Also


#### Reference
<a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL Namespace</a><br />