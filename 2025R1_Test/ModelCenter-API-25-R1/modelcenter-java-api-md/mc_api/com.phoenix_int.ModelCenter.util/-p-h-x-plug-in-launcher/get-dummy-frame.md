//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter.util](../index.md)/[PHXPlugInLauncher](index.md)/[getDummyFrame](get-dummy-frame.md)

# getDummyFrame


public [getDummyFrame](get-dummy-frame.md)(): [JFrame](https://docs.oracle.com/javase/8/docs/api/javax/swing/JFrame.html)

 Returns a dummy frame object to be used as a parent frame for Java plug-ins. The JFrame is parented to the ModelCenter main frame. 

 Note: this method is called by ModelCenter during setup. Therefore, the frame can always be considered to be valid from other calls in this class that are likely to be performed post-setup. 

#### Return

the Java JFrame object, or null on failure
