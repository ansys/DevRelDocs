# ProjectionLens – Getting/Setting Aspheric Parameters

This page presents you an example on how to get/set the aspheric parameters of a Projection Lens.

```
pl = SpeosDes.ProjectionLens.Find("TIR Lens.1")
pl.BackFaceAspherics[2] = 2.3
print pl.BackFaceAspherics[2]
```