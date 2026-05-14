# Package com.phoenix_int.aserver.monitors

Provides interfaces and classes for adding process and output monitoring of components.

## Interface Summary

| Interface | Description |
| --- | --- |
| [IPHXFileCallback](IPHXFileCallback.md) | Callback interface to signal data available on a file being monitored. |

## Class Summary

| Class | Description |
| --- | --- |
| [PHXFileMonitor](PHXFileMonitor.md) | This class monitors a File for data by polling. |
| [PHXMonitorableStream](PHXMonitorableStream.md) | This class represents a stream of data which may be monitored by a client which supports progress monitors. |
| [PHXFileMonitor.FileMonitorChangeException](PHXFileMonitor.FileMonitorChangeException.md) | Exception thrown when a file monitor detects a change. |
| [PHXMonitorableStream.MonitorWriter](PHXMonitorableStream.MonitorWriter.md) | Writer for monitorable streams. |

## Other Documentation

- [package-tree.md](package-tree.md)

## Package com.phoenix_int.aserver.monitors Description
Provides interfaces and classes for adding process and output monitoring
of components.