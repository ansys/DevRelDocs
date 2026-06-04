# Linear and angular resolution

Internally, geometric calculations are performed to machine double precision. When comparing the results of calculations, values should always be compared to within a specific resolution. These resolutions are provided by the Accuracy class:

-   Two lengths are considered equal if their difference is less than LinearResolution.
-   Two angles are considered equal if their difference is less than AngularResolution.

For example, when ContainsPoint is called to determine whether a point lies in a surface, internally the distance from the surface might be calculated, and the result is true if this distance is less than LinearResolution.


