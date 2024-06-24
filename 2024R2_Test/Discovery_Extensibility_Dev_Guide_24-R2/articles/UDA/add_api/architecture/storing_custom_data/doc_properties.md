# Document properties

Documents have two types of properties:

-   *Core properties* cover standard fields such as *description*, *subject*, *title*, and *creator*. The set of core properties is fixed. You cannot create new core properties.
-   *Custom properties* allow third party applications to store data with the document. Each custom property is a name-value pair.

So that custom property names do not clash when different applications choose a custom property name, the name should be prefixed with the application or add-in name, as in the following example:

```
public static void Example(Document doc) {
	CustomProperty.Create(doc, "BananaWorks.ApplicationVersion", 14);

	CustomProperty property;
	if (doc.CustomProperties.TryGetValue("BananaWorks.ApplicationVersion", out property))
		Debug.Assert((double) property.Value == 14);
}
```

Note that a document can contain more than one part, so if you want to store data for a part, this is best done by storing a custom attribute on the part master \(see next topic\).

