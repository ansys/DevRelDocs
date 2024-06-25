# Custom attributes

Doc object masters provide custom attributes so that third party applications can store data. Two types of attribute are provided: text attributes and number attributes. An attribute is a name-value pair. A doc object can have a text attribute and a number attribute with the same name.

So that attribute names do not clash when different applications choose an attribute name, the name should be prefixed with the application or add-in name, as in the following example:

```
public static void Example(DesignBody desBody) {
	desBody.SetTextAttribute("BananaWorks.SkinCondition", "Ripe");

	string skinType;
	if (desBody.TryGetTextAttribute("BananaWorks.SkinCondition", out skinType))
		Debug.Assert(skinType == "Ripe");
}

```

Multiple values can be stored as multiple attributes with distinct names, or they can be formatted into a single text string using `String.Format` or an XML serializer.

