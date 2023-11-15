# BuilderShoe Class
 

The base builder class for shoe.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="95892e40-8811-f191-46ab-8245b03d9b4c">ObjectEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="bc9c2fe1-a752-bc29-651e-38f354ac77a9">VM.Managed.CAD.Builder</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="7243749e-8f99-4473-cee9-c30191ef099d">VM.Managed.CAD.BuilderTransform</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="01e4ecdc-b897-5c0b-d1a7-dbbd45ac5c24">VM.Managed.CAD.BuilderColorGeom</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="4b693cf7-1bae-837a-d467-b968bf0ed3bc">VM.Managed.CAD.BuilderHasTransform</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.CAD.Track.BuilderShoe<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e52c8141-f41c-9ed7-577c-90ea93b2791b">VM.Managed.CAD.Track.BuilderShoeUserDefined</a><br />
**Namespace:**&nbsp;<a href="016cb8c1-ea7a-0630-fdec-3227772767a2">VM.Managed.CAD.Track</a><br />**Assembly:**&nbsp;VMDTrackBase (in VMDTrackBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public abstract class BuilderShoe : BuilderHasTransform
```

**VB**<br />
``` VB
<SerializableAttribute>
Public MustInherit Class BuilderShoe
	Inherits BuilderHasTransform
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class BuilderShoe abstract : public BuilderHasTransform
```

**F#**<br />
``` F#
[<AbstractClassAttribute>]
[<SerializableAttribute>]
type BuilderShoe =  
    class
        inherit BuilderHasTransform
    end
```

The BuilderShoe type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="f1a2d3f6-e1c9-55cb-df96-f5f10ec3643f">BuilderShoe</a></td><td>
Initializes a new instance of the BuilderShoe class.</td></tr></table>&nbsp;
<a href="#buildershoe-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="7ed8c716-4212-a691-83ee-6ef870f2a9f8">Profile</a></td><td>
Gets and sets position data for shoe profile.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="9fb208f7-65ac-5339-813a-8579456c80d0">ShoeType</a></td><td>
Gets and sets shoe type.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="25b4f48a-c506-e283-a45d-53d770ac46a7">Transform</a></td><td>
Gets and sets Transformation.
 (Overrides <a href="70a3a6bd-51c8-0fb2-3c89-9ac1f1165352">BuilderHasTransform.Transform</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="6917e04c-5f50-2d51-02bd-7873a9f030ff">Uneditable</a></td><td>
Gets or sets Uneditable value..
 (Overrides <a href="97b4835d-6415-5d52-fa53-431a2b3f02a5">Builder.Uneditable</a>.)</td></tr></table>&nbsp;
<a href="#buildershoe-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="d37f745c-addd-7f3a-0431-2f17fa448041">SetTransform</a></td><td>
Sets the transform information.
 (Overrides <a href="47ccf8de-d130-f0e9-5a42-0cfbfe905181">BuilderTransform.SetTransform(TMatrix)</a>.)</td></tr></table>&nbsp;
<a href="#buildershoe-class">Back to Top</a>

## Fields
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="7169e1d4-1003-33a7-ccbe-fa897eb6f08c">m_enShoeType</a></td><td>
The enum for shoe type.</td></tr></table>&nbsp;
<a href="#buildershoe-class">Back to Top</a>

## See Also


#### Reference
<a href="016cb8c1-ea7a-0630-fdec-3227772767a2">VM.Managed.CAD.Track Namespace</a><br />