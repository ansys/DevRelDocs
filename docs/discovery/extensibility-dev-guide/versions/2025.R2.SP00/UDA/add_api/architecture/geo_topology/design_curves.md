# Design curves

Design curves are what the end user refers to as *sketch curves*. They're called *design curves* in the API for consistency with design bodies, design faces, and design edges.

A DesignCurve is a doc object, which has a trimmed curve Shape.

```
public static void Example(Part part) {
	Line line = Line.Create(Point.Origin, Direction.DirX);
	ITrimmedCurve shape = CurveSegment.Create(line, Interval.Create(-0.01, 0.01));

	// create a design curve
	DesignCurve desCurve = DesignCurve.Create(part, Plane.PlaneXY, shape);

	// the Shape property returns the trimmed curve
	Debug.Assert(Accuracy.EqualLengths(desCurve.Shape.Length, 0.02));

	// override the layer color
	desCurve.SetColor(null, Color.DarkSalmon);
}

```

A design curve has other properties that are outside the concept of a trimmed curve, such as layer, color override, and name.

