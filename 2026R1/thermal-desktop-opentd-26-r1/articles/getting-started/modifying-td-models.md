# Modifying TD models

So far, you have seen how to create new entities in TD, but OpenTD can also be used to query existing models and modify their contents. For most entity types, there is a ThermalDesktop method to get all items of that type in the model, and a method to get a specific item. For example, *GetNodes()* returns a list of all Nodes, and *GetNode(string handle)* returns a specific node if you know its AutoCAD handle. (See the [Work with connections, handles, markers, and domains](creating-td-model/connections-handles-markers-domains.md) section) It is often convenient to use the *LINQ Single* or *Where* methods to search a returned list of entities to find the items that meet some criteria. For example, to find all the arithmetic nodes on layer “sheet”, you could do something like this:

```c#
var arithmeticNodes = td.GetNodes().Where
    (x => x.NodeType == RcNodeData.NodeTypes.ARITHMETIC
        && x.Layer == “sheet”);
```

The variable `arithmeticNodes` would now be an `IEnumerable<Node>` containing all of the arithmetic nodes on layer “sheet”.

**Note**: You can use foreach to iterate over the elements of an `IEnumerable`, just like a List. Or you can convert the `IEnumerable` to a List using the `ToList()` method.

Another useful LINQ technique is to use the `Select` method to extract a related list from an input list. For example, the following line creates an `IEnumerable<string>` containing the handles of all of the nodes returned by `GetNodes()`:

```c#
var nodeHandles = td.GetNodes().Select(x => x.Handle);
```

To delete any item with an AutoCAD handle, use the `ThermalDesktop.DeleteEntity` method. For items without handles, there are specialized delete methods such as `ThermalDesktop.DeleteSymbol`, which accepts the name of the symbol to delete.

The following examples demonstrate querying, modifying, and deleting entities in a model.

## Query and edit a model

Here is a program that demonstrates how to query a model and make simple edits. For the purposes of this program, we will first create a model and then query it, but the model could have been created by any means, including the GUI. The query techniques are the same.

```c#
using System;
using System.Collections.Generic;
using System.Linq;
using OpenTD;

namespace OpenTDGettingStarted
{
    class QueryModel
    {
        public static void Main(string[] args)
        {
            var td = new ThermalDesktop();
            td.Connect();
            Console.WriteLine("Creating a simple model...");
            var barNodes = new List<Node>();
            for (int i = 0; i < 10; ++i)
            {
                var n = td.CreateNode();
                n.Submodel = "bar";
                n.Id = i + 1;
                n.Origin = new Point3d(0.01 * i, 1, 0);
                n.Update();
                barNodes.Add(n);
            }
            for (int i = 0; i < barNodes.Count - 1; ++i)
            {
                var c = td.CreateConductor(barNodes[i], barNodes[i + 1]);
                c.Submodel = "bar";
                c.Id = 100 * (i + 1);
                c.Update();
            }
            var roomAir = td.CreateNode();
            roomAir.Submodel = "room";
            roomAir.NodeType = RcNodeData.NodeTypes.BOUNDARY;
            roomAir.Origin = new Point3d(0.055, 1.1, 0);
            roomAir.InitialTemp = 300;
            roomAir.Update();
            var barConnections = new List<Connection>();
            foreach (Node n in barNodes)
                barConnections.Add(new Connection(n));
            var convection = td.CreateConductor(roomAir, barConnections);
            convection.Value = 1;
            convection.Submodel = "room";
            convection.Id = 33;
            convection.Update();
            td.ZoomExtents();
            Console.WriteLine("Get all nodes in model...");
            var allNodes = td.GetNodes();
            foreach (Node n in allNodes)
                Console.WriteLine(" " + n);
            Console.WriteLine("Edit node BAR.3...");
            try
            {
                var bar3 = allNodes.Single(x => x.Submodel == "BAR" && x.Id == 3);
                Console.WriteLine(" Found it. Editing...");
                bar3.Comment = "This node was edited by OpenTD.";
                bar3.Update();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Problem getting or editing BAR.3: " + ex.Message);
            }
            Console.WriteLine("Find all boundary nodes...");
            var boundaryNodes = allNodes.Where(x => x.NodeType == RcNodeData.NodeTypes.BOUNDARY);
            foreach (Node n in boundaryNodes)
                Console.WriteLine(" " + n);
            Console.WriteLine("Get the nodes connected to each conductor...");
            var nodesInConductor = new Dictionary<Conductor, List<Node>>();
            foreach (Conductor c in td.GetConductors())
            {
                try
                {
                    var nodes = new List<Node>();
                    foreach (Connection conn in c.From)
                        nodes.Add(allNodes.Single(n => n.Handle == conn.Handle));
                    foreach (Connection conn in c.To)
                        nodes.Add(allNodes.Single(n => n.Handle == conn.Handle));
                    nodesInConductor.Add(c, nodes);
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Problem getting nodes for {0}: {1}", c, ex.Message);
                }
            }
            foreach (Conductor c in nodesInConductor.Keys)
            {
                Console.WriteLine(" " + c + " is connected to:");
                foreach (Node n in nodesInConductor[c])
                    Console.WriteLine(" " + n);
            }
            Console.WriteLine("Try to get a symbol that doesn't exist...");
            var thicknessSymbol = td.GetSymbols().Where(x => x.Name == "thickness");
            int count = thicknessSymbol.Count();
            if (count == 0)
                Console.WriteLine(" There was no symbol named 'thickness'.");
            else
                Console.WriteLine(" Found {0} symbol(s) named 'thickness'.", count);
        }
    }
}
```

## Query and edit finite elements

As mentioned previously in the [Additional information on positioning entities using BaseTrans and LocalTrans](creating-td-model/basetrans-and-localtrans.md) section, if you want to edit a mesh created by an FEMeshImporter, you will first have to get the objects representing the actual nodes and elements. Editing the FEMeshImporter directly only offers limited functionality. This is demonstrated in the following program:

```c#
using System;
using System.Linq;
using OpenTD;
using OpenTD.RadCAD.FEM;
namespace OpenTDGettingStarted
{
    class QueryAndEditFiniteElements
    {
        public static void Main(string[] args)
        {
            var td = new ThermalDesktop();
            td.Connect();
            // First we'll create a mesh using an FEMeshImporter:
            var meshImporter = td.CreateFEMeshImporter("a mesh importer", false);
            var feMesh = new OpenTD.RadCAD.FEModel.FEMesh();
            int uDiv = 3;
            int vDiv = 3;
            double height = 0.5;
            double xPeriods = 2.0;
            double yPeriods = 1.0;
            double xLen = 5.0;
            double yLen = 3.0;
            int id = 0;
            int elemId = 0;
            for (int j = 0; j < vDiv + 1; ++j)
            {
                double y = j \*yLen / vDiv;
                for (int i = 0; i < uDiv + 1; ++i)
                {
                    double x = i \*xLen / uDiv;
                    double z = height \*
                    Math.Cos(x / xLen \*xPeriods \*2.0 \*Math.PI) \*
                    Math.Cos(y / yLen \*yPeriods \*2.0 \*Math.PI);
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
                        var face = new OpenTD.RadCAD.FEModel.SurfaceElement();
                        face.id = ++elemId;
                        face.order = 1;
                        face.numNodes = 4;
                        int baseIndex = j \*(uDiv + 1) + i + 1;
                        face.nodeIds.Add(baseIndex);
                        face.nodeIds.Add(baseIndex + 1);
                        face.nodeIds.Add(baseIndex + 1 + uDiv + 1);
                        face.nodeIds.Add(baseIndex + uDiv + 1);
                        feMesh.surfaceElements.Add(face);
                    }
                }
            }
            meshImporter.SetMesh(feMesh);

            // As mentioned previously, the FEMesh we passed to SetMesh
            // is a lightweight description of the mesh, suitable for
            // initial creation only. To work with the elements
            // it created, we need to get them from TD:
            var quads = td.GetLinearQuads();

            // Let's edit all of the elements and their nodes:
            string submodel = "new_submodel";
            var allNodes = td.GetNodes();
            foreach (LinearQuad q in quads)
            {
                q.CondSubmodel = submodel;
                q.TopThickness = 0.01;
                q.Update();
                var quadNodes
                = allNodes.Where(n => q.AttachedNodeHandles.Contains(n.Handle));
                foreach (Node n in quadNodes)
                {
                    n.Submodel = submodel;
                    n.Update();
                }
            }

            td.SetVisualStyle(VisualStyles.THERMAL_PP);
            td.RestoreIsoView(IsoViews.SE);
            td.ZoomExtents();
        }
    }
}
```
