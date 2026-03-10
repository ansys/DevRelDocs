# File IShadedModelVisualizationExport.cs

<a id="_i_shaded_model_visualization_export_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::IShadedModelVisualizationExport](interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_visualization_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_visualization_export)
* [ZOSAPI::Tools::IShadedModelTriangleList](interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_triangle_list.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_shaded_model_triangle_list)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Tools](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools)

## Source


```csharp
using System.Runtime.InteropServices;
using ZOSAPI.Common;

namespace ZOSAPI.Tools
{
    [Guid("8BAC657F-7F5D-4A27-8870-1C5E98B56B18")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IShadedModelVisualizationExport : ISystemTool
    {
        int StartSurface { get; set; }
        int EndSurface { get; set; }
        int Object { get; set; }

        IShadedModelTriangleList GetResults();
    }

    [ComVisible(true)]
    [Guid("7B515BD6-2920-4763-8BC4-4FC8DD8B6629")]
    public enum VertexOrder
    {
        First,
        Second,
        Third,
    }

    [Guid("E06A0CB4-BE81-4162-BBE7-EF2CE0ED1471")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IShadedModelTriangleList
    {
        int NumberOfTriangles { get; }
        int NumberOfSurfaces { get; }
        int TotalNumberOfObjects { get; }

        int[] NumberOfObjects(int Surface);

        bool GetVertex(int TriangleNumber, VertexOrder Vertex, out double X, out double Y, out double Z, out double XNormal, out double YNormal, out double ZNormal, out int Surface, out int Object);

        IVectorData XCoords { get; set; }
        IVectorData YCoords { get; set; }
        IVectorData ZCoords { get; set; }
        IVectorData XNormals { get; set; }
        IVectorData YNormals { get; set; }
        IVectorData ZNormals { get; set; }
        IVectorData SurfaceIndex { get; set; }
        IVectorData ObjectIndex { get; set; }
    }
}
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)