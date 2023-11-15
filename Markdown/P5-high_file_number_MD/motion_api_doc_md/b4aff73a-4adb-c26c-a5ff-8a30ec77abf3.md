# GearSetCrossHelical Class
 

Gear set for cross helical


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="b7ba26fe-7ea3-f11c-600a-be06c9e96e17">EntityEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="b2d0c579-7ceb-1a07-eb60-7fbc0ec075d4">VM.Managed.ContainerObject</a>(<a href="b7ba26fe-7ea3-f11c-600a-be06c9e96e17">EntityEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="aeaf9d38-7c25-8cd9-c83a-920b7c91fda1">VM.Managed.EntityBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="b2ea4aac-7430-3c78-7c9d-956eda731718">VM.Managed.Entity</a>(<a href="a82e8e1f-ecf9-4c8d-26ca-8d3fc1c7b9b8">PropertyGearSetCrossHelical</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="5b705f2e-38e0-4709-3739-c29ad143bda3">VM.Managed.DAFUL.GearTrain.OpenDesignerBase</a>(<a href="a82e8e1f-ecf9-4c8d-26ca-8d3fc1c7b9b8">PropertyGearSetCrossHelical</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="d250d24b-ae00-4289-1d23-adc549b3434b">VM.Managed.DAFUL.GearTrain.GearSetBase</a>(<a href="a82e8e1f-ecf9-4c8d-26ca-8d3fc1c7b9b8">PropertyGearSetCrossHelical</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.GearTrain.GearSetCrossHelical<br />
**Namespace:**&nbsp;<a href="faae22d6-2802-465b-a817-230732284684">VM.Managed.DAFUL.GearTrain</a><br />**Assembly:**&nbsp;VMDGearTrain (in VMDGearTrain.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class GearSetCrossHelical : GearSetBase<PropertyGearSetCrossHelical>
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class GearSetCrossHelical
	Inherits GearSetBase(Of PropertyGearSetCrossHelical)
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class GearSetCrossHelical : public GearSetBase<PropertyGearSetCrossHelical^>
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type GearSetCrossHelical =  
    class
        inherit GearSetBase<PropertyGearSetCrossHelical>
    end
```

The GearSetCrossHelical type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="61cda3ca-96c5-1f04-0f93-cf7949f657ee">GearSetCrossHelical()</a></td><td>
Initializes a new instance of the GearSetCrossHelical class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="ab9133e4-98fc-c8ed-0ef0-ab61f8de2743">GearSetCrossHelical(String)</a></td><td>
Initializes a new instance of the GearSetCrossHelical class.</td></tr></table>&nbsp;
<a href="#gearsetcrosshelical-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected property](media/protproperty.gif "Protected property")</td><td><a href="2e9fa2ac-cb78-4882-8516-ab8bb799dccd">Extension</a></td><td>
Gets the extension.
 (Overrides <a href="692f252e-88e6-5c57-5cfe-477fcb32340f">GearSetBase(TProperty).Extension</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="cd927108-28f8-4875-b3e2-2bdb42f913f0">TypeFileName</a></td><td>
Gets the name of the type file.
 (Overrides <a href="93977a13-6f4b-b22f-393d-752cf934d37f">OpenDesignerBase(TProperty).TypeFileName</a>.)</td></tr></table>&nbsp;
<a href="#gearsetcrosshelical-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="68fbd989-b55e-638d-0857-bde04e955da0">AppendExtraRotateAngle</a></td><td>
Append extra rotate angle
 (Overrides <a href="fcf0e323-26e4-b2e9-13a4-400af10e0f31">GearSetBase(TProperty).AppendExtraRotateAngle(List(IGearBuilder))</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="5e79d544-76fb-e7fd-a807-aea7f31d97f2">CreateGearGeometry</a></td><td>
Create Gear Geometry.
 (Overrides <a href="b259470f-03fc-c4ce-d1fc-59b4a5f9015f">GearSetBase(TProperty).CreateGearGeometry(String, Int32, GearShapeBase[])</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="aabd80ff-bbee-fe7f-f077-15df0b00e2e0">GetPositionsForMeshing</a></td><td>
Get positions for meshing.
 (Overrides <a href="de3dbf72-b883-dc76-f2eb-13426faed050">GearSetBase(TProperty).GetPositionsForMeshing(List(IGearBuilder), Int32, VectorBase, VectorBase)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="76abe7cd-774d-ddbe-a25c-4758ceb64d36">GetRotateMatrix</a></td><td>
Gets the rotated matrix</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="03fcb6ed-a45d-417d-0f32-b37c024b6b09">MeshingCore</a></td><td>
Meshing
 (Overrides <a href="63f74f60-4ff4-7845-8dfd-d4bc4fb33eae">GearSetBase(TProperty).MeshingCore(Int32, Double, List(IGearBuilder))</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="3448b605-5fa6-3899-13e9-4587a921782d">OnDeserialization</a></td><td>
Called when [deserialization].
 (Overrides <a href="2ce5ede8-5e96-d7cf-3c8c-57d0cf48d37d">GearSetBase(TProperty).OnDeserialization(Object)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="5ab7e591-334b-cdd1-6431-b56b4ebaef06">OnPreBuildSpecial</a></td><td>
Pre build in Special
 (Overrides <a href="f0f18b2b-0af2-4dbf-9c57-8de5c2b925e2">GearSetBase(TProperty).OnPreBuildSpecial(PropertyGearSetBase, Document, String[])</a>.)</td></tr></table>&nbsp;
<a href="#gearsetcrosshelical-class">Back to Top</a>

## See Also


#### Reference
<a href="faae22d6-2802-465b-a817-230732284684">VM.Managed.DAFUL.GearTrain Namespace</a><br />