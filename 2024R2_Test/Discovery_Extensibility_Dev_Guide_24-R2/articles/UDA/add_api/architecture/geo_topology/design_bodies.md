# Design bodies

Just as a DesignCurve is a doc object, which has a Shape of type ITrimmedCurve, there is a similar pattern for bodies:

-   A DesignBody has a Shape of type Body.
-   A DesignFace has a Shape of type Face.
-   A DesignEdge has a Shape of type Edge.

This is only true for these doc object masters. For the corresponding general objects, less information is available:

-   IDesignBody has a Shape of type ITrimmedSpace.
-   IDesignFace has a Shape of type ITrimmedSurface.
-   IDesignEdge has a Shape of type ITrimmedCurve.

This means, you can only access detailed topology information, such as loops and fins, from masters:

```
public static void Example(IDesignFace desFace) {
	// we can get the area from the ITrimmedSurface shape
	double area = desFace.Shape.Area;

	// but to access loops, we need to use the master
	DesignFace desFaceMaster = desFace.Master;
	// if we access geometry, remember we are now in master-space
	Matrix transToMaster = desFace.TransformToMaster;

	DesignBody desBodyMaster = desFaceMaster.Parent;

	// the master Shape is a Face rather than an ITrimmedSurface
	Face face = desFaceMaster.Shape;
	foreach (Loop loop in face.Loops)
		foreach (Fin fin in loop.Fins) {
			Edge edge = fin.Edge;

			// get from shape back to doc object master
			DesignEdge desEdgeMaster = desBodyMaster.GetDesignEdge(edge);

			// from master to occurrence equivalent to desFace
			IDesignEdge desEdge = desEdgeMaster.GetOccurrence(desFace);
		}
}
```

However, the general interfaces do provide some convenient connectivity traversals at the doc object level:

```
public static void Example(IDesignFace desFace) {
	IDesignBody desBody = desFace.Parent;

	// the Edge property returns the edges in the face boundary
	foreach (IDesignEdge desEdge in desFace.Edges) {
		Debug.Assert(desEdge.Parent == desBody);

		// the Faces property returns the faces that meet at this edge
		Debug.Assert(desEdge.Faces.Contains(desFace));
	}
}
```


