# Comparing geometry

To say that two surfaces or two curves are equal is ambiguous, since there is more than one interpretation of the concept. For example, with two planes:

-   They could be coplanar, but the normals could be opposed.
-   They could be coplanar, with normals having the same sense, but their frames and hence their parameterization might be different.
-   They might be identical in every way.

You should not use the == operator with surface and curve types, since that will only test for reference equality.

`Geometry.IsCoincident` and `ITrimmedCurve.lsCoincident` are provided to make comparisons. They only test for coincidence, which means any of the above cases would pass.


