# Unbounded geometry and trimmed objects

In Discovery, geometry is conceptually unbounded, for example, a Plane extends indefinitely, a Sphere is complete, and a Line is infinite in length. On top of this there are *trimmed* objects, which are bounded and therefore provide additional properties:

-   ITrimmedCurve: a bounded curve. It provides Length and parametric Bounds.
-   ITrimmedSurface: a bounded surface. It provides Area,Perimeter, and a parametric BoxUV.
-   ITrimmedSpace: a bounded region of 3D space. It provides Volume and Surface Area.

All of these inherit from IBounded, which provides GetBoundingBox.

A trimmed curve has a Geometry property that returns the Curve, and a trimmed surface has a Geometry property that returns the Surface. A trimmed region even has a Geometry property that returns a Space object representing all of Cartesian 3D space.

Trimmed curves and trimmed surfaces also have an IsReversed property, which tells you whether the sense of the object is the opposite of the sense of its geometry. The sense of a trimmed curve is its direction, and the sense of a trimmed surface is which way its normals face.

