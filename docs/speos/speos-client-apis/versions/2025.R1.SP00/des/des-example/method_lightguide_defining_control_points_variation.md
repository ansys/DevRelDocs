# LightGuide – Defining control points to create parameters variation along the guide

This page presents you an example on how to define Control Points to create parameter variation along the guide curve of a Light Guide.

```ironpython
# Light Guide
LightGuide1 = SpeosDes.LightGuide.Create()
            
# Guide curve
Curve_LightGuide = GetRootPart().Curves[4] 
LightGuide1.GuideCurve.Set(Curve_LightGuide)
            
# Body
LightGuide1.BodyProfileDiameter = 5
            
# Prisms orientation
X_Axis =  GetRootPart().Curves[1]
LightGuide1.OpticalAxis.Set(X_Axis)
            
LightGuide1.PrismsOperationType = SpeosDes.LightGuide.EnumPrismsOperationType.Hybrid
LightGuide1.ReverseOpticalAxisDirection = False
            
# Distances
LightGuide1.DistancesType = SpeosDes.LightGuide.EnumDistancesType.Curvilinear
LightGuide1.DistanceStart = 2
LightGuide1.DistanceEnd = 2
            
# Prism geometries
LightGuide1.StepType = "Control points"
            
stepConfig = LightGuide1.StepConfigurations
print "Number of configurations: " + str(stepConfig.Count)
            
for config in LightGuide1.StepConfigurations:
    print "Position: " + str(config.Position) + ", Value: " + str(config.Value)
            
controlPoint = LightGuide1.StepConfigurations.AddNew(0)
controlPoint.Position = 50
controlPoint.Value = 3
            
print "After adding new configuration: "
for config in LightGuide1.StepConfigurations:
    print "Position: " + str(config.Position) + ", Value: " + str(config.Value)
            
# Add after the index
child = LightGuide1.StepConfigurations.AddNew(0)
child.Position = 30
child.Value = 4   
            
LightGuide1.OffsetType = "Constant"
LightGuide1.OffsetValue = 4
            
LightGuide1.StartAngleType = "Input file"
LightGuide1.EndAngleType = "Automatic"
            
LightGuide1.CSVFile = ".\\LightGuide_export.csv"
            
LightGuide1.Compute() 
```