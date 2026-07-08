# LightGuide – Exporting prism parameters as CSV file

This page presents you an example on how to export all the prism parameters of a Light Guide as CSV file thanks to the **ExportAsCSVFile** method.

```ironpython
# Find "Light guide.1" Light Guide
LightGuide1 = SpeosDes.LightGuide.Find("Light guide.1")
           
if not LightGuide1 is None:
            
# Prism geometries
LightGuide1.StepType = "Control points"
            
stepConfig = LightGuide1.StepConfigurations
print "Number of configurations: " + str(stepConfig.Count)
config = 0
while config < stepConfig.Count:
   print "Position: " + str(stepConfig[config].Position) + ", Value: " + str(stepConfig[config].Value)
   config += 1
            
controlPoint = LightGuide1.StepConfigurations.AddNew(0)
controlPoint.Position = 50
controlPoint.Value = 3
            
child = LightGuide1.StepConfigurations.AddNew(0)
child.Position = 30
child.Value = 4   
            
LightGuide1.OffsetType = "Constant"
LightGuide1.OffsetValue = 4
            
LightGuide1.StartAngleType = "Input file"
LightGuide1.EndAngleType = "Automatic"
            
LightGuide1.CSVFile = ".\\LightGuide_export.csv"
            
LightGuide1.Compute() 
            
csvFile = currentPath + "\\" + "LightGuide_csv_export.csv"
LightGuide1.ExportAsCSVFile(csvFile)
```