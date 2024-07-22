# Parent-child hierarchy

Doc objects are part of a parent-child containment hierarchy, where the *parent* represents the container and the *children* represent the contents. If a doc object is deleted, all its *descendants* \(its children, recursively\) are also deleted.

For example, a Part contains zero or more DesignBody objects, each of which contains one or more DesignFace objects. The parent of a design face is a design body, and the parent of a design body is a part. Similarly, a design body is a child of a part, and a design face is a child of a design body.

```
Public static void Example(DesignBody desBody) {
	Part part = desBody.Parent;

	// a part is a root object, so it has no parent
	Debug.Assert(part.Parent == null);
	Debug.Assert(part.Root == part);

	// GetChildren<T> returns immediate children of type T
	foreach (DocObject child in part.GetChildren<DocObject>()) {
		// Parent returns the immediate parent
		Debug.Assert(child.Parent == part);
	}

	// DesignBody.Faces is equivalent to GetChildren<DesignFace>
	foreach (DesignFace desFace in desBody.Faces) {
		// Root returns the topmost parent
		Debug.Assert(desFace.Root == part);
	}

	// GetDescendants<T> gets all nested children of type T
    // the search starts with the object itself
	foreach (DesignFace desFace in part.GetDescendants<DesignFace>()) {
		// GetAncestor<T> crawls up the parent chain to find an object of type T
		Debug.Assert(desFace.GetAncestor<Part>() == part);

		// the search starts with the object itself
		Debug.Assert(desFace.GetAncestor<DesignFace>() == desFace);
	}
}

```

The parent chain continues up the hierarchy until the *root* object is reached. This is the topmost parent, which itself has no parent \(its parent is null\). Examples of root objects are: Part, DrawingSheet, and Layer.

All doc objects in the same parent-child hierarchy belong to the same document. The Document class provides properties to access its root objects: MainPart, Parts, DrawingSheets, and Layers.


