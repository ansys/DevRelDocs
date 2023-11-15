# RacewayBuilderBase Class
 

Bearing Builder


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="95892e40-8811-f191-46ab-8245b03d9b4c">ObjectEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="bc9c2fe1-a752-bc29-651e-38f354ac77a9">VM.Managed.CAD.Builder</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="7243749e-8f99-4473-cee9-c30191ef099d">VM.Managed.CAD.BuilderTransform</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="01e4ecdc-b897-5c0b-d1a7-dbbd45ac5c24">VM.Managed.CAD.BuilderColorGeom</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="d6a5fed2-7a90-0f4d-8a72-edb84eb4cc50">VM.Managed.CAD.BuilderBoolean</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="64617ab7-5d0c-c406-56e0-2f8ce37b5b09">VM.Managed.CAD.BuilderMulti</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="dc353d47-1360-2640-88ff-1df057508392">VM.Managed.CAD.BuilderMultiSubtract</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="387545d6-c74e-cfe2-03d9-0b50649fe1ce">VM.Managed.CAD.BuilderMultiSubtractSimple</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="617f94d3-d641-39c4-04c7-78fa019c88ed">VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilder</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="0de306ac-9ee9-b0ea-a320-081066ee67b9">VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderForRBEInFE</a><br />
**Namespace:**&nbsp;<a href="d9db19a5-2df6-b933-3d4e-2c38d80febf4">VM.Managed.DAFUL.GearTrain.CAD</a><br />**Assembly:**&nbsp;VMDGearTrain (in VMDGearTrain.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class RacewayBuilderBase : BuilderMultiSubtractSimple, 
	IGeometryBuilder
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class RacewayBuilderBase
	Inherits BuilderMultiSubtractSimple
	Implements IGeometryBuilder
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class RacewayBuilderBase : public BuilderMultiSubtractSimple, 
	IGeometryBuilder
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type RacewayBuilderBase =  
    class
        inherit BuilderMultiSubtractSimple
        interface IGeometryBuilder
    end
```

The RacewayBuilderBase type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="72ae7518-6a10-6aeb-04ef-9d912d6e81bb">RacewayBuilderBase</a></td><td>
Initializes a new instance of the RacewayBuilderBase class.</td></tr></table>&nbsp;
<a href="#racewaybuilderbase-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="119522e3-17c0-e475-9b3b-2a3793177866">OffsetToAxisDirection</a></td><td>
Gets the offset to axis direction.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="446d3e5e-9cc0-78e4-e394-5207c01a2276">RacewayGeomInfo</a></td><td>
Gets or sets the bearing information.</td></tr></table>&nbsp;
<a href="#racewaybuilderbase-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="fcf01ab7-6843-b7bd-ed91-ad0fcbfedb8f">GetTransform</a></td><td>
Gets the transform.</td></tr></table>&nbsp;
<a href="#racewaybuilderbase-class">Back to Top</a>

## See Also


#### Reference
<a href="d9db19a5-2df6-b933-3d4e-2c38d80febf4">VM.Managed.DAFUL.GearTrain.CAD Namespace</a><br />