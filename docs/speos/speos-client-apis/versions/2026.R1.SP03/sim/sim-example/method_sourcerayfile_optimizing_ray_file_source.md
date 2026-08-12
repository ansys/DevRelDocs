# SourceRayFile – Optimizing a ray file source

This page presents you an example on how to optimize a Ray File Source thanks to the **OptimizeRayFile** method.

```ironpython
rayFileSource = SpeosSim.SourceRayFile.Find("Ray-file.1")
            
# this ray file does not need optimization
rayFileSource.RayFile = ".\\Speos input files\\rayfile_LT_QH9G_100k_270114_Speos.RAY"
canRayFileBeOptimized = rayFileSource.OptimizeRayFile()
            
print "Has this ray file been optimized? " + str(canRayFileBeOptimized)
            
# this ray file does need optimization
rayFileSource.RayFile = ".\\Speos input files\\rayfile_GW_PSLR31em_yellow_20M_20160909_IES_TM25.TM25RAY"
canRayFileBeOptimized = rayFileSource.OptimizeRayFile()
            
print "Has this ray file been optimized? " + str(canRayFileBeOptimized)
```