# AssemblyManager Class
 

The assembly manager.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="95892e40-8811-f191-46ab-8245b03d9b4c">ObjectEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="326ae057-e04b-3e21-97fa-1695be65af8d">VM.Managed.SubEntity</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.GearTrain.AssemblyManager<br />
**Namespace:**&nbsp;<a href="faae22d6-2802-465b-a817-230732284684">VM.Managed.DAFUL.GearTrain</a><br />**Assembly:**&nbsp;VMDGearTrain (in VMDGearTrain.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class AssemblyManager : SubEntity, 
	IContainer, ILinkContainer, IOwned, IHasID
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class AssemblyManager
	Inherits SubEntity
	Implements IContainer, ILinkContainer, IOwned, IHasID
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class AssemblyManager : public SubEntity, 
	IContainer, ILinkContainer, IOwned, IHasID
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type AssemblyManager =  
    class
        inherit SubEntity
        interface IContainer
        interface ILinkContainer
        interface IOwned
        interface IHasID
    end
```

The AssemblyManager type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="68fb59d2-3a32-d262-571f-a23be887af2d">AssemblyManager()</a></td><td>
Initializes a new instance of the AssemblyManager class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="4e3e0eee-7bac-f872-affd-4c30309a54d4">AssemblyManager(String)</a></td><td>
Initializes a new instance of the AssemblyManager class.</td></tr></table>&nbsp;
<a href="#assemblymanager-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="f57421a1-eb08-c5da-35cc-7bfc48e18445">Assembly</a></td><td>
Gets or sets the assembly.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="277a5728-e964-9fab-0a3c-e096671e7522">PowerFlow</a></td><td>
Gets or sets the power flow.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="0c103c99-73db-a017-20f6-97960f634093">Request</a></td><td>
Gets or sets the request.</td></tr></table>&nbsp;
<a href="#assemblymanager-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="15a05516-fadf-3934-610f-0f0738363add">InitChild</a></td><td>
Initializes the child.</td></tr></table>&nbsp;
<a href="#assemblymanager-class">Back to Top</a>

## See Also


#### Reference
<a href="faae22d6-2802-465b-a817-230732284684">VM.Managed.DAFUL.GearTrain Namespace</a><br />