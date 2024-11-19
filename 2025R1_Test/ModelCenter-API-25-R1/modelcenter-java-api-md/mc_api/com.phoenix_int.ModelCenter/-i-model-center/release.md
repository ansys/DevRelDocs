//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[IModelCenter](index.md)/[release](release.md)

# release


abstract fun [release](release.md)()

Releases the COM reference to ModelCenter for this object. Although some attempt is made to clean up objects automatically through releaseObjects(), failure to call this function can sometimes lead to intermittent and difficult to debug problems or memory leaks. This object can no longer be used after calling release, but it is safe to call release() multiple times. 

 ModelCenter 6.1 includes a Reference Debugger on the Java Console window which can be used to find objects which have not been properly released.

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
