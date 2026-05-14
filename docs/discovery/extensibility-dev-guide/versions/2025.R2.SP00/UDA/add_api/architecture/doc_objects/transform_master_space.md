# Transforming to master-space

The most common of these properties to use is Master, because the master can provide methods and properties not available on the general object. Since the master might be in a different coordinate-space to the general object, TransformToMaster can be used to get the transform that maps objects in general-space to objects in master-space.

```
Public static void Example(Icomponent comp, Frame placement) {
	// the Placement property is available on Component, but not Icomponent
	Component master = comp.Master;

	// map placement frame into master-space
	Matrix transToMaster = comp.TransformToMaster;
	Frame masterPlacement = transToMaster * placement;

	// apply master placement frame to master component
	master.Placement = Matrix.CreateMapping(masterPlacement);
}

```


