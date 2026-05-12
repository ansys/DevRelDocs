# Comparing UV objects

The same isn't true for the surface parameter UV types, PointUV, VectorUV, DirectionUV, and BoxUV, or for the curve parameter type, Interval. These types don't know whether the parameterization they represent is linear, angular, or some other type. For example, for a plane, the U parameterization is linear, but for a cylinder, the U parameterization is angular. For a NURBS surface, the U parameterization is neither linear nor angular.

Therefore, you shouldn't use the == operator for these types. When comparing parameters, you should use the appropriate length or angle comparison method for each of the U and V values. For NURBS parameterization, angular comparison could be used, but it's safest to evaluate points and compare these instead.


