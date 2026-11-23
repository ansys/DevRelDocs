# Topology

The topology of a model is made of Body, Face, and Edge objects, along with other objects \(shells, loops, fins, and vertices\) that describe in more detail how they connect up.

-   Body inherits from ITrimmedSpace. It also provides Faces and Edges.
-   Face inherits from ITrimmedSurface. It also provides surrounding Edges.
-   Edge inherits from ITrimmedCurve. It also provides adjacent Faces.

Topology classes have more information than the trimmed object interfaces that they implement:

-   Trimmed object interfaces have no concept of connectivity.
-   Although they can return area and volume, respectively, ITrimmedSurface and ITrimmedSpace say nothing about the shape of their boundary. \(With ITrimmedCurve, the boundary has no shape as such, since the curve is simply bounded by parameter values.\)

