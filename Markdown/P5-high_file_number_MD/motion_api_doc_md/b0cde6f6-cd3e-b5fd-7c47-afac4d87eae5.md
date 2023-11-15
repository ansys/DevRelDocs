# AddedRackBuilderForRBEInMeshFree Class
 

The added rack builder for rbe in meshfree


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="95892e40-8811-f191-46ab-8245b03d9b4c">ObjectEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="bc9c2fe1-a752-bc29-651e-38f354ac77a9">VM.Managed.CAD.Builder</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="7243749e-8f99-4473-cee9-c30191ef099d">VM.Managed.CAD.BuilderTransform</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="01e4ecdc-b897-5c0b-d1a7-dbbd45ac5c24">VM.Managed.CAD.BuilderColorGeom</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="f7ab8a79-e469-e68a-16b2-a8a45edfd86a">VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="3a0b4083-42f9-3e41-5cf6-1e36d5ed6a1d">VM.Managed.DAFUL.GearTrain.CAD.RackBuilderForRBEInFE</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="0f5765fd-b70c-c13a-7228-cd7dcd63f88d">VM.Managed.DAFUL.GearTrain.CAD.RackBuilderForRBEInMeshFree</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.GearTrain.CAD.AddedRackBuilderForRBEInMeshFree<br />
**Namespace:**&nbsp;<a href="d9db19a5-2df6-b933-3d4e-2c38d80febf4">VM.Managed.DAFUL.GearTrain.CAD</a><br />**Assembly:**&nbsp;VMDGearTrain (in VMDGearTrain.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class AddedRackBuilderForRBEInMeshFree : RackBuilderForRBEInMeshFree, 
	IAddedBuilder
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class AddedRackBuilderForRBEInMeshFree
	Inherits RackBuilderForRBEInMeshFree
	Implements IAddedBuilder
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class AddedRackBuilderForRBEInMeshFree : public RackBuilderForRBEInMeshFree, 
	IAddedBuilder
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type AddedRackBuilderForRBEInMeshFree =  
    class
        inherit RackBuilderForRBEInMeshFree
        interface IAddedBuilder
    end
```

The AddedRackBuilderForRBEInMeshFree type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="29de4af5-5e36-6226-21f2-dedb49edc9c3">AddedRackBuilderForRBEInMeshFree()</a></td><td>
Initializes a new instance of the AddedRackBuilderForRBEInMeshFree class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="95fc40bd-9de6-b794-4e80-5858d920b72a">AddedRackBuilderForRBEInMeshFree(RackGeometryForRBEInMeshFree)</a></td><td>
Initializes a new instance of the AddedRackBuilderForRBEInMeshFree class.</td></tr></table>&nbsp;
<a href="#addedrackbuilderforrbeinmeshfree-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="e37880c5-df4d-c0bf-76ee-f8c908e0fe9a">LinkRequestUpdating</a></td><td>
Links the request updating.
 (Overrides <a href="fe674f92-dd39-f74a-c65c-8c8641c4072b">ObjectBase.LinkRequestUpdating(Object, LinkEventArgs)</a>.)</td></tr></table>&nbsp;
<a href="#addedrackbuilderforrbeinmeshfree-class">Back to Top</a>

## See Also


#### Reference
<a href="d9db19a5-2df6-b933-3d4e-2c38d80febf4">VM.Managed.DAFUL.GearTrain.CAD Namespace</a><br />