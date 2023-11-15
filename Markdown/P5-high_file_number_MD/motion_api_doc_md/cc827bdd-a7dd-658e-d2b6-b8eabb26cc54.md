# BeamElement Class
 

Beam Element Class


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="61a8a328-b3bc-8c9a-50d7-bb860f7c67ef">VM.Managed.LinkContainer</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.Beam.BeamElement<br />
**Namespace:**&nbsp;<a href="cd24f896-bcad-1465-253c-e33e6c09f550">VM.Managed.DAFUL.Beam</a><br />**Assembly:**&nbsp;VMDBeamGroup (in VMDBeamGroup.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class BeamElement : LinkContainer
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class BeamElement
	Inherits LinkContainer
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class BeamElement : public LinkContainer
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type BeamElement =  
    class
        inherit LinkContainer
    end
```

The BeamElement type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="b683f47c-dd12-a64b-be10-2c74cf621a70">BeamElement</a></td><td>
Constructor of BeamElement Class</td></tr></table>&nbsp;
<a href="#beamelement-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="da44f23e-27c8-a02a-0e16-b104d2920199">_ActionBody</a></td><td>
Action sphere body to save</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="e1e409ed-8746-4860-c75b-ce612ba70bc3">_BaseBody</a></td><td>
Base sphere body to save</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="887cf5fd-e6cb-9283-b394-d79587273cf0">ActionBody</a></td><td>
Action sphere body tp save</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="72b59de4-a790-90c3-9a06-113d53939e33">ActionBodyMass</a></td><td>
Mass of action sphere body</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="137c7380-1318-7510-c04b-6aac3f78af8f">ActionBodyMomentOfInertia</a></td><td>
Moment of inertia of action sphere body</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="93a70097-c9f6-dbb1-3a82-aa5c89abdd6d">ActionBodyOrientationArray</a></td><td>
Orientation array of base sphere body</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="26597c1b-71e8-0e84-ac47-8302ac38d519">ActionBodyPosition</a></td><td>
Point of action sphere body</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="2306fac3-e999-d755-4abf-3613aa81878b">ActionBodyRadius</a></td><td>
Sphere radius of base sphere body</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="bc085826-53e9-8659-09ba-17e7929964f6">ActionBodyTransformationMatrix</a></td><td>
Transformation Matrix of action sphere body</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="ed55a97e-0e78-8a98-da62-bb41ea305d03">AngleArrayBetweenTwoBodies</a></td><td>
Angle between two bodies (X, Y, Z | Roll, Pitch, Yaw)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="253b50c4-281e-0712-667f-51e7cd84171d">Area</a></td><td>
Area of beam element</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="88588bb2-935d-4028-6bc0-e4ad9cd7c1ee">Asy</a></td><td>
Shear moment of ratio of Asy</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="d5753a4f-7d3a-4436-fa96-ad0ef691e158">Asz</a></td><td>
Shear moment of ratio of Asz</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="188e880e-ee77-7967-68b0-3e83ef87f97a">BaseBody</a></td><td>
Base sphere body to use</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="c27ec907-ce80-9a6e-45f7-9f7f302359e6">BaseBodyMass</a></td><td>
Mass of base sphere body</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="d8cb316b-ea19-7b35-aca7-59606481593d">BaseBodyMomentOfInertia</a></td><td>
Moment of inertia of base sphere body</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="2f14a9d7-874e-187f-ab9c-25a472805f29">BaseBodyOrientationArray</a></td><td>
Orientation array of base sphere body</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="0958530b-3a27-a5e5-b6e8-58a667ce9241">BaseBodyPosition</a></td><td>
Point of base sphere body</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="f04cc0f1-f80e-797c-ab0d-dc4cf03226d7">BaseBodyRadius</a></td><td>
Sphere radius of base sphere body</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="9fa9d811-37d9-49a9-769c-f037bfbb5870">BaseBodyTransformationMatrix</a></td><td>
Transformation Matrix of base sphere body</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="f925167a-927b-cdb0-c1bb-02f60e2c459d">IsFirstBeamElement</a></td><td>
Whether this beam element is a first element</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="236726cc-c042-ad28-846a-e7675cca9b35">IsLastBeamElement</a></td><td>
Whether this beam element is a last element</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="c318b959-1f98-7d95-2a17-30b9f9022d8b">Ixx</a></td><td>
Area moment of inertia of Ixx</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="3c399dd1-acf7-c0aa-ab2f-2738092a1a43">Iyy</a></td><td>
Area moment of inertia of Iyy</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="5c4be66f-6a3a-335f-a9d6-dc57fdf45c8d">Iyz</a></td><td>
Area moment of inertia of Iyz</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="cac1e5bd-722a-cc95-75e6-1733ef05dc44">Izz</a></td><td>
Area moment of inertia of Izz</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="457618c0-fc14-e38c-82ce-620613fb5489">LengthBetweenTwoBodies</a></td><td>
Length between two bodies</td></tr></table>&nbsp;
<a href="#beamelement-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="4228ecc2-8247-d725-ff0d-3358923419b0">LinkRequestUpdate</a></td><td>
Request for update the linked object.
 (Overrides <a href="ad69a423-f18e-aedb-9e6e-94966b715eb0">LinkContainer.LinkRequestUpdate(Object, LinkEventArgs)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="53d42af0-a968-10b7-d170-2cd1286c8796">UpdateAreaProperties</a></td><td>
Update area properties of beam elements</td></tr></table>&nbsp;
<a href="#beamelement-class">Back to Top</a>

## See Also


#### Reference
<a href="cd24f896-bcad-1465-253c-e33e6c09f550">VM.Managed.DAFUL.Beam Namespace</a><br />