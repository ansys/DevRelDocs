# Class: PHXBlocker

**Package:** `com.phoenix_int.util`

**Class Hierarchy**

```java
↳ java.lang.Object
  ↳ com.phoenix_int.util.PHXBlocker
```

--- 

**Declaration**

```java
public class PHXBlocker
extends java.lang.Object
```

Class to simplify wait and notify calls. Can be used to block one thread until some other thread signals a continue.

**Sample usage:**

```java
import com.phoenix_int.util.PHXBlocker;
//
public class PHXThingie
{
   PHXBlocker _blocker;
   public PHXThingie()
   {
      _blocker = new PHXBlocker(); //create the blocker.
      //You must call setBlock(true) before block.  You should
      //do it in a place before it is ever possible(however remote)
      //that some other thread calls unblock first.  In this case,
      //before the subthread is started.
      _blocker.setBlock(true);    
//
      MyThread t = new MyThread();
      t.start();                   //make a new thread that will unblock.
//
      System.out.println("hi");
      _blocker.block();            //this is the crux!
      System.out.println("there");
   }
//
   //Thread that just sits around for 10 secs and then unblocks.
   private class MyThread extends Thread
   {
      public void run()
      {
         try
         {
            sleep(10000);
         } catch(InterruptedException ie)
         {}
         _blocker.unblock();
      }
   }
}
```

## Field Summary

| Modifier and Type | Field and Description |
|-------------------|----------------------|
| `static java.lang.String` | `rcsid` |

## Constructor Summary

| Constructor and Description |
|---------------------------|
| `PHXBlocker()` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `block()`<br>Blocks until unblock() is invoked. |
| `boolean` | `block(long timeout)`<br>Blocks until unblock is invoked or timeout has been reached |
| `boolean` | `getBlock()` |
| `void` | `setBlock(boolean block)`<br>Call setBlock() before block() and before there is any remote chance that any other thread will call unblock(). |
| `void` | `unblock()` |
| `void` | `unblockAll()`<br>Same as unblock except designed for multiple waiters. |

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Field Detail

### rcsid

```java
public static final java.lang.String rcsid
```

**See Also:**
- [Constant Field Values](../../../constant-values.md)

## Constructor Detail

### PHXBlocker

```java
public PHXBlocker()
```

## Method Detail

### setBlock

```java
public void setBlock(boolean block)
```

Call `setBlock()` before `block()` and before there is any remote chance that any other thread will call `unblock()`.

### getBlock

```java
public boolean getBlock()
```

### block

```java
public boolean block(long timeout)
```

Blocks until unblock is invoked or timeout has been reached

**Parameters:**
- `timeout` - Maximum time to wait in milliseconds. Set to 0 to wait forever.

**Returns:**
- `true` if correctly unblocked. `false` if interrupted or timeout.

### block

```java
public void block()
```

Blocks until `unblock()` is invoked.

### unblock

```java
public void unblock()
```

### unblockAll

```java
public void unblockAll()
```

Same as unblock except designed for multiple waiters. If there is any chance of multiple people having called `block()`, then use `unblockAll()`.