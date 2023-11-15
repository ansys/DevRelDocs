# BuilderRollerGeneralSimple Class
 

The general roller builder class.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="95892e40-8811-f191-46ab-8245b03d9b4c">ObjectEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="bc9c2fe1-a752-bc29-651e-38f354ac77a9">VM.Managed.CAD.Builder</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="7243749e-8f99-4473-cee9-c30191ef099d">VM.Managed.CAD.BuilderTransform</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="01e4ecdc-b897-5c0b-d1a7-dbbd45ac5c24">VM.Managed.CAD.BuilderColorGeom</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="4b693cf7-1bae-837a-d467-b968bf0ed3bc">VM.Managed.CAD.BuilderHasTransform</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="c2db71b3-bbc1-3185-abf2-60297030b8f8">VM.Managed.CAD.Roller.BuilderRollerBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.CAD.Roller.BuilderRollerGeneralSimple<br />
**Namespace:**&nbsp;<a href="ce8163a5-a0d7-aa71-85fa-75b6975bc578">VM.Managed.CAD.Roller</a><br />**Assembly:**&nbsp;VMDRoller (in VMDRoller.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class BuilderRollerGeneralSimple : BuilderRollerBase
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class BuilderRollerGeneralSimple
	Inherits BuilderRollerBase
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class BuilderRollerGeneralSimple : public BuilderRollerBase
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type BuilderRollerGeneralSimple =  
    class
        inherit BuilderRollerBase
    end
```

The BuilderRollerGeneralSimple type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="4b57c3f8-3da0-3536-d8af-2117ed434ac6">BuilderRollerGeneralSimple</a></td><td>
Initializes a new instance of the BuilderRollerGeneralSimple class.</td></tr></table>&nbsp;
<a href="#builderrollergeneralsimple-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="7901d504-3d2e-bb19-6d35-6c099bab6512">Rollers</a></td><td></td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="1a340014-e29a-e407-587e-69e7a35c4068">RollerType</a></td><td>
Gets roller type.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="3ab1396e-ae91-d14a-4563-551125885339">TypeOfBuilder</a></td><td>

 (Overrides <a href="d2547625-53c8-b5c5-56af-b4d69906705b">Builder.TypeOfBuilder</a>.)</td></tr></table>&nbsp;
<a href="#builderrollergeneralsimple-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="4b7a4ded-49ba-f653-5756-cd4d9e3c6dbf">CheckValidationAboutBuild</a></td><td>
Checks the validation about build.
 (Overrides <a href="1d20be88-6e30-18da-4b02-8cef2d910b37">BuilderColorGeom.CheckValidationAboutBuild()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="409eb21f-fcd5-fb3c-43a6-2514e87ad182">FillParameter</a></td><td>

 (Overrides <a href="f5a81eb3-0b0e-a894-4360-52c5b37abb30">BuilderRollerBase.FillParameter(BuilderParamBase)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="86bff7a7-30ad-1613-454f-243766bf4b1a">GetGeneralRollerInfo</a></td><td></td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="cf5c8706-59fc-8d0f-3f45-4ba1f04c05f2">SetGeneralRollerInfo</a></td><td></td></tr></table>&nbsp;
<a href="#builderrollergeneralsimple-class">Back to Top</a>

## Fields
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="ed975543-2f91-e9ea-2a8f-a9b6e91be422">lstBottom</a></td><td>
The list of cylinder bottom position.</td></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="d2b00d19-d575-c3e1-87c8-c9f62fdc5065">lstRadius</a></td><td>
The list of cylinder radius.</td></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="8eb7253e-b674-a8be-4333-66b409242497">lstTop</a></td><td>
The list of cylinder top position.</td></tr></table>&nbsp;
<a href="#builderrollergeneralsimple-class">Back to Top</a>

## See Also


#### Reference
<a href="ce8163a5-a0d7-aa71-85fa-75b6975bc578">VM.Managed.CAD.Roller Namespace</a><br />