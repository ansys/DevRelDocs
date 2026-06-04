# Geometry selection methods

Geometry selections are required for almost any Speos object definition. They can be performed using the SpaceClaim selection.

 - Generic object selection can be performed using the SpaceClaim

    ```ironpython
    Geometries can be set using the SpaceClaim Selection:
    geometry1 = GetRootPart().Bodies[3]
    geometry2 = GetRootPart().Bodies[8]
    geometry3 = GetRootPart().Bodies[10]
    newMaterial.VolumeGeometries.Set(Selection.Create([geometry1, geometry2, geometry3]))
    ```

    ```ironpython
    Selection.Create(GetRootPart().Bodies[3]).SetActive()
    Selection.Create(GetRootPart().Bodies[8]).AddToActive()
    Selection.Create(GetRootPart().Bodies[10]).AddToActive()
    newMaterial.VolumeGeometries.Set(Selection.GetActive())
    ```

 - Origin or directions selection

    ```ironpython
    displaySource = SpeosSim.SourceDisplay.Create()
    displayOrigin = Selection.Create(GetRootPart().CoordinateSystems[0])
    displaySource.OriginPoint.Set(displayOrigin)
    
    displayXDirection = Selection.Create(GetRootPart().CoordinateSystems[0].Axes[0])
    displaySource.XDirection.Set(displayXDirection)
    
    displayYDirection = Selection.Create(GetRootPart().CoordinateSystems[0].Axes[1])
    displaySource.YDirection.Set(displayYDirection)
    ```

 - Oriented faces selection \(used in surface sources or FOPs to orientate the normal to the selected faces\)

    ```ironpython
    orientedFace = SpeosSim.OrientedFace.Create()
    emissiveFace = Selection.Create(GetRootPart().Bodies[7].Faces[0])
    orientedFace.Face.Set(emissiveFace)
    orientedFace.ReverseDirection = True 
    
    surfaceSource = SpeosSim.SourceSurface.Create()
    surfaceSource.EmissiveFaces.Add(orientedFace)
    ```