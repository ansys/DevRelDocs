# Create finite elements

In TD, finite elements can be created directly by attaching them to existing nodes, but the preferred approach is to use an FE Mesh Importer. OpenTD allows you to use either method.

Creating a finite element mesh using the *FEMeshImporter* class is demonstrated in the following program:

```c#
using System;
using OpenTD;

namespace OpenTDGettingStarted
{
    class CreateFiniteElements
    {
        public static void Main(string[] args)
        {
            var td = new ThermalDesktop();
            td.Connect();

            // In TD and OpenTD, you can create a FEM with nodes and elements
            // directly, but the preferred approach is to use an FE Mesh Importer.

            // We'll demonstrate how to use a mesh importer. We'll start
            // by creating an empty one:
            bool useUCS = false;
            var meshImporter = td.CreateFEMeshImporter("a mesh importer", useUCS);

            // We're going to call the FEMeshImporter.SetMesh command, but
            // first we'll need to construct an FEMesh to pass to it. We'll
            // use linear quads, but a full complement of linear and quadratic
            // surface and solid element types are available.
            // The FEMesh object is a lightweight description of the mesh, with
            // lightweight nodes and elements that are only used as input to
            // the SetMesh command.
            var feMesh = new OpenTD.RadCAD.FEModel.FEMesh();
            int uDiv = 10;
            int vDiv = 10;
            double height = 0.5;
            double xPeriods = 2.0;
            double yPeriods = 1.0;
            double xLen = 5.0;
            double yLen = 3.0;
            int id = 0;
            int elemId = 0;
            for (int j = 0; j < vDiv + 1; ++j)
            {
                double y = j * yLen / vDiv;
                for (int i = 0; i < uDiv + 1; ++i)
                {
                    double x = i * xLen / uDiv;
                    double z = height * Math.Cos(x / xLen * xPeriods * 2.0 * Math.PI) * Math.Cos(y / yLen * yPeriods * 2.0 * Math.PI);
                    // lightweight node description:
                    var node = new OpenTD.RadCAD.FEModel.Node();
                    node.x = x;
                    node.y = y;
                    node.z = z;
                    node.Nx = 0.0;
                    node.Ny = 0.0;
                    node.Nz = 1.0;
                    node.id = ++id;
                    feMesh.nodes.Add(node);
                    if (i < uDiv && j < vDiv)
                    {
                        // lightweight surface description:
                        var face = new OpenTD.RadCAD.FEModel.SurfaceElement();
                        face.id = ++elemId;
                        face.order = 1;
                        face.numNodes = 4;
                        int baseIndex = j * (uDiv + 1) + i + 1;
                        face.nodeIds.Add(baseIndex);
                        face.nodeIds.Add(baseIndex + 1);
                        face.nodeIds.Add(baseIndex + 1 + uDiv + 1);
                        face.nodeIds.Add(baseIndex + uDiv + 1);
                        feMesh.surfaceElements.Add(face);
                    }
                }
            }
            meshImporter.SetMesh(feMesh);
            td.SetVisualStyle(VisualStyles.THERMAL_PP);
            td.RestoreIsoView(IsoViews.SE);
            td.ZoomExtents();
        }
    }
}
```

If you create a mesh using the FEMeshImporter class (the preferred approach), it is important to note that the *FEMesh* definition provided during creation is only used at that time. After creation, the client-side FEMesh object is not connected to the TD model and if you want to edit the mesh, you will have to get the editable objects to modify. This is discussed in section [Query and edit finite elements](./../modifying-td-models.md#query-and-edit-finite-elements).
