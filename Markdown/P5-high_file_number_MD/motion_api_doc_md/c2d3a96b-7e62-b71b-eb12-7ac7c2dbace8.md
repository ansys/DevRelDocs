# SectionGeometryTapered Class
 

The Hollow Tapered Geometry Section


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="61a8a328-b3bc-8c9a-50d7-bb860f7c67ef">VM.Managed.LinkContainer</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="22f274f4-ec91-461a-3030-a884f40acaf9">VM.Managed.DAFUL.GearTrain.SectionGeometryBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.GearTrain.SectionGeometryTapered<br />
**Namespace:**&nbsp;<a href="faae22d6-2802-465b-a817-230732284684">VM.Managed.DAFUL.GearTrain</a><br />**Assembly:**&nbsp;VMDGearTrain (in VMDGearTrain.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class SectionGeometryTapered : SectionGeometryBase
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class SectionGeometryTapered
	Inherits SectionGeometryBase
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class SectionGeometryTapered : public SectionGeometryBase
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type SectionGeometryTapered =  
    class
        inherit SectionGeometryBase
    end
```

The SectionGeometryTapered type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="60e89ca1-747f-8d31-65b1-88d10a7ecbc4">SectionGeometryTapered</a></td><td>
Initializes a new instance of the SectionGeometryTapered class.</td></tr></table>&nbsp;
<a href="#sectiongeometrytapered-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="a4511cac-f5d8-c770-f5e4-c717bf59ade3">EndRadius</a></td><td>
Gets or sets the end radius.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="a3b4716b-d0f5-3d8d-5d4b-f171d473236f">StartRadius</a></td><td>
Gets or sets the start radius.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="55fd0d13-3254-8527-14c3-7b8efa0ffa3f">TypeOfGeometry</a></td><td>
Gets the type of geometry.
 (Overrides <a href="9d2eb50c-b43b-fa63-5cb3-38c251dcbe53">SectionGeometryBase.TypeOfGeometry</a>.)</td></tr></table>&nbsp;
<a href="#sectiongeometrytapered-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="de53b806-b67b-fd73-5aa6-665f4ceec49c">GetBuilder</a></td><td>
Gets the builder.
 (Overrides <a href="107a3cf0-5778-5dfe-aa59-f94c48e0a215">SectionGeometryBase.GetBuilder(BuilderColor, VectorBase)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="9a111326-6ef6-0490-deed-5bb2a79ea4f0">GetGeomInfo</a></td><td>
Gets the geom information.
 (Overrides <a href="1cf3be1d-e6b4-7519-ab9d-c088b491f02c">SectionGeometryBase.GetGeomInfo()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="59b69095-6669-49ea-da85-3c8844932ab9">GetLengthAndHeight</a></td><td>
Gets the start and end point.
 (Overrides <a href="6ab7d24c-fd33-625f-fced-0a46a772c23a">SectionGeometryBase.GetLengthAndHeight(Double, Double)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="e23979d7-e8f5-b76d-3009-de20fa6baad5">InitChild</a></td><td>
Initializes the child.
 (Overrides <a href="c6f9a653-9f78-844b-fe33-2e43dc09293f">SectionGeometryBase.InitChild()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="95605f94-a739-c8a3-25ec-ee7cecdf30db">InnerCreateParameter</a></td><td>

 (Overrides <a href="8da0457b-0fa8-81f1-22f5-f0f5ade08658">SectionGeometryBase.InnerCreateParameter()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="a2bc24ac-d33c-40c4-f60f-91b0fe542614">InnerFillParameter</a></td><td>

 (Overrides <a href="abb1928c-d952-d63e-8e26-d572e3a7fc96">SectionGeometryBase.InnerFillParameter(BuilderParamBase, BuilderColor, VectorBase)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="1df5e698-f6db-f748-e1f8-d04b45430c26">SplitSectionInfo</a></td><td>
Splits the section information.
 (Overrides <a href="db306dcb-19e4-b437-7e1a-b19d0ae78639">SectionGeometryBase.SplitSectionInfo(HiddenShaftSetDocument, String, Int32)</a>.)</td></tr></table>&nbsp;
<a href="#sectiongeometrytapered-class">Back to Top</a>

## See Also


#### Reference
<a href="faae22d6-2802-465b-a817-230732284684">VM.Managed.DAFUL.GearTrain Namespace</a><br />