# Persistent identifiers

Doc objects have persistent identifiers, called *monikers*, which can be recorded and later *resolved* to return the doc object again. The Moniker property returns a moniker for the doc object, and the Resolve method returns the doc object again.

Internally, master doc objects have an identifier, which is globally unique. Occurrences are identified by the instance, which is a master, along with the original object, which might itself be an occurrence. A moniker is an object that encapsulates the identifiers of the one or more master objects involved in the identity of the subject.

To record a moniker, you can record its string representation using ToString. The length of this string depends on the number of master objects involved. The format of this string isn't documented, so you shouldn't attempt to construct or modify such a string.

To convert the string representation back into a moniker, you can use `FromString`.

```
public static void Example(IDesignFace desFace) {
	Document doc = desFace.Document;

	// all doc objects provide a moniker
	Moniker<IDesignFace> desFaceMonikerA = desFace.Moniker;

	// resolve the moniker in the document to obtain the original object
	Debug.Assert(desFaceMonikerA.Resolve(doc) == desFace);

	// the string representation can be recorded
	string monikerText = desFaceMonikerA.ToString();

	// the moniker can be reconstructed from the string
	Moniker<IDesignFace> desFaceMonikerB = Moniker<IDesignFace>.FromString(monikerText);
	Debug.Assert(desFaceMonikerB.Resolve(doc) == desFace);
}

```

To resolve a moniker, a document must be provided as the context. Discovery allows more than one version of the same scdoc file to be loaded at the same time, so the same moniker could potentially be resolved in more than one document.

Since the internal identifiers involved are globally unique, there is no danger of resolving the moniker in an unrelated document. If you attempt to do so, `null` will be returned to indicate that the object was not found.


