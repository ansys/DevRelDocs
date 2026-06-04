# SourceRayFile – Creating a ray file source

The following script sample shows you an example on how to create a Ray File Source.

```ironpython
rayFileSource = SpeosSim.SourceRayFile.Create()
rayFileSource.RayFile = ".\\SPEOS input files\\Rays.ray"

rayFileSource.OriginPoint.Set(GetRootPart().Components[1].Components[2].GetCoordinateSystems()[0])
rayFileSource.XDirection.Set(GetRootPart().Components[1].Components[2].GetCoordinateSystems()[0].Axes[0])
rayFileSource.YDirection.Set(GetRootPart().Components[1].Components[2].GetCoordinateSystems()[0].Axes[1])
rayFileSource.YDirectionReverse = True

exitFaces = (GetRootPart().Components[1].Components[1].GetBodies()[0].Faces[0], GetRootPart().Components[1].Components[1].GetBodies()[0].Faces[1], GetRootPart().Components[1].Components[1].GetBodies()[0].Faces[2], GetRootPart().Components[1].Components[1].GetBodies()[0].Faces[4])
rayFileSource.ExitGeometry.Set(exitFaces)
```