//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[RefArrayProp](index.md)

# RefArrayProp


public class [RefArrayProp](index.md) : [PHXCOMObject](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/index.md)

A Reference Array Property class for ModelCenter

#### Author

Woyak, 10/2001

## Functions

| Name | Summary |
|---|---|
| [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [getDescription](get-description.md) | public [getDescription](get-description.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the description value |
| [getEnumValues](get-enum-values.md) | public [getEnumValues](get-enum-values.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the enumerated value set |
| [getIsInput](get-is-input.md) | public [getIsInput](get-is-input.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>gets a flag indicating if the property is an input or output |
| [getName](get-name.md) | public [getName](get-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the name of the property |
| [getTitle](get-title.md) | public [getTitle](get-title.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the title value |
| [getType](get-type.md) | public [getType](get-type.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>get the type of the property (&quot;double&quot;, &quot;long&quot;, &quot;string&quot;, or &quot;boolean&quot;) |
| [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [setDescription](set-description.md) | public [setDescription](set-description.md)(description: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the description value |
| [setEnumValues](set-enum-values.md) | public [setEnumValues](set-enum-values.md)(enumValues: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the enumerated value set |
| [setIsInput](set-is-input.md) | public [setIsInput](set-is-input.md)(flag: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>sets a flag indicating if the property is an input or output |
| [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
| [setTitle](set-title.md) | public [setTitle](set-title.md)(title: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the title value |
