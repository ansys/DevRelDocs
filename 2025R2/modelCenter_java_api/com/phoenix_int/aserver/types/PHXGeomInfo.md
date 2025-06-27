======== START OF CLASS DATA ========
com.phoenix_int.aserver.types
## Class PHXGeomInfo
- java.lang.Object
- - com.phoenix_int.aserver.types.PHXGeomInfo
- ---

```java
public class PHXGeomInfo
extends java.lang.Object
```
this is a utility class that mirrors the structures in ModelCenter. If you
 want to calculate values for certain geometry information such as CGs, 
 instantiate this class and set the values for the desired parameters. 
 ModelCenter will then use these parameters instead of letting the user
 specify values or calculating them itself.
**Author:**
: Woyak 10/98- ======== CONSTRUCTOR SUMMARY ========
- ### Constructor Summary

| Constructor and Description |
| --- |
| Constructor and Description |
| `PHXGeomInfo()` |
| `PHXGeomInfo(boolean hasRotation,
           boolean hasTranslation,
           boolean hasColor,
           boolean hasCentroid,
           boolean hasVolume,
           boolean hasSurfaceArea,
           boolean hasMass)` |
========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `PHXAppearance` | `getAppearance()` |
| `PHXMassProperties` | `getMassProperties()` |
| `PHXOrientation` | `getOrientation()` |

- ### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`- ========= CONSTRUCTOR DETAIL ========
- ### Constructor Detail

- #### PHXGeomInfo

```java
public PHXGeomInfo()
```

- #### PHXGeomInfo

```java
public PHXGeomInfo(boolean hasRotation,
                   boolean hasTranslation,
                   boolean hasColor,
                   boolean hasCentroid,
                   boolean hasVolume,
                   boolean hasSurfaceArea,
                   boolean hasMass)
```
============ METHOD DETAIL ==========
- ### Method Detail

- #### getOrientation

```java
public PHXOrientation getOrientation()
```

- #### getAppearance

```java
public PHXAppearance getAppearance()
```

- #### getMassProperties

```java
public PHXMassProperties getMassProperties()
```
========= END OF CLASS DATA =========