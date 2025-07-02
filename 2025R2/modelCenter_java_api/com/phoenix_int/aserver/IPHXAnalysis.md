# Interface: IPHXAnalysis

**Package:** `com.phoenix_int.aserver`

**Superinterfaces**
- [`IPHXComponent`](IPHXComponent.md)

**Declaration**
```java
public interface IPHXAnalysis
extends IPHXComponent
```

This is the interface that analyses managed by ModelCenter Remote Execution must implement.

<!--
If you also want to support Athena, you should extend `IPHXAthenaAnalysis` instead.
-->

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `execute()`<br>Executes the analysis. |

### Methods inherited from interface [`com.phoenix_int.aserver.IPHXComponent`](IPHXComponent.md)
`end`

## Method Detail

### execute
```java
void execute()
    throws java.lang.Exception
```
Executes the analysis. If the analysis does not run successfully, e.g. the solution does not converge, then an exception should be thrown.

**Throws:**
- `java.lang.Exception` - thrown if the function does not complete successfully