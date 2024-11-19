//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[VariableLink](index.md)

# VariableLink


public class [VariableLink](index.md) : [PHXCOMObject](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/index.md)

This is a base class for variable types in ModelCenter

#### Author

Woyak, 9/2001

## Functions

| Name | Summary |
|---|---|
| [breakLink](break-link.md) | public [breakLink](break-link.md)()<br>breaks the link |
| [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [getLHS](get-l-h-s.md) | public [getLHS](get-l-h-s.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the left-hand side of the link equation |
| [getRHS](get-r-h-s.md) | public [getRHS](get-r-h-s.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the right-hand side of the link equation |
| [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [resumeLink](resume-link.md) | public [resumeLink](resume-link.md)()<br>resumes the link |
| [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
| [suspendLink](suspend-link.md) | public [suspendLink](suspend-link.md)()<br>suspends the link |
