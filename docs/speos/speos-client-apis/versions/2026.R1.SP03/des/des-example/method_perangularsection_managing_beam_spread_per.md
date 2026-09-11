# PERAngularSection – Managing the beam spread of a poly ellipsoidal reflector

This page presents you an example on how to define a Control Plane that allows you to drive the overall beam spread for a Poly Ellipsoidal Reflector.

```ironpython
# Poly Ellipsoidal Reflector
perSurface = SpeosDes.PER.Create()
            
perSurface.SourcePoint.Set(GetRootPart().Curves[0])
perSurface.ImagePoint.Set(GetRootPart().Curves[6])
perSurface.OrientationAxis.Set(GetRootPart().Curves[3])
perSurface.Symmetry = SpeosDes.PER.EnumSymmetry.SymmetryTo0Plane
            
angularSectionConfig = perSurface.AngularSections
ParsePER(angularSectionConfig)
            
# Add angular section
perAngularSection = perSurface.AngularSections.AddNew(0)
perAngularSection.Angle = 55
            
print "After adding an angular section: "
            
angularSectionConfig = perSurface.AngularSections
ParsePER(angularSectionConfig)
            
# Add control plane
controlPlane = perAngularSection.ControlPlanes.AddNew()
controlPlane.Defocus = 0
controlPlane.Position = 15
            
print "After adding a control plane: "
            
angularSectionConfig = perSurface.AngularSections
ParsePER(angularSectionConfig)
            
perSurface.Compute() 
```