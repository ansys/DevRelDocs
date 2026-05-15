# Work with connections, handles, markers, and domains

To connect objects in TD, you will use a Connection. A Connection contains a handle and a marker. As discussed in [Create nodes and a conductor](nodes-and-conductor.md) section, a handle is a string that TD uses to uniquely identify each object in a drawing. You have probably seen them listed in the Model Browser:

![Model Browser Example](./../media/2f2bcdeb872649910f747dfa5b80c4fa.png)

In addition to Connections, OpenTD uses handles to find objects when, for example, you call the Update() method on an object. Internally, OpenTD keeps track of which dwg contains the object, and finds it in the dwg using the Handle property of the object.

The other part of a Connection is a marker. This is an integer that specifies how the associated object is connected. For example, marker = 1 connects to the XMIN surface of an FD brick. Marker = 42 connects to XMAX, YMAX, and ZMAX. And Marker = 63 connects to all six surfaces of a brick. You might be wondering if those are random numbers. Converted to binary they make more sense:

| Decimal | Binary   | Applied Surfaces |      |      |      |      |      |
|---------|----------|------------------|------|------|------|------|------|
| 1       | 0b000001 |                  |      |      |      |      | XMIN |
| 42      | 0b101010 | ZMAX             |      | YMAX |      | XMAX |      |
| 63      | 0b111111 | ZMAX             | ZMIN | YMAX | YMIN | XMAX | XMIN |

There is a special value for markers: if Marker is set to -999, then the Connection connects to a TD domain. In this special case, the Handle member no longer specifies the handle of a single TD object, but rather the name of the domain.

The following program demonstrates these concepts:

```c#
using System.Collections.Generic;
using OpenTD;

namespace OpenTDGettingStarted
{
    class WorkWithConnections
    {
        public static void Main(string[] args)
        {
            var td = new ThermalDesktop();
            td.Connect();

            // create a rectangle:
            var brick = td.CreateSolidBrick();

            // create a heatload with default connection:
            // equiv. to td.CreateHeatLoad(new Connection(brick.Handle, 1));
            var heatLoad = td.CreateHeatLoad(brick);
            heatLoad.AppliedType = RcHeatLoadData.AppliedTypeBoundaryConds.SURFACE;
            heatLoad.Update();

            // with marker = 1 = 0b000001, heatload applied to XMIN
            // let's apply it to XMIN and YMIN:
            heatLoad.ApplyConnections[0].Marker = 0b000101;
            heatLoad.Name = "q applied to brick";
            heatLoad.Update();

            // create a rectangle:
            var rect = td.CreateRectangle();
            rect.BaseTrans.SetToRotX(90);
            rect.BaseTrans.SetOrigin(new Point3d(0, 0, 2));
            rect.XMax = 2;
            rect.YMax = 3;
            rect.BreakdownU.Num = 10;
            rect.BreakdownV.Num = 15;
            rect.Update();

            // create a domain that includes some of the rect nodes:
            var domainConnections = new List<Connection>();
            foreach (Node n in td.GetNodes())
            {
                if (rect.AttachedNodeHandles.Contains(n.Handle))
                {
                    if (n.Origin.Z < 4 && n.Origin.X < 1)
                        domainConnections.Add(new Connection(n));
                }
            }
            td.GetDomainManager().CreateDomain("HEATED", DomainType.NODESET, domainConnections);

            // apply a heat load to the domain:
            var rectHeatLoad = td.CreateHeatLoad(new Connection("HEATED", -999));
            rectHeatLoad.Name = "q applied to rectangle domain";
            rectHeatLoad.Update();

            td.SetVisualStyle(VisualStyles.THERMAL);
            td.RestoreIsoView(IsoViews.SW);
            td.ZoomExtents();
        }
    }
}
```
