# Glossary

## Common terms

API - Application Program Interface. Technically this meaning encompasses any programmtic interface between an App and something else, however, in software API is usually used to refer predominantly to text-based web APIs like REST APIs or gRPC APIs.

### **REST:** (Representational State Transfer)

REST is an architectural style for designing networked applications, typically for web services. It relies on stateless communication and uses standard HTTP methods such as GET, POST, PUT, and DELETE. REST APIs represent resources (data) via URLs, and clients interact with these resources using simple HTTP requests, allowing scalable and flexible communication between systems. RESTful services often return data in formats like JSON or XML.

### **SOAP:** (Simple Object Access Protocol)

SOAP is a protocol for exchanging structured information in web services, relying on XML for message formatting and typically using HTTP, SMTP, or other protocols for message transmission. It defines a set of rules for structuring messages, enabling complex interactions between applications, including security and transaction handling. SOAP is considered more rigid and heavier than REST, but offers more features like built-in error handling and extensibility.

### **gRPC:** (gRPC Remote Procedure Call)

gRPC is a high-performance, open-source RPC (Remote Procedure Call) framework developed by Google. It allows clients to invoke methods on servers as if they were local, enabling efficient communication between distributed systems. gRPC uses Protocol Buffers (protobuf) for defining data structure schemas and offers support for multiple languages. It is known for its speed and support for bi-directional streaming, making it a popular choice for microservices and high-throughput applications.

### **CLI:** command-line interface

A Command-Line Interface (CLI) is a text-based user interface used to interact with software or an operating system. Users type commands into a terminal or shell, which are executed by the system. CLIs offer a powerful way to control systems or applications with precise, scriptable inputs, but require knowledge of command syntax.

### **TUI:** text user interface (Ansys Fluent)

In addition to the graphical user interface of Ansys Fluent, it also includes a textual command line interface. The text interface (TUI) uses, and is written in, a dialect of Lisp called Scheme. Users familiar with Scheme can to use the interpretive capabilities of the interface to create customized commands.

### **TUI:** text user interface (general)

A Text User Interface (TUI) is a user interface that displays text, symbols, and ASCII characters for interaction, instead of relying on graphical elements. TUIs are typically used in command-line environments, and offer a more user-friendly, menu-driven experience than a pure CLI, though they remain keyboard-driven. An example of a TUI application would be the text editor Vim.

### **GUI:** graphical user interface

The GUI of an application encompasses the graphical aspects that allow one to interact with the software's features, such as windows, buttons, dialogue boxes, menus, etc. The majority of Ansys products have GUIs of some description. For example, when one launches Ansys Mechanical, the window that pops up containing the buttons and options is the GUI.

### **UX:** User Experience

The UX is a shorthand term that describes the experience of a user operating a system, product, or service. UX is a loose concept and can technically apply to any thing that a person might do. It encompasses ease of use, accessibility, performance, and even emotional response.

### **Programmatic interface**

A programmatic interface is an interface that allows software systems to interact with one another through code. This can include APIs in their traditional meaning but it can also include Python wrappers.

### **Front end**

The front end of an application or piece of software is the part the user interacts with. This is often the GUI, or the CLI, however, it can be the API as well. For example, the front end of a car would include the dashboard, steering wheel, pedals, and anything else the driver can use.

### **Back end**

The back end of an application or piece of software is the part the user never interacts with and often doesn't see. For example, the back-end of a car would encompass the engine and electrics and anything that the driver can not interact with without taking the car apart.

## Python-specific terms

### **Script (Python)**

A Python script is a file containing Python code that one executes as a standalone program or command. The file typically has a .py extension and contains a sequence of Python statements, functions, or classes that perform a specific task or series of tasks.

When run, the script is interpreted line by line by the Python interpreter, executing each command in sequence.

### **Module (Python)**

A Python module is a Python file that's intended to be imported into other Python modules and scripts. It typically defines functions classes, and variables  for use in other scripts and modules.

### **Package (Python)**

A Python package is a collection of modules that work together to provide a certain functionality. A single directory contains the modules, and nested directories may also contain them, as referred to by user applications. PyMAPDL and PyFluent are packages, for example, as are most of the members of the PyAnsys suite.

### **Library (Python)**

Often used interchangeably with package, a library is a loose term in Python development meaning a collection of pre-written functions, classes, and variables that perform specific tasks. Although there are many asserted distinctions between the two terms there is no general consensus regarding how the two terms differ. The Python Standard Library has a very specific definition, however, and isn't interchangeable with "package".

### **Python Standard Library (Python)**

[The Python standard library](https://docs.python.org/3/library/index.html) (or sometimes just 'the standard library') is a collection of modules and packages that come pre-installed with any Python installation. They're *not* pre-imported and still need to be explicitly imported to make use of them, however. Examples of standard library modules include `pathlib`, `getpass`, and `dataclasses`.

## Ansys terms

Ansys uses a lot of terms internally and externally that are Ansys-specific. The most common are below to assist understanding.

### **ACE:** Ansys Customer Excellence

### **ALH:** Ansys Learning Hub

### **AIC:** Ansys Innovation Courses

### **AIS:** Ansys Innovation Space

### **AFT:** Ansys Field Training

### **ASAF:** Ansys Solution Application Framework

### **ACT:** Application Customization Toolkit

## Software categorisation terms

### **Wrapper**

A wrapper is a piece of code or function that wraps around another piece of code, typically to modify or extend its behavior without altering the underlying code itself. Wrappers are commonly used to abstract complexity, add additional functionality (such as logging, input validation, or error handling), or simplify the interaction with a complex system or library.

For example, most PyAnsys libraries are Python wrappers around Ansys products. PyMAPDL 'wraps' MAPDL in a Python interface.

### **Open Source Software (OSS)**

Open Source Software (OSS) refers to software whose source code is publicly available for anyone to view, modify, and distribute, depending on the associated license. OSS encourages collaboration and community-driven development, often resulting in free, high-quality software. Examples include Linux, Git, and the Apache HTTP Server.

### **Freeware** 

Freeware is software that's available at no cost to users. Unlike Open Source Software, the source code for freeware is usually not available, meaning users can't modify or redistribute it. While it's free to use, it's still typically copyrighted. Examples include applications like Adobe Acrobat Reader and Skype.

### **Shareware**  

Shareware is a type of software distributed for free initially, but often with limited functionality or time constraints. Users can try the software before deciding whether to purchase the full version. Shareware allows users to test the software's capabilities but encourages them to pay for additional features or ongoing use. Examples include early versions of WinRAR and trial versions of many modern software products.

## Technical terms  

### **Dependencies**  

Dependencies in programming refer to external libraries, modules, or packages that a software application requires to function properly. For example, PyMAPDL depends on PyVista to run. Users must download PyVista as an external package and install it separately for PyMAPDL to operate, hence it's considered a dependency. The package manager you are using when installing typically handles these installations.

### **Transient dependencies**  

Transient dependencies are indirect dependencies. These are the packages and modules and libraries that the dependencies of a project depend on. They are typically not declared by the package they're needed for. For example, [PyMAPDL depends on](https://github.com/ansys/pymapdl/blob/main/pyproject.toml) the library [`matplotlib`](https://matplotlib.org/stable/), but `matplotlib` depends on [`Pillow`](https://pillow.readthedocs.io/en/latest/), which isn't listed in PyMAPDL's dependencies. This means `Pillow` is a transient dependency.

### **Framework**  

A framework is a pre-built, structured collection of code that provides a foundation for developing software applications. Frameworks enforce a specific architecture or methodology, promoting code organization and standardization, which makes development faster and more efficient. Unlike libraries, which the developer's code calls in its operation, a framework often calls the developer's code, defining the flow of the program.

## Developer slang  

The following section covers some common terms used by developers in every day usage that you may encounter from time-to-time.

### Acronyms  

Developers are fond of acronyms and they get employed regularly in both their day-to-day lexicon as well as when working with best practices. A selection of the most common ones is included below.

* **LGTM:** Looks good to me

* **PEBKAC:** Problem Exists Between Keyboard And Chair

* **RTFQ:** Read the *full* question

* **LBYL:** Look before you leap

* **EAFP:** Easier to ask forgiveness than permission

* **DRY:** Don't Repeat Yourself

* **WET:** Write Everything Twice (DRY's backronym)

* **YAGNI:** You aren't gonna need it

### Nonsense words  

There are also quite a few nonsensical words and sounds developers use to describe things (usually how much something has broken). These may seem silly but are so common in the modern developer lexicon it's useful to have an understanding of them as some even make it to the mainstream. A selection of the most esoteric is below.

* **Prod:** Short for 'production'. Typically used to refer to the production version of some software. For example, 'I found this bug on prod' means the developer just found a bug in the production code that was, or will be, shipped.

* **Code Smell:** Not something that IS wrong but a pattern of code that has the potential to cause problems.

* **bork(ed):** to break, or broken. For example, 'I borked the connection object with this input'

* [**Rubber-duck debugging:**](https://rubberduckdebugging.com/) - A form of debugging whereby the developer explains their problem in simple terms to a rubber duck, which often elucidates the issue. Surprisingly effective.
