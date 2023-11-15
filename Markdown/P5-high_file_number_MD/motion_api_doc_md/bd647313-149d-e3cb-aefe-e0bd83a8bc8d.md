# BodyHelper.CreateGINFFileV3_2 Method (Body, String, String, AttributeFacetRefinementBase, Unit.ConvertFactor, UInt32, String, GeometryType, OutputType, MeshFreeMeshType)
 

Creates the GINF file V3_2.

**Namespace:**&nbsp;<a href="8de27067-0dbb-4037-14da-18b5cdbd081c">VM.Managed.DAFUL.MeshFree</a><br />**Assembly:**&nbsp;VMDMeshFree (in VMDMeshFree.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public static bool CreateGINFFileV3_2(
	this Body body,
	string strMesherPath,
	string strMeshFreePrePath,
	AttributeFacetRefinementBase attrGeomOutputProp,
	ConvertFactor factor,
	uint nLevel,
	string strGINFPath,
	GeometryType geomType,
	OutputType outputType,
	ref MeshFreeMeshType resMeshType
)
```

**VB**<br />
``` VB
<ExtensionAttribute>
Public Shared Function CreateGINFFileV3_2 ( 
	body As Body,
	strMesherPath As String,
	strMeshFreePrePath As String,
	attrGeomOutputProp As AttributeFacetRefinementBase,
	factor As ConvertFactor,
	nLevel As UInteger,
	strGINFPath As String,
	geomType As GeometryType,
	outputType As OutputType,
	ByRef resMeshType As MeshFreeMeshType
) As Boolean
```

**C++**<br />
``` C++
public:
[ExtensionAttribute]
static bool CreateGINFFileV3_2(
	Body^ body, 
	String^ strMesherPath, 
	String^ strMeshFreePrePath, 
	AttributeFacetRefinementBase^ attrGeomOutputProp, 
	ConvertFactor^ factor, 
	unsigned int nLevel, 
	String^ strGINFPath, 
	GeometryType geomType, 
	OutputType outputType, 
	MeshFreeMeshType% resMeshType
)
```

**F#**<br />
``` F#
[<ExtensionAttribute>]
static member CreateGINFFileV3_2 : 
        body : Body * 
        strMesherPath : string * 
        strMeshFreePrePath : string * 
        attrGeomOutputProp : AttributeFacetRefinementBase * 
        factor : ConvertFactor * 
        nLevel : uint32 * 
        strGINFPath : string * 
        geomType : GeometryType * 
        outputType : OutputType * 
        resMeshType : MeshFreeMeshType byref -> bool 

```


#### Parameters
&nbsp;<dl><dt>body</dt><dd>Type: <a href="dc98f941-e8ef-25f9-9a55-0151997e3c14">VM.Managed.CAD.Body</a><br />The body.</dd><dt>strMesherPath</dt><dd>Type: System.String<br />The STR mesher path.</dd><dt>strMeshFreePrePath</dt><dd>Type: System.String<br />The STR mesh free pre path.</dd><dt>attrGeomOutputProp</dt><dd>Type: <a href="c9e01230-1802-a750-0f3d-40c2a3d2ca79">VM.Managed.AttributeFacetRefinementBase</a><br />The attr geom output prop.</dd><dt>factor</dt><dd>Type: ConvertFactor<br />The factor.</dd><dt>nLevel</dt><dd>Type: System.UInt32<br />The n level.</dd><dt>strGINFPath</dt><dd>Type: System.String<br />The STR GINF path.</dd><dt>geomType</dt><dd>Type: <a href="bacabd66-70e8-a829-5b8d-84a29f189518">VM.Managed.DAFUL.MeshFree.GeometryType</a><br />Type of the geom.</dd><dt>outputType</dt><dd>Type: <a href="41a39d41-6878-06a0-cc36-4e746190d8b4">VM.Managed.DAFUL.MeshFree.OutputType</a><br />Type of the output.</dd><dt>resMeshType</dt><dd>Type: <a href="12387b4a-550d-c6fa-a469-38cbfada95e7">VM.Managed.MeshFreeMeshType</a><br />Type of the res mesh.</dd></dl>

#### Return Value
Type: Boolean<br />

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="dc98f941-e8ef-25f9-9a55-0151997e3c14">Body</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="d513b63e-db32-8d2c-442e-65ed78d2c378">BodyHelper Class</a><br /><a href="c4397607-6835-5380-5332-28cb499d421c">CreateGINFFileV3_2 Overload</a><br /><a href="8de27067-0dbb-4037-14da-18b5cdbd081c">VM.Managed.DAFUL.MeshFree Namespace</a><br />