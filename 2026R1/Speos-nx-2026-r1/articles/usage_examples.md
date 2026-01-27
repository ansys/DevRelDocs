---
uid: _usage_examples
title: Usage Examples
---

# Usage examples

### Creating a feature Source







```python
    import os 
    import sys

    # NXOpen Python
    import NXOpen

    ########################################################
    # Loading NX and SNX
    ########################################################

    # Add path for to import SNX
    sys.path.append(os.environ["SPEOS_NX_DIR"] + "\\application") 
    import SpeosNX 

    # Set load option
    MyNXSession = NXOpen.Session.GetSession()
    MyNXSession.Parts.LoadOptions.PartLoadOption = NXOpen.LoadOptions.LoadOption.FullyLoad
    MyNXSession.Parts.LoadOptions.ComponentsToLoad = NXOpen.LoadOptions.LoadComponents.LastSet

    # Open .prt file
    basePart1, partLoadStatus1 = MyNXSession.Parts.OpenActiveDisplay("./assembly1.prt", NXOpen.DisplayPartOption.AllowAdditional)
    partLoadStatus1.Dispose()

    # Switch to NX Modeling
    MyNXSession.ApplicationSwitchImmediate("UG_APP_GATEWAY")

    # Switch to Speos
    MyNXSession.ApplicationSwitchImmediate("SPEOS_MAIN_APP")

    # Load SNX
    Session = SpeosNX.Session.GetSession()
    PartCollection = Session.Parts
    Work = PartCollection.Work
    FeatureCollection = Work.Features
    PartCollection.Load()


    ########################################################
    # Get NX features and set file path
    ########################################################

    # Retrieve axis system tags
    workPart = MyNXSession.Parts.Work
    origin = workPart.Features.FindObject("POINT(1)").FindObject("POINT 1")
    xAxis = workPart.Datums.FindObject("DATUM_AXIS(2)")
    yAxis = workPart.Datums.FindObject("DATUM_AXIS(3)")

    # Retrieve guide
    guide = workPart.ComponentAssembly.RootComponent.FindObject("COMPONENT Guide 1")
    bodyguide = guide.FindObject("PROTO#.Bodies|EXTRUDE(3)")

    # input path folder
    inputPath = os.environ["UGII_TMP_DIR"] + os.sep + "Speos input files" + os.sep


    ########################################################
    # Creating SNX Feature
    ########################################################

    # Creates the builder
    SurfaceSource = FeatureCollection.CreateSourceSurfaceBuilder(None)

    # Feature name,
    SurfaceSource.Name = "Some source"

    # General
    SurfaceSource.FluxUnitType = 1
    SurfaceSource.Flux = 1.777
    SurfaceSource.SpectrumType = 1
    SurfaceSource.Temperature = 3333.3

    # Emissive Faces
    SurfaceSource.ExitanceType = 1
    SurfaceSource.ExitanceDistributionFile = inputPath + "Exitance2.xmp"
    SurfaceSource.ExitanceOriginPoint = origin.Tag
    SurfaceSource.ExitanceXDirection = xAxis.Tag
    SurfaceSource.ExitanceYDirection = yAxis.Tag
    SurfaceSource.ExitanceYDirectionReverse = True

    # Intensity
    SurfaceSource.EnumIntensityType = 1
    SurfaceSource.IntensityTotalAngle = 180

    # Geometries
    SurfaceSource.AssociatedGeometries = [bodyguide.Tag]

    # Properties
    SurfaceSource.NumberOfRays = 10000
    SurfaceSource.RayLength = 100

    # Create the feature
    SurfaceSource.Commit()

    # Save and quit
    MyNXSession.Parts.SaveAll()
    MyNXSession.Parts.CloseAll(NXOpen.BasePart.CloseModified.CloseModified, None)
```
