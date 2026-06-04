# Doc objects

Of particular importance is the distinction between *doc objects*, and the lower-level modeler and geometric objects. Doc objects, as the name suggests, belong to documents. They are first class objects, since they belong to a parent-child hierarchy, and they provide monikers \(for persistent identifiers\) and update states \(for associative update\).

Many doc objects have references to modeler or geometry objects:

-   Design bodies, design faces, and design edges are doc objects that have a reference to a corresponding modeler object: a body, face, or edge. You can create a modeler body without creating a design body, but this means no document is modified and nothing appears in the window. This can be useful if you want to perform some modeling calculation. You may or may not create a design body at the end.
-   Design curves are doc objects that have a reference to a trimmed curve, which is a geometry object. Again, you can create curves and trimmed curves without ever creating a design curve, but design curves are what get displayed in windows. \(You can create graphics display primitives, which reference geometry objects too, and these also get displayed in the window, although display primitives are not doc objects.\)
-   Datum planes are doc objects that have a reference to a plane, which is a geometry object. Again, you can create planes and other surfaces without ever creating a datum plane.

Typically, the doc object will have more properties than the modeler or geometry object that it references, such as name, layer, visibility, or color.

