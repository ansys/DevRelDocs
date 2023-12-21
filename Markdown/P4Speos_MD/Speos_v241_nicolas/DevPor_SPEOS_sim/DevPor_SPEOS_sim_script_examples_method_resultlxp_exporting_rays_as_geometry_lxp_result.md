# ResultLXP – Exporting Rays as Geometry out of a Light Expert Result

The following script sample shows you an example on how to export rays as geometry out of a Light Expert result.

```
Inverse = SpeosSim.SimulationInverse.Find("Inverse.1")
Inverse.Compute()
lxpResult_Inverse = SpeosSim.ResultLXP.Find("Inverse.1.Irradiance.1.lpf")
lxpResult_Inverse.RayNumber = 100
lxpResult_Inverse.Compute()
lxpResult_Inverse.OpenLpf() # You need to load the LPF first, before ExportRayAsGeometry
lxpResult_Inverse.ExportRaysAsGeometry()
lxpResult_Inverse.CloseLpf() # You need to close the LPF after ExportRayAsGeometry

Direct = SpeosSim.SimulationDirect.Find("Direct.1")
Direct.Compute()
lxpResult_Direct = SpeosSim.ResultLXP.Find("Direct.1.Irradiance.1.lpf")
lxpResult_Direct.RayNumber = 100
lxpResult_Direct.Compute()
lxpResult_Direct.OpenLpf() # You need to load the LPF first, before ExportRayAsGeometry
lxpResult_Direct.ExportRaysAsGeometry()
lxpResult_Direct.CloseLpf() # You need to close the LPF after ExportRayAsGeometry
```