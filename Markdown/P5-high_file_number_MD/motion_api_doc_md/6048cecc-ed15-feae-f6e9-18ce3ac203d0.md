# BallPlacingContact Class
 


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="b7ba26fe-7ea3-f11c-600a-be06c9e96e17">EntityEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="b2d0c579-7ceb-1a07-eb60-7fbc0ec075d4">VM.Managed.ContainerObject</a>(<a href="b7ba26fe-7ea3-f11c-600a-be06c9e96e17">EntityEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="aeaf9d38-7c25-8cd9-c83a-920b7c91fda1">VM.Managed.EntityBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="b2ea4aac-7430-3c78-7c9d-956eda731718">VM.Managed.Entity</a>(<a href="5b54d022-9f20-2a63-a69d-a72064e06892">PropertyGeneralContact</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="91e1c892-0325-681e-8541-503866db3be9">VM.Managed.DAFUL.Contact.Contact</a>(<a href="5b54d022-9f20-2a63-a69d-a72064e06892">PropertyGeneralContact</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.BallPlacingContact<br />
**Namespace:**&nbsp;<a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL</a><br />**Assembly:**&nbsp;VMDBallPlacing (in VMDBallPlacing.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class BallPlacingContact : Contact<PropertyGeneralContact>
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class BallPlacingContact
	Inherits Contact(Of PropertyGeneralContact)
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class BallPlacingContact : public Contact<PropertyGeneralContact^>
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type BallPlacingContact =  
    class
        inherit Contact<PropertyGeneralContact>
    end
```

The BallPlacingContact type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="7c5ad550-b6df-99f6-f64e-5250aa429555">BallPlacingContact</a></td><td>
Initializes a new instance of the BallPlacingContact class</td></tr></table>&nbsp;
<a href="#ballplacingcontact-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="dace9e0f-8f3f-beb2-9f41-9c562e37f3ad">ArgumentType</a></td><td> (Overrides <a href="6d64946c-60f7-d621-5de5-fa003331768f">Contact(TProperty).ArgumentType</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="8adb1583-882c-2c6f-5ec6-be12f86ebe47">BallPlacing</a></td><td /></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="1424933b-1f79-4e33-2725-506cd58199c5">BallToBall</a></td><td /></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="75fedfea-8cdc-367a-a3a5-584b0358a903">BallToSurface</a></td><td /></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="88f78b10-b879-1258-12e1-55f1a92abf26">EnableBallToBall</a></td><td /></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="7a93a9f7-c9ff-16fe-e074-fe42e8943d5d">EnableBallToSurface</a></td><td /></tr><tr><td>![Protected property](media/protproperty.gif "Protected property")</td><td><a href="629399df-5fd5-aceb-a722-38417962315a">ReportTypeImpl</a></td><td> (Overrides <a href="18c6b33e-4a44-8208-d14c-a077fa12be80">Contact(TProperty).ReportTypeImpl</a>.)</td></tr></table>&nbsp;
<a href="#ballplacingcontact-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="286f334a-1cf9-50ce-76ab-afcdead1f984">CreateBallToSurfaceContact</a></td><td /></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="3d9a89f7-1dba-4386-1be9-783ccb3de9fa">UpdateIcon</a></td><td> (Overrides <a href="3c81a3fb-d853-e04c-be67-188875794f87">Contact(TProperty).UpdateIcon()</a>.)</td></tr></table>&nbsp;
<a href="#ballplacingcontact-class">Back to Top</a>

## See Also


#### Reference
<a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL Namespace</a><br />