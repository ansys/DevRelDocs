# InterfaceManager Class
 

This interface is to represent interface manager.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="95892e40-8811-f191-46ab-8245b03d9b4c">ObjectEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.InterfaceManager<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="66f899c3-4923-e1d2-38f7-7ef56c3d4b1b">VM.Managed.DAFUL.Car.InterfaceManagerForCar</a><br />
**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMObjBase (in VMObjBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class InterfaceManager : Object<ObjectEventCore>
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class InterfaceManager
	Inherits Object(Of ObjectEventCore)
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class InterfaceManager : public Object<ObjectEventCore^>
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type InterfaceManager =  
    class
        inherit Object<ObjectEventCore>
    end
```

The InterfaceManager type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="a7e756e5-285f-ccae-2771-b312a6191025">InterfaceManager()</a></td><td>
Initializes a new instance of the InterfaceManager class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="593df543-e821-9a7f-7e4c-b8f0efba669f">InterfaceManager(InterfaceManager)</a></td><td>
Initializes a new instance of the InterfaceManager class.</td></tr></table>&nbsp;
<a href="#interfacemanager-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected property](media/protproperty.gif "Protected property")</td><td><a href="e672840f-daaf-1a49-0d9e-3d4cbe4cad2a">InterfaceInfos</a></td><td>
Gets or sets the interface info.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="21726be3-0f9a-76d4-af06-ee484276720d">Interfaces</a></td><td>
Gets or sets the interfaces.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="90c31a24-baa8-c3b0-451b-71bf57037103">IsExternable</a></td><td>
Gets a value indicating whether this instance is externable.
 (Overrides <a href="2ad72d65-d45f-9e74-444b-71cbb1e226a6">ObjectBase.IsExternable</a>.)</td></tr></table>&nbsp;
<a href="#interfacemanager-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="c975eb19-52da-c2f3-45ed-bb384a43ba01">Add</a></td><td>
Adds the specified itf.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="7e21b691-c567-13cd-5dd3-ac894612ad8a">AddInterface</a></td><td>
Adds the interface to interface manager.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="22e45644-829d-0e64-9120-9562875b5bb3">GetInterfaceNames(IInterface)</a></td><td>
Gets the interface names.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="b7542e39-fe8c-e1ce-455e-ce102817eaa2">GetInterfaceNames(String)</a></td><td>
Gets the interface names.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="dfc8a927-cf72-e289-a43a-685e50c469a4">GetNumInterfaceObject</a></td><td>
Gets the number of interface object.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="f92158ec-2d29-ff65-f522-2c63b0318a58">IsInterface</a></td><td>
Determines whether the specified interface is interface.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="e18fda7a-fa3c-2a2e-89cd-9c4426f58503">LinkRequestUpdate</a></td><td>
Request for update the linked object.
 (Overrides <a href="fafe46d5-01d2-a48b-21f0-7095376bfbd3">ObjectBase.LinkRequestUpdate(Object, LinkEventArgs)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="8ebebb37-072c-1faf-113a-dc47d926dddc">MakeXml</a></td><td>
Makes the interface information.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="34ad1d76-6456-451a-c56a-5541e617f7a8">RemoveInterface</a></td><td>
Removes the interface to interface manager.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="3dd1dae5-b6c4-66e3-287b-df798c8dfef6">SetInterfaceNames(IInterface, ArraySegment(String))</a></td><td>
Sets the interface names.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="6d8f09c9-c385-33e3-d4f7-d6c5b8178e78">SetInterfaceNames(IInterface, ICollection(String))</a></td><td>
Sets the interface names.</td></tr></table>&nbsp;
<a href="#interfacemanager-class">Back to Top</a>

## See Also


#### Reference
<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />