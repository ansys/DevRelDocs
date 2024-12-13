# Getting occurrences

Having done some work in master-space, it may be necessary to obtain an object in general-space. This is common if the original object came from the window selection, and you wish to set a new selection in the window.

The window selection is always in window-space, that is in the same coordinate-space as the scene shown in that window \(the same coordinate-system as `Window.Scene`\). So if the window shows an assembly, then the selected objects are in assembly space.

GetOccurrence can be used to obtain an object in general-space. It returns an occurrence that is similar to a companion object supplied. Note that the companion object is a general object, which may or may not be an occurrence. If it is an occurrence, then an equivalent occurrence is returned for the subject. If it isn't an occurrence, then the subject itself is returned. This allows you to write code that works correctly without testing whether the object is in fact an occurrence.

```
Public static void Example() {
	Window window = Window.ActiveWindow;
	if (window == null)
		return;

	// the selected component is in window-space
	IComponent oldComp = window.SingleSelection as IComponent;
	if (oldComp == null)
		return;

	// copy the component master
	Component oldMaster = oldComp.Master;
	Component newMaster = Component.Create(oldMaster.Parent, oldMaster.Template);
	newMaster.Placement = oldMaster.Placement;

	// get an occurrence of the new master in window-space
	IComponent newComp = newMaster.GetOccurrence(oldComp);

	// select the newly created component
	window.SingleSelection = newComp;
}

```


