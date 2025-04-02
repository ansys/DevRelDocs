# Glossary

## Common terms

### **API** (Application Program Interface)

An API is a programmatic interface between an application and something else. In software, API usually refers to a text-based web API like a REST API or gRPC API.

### **Back end**

The back end of a software application is the part a user does not interact with directly. For example, the back end of a car includes the engine, electrics, and other parts that the driver cannot interact with without taking the car apart.

### **CLI** (Command-Line Interface)

A CLI is a text-based user interface used to interact with software or an operating system. Users type commands into a terminal or shell, which the system executes. CLIs provide a powerful way to control systems or applications with precise, scriptable inputs, but their use requires knowledge of the command syntax.

### **Front end**

The front end of a software application is the part the user interacts with. This is often a GUI or CLI but can also be an API. For example, the front end of a car includes the dashboard, steering wheel, pedals, and anything else the driver uses.

### **gRPC** (Google Remote Procedure Call)

gRPC is a high-performance, open-source RPC (remote procedure call) framework developed by Google. It lets clients invoke methods on servers as if they were local, enabling efficient communication between distributed systems. gRPC uses Protocol Buffers (protobuf) for defining data structure schemas and supports multiple languages. It is known for its speed and bi-directional streaming, making it popular for microservices and high-throughput applications.

### **GUI** (Graphical User Interface)

The GUI of an application includes the graphical elements that allow interaction with the software's features, such as windows, buttons, dialog boxes, and menus. Most Ansys products have GUIs. For example, when you launch Ansys Mechanical, the window with buttons and options is the GUI.

### **Programmatic interface**

A programmatic interface lets software systems interact with one another through code. This includes APIs in their traditional meaning but also Python wrappers.

### **REST** (Representational State Transfer)

REST is an architectural style for designing networked applications, typically for web services. It relies on stateless communication and uses standard HTTP methods such as GET, POST, PUT, and DELETE. REST APIs represent resources (data) with URLs. Clients interact with these resources using simple HTTP requests, enabling scalable and flexible communication between systems. RESTful services often return data in formats like JSON or XML.

### **SOAP** (Simple Object Access Protocol)

SOAP is a protocol for exchanging structured information in web services, relying on XML for message formatting and typically using HTTP, SMTP, or other protocols for message transmission. It defines rules for structuring messages, enabling complex interactions between applications, including security and transaction handling. SOAP is more rigid and heavier than REST but offers features like built-in error handling and extensibility.

### **TUI** (Text User Interface)

A TUI is a user interface that displays text, symbols, and ASCII characters for interaction instead of graphical elements. TUIs are typically used in command-line environments. They provide a more user-friendly, menu-driven experience than a pure CLI, though they remain keyboard-driven. An example of a TUI application is the text editor Vim. Ansys Fluent has both a GUI and a TUI. Its textual command-line interface uses a dialect of Lisp named Scheme. Users familiar with Scheme can use the interface's interpretive capabilities to create customized commands.

### **UX** (User Experience)

UX describes the experience of a user operating a system, product, or service. It encompasses ease of use, accessibility, performance, and even emotional response.

## Python-specific terms

### **Library**

A library in Python is a collection of pre-written functions, classes, and variables that perform specific tasks. This term and "package" are often used interchangeably. Although there are many asserted distinctions between the two terms, there is no general consensus. For example, the Python Standard Library has its own specific definition that is not interchangeable with "package."

### **Module**

A Python module is a Python file intended to be imported into other Python modules and scripts. It typically defines functions, classes, and variables for use in other scripts and modules.

### **Package**

A Python package is a collection of modules that work together to provide certain functionality. A single directory contains the modules, and nested directories may also contain them. PyMAPDL and PyFluent are examples of packages, as are most members of the PyAnsys ecosystem.

### **Python Standard Library**

[The Python Standard Library](https://docs.python.org/3/library/index.html) is a collection of modules and packages that come pre-installed with any Python installation. They are not pre-imported but must be explicitly imported to use them. Examples of modules in the Python Standard Library include `pathlib`, `getpass`, and `dataclasses`.

### **Script**

A Python script is a file containing Python code that you execute as a standalone program or command. The file typically has a `.py` extension and contains a sequence of Python statements, functions, or classes that perform specific tasks. When run, the script is interpreted line by line by the Python interpreter.

## Software categorization terms

### **Freeware**

Freeware is software available at no cost to users. Unlike open source software (OSS), the source code for freeware is usually not available, meaning users cannot modify or redistribute it. While it is free to use, it is still typically copyrighted. Examples include Adobe Acrobat Reader and Skype.

### **Open Source Software (OSS)**

OSS is software whose source code is publicly available for anyone to view, modify, and distribute, depending on the associated license. OSS encourages collaboration and community-driven development, often resulting in free, high-quality software. Examples include Linux, Git, and the Apache HTTP Server.

### **Shareware**

Shareware is software distributed for free initially, often with limited functionality or time constraints. Users can try the software before deciding whether to purchase the full version. Shareware allows users to test the software's capabilities but encourages them to pay for additional features or ongoing use. Examples include early versions of WinRAR and trial versions of many modern software products.

### **Wrapper**

A wrapper is code or a function that wraps around another piece of code, typically to modify or extend its behavior without altering the underlying code. Wrappers abstract complexity, add functionality (such as logging, input validation, or error handling), or simplify interaction with a complex system or library. For example, most PyAnsys libraries are Python wrappers around Ansys products. PyMAPDL wraps MAPDL in a Python interface.

## Technical terms

### **Dependencies**

Dependencies in programming are external libraries, modules, or packages that a software application requires to function properly. For example, PyMAPDL depends on PyVista to run. Users must download PyVista as an external package and install it separately for PyMAPDL to operate. The package manager typically handles dependency installations.

### **Framework**

A framework is a pre-built, structured collection of code that provides a foundation for developing software applications. Frameworks enforce a specific architecture or methodology, promoting code organization and standardization that makes development faster and more efficient. Unlike libraries, which the developer's code calls, a framework often calls the developer's code, defining the program's flow.

### **Transient dependencies**

Transient dependencies are indirect dependencies. These are the packages, modules, and libraries that a project's dependencies rely on. They are typically not declared by the package that they are needed for. For example, [PyMAPDL dependencies](https://github.com/ansys/pymapdl/blob/main/pyproject.toml) include [Matplotlib](https://matplotlib.org/stable/), but Matplotlib depends on [Pillow](https://pillow.readthedocs.io/en/latest/), which is not listed in PyMAPDL's dependencies. This means Pillow is a transient dependency.

## Ansys acronyms and abbreviations

Ansys uses many acronyms and abbreviations internally and externally. Here are the most commonly used ones:

* **ACE:** Ansys Customer Excellence
* **ACT:** Application Customization Toolkit
* **AFT:** Ansys Field Training
* **AIC:** Ansys Innovation Courses
* **AIS:** Ansys Innovation Space
* **ALH:** Ansys Learning Hub
* **ASAF:** Ansys Solution Application Framework

## Developer acronyms, abbreviations, and jargon

### Acronyms and abbreviations

* **DRY:** Don't repeat yourself.
* **EAFP:** Easier to ask forgiveness than permission.
* **LGTM:** Looks good to me.
* **LBYL:** Look before you leap.
* **PEBKAC:** Problem exists between keyboard and chair.
* **RTFQ:** Read the full question.
* **WET:** Write everything twice (DRY's backronym).
* **YAGNI:** You aren't gonna need it.

### Jargon

* **Bork(ed):** Used as a verb meaning to break or as an adjective meaning broken. For example, "I borked the connection object with this input."
* **Code smell:** Indicates that while the code is not wrong, it has a pattern that could potentially cause problems.
* **Prod:** An abbreviation for production, typically referring to the production version of software. For example, "I found this bug on prod" means the developer found a bug in the production code.
* **Rubber duck debugging:** A debugging method where the developer explains their problem in simple terms to a rubber duck, often clarifying the issue. For more information, see [Rubber Duck Debugging](https://rubberduckdebugging.com/).
