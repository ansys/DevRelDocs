# LoggerUpdater


public class [LoggerUpdater](index.md)

This class is called by the Java logging infrastructure to notify the the C++ logger it update its local logging level. This way, we don't have to make a JNI call to check the logging level for each logging call. see UTIL/PHXLogger.h

#### Author

jdaley, 2010

## Constructors

| | |
|---|---|
| [LoggerUpdater](-logger-updater.md) | constructor(logger: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))<br>Constructs this logger wrapper and instantiates underlying Logback logger |

## Functions

| Name | Summary |
|---|---|
| [isResetResistant](is-reset-resistant.md) | public [isResetResistant](is-reset-resistant.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>continue to listen even after reset |
| [onLevelChange](on-level-change.md) | public [onLevelChange](on-level-change.md)(logger: Logger, level: Level) |
| [onReset](on-reset.md) | public [onReset](on-reset.md)(context: LoggerContext)<br>reset logger |
| [onStart](on-start.md) | public [onStart](on-start.md)(context: LoggerContext)<br>reset logger |
| [onStop](on-stop.md) | public [onStop](on-stop.md)(context: LoggerContext)<br>do nothing |
| [stop](stop.md) | public [stop](stop.md)()<br>stop listening. |
