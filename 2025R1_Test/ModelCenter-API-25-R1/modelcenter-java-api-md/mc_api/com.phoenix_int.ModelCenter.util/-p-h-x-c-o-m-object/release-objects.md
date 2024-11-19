//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter.util](../index.md)/[PHXCOMObject](index.md)/[releaseObjects](release-objects.md)

# releaseObjects


public [releaseObjects](release-objects.md)()

This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. It is a useful last resort to prevent memory leaks due to programming mistakes, but is not reliable enough to depend on. 

 ModelCenter 6.1 includes a new Reference Debugger in the Java Console which can be used to track down COM resources that have not been properly released.
