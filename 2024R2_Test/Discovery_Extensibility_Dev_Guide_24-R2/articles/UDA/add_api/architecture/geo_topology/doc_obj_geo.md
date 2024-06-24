# Doc objects and geometry

Topology objects \(Body, Face, Edge, etc.\) and geometry objects \(Plane, Cylinder, Line, etc.\) aren't doc objects. They aren't part of a parent-child hierarchy, and they don't have monikers or update states. They're lower level objects, since they might be referenced by a doc object, but they have no knowledge of documents and doc objects themselves.

You can construct geometry, trimmed objects, and even solid bodies, to perform geometric calculations, without modifying a document:

```
public static void Example() {
	// create infinite line with zero parameter at the origin
	Line line = Line.Create(Point.Origin, Direction.DirX);

	// create line segment from (-0.01, 0, 0) to (0.01, 0, 0)
	ITrimmedCurve trimmedCurve = CurveSegment.Create(line, Interval.Create(-0.01, 0.01));
	Debug.Assert(Accuracy.EqualLengths(trimmedCurve.Length, 0.02));

	// find closest point to (0.05, 0.05, 0)
	CurveEvaluation eval = trimmedCurve.ProjectPoint(Point.Create(0.05, 0.05, 0));

	// closest point on line segment should be (0.01, 0, 0)
	Debug.Assert(eval.Point == Point.Create(0.01, 0, 0));
}
```

The document is modified when you create doc objects. For example, you might create a design curve from a trimmed curve.

