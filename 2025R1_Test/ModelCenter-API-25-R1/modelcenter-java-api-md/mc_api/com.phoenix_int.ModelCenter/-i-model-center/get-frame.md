//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[IModelCenter](index.md)/[getFrame](get-frame.md)

# getFrame


abstract fun [getFrame](get-frame.md)(): [JFrame](https://docs.oracle.com/javase/8/docs/api/javax/swing/JFrame.html)

gets a Frame that should be used as the parent for all windows displayed by Java plug-ins. This Frame is not the actual ModelCenter window and should not be used for anything but specifying a parent window. If ModelCenter is running in server mode, this object will be null.

#### Return

a JFrame object
