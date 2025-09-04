# Variables


public class [Variables](index.md) : [PHXCOMObject](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/index.md), [Iterator](https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html)&lt;[E](https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html)&gt; 

A collection of variables

#### Author

Sharp, 11/2002

## Functions

| Name | Summary |
|---|---|
| [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [forEachRemaining](index.md#-1223920446%2FFunctions%2F-2117262581) | public [forEachRemaining](index.md#-1223920446%2FFunctions%2F-2117262581)(action: [Consumer](https://docs.oracle.com/javase/8/docs/api/java/util/function/Consumer.html)&lt;in [E](https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html)&gt;) |
| [getCount](get-count.md) | public [getCount](get-count.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>gets the number of variables in this collection |
| [getItem](get-item.md) | public [getItem](get-item.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Variable](../-variable/index.md)<br>public [getItem](get-item.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variable](../-variable/index.md)<br>Gets a particular element of this collection |
| [hasNext](has-next.md) | public [hasNext](has-next.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Returns true if next() can return another valid variable from this iterator |
| [next](next.md) | public [next](next.md)(): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)<br>Returns the next available object from this collection. |
| [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [remove](remove.md) | public [remove](remove.md)()<br>Unimplemented. |
| [resetIterator](reset-iterator.md) | public [resetIterator](reset-iterator.md)()<br>Resets the iterator with respect to the hasNext() and next() functions. |
| [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
