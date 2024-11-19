//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[ModelCenter](index.md)/[createDataMonitor](create-data-monitor.md)

# createDataMonitor


public [createDataMonitor](create-data-monitor.md)(component: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), title: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [DataMonitor](../-data-monitor/index.md)

create a data monitor and associate it with a particular component

#### Return

a PHXCOMDataMonitor COM object representing the data monitor control

#### Parameters



| | |
|---|---|
| component | the name of the component under which to create this data monitor |
| title | the title of the new data monitor |
| x | the x coordinate (in model space) of the new data monitor |
| y | the y coordinate (in model space) of the new data monitor |
