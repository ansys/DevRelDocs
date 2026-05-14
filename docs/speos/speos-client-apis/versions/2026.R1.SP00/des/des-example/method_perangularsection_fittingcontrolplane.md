# PERAngularSection – Using the FittingControlPlane method

This page presents you an example on how to use the **FittingControlPlane** method with a Poly Ellipsoidal Reflector.

```ironpython
# Poly Ellipsoidal Reflector

# Find "Poly Ellipsoidal Reflector.1" Light Guide 
perSurface = SpeosDes.PER.Find("Poly Ellipsoidal Reflector.1")

if not perSurface is None:
perSurface.Symmetry = SpeosDes.PER.EnumSymmetry.SymmetryTo0Plane 
            
perSurface.Compute() 
            
perSurface2 = perSurface.Clone()
perSurface2.Compute()
            
# Add angular section
perAngularSection = perSurface2.AngularSections.AddNew(0)
perAngularSection.Angle = 55
            
# Add control plane
controlPlane = perAngularSection.ControlPlanes.AddNew()
controlPlane.Defocus = 0
controlPlane.Position = 15
            
# Check position and defocus values
controlPlanes = perAngularSection.ControlPlanes
for controlPlane in controlPlanes:
    print "Control plane position: " + str(controlPlane.Position) + ", defocus: " + str(controlPlane.Defocus) 
            
fittingWorked = perAngularSection.FittingControlPlane()
print "After fitting control planes"
print "Fitting did work? " + str(fittingWorked)
            
for controlPlane in controlPlanes:
    print "Control plane position: " + str(controlPlane.Position) + ", defocus: " + str(controlPlane.Defocus)
            
perSurface2.Compute() 
            
perAngularSection = perSurface2.AngularSections[0]
fittingWorked = perAngularSection.FittingControlPlane()
print "Fitting did work? " + str(fittingWorked)
```