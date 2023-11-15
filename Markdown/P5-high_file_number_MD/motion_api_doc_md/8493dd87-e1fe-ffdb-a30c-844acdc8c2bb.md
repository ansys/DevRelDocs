# HyperElastic Class
 

This base class is to represent hyper elastic material.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="95892e40-8811-f191-46ab-8245b03d9b4c">ObjectEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="326ae057-e04b-3e21-97fa-1695be65af8d">VM.Managed.SubEntity</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="6ac59a4a-5d59-5c69-6dad-5b567ed9640e">VM.Managed.Material.MaterialBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.Material.HyperElastic<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="c9628360-12d0-3214-13f9-abaf9c44ecd9">VM.Managed.Material.ArrudaBoyce</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="84840c4d-6499-79d1-b02b-dbe2bf6df7e5">VM.Managed.Material.MooneyRivlin</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="72faec42-55b6-2707-93f7-dfeff88f8a8b">VM.Managed.Material.NeoHookean</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="84081b94-593d-d3f6-2eac-15c61c12b645">VM.Managed.Material.Ogden</a><br />
**Namespace:**&nbsp;<a href="bb041816-d5a3-ad82-21c7-5c018064f3b0">VM.Managed.Material</a><br />**Assembly:**&nbsp;VMObjBase (in VMObjBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public abstract class HyperElastic : MaterialBase
```

**VB**<br />
``` VB
<SerializableAttribute>
Public MustInherit Class HyperElastic
	Inherits MaterialBase
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class HyperElastic abstract : public MaterialBase
```

**F#**<br />
``` F#
[<AbstractClassAttribute>]
[<SerializableAttribute>]
type HyperElastic =  
    class
        inherit MaterialBase
    end
```

The HyperElastic type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="74665480-b4bf-c3c6-7e04-eb8c1c360bed">HyperElastic()</a></td><td>
Initializes a new instance of the HyperElastic class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="bd1f6424-7b8c-09cc-7df5-099c6e24f738">HyperElastic(String)</a></td><td>
Initializes a new instance of the HyperElastic class.</td></tr></table>&nbsp;
<a href="#hyperelastic-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="af089b16-c85e-6b3e-f130-09af01b53af0">DampingRatio</a></td><td>
Gets or sets the damping ratio.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="cb6e41a4-5c9a-1c45-e091-c27990fb7d11">DisableHScaleFactor</a></td><td>
Gets or sets a value indicating whether [disable H scale factor]. Use SetDisableHScaleFactor() when this instance sets for undo/redo</td></tr></table>&nbsp;
<a href="#hyperelastic-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="878a5281-412b-9f67-5220-d127e657b94b">Initialize</a></td><td>
Initializes member through unit convert factor.
 (Overrides <a href="7f0b3540-c332-a0fd-844e-d18eefb361ee">MaterialBase.Initialize(ConvertFactor)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="c0c055bc-82e1-9d3e-6fff-cb0a6a150b56">ReadTemplateImpl</a></td><td>
Reads the template document [implementation].
 (Overrides <a href="05438273-57f6-91d0-70f7-506142def517">MaterialBase.ReadTemplateImpl(XmlReader)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="15f56db5-ecc5-88b1-2b36-ef816e8b1055">SetDisableHScaleFactor</a></td><td>
Set [disable Hscale] factor.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="9b429767-4edb-da8a-d84f-620303bd49e2">WriteTemplateImpl</a></td><td>
Writes the template document [implementation].
 (Overrides <a href="9dd44958-66c6-0f68-5571-551207482a22">MaterialBase.WriteTemplateImpl(XmlWriter)</a>.)</td></tr></table>&nbsp;
<a href="#hyperelastic-class">Back to Top</a>

## See Also


#### Reference
<a href="bb041816-d5a3-ad82-21c7-5c018064f3b0">VM.Managed.Material Namespace</a><br />