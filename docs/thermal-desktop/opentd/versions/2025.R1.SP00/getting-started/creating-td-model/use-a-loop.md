# Use a loop to create many layers, nodes, and conductors

It is easy to create two nodes and a conductor using the GUI. The real usefulness of an API like OpenTD is in automating things that are tedious and/or time-consuming. For example, the following program creates 101 nodes in a sinusoid pattern connected by conductors and puts them on 101 randomly colored layers. This program only uses a few new OpenTD concepts, but it demonstrates how OpenTD types can be combined with C\# statements to quickly accomplish things that would take much longer using the GUI.

```c#
using System;
using System.Collections.Generic;
using OpenTD;

namespace OpenTDGettingStarted
{
    class UseLoop
    {
        public static void Main(string[] args)
        {
            // parameters
            const int numNodes = 101;
            const string submodel = "wavybeam";
            const int startingNodeNum = 200;
            const string layerPrefix = "Random Layer";
            const double Length = 10.0;
            const double amplitude = 2.0;
            const double freq = 4;
            var startingPoint = new Point3d(0, 1, 0);

            // start TD
            var td = new ThermalDesktop();
            td.Connect();

            // create nodes and put them in a list for later use
            var r = new Random();
            var nodes = new List<Node>();

            for (int i = 0; i < numNodes; ++i)
            {
                var layer = td.CreateLayer(layerPrefix + " " + i);
                layer.ColorIndex = r.Next(254) + 1;
                layer.Update();

                double x = Length / (numNodes - 1) * i;
                double y = amplitude * Math.Sin(freq * x / Length * 2 * Math.PI);
                var nodeDisplacementFromStartingPoint = new Vector3d(x, y, 0);

                var n = td.CreateNode();
                n.Layer = layer.Name;
                n.Submodel = submodel;
                n.Id = startingNodeNum + i;
                n.Origin = startingPoint + nodeDisplacementFromStartingPoint;
                n.Update();

                nodes.Add(n);
            }

            // create conductors
            for (int i = 0; i < nodes.Count - 1; ++i)
            {
                var c = td.CreateConductor(nodes[i], nodes[i + 1]);
                c.Layer = nodes[i].Layer;
                c.Submodel = submodel;
                c.Update();
            }

            // control view
            td.ZoomExtents();
        }
    }
}
```

In the above program, note that we performed vector addition using the + operator:

```csharp
n.Origin = startingPoint + nodeDisplacementFromStartingPoint;
```

OpenTD knows how to perform limited arithmetic with its *Point2d*, *Point3d*, *Vector3d*, and *Matrix3d* objects.
