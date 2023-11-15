# RacewayGeometryForRBEInMeshFree Class
 

The raceway geometry for rbe In MeshFree


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e4ef36d2-6ffe-3d20-3215-f6ddb4918c59">VM.Managed.ObjectBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="25f38b9b-1933-9616-6385-3e232ecca42b">VM.Managed.Object</a>(<a href="95892e40-8811-f191-46ab-8245b03d9b4c">ObjectEventCore</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="dc98f941-e8ef-25f9-9a55-0151997e3c14">VM.Managed.CAD.Body</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="48928b4d-d161-fabc-9892-a0b1b115bbe6">VM.Managed.DAFUL.GearTrain.CAD.GeometryBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.GearTrain.CAD.RacewayGeometryForRBEInMeshFree<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="ba4a4fba-0b89-98cf-9a16-7d5edf5454ff">VM.Managed.DAFUL.GearTrain.CAD.InnerRacewayGeometryForRBEInMeshFree</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="8e2a1db2-8b8f-1f7c-fa5d-219c886f3b33">VM.Managed.DAFUL.GearTrain.CAD.OuterRacewayGeometryForRBEInMeshFree</a><br />
**Namespace:**&nbsp;<a href="d9db19a5-2df6-b933-3d4e-2c38d80febf4">VM.Managed.DAFUL.GearTrain.CAD</a><br />**Assembly:**&nbsp;VMDGearTrain (in VMDGearTrain.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class RacewayGeometryForRBEInMeshFree : GeometryBase, 
	IDimension
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class RacewayGeometryForRBEInMeshFree
	Inherits GeometryBase
	Implements IDimension
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class RacewayGeometryForRBEInMeshFree : public GeometryBase, 
	IDimension
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type RacewayGeometryForRBEInMeshFree =  
    class
        inherit GeometryBase
        interface IDimension
    end
```

The RacewayGeometryForRBEInMeshFree type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="e51aaed4-0c5a-e648-d36d-5c21fe762417">RacewayGeometryForRBEInMeshFree()</a></td><td>
Initializes a new instance of the RacewayGeometryForRBEInMeshFree class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="ab76bdc2-8e52-692b-6c4d-7ae68d3a5f0f">RacewayGeometryForRBEInMeshFree(Builder)</a></td><td>
Initializes a new instance of the RacewayGeometryForRBEInMeshFree class.</td></tr></table>&nbsp;
<a href="#racewaygeometryforrbeinmeshfree-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="13f58b6c-3adf-14e9-c2a6-1291d427d247">TemperaryRacewayGeometry</a></td><td>
Temperaries the raceway geometry.</td></tr></table>&nbsp;
<a href="#racewaygeometryforrbeinmeshfree-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="bd647313-149d-e3cb-aefe-e0bd83a8bc8d">CreateGINFFileV3_2(String, String, AttributeFacetRefinementBase, ConvertFactor, UInt32, String, GeometryType, OutputType, MeshFreeMeshType)</a></td><td>Overloaded.  
Creates the GINF file V3_2.
 (Defined by <a href="d513b63e-db32-8d2c-442e-65ed78d2c378">BodyHelper</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="e0c4b56c-0953-5adb-89e5-a0b6d497c2b5">CreateGINFFileV3_2(String, String, AttributeFacetRefinementBase, ConvertFactor, UInt32, Boolean, VectorBase, String, GeometryType, OutputType, MeshFreeMeshType, VectorBase[], UInt32[], VectorBase[], UInt32[])</a></td><td>Overloaded.  
Creates the GINF file V3_2.
 (Defined by <a href="d513b63e-db32-8d2c-442e-65ed78d2c378">BodyHelper</a>.)</td></tr></table>&nbsp;
<a href="#racewaygeometryforrbeinmeshfree-class">Back to Top</a>

## See Also


#### Reference
<a href="d9db19a5-2df6-b933-3d4e-2c38d80febf4">VM.Managed.DAFUL.GearTrain.CAD Namespace</a><br />