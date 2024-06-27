# Comparing XYZ objects

The basic XYZ types, Point, Vector, Direction, Box, and Frame, have resolution tests build in, so you can compare objects using the == operator. For example, two points are equal if the distance between them is less than the linear resolution, and two directions are equal if the angle between them is less than then angular resolution.

```
public static void Example(Plane plane, Point point) {
	// project point onto plane
	SurfaceEvaluation eval = plane.ProjectPoint(point);
	Point pointOnPlane = eval.Point;

	// points are the same if less than linear resolution apart
	bool planeContainsPoint = point == pointOnPlane;

	// ContainsPoint is more efficient, but gives the same result
	Debug.Assert(planeContainsPoint == plane.ContainsPoint(point));
}

```


