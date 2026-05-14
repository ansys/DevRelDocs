# LocalMeshing – Creating a local meshing

The following script sample shows you an example on how to create a Local Meshing.

```ironpython
localMeshing = SpeosSim.LocalMeshing.Create()
localMeshing.Geometries.SelectAll()
localMeshing.MeshingSagMode = SpeosSim.LocalMeshing.EnumMeshingSagMode.Proportional
localMeshing.MeshingSagValue = 500000

localMeshing.MeshingStepMode = SpeosSim.LocalMeshing.EnumMeshingStepMode.Fixed
localMeshing.MeshingStepLengthValue = 1
```