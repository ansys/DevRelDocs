# BuilderColorGeom Class
 

This class is to represent the geometry's color of builder.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="95892e40-8811-f191-46ab-8245b03d9b4c">ObjectEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="bc9c2fe1-a752-bc29-651e-38f354ac77a9">VM.Managed.CAD.Builder</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="7243749e-8f99-4473-cee9-c30191ef099d">VM.Managed.CAD.BuilderTransform</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.CAD.BuilderColorGeom<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#inheritance-hierarchy">More...</a>
**Namespace:**&nbsp;<a href="bdeeb71e-08d7-cd91-e11a-795ab9385ff7">VM.Managed.CAD</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public abstract class BuilderColorGeom : BuilderTransform
```

**VB**<br />
``` VB
<SerializableAttribute>
Public MustInherit Class BuilderColorGeom
	Inherits BuilderTransform
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class BuilderColorGeom abstract : public BuilderTransform
```

**F#**<br />
``` F#
[<AbstractClassAttribute>]
[<SerializableAttribute>]
type BuilderColorGeom =  
    class
        inherit BuilderTransform
    end
```

The BuilderColorGeom type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="f55b0303-3a39-2d96-1370-d46e921d7d6d">BuilderColorGeom</a></td><td>
Initializes a new instance of the BuilderColorGeom class</td></tr></table>&nbsp;
<a href="#buildercolorgeom-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="d8393b57-34c4-bf18-fa00-f9b96583a74d">Color</a></td><td>
Gets or sets the color.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="d7d3e145-0944-79ee-7575-fb3be14972c9">DrawingColor</a></td><td>
Gets or sets the drawing color.</td></tr></table>&nbsp;
<a href="#buildercolorgeom-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="1d20be88-6e30-18da-4b02-8cef2d910b37">CheckValidationAboutBuild</a></td><td> (Overrides <a href="0118103d-9bd7-b767-2443-f5585732c011">Builder.CheckValidationAboutBuild()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="cb2e8b7a-6cf0-79da-0ccc-9cc37bc91a21">FillParameter</a></td><td> (Overrides <a href="f6b187d9-585c-3451-67c7-3f579ee8f8b2">Builder.FillParameter(BuilderParamBase)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="8ed481f5-7966-cb4c-ca47-3e056dc5032b">OnDeserialization</a></td><td>
Called when [deserialization].
 (Overrides <a href="8734db04-6386-6f5f-2fe0-0fac8767cbb3">Builder.OnDeserialization(Object)</a>.)</td></tr></table>&nbsp;
<a href="#buildercolorgeom-class">Back to Top</a>

## Fields
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="f5d27406-bf4d-3578-ef6d-e696e4bf8b48">m_color</a></td><td>
This value is BuilderColor.</td></tr></table>&nbsp;
<a href="#buildercolorgeom-class">Back to Top</a>

## See Also


#### Reference
<a href="bdeeb71e-08d7-cd91-e11a-795ab9385ff7">VM.Managed.CAD Namespace</a><br />

## Inheritance HierarchySystem.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="95892e40-8811-f191-46ab-8245b03d9b4c">ObjectEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="bc9c2fe1-a752-bc29-651e-38f354ac77a9">VM.Managed.CAD.Builder</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="7243749e-8f99-4473-cee9-c30191ef099d">VM.Managed.CAD.BuilderTransform</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.CAD.BuilderColorGeom<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="d6a5fed2-7a90-0f4d-8a72-edb84eb4cc50">VM.Managed.CAD.BuilderBoolean</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="7e2579f8-e73b-9bc7-38dc-024237943a3e">VM.Managed.CAD.BuilderCylinder</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="4b693cf7-1bae-837a-d467-b968bf0ed3bc">VM.Managed.CAD.BuilderHasTransform</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="f49c97ec-a98f-dbf0-1725-df8d813644ee">VM.Managed.CAD.BuilderHasTransformationMatrix</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e6bd9264-2afe-60b3-6656-d807f1514a76">VM.Managed.CAD.BuilderSheetThicken</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="ec89fcea-873f-281b-e471-a0017499161e">VM.Managed.CAD.BuilderSphere</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="10b53003-f7dd-322b-3840-cb4d1294e7ca">VM.Managed.CAD.BuilderTorus</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="9dff0265-4b70-6fe4-b0b6-0ac0749a46cc">VM.Managed.CAD.BuilderTriPlate</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="b6e3832e-ac86-9855-43c1-2718798409fa">VM.Managed.DAFUL.BuilderNut</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="cf61683c-f2b1-b381-1c31-1c6eab8189ba">VM.Managed.DAFUL.BuilderShaft</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="a4310f6e-35f2-2b9e-e26a-9880452b73d0">VM.Managed.DAFUL.GearTrain.CAD.GearBuilder</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="f7ab8a79-e469-e68a-16b2-a8a45edfd86a">VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="a69d8528-6c78-b9ab-7e90-4da2760c8ac0">VM.Managed.DAFUL.GearTrain.CAD.RackBuilder</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="02d9c539-2a24-ac4f-2c28-f4784ad5e95f">VM.Managed.DAFUL.GearTrain.CAD.SectionBuilder</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="fcbd681e-6d9d-1dd6-ff4c-971e209ab12a">VM.Managed.DAFUL.GearTrain.MotorBaseBuiler</a><br />