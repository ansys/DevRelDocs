# Placing Class
 

The class defines the position data for construction chained system.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="61a8a328-b3bc-8c9a-50d7-bb860f7c67ef">VM.Managed.LinkContainer</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.Chained.Placing<br />
**Namespace:**&nbsp;<a href="5c907013-811e-af21-bd63-e55b810522b2">VM.Managed.DAFUL.Chained</a><br />**Assembly:**&nbsp;VMDChainedBase (in VMDChainedBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class Placing : LinkContainer
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class Placing
	Inherits LinkContainer
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class Placing : public LinkContainer
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type Placing =  
    class
        inherit LinkContainer
    end
```

The Placing type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="c9b9b964-66f3-750d-1ed5-99b2b711610b">Placing()</a></td><td>
Initializes a new instance of the Placing class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="61bb0101-d4d2-d8cd-680a-bb87d8352ffc">Placing(ChainedPlacingBase)</a></td><td>
Initializes a new instance of the Placing class.</td></tr></table>&nbsp;
<a href="#placing-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="a0f7cf2a-ba53-2021-7a49-142a431b3458">AssembleType</a></td><td>
Gets and sets assemble type.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="b181018d-faf3-7897-d179-1ffa5494a039">ChainedPaths</a></td><td>
Gets or sets the object array</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="ad88dbc8-a21a-e8b6-6370-ecbfd1a6e41d">ChainedSegments</a></td><td>
Gets or sets the object array</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="b14a3fbf-2afc-bdb6-e4e1-b031be46afdd">ExternContacts</a></td><td>
Gets or sets the object array</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="08f149af-db36-d2ee-4a94-857836fd9c7f">FileSegments</a></td><td>
Gets or sets the string array.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="59a28e7e-ce78-9f19-1f1d-cd265440383e">IsFixNumberOfSegment</a></td><td>
If you fix the number of segment, sets the true.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="ee917d86-06de-c562-2233-86b563f3ed47">NumberOfSegment</a></td><td>
This represents number of segment.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="ad5f3298-6de3-61aa-6a0a-30eb94b36fd6">OpenLoop</a></td><td>
If you make open loop system, sets the true.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="b6f30bba-5d72-9062-9b7e-e0e51e62324f">PlacingAdditionalInfo</a></td><td>
Gets and sets the information for placing.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="0570d64c-f696-7ace-b011-20ad4a4c757a">PlacingGap</a></td><td>
This represents the gap between segment.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="307ae331-6018-acb7-e778-70aabf2131a8">ToolkitType</a></td><td>
Gets and sets toolkit type.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="b2ce7b30-ebfb-4f36-4248-b634b80cd0e2">UserDefinedArray</a></td><td>
Gets and sets the user-defined array.</td></tr></table>&nbsp;
<a href="#placing-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="e6209bd9-a97f-1299-9b73-bb74a85d72a6">Delete_ExternContacts</a></td><td>
Called when external contact geometry is deleted.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="16511026-f047-394e-c389-20b36973efb7">Delete_Path</a></td><td>
Called when path components is deleted.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="9daad3d7-80f8-47e2-9345-44a64078ef0b">Delete_Segment</a></td><td>
Called when segment components is deleted.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="81e7d322-547d-a0e8-99f8-42aaa4f21ac4">OnDeserialization</a></td><td>
Called when [deserialization].
 (Overrides <a href="64076d3c-3baa-043e-784b-5e010de1a6ec">LinkContainer.OnDeserialization(Object)</a>.)</td></tr></table>&nbsp;
<a href="#placing-class">Back to Top</a>

## See Also


#### Reference
<a href="5c907013-811e-af21-bd63-e55b810522b2">VM.Managed.DAFUL.Chained Namespace</a><br />