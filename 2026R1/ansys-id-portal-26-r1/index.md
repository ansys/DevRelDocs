# Overview

**Related documentation:** [Entra ID app registration (Azure Portal)](entra-setup.md) — create the Graph app and secrets once; then use this guide to install and run the scripts.

---

## Purpose

This toolset synchronizes the membership of a Microsoft Entra ID (formerly
Azure Active Directory) security group to an Ansys ID Portal account or
group. It is intended to allow an organization to manage Ansys product
access through their existing identity management processes in Entra ID,
without needing to maintain membership separately in the Ansys ID Portal.

Two scripts are provided that perform identical synchronization:

  - (sync_entra_to_ansys.py)[https://github.com/ansys/DevRelPublic/raw/main/Downloads/Ansys-ID-Portal/sync_entra_to_ansys.py]  -- Python, runs on Linux or Windows
  - (sync_entra_to_ansys.ps1)[https://github.com/ansys/DevRelPublic/raw/main/Downloads/Ansys-ID-Portal/sync_entra_to_ansys.ps1] -- PowerShell, runs on Windows only

Choose whichever is most appropriate for your environment and automation
toolchain. Both scripts require the same prerequisites and accept the same
logical parameters.

---

## How synchronization works

The script performs a one-way sync from Entra ID to the Ansys ID Portal.
At each run it:

  1. Reads the current membership of the specified Entra ID security group
     via the Microsoft Graph API, using the primary email address (mail
     attribute) of each member as the identifier. Members without a
     primary email address set in Entra are skipped with a warning.

  2. Reads the current membership of the target Ansys account or group
     via the Ansys ID Portal API.

  3. Compares the two lists and computes the difference -- which users
     need to be added and which need to be removed.

  4. Applies the changes to bring the Ansys target into exact alignment
     with the Entra group.

The sync is additive and subtractive -- users absent from the Entra group
will be removed from the Ansys target, and users present in the Entra group
but absent from the Ansys target will be added. Users already present in
both are left untouched.

### Sync to an Ansys ID Portal account

When --target-type account is specified, the script synchronizes the
membership of an Ansys ID Portal account. An account represents a customer
organization in the Ansys ID Portal and controls which users have access
to that organization's Ansys products and licenses.

After a successful sync, the users with membership in the account will
exactly match the members of the Entra group (subject to any preserved
email addresses -- see --preserve-email below).

The account must already exist in the Ansys ID Portal. The script resolves
the account name to its internal UUID automatically.

### Sync to a named group within an Ansys ID Portal account

When --target-type group is specified, the script synchronizes the
membership of a named group within an Ansys ID Portal account. Groups
within an account can be used to control access to specific Ansys products,
license pools, or features at a finer granularity than the account itself.

After a successful sync, the members of the named Ansys group will exactly
match the members of the Entra group.

If the named group does not yet exist in the Ansys ID Portal it will be
created automatically as a General type group. Users added to the group
are also automatically added to the account if they are not already members.

The account under which the group resides must already exist.

### What the script does not do

  - It does not create Ansys ID Portal accounts -- they must pre-exist.
  - It does not manage roles or permissions within an account or group,
    only membership.
  - It does not sync in the reverse direction -- changes made directly
    in the Ansys ID Portal will be overwritten on the next sync run.
  - It does not manage nested Entra groups directly, but it does flatten
    them -- members of nested groups are included via the Graph API
    transitiveMembers endpoint.

---

## Prerequisites (all platforms)

Complete these steps once before running the script on any platform.

### Entra ID app registration

The script reads group membership from Entra ID using the Microsoft Graph
API. This requires an app registration in your Entra tenant with
appropriate permissions. Follow the full instructions in [Entra ID app registration setup](entra_setup.md).

You will need the following values from that process:
  - Entra ID tenant domain (e.g. contoso.onmicrosoft.com)
  - App registration Client ID
  - App registration Client Secret

### Ansys ID Portal access

You will need:
  - The Ansys ID Portal account number for the account to sync into, or
    to sync a group within. The account must already exist.
  - An Ansys Personal Access Token (PAT) belonging to a user who is a
    member of that account. The PAT is obtained from the Ansys ID Portal.
    It is a long string beginning with "eyJ" and is not your Ansys
    account password. The user whose PAT is used must remain a member of
    the account -- use --preserve-email to prevent them being removed
    during sync if they are not in the Entra group.
  - If syncing to a named group: the name of the group (it will be
    created automatically if it does not exist).

For instructions on generating and managing PATs, see the official (Ansys
guide)[docs/ansys-id-sso/pat-authentication-guide].
PATs are created and revoked in the Ansys ID Portal UI at (id.ansys.com)[https://id.ansys.com/].

The Ansys B2C client ID and resource scope are hardcoded in the script
and require no configuration.

### Network access

The machine running the script must be able to reach:
  - https://login.microsoftonline.com  (Entra ID token endpoint)
  - https://graph.microsoft.com        (Microsoft Graph API)
  - https://ansysaccount.b2clogin.com  (Ansys B2C authentication)
  - https://iam.ansys.com              (Ansys ID Portal API)

---

## Usage examples

### Sync an Entra group to an Ansys account (Python)

The following example synchronizes the Entra group "Ansys License Users"
to an Ansys ID Portal account. After running, the account membership will
exactly match the Entra group, except that svc-account@contoso.com will
never be removed regardless of Entra group membership.

    python3 sync_entra_to_ansys.py \
        --entra-domain "contoso.onmicrosoft.com" \
        --entra-group "Ansys License Users" \
        --entra-client-id "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" \
        --entra-client-secret "your-secret" \
        --ansys-pat "eyJ..." \
        --target-type account \
        --account-number "MyAccountNumber" \
        --preserve-email "svc-account@contoso.com"

### Sync an Entra group to a named group within an Ansys account (Python)

The following example synchronizes the same Entra group to a named group
called "Engineering Team" within the account. The group is created if it
does not exist. Members added to the group are automatically added to the
account as well.

    python3 sync_entra_to_ansys.py \
        --entra-domain "contoso.onmicrosoft.com" \
        --entra-group "Ansys License Users" \
        --entra-client-id "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" \
        --entra-client-secret "your-secret" \
        --ansys-pat "eyJ..." \
        --target-type group \
        --account-number "MyAccountNumber" \
        --group-name "Engineering Team" \
        --preserve-email "svc-account@contoso.com"

### Same examples in PowerShell

    .\sync_entra_to_ansys.ps1 `
        -EntraDomain       'contoso.onmicrosoft.com' `
        -EntraGroup        'Ansys License Users' `
        -EntraClientId     'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' `
        -EntraClientSecret 'your-secret' `
        -AnsysPat          'eyJ...' `
        -TargetType        account `
        -AccountNumber     'MyAccountNumber' `
        -PreserveEmail     'svc-account@contoso.com'

    .\sync_entra_to_ansys.ps1 `
        -EntraDomain       'contoso.onmicrosoft.com' `
        -EntraGroup        'Ansys License Users' `
        -EntraClientId     'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' `
        -EntraClientSecret 'your-secret' `
        -AnsysPat          'eyJ...' `
        -TargetType        group `
        -AccountNumber     'MyAccountNumber' `
        -GroupName         'Engineering Team' `
        -PreserveEmail     'svc-account@contoso.com'

### Preview changes without applying them

Add --dry-run (Python) or -DryRun (PowerShell) to any command to log
what would be added and removed without writing any changes:

    python3 sync_entra_to_ansys.py \
        --entra-domain "contoso.onmicrosoft.com" \
        --entra-group "Ansys License Users" \
        --target-type account \
        --account-number "MyAccountNumber" \
        --dry-run

---

## Python on Linux

### Prerequisites

Most Linux distributions include Python 3 by default. Verify:

    python3 --version

You should see Python 3.8 or later. If Python is not installed:

    # Debian / Ubuntu / Linux Mint
    sudo apt update && sudo apt install python3 python3-full python3-pip

    # RHEL / CentOS / Fedora
    sudo dnf install python3 python3-pip

### Create a virtual environment

Modern Debian-based distributions (Ubuntu 23.04+, Linux Mint 22+) prevent
pip from installing packages system-wide to protect the OS. A virtual
environment is the correct solution and is good practice on all Linux
distributions regardless.

    # Create the virtual environment (one-time setup)
    python3 -m venv ~/ansys_sync_env

    # Activate it
    source ~/ansys_sync_env/bin/activate

Your shell prompt will change to show (ansys_sync_env) when active.

### Install dependencies

With the virtual environment active:

    pip install msal httpx requests cryptography

Verify:

    python3 -c "import msal, httpx, requests, cryptography; print('OK')"

### Place the script

Copy sync_entra_to_ansys.py to a convenient location:

    mkdir -p ~/scripts
    cp sync_entra_to_ansys.py ~/scripts/

### Run the script manually

Activate the virtual environment first if not already active:

    source ~/ansys_sync_env/bin/activate

Then run the script with the appropriate arguments. See **Usage examples**
above for full examples, and the quick reference table at the end of this
document for all available arguments.

The backslash (\) is the Linux line-continuation character. You can also
write the whole command on a single line without backslashes.

### Token cache

The first time the script authenticates to Ansys it will prompt for your
PAT and cache the resulting token in .token_cache_py.json in the directory
from which you run the script. On subsequent runs the cached token is
reused and refreshed silently without prompting for the PAT again.

For scheduled runs, run the script interactively once first to populate
the token cache, then schedule it.

Restrict permissions on the cache file:

    chmod 600 .token_cache_py.json

### Schedule with cron

For automated recurring sync, add a cron job. Because the virtual
environment is not activated in cron, call the Python interpreter inside
it directly.

Open the cron editor:

    crontab -e

Add a line (this example runs daily at 2:00 AM):

    0 2 * * * /home/yourname/ansys_sync_env/bin/python3 /home/yourname/scripts/sync_entra_to_ansys.py --entra-domain "contoso.onmicrosoft.com" --entra-group "Ansys License Users" --entra-client-id "your-id" --entra-client-secret "your-secret" --ansys-pat "eyJ..." --target-type account --account-number "my_account" --preserve-email "svc@contoso.com" --log-file "/home/yourname/logs/ansys_sync.log" 2>&1

Notes:
  - The log directory must exist: mkdir -p ~/logs
  - Cron runs with a minimal environment. Use full absolute paths throughout.
  - The token cache file will be written to the home directory when run
    from cron. Use --log-file so you have a record of each run.
  - Test the full command manually before scheduling it.

### Log file

If you use --log-file, the directory must already exist:

    mkdir -p ~/logs

The log is appended on each run. Consider setting up log rotation with
logrotate if the script runs frequently.

---

## Python on Windows

### Install Python

1. Go to https://www.python.org/downloads/
2. Click the large Download button (it auto-detects Windows).
3. Run the installer.
   IMPORTANT: On the first screen, check "Add python.exe to PATH"
   before clicking Install Now. If you miss this, uninstall and reinstall.
4. Click Close when done.

Verify by opening Command Prompt (Win + R, type cmd, Enter):

    python --version

You should see Python 3.x.x. If you see "'python' is not recognized",
the PATH option was not checked -- reinstall with it enabled.

### Install dependencies

In Command Prompt:

    pip install msal httpx requests cryptography

Verify:

    python -c "import msal, httpx, requests, cryptography; print('OK')"

### Place the script

Copy sync_entra_to_ansys.py to a convenient folder, for example:

    C:\Scripts\sync_entra_to_ansys.py

Create the folder first if needed:

    mkdir C:\Scripts

### Run the script manually

The ^ character is the Windows Command Prompt line-continuation character.
See **Usage examples** above for full examples.

Note: if your --entra-client-secret contains special characters such as
! % ^ & these may be misinterpreted by Command Prompt. If authentication
fails, omit --entra-client-secret from the command and let the script
prompt for it instead -- the prompt bypasses Command Prompt's parser.
Alternatively use the PowerShell script which handles special characters
correctly with single-quoted strings.

### Token cache

The first time the script authenticates to Ansys it will prompt for your
PAT and cache the resulting token in .token_cache_py.json in the directory
from which you run the script. On subsequent runs the cached token is
reused and refreshed silently.

For scheduled runs, run the script interactively once first to populate
the token cache, then schedule it.

### Schedule with Task Scheduler

1. Press Win + R, type taskschd.msc, press Enter.
2. Click Create Task (not Basic Task) in the right panel.
3. General tab:
     - Name: Ansys ID Portal Sync
     - Select: Run whether user is logged on or not
     - Check: Run with highest privileges
4. Triggers tab > New:
     - Set your desired schedule (e.g. Daily at 2:00 AM)
5. Actions tab > New:
     - Action: Start a program
     - Program/script: (find your Python path -- see below)
     - Add arguments: (all script arguments on one line)
6. Settings tab:
     - Check: If the task is already running, do not start a new instance
7. Click OK and enter the Windows password for the account running the task.

Finding your Python path -- run this in Command Prompt:

    where py

This prints something like:
    C:\Windows\py.exe

Use that full path in the Program/script field.

Example arguments field (all on one line):

    C:\Scripts\sync_entra_to_ansys.py --entra-domain "contoso.onmicrosoft.com" --entra-group "Ansys License Users" --entra-client-id "your-id" --entra-client-secret "your-secret" --ansys-pat "eyJ..." --target-type account --account-number "my_account" --preserve-email "svc@contoso.com" --log-file "C:\Logs\ansys_sync.log"

The log directory must exist before the task runs:

    mkdir C:\Logs

### Using a batch file instead of Task Scheduler arguments

For readability, save the command in a .bat file:

    @echo off
    py C:\Scripts\sync_entra_to_ansys.py ^
        --entra-domain "contoso.onmicrosoft.com" ^
        --entra-group "Ansys License Users" ^
        --entra-client-id "your-client-id" ^
        --entra-client-secret "your-secret" ^
        --ansys-pat "eyJ..." ^
        --target-type account ^
        --account-number "my_account_number" ^
        --preserve-email "svc@contoso.com" ^
        --log-file "C:\Logs\ansys_sync.log" ^
        --smtp-relay "smtp.contoso.com" ^
        --smtp-from "ansys-sync@contoso.com" ^
        --log-recipient "it-admin@contoso.com" ^
        --warn-recipient "it-alerts@contoso.com"

Then point Task Scheduler at cmd.exe with the argument:
    /c C:\Scripts\run_sync.bat

---

## PowerShell on Windows

### Prerequisites

PowerShell is built into Windows and requires no installation. The script
requires PowerShell 5.1 or later, which is present on all supported
versions of Windows 10 and Windows 11.

Verify your version:

    $PSVersionTable.PSVersion

You should see Major version 5 or higher.

No additional modules or package managers are required. The script uses
only built-in PowerShell and .NET classes.

### Set execution policy

Windows prevents unsigned scripts from running by default. Allow locally
created scripts to run (run this once in PowerShell as Administrator):

    Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

To verify:

    Get-ExecutionPolicy -Scope CurrentUser

It should show RemoteSigned.

### Place the script

Copy sync_entra_to_ansys.ps1 to a convenient folder:

    C:\Scripts\sync_entra_to_ansys.ps1

### Run the script manually

Open PowerShell (search for PowerShell in the Start menu).

The backtick (`) is the PowerShell line-continuation character.
Parameters use -Name 'Value' syntax with single quotes.

See **Usage examples** above for full examples, including both account and
group sync scenarios.

Important: use single quotes (') around values in PowerShell, not double
quotes. Single quotes mean completely literal -- no special character
interpretation. This is particularly important for secrets that may contain
characters like ! % ^ ~ & which have special meaning in double-quoted
strings but are treated as plain text inside single quotes.

If a value itself contains a single quote, escape it by doubling it:
    -EntraClientSecret 'it''s-a-secret'

### Token cache

The first time the script authenticates to Ansys it will prompt for your
PAT and cache the resulting token in .token_cache_ps.json in the directory
from which you run the script. On subsequent runs the cached token is
reused and refreshed silently.

Note: the Python and PowerShell scripts use separate token cache files
(.token_cache_py.json and .token_cache_ps.json respectively) because
they use different cache formats. Each script must be run interactively
once to populate its own cache before being scheduled.

### Use a PowerShell script file for repeated runs

Rather than typing the full command each time, save it as a .ps1 file:

    # run_sync.ps1
    & 'C:\Scripts\sync_entra_to_ansys.ps1' `
        -EntraDomain       'contoso.onmicrosoft.com' `
        -EntraGroup        'Ansys License Users' `
        -EntraClientId     'your-client-id' `
        -EntraClientSecret 'your-secret' `
        -AnsysPat          'eyJ...' `
        -TargetType        account `
        -AccountNumber     'my_account_number' `
        -PreserveEmail     'svc@contoso.com' `
        -LogFile           'C:\Logs\ansys_sync.log' `
        -SmtpRelay         'smtp.contoso.com' `
        -SmtpFrom          'ansys-sync@contoso.com' `
        -LogRecipient      'it-admin@contoso.com' `
        -WarnRecipient     'it-alerts@contoso.com'

Run it with:

    .\run_sync.ps1

### Schedule with Task Scheduler

1. Press Win + R, type taskschd.msc, press Enter.
2. Click Create Task (not Basic Task) in the right panel.
3. General tab:
     - Name: Ansys ID Portal Sync
     - Select: Run whether user is logged on or not
     - Check: Run with highest privileges
4. Triggers tab > New:
     - Set your desired schedule (e.g. Daily at 2:00 AM)
5. Actions tab > New:
     - Action: Start a program
     - Program/script:
           powershell
     - Add arguments:
           -NonInteractive -ExecutionPolicy RemoteSigned -File "C:\Scripts\run_sync.ps1"
6. Settings tab:
     - Check: If the task is already running, do not start a new instance
7. Click OK and enter the Windows password for the account running the task.

Using a .ps1 wrapper file (run_sync.ps1) for the arguments keeps the
Task Scheduler action clean and makes it easy to update credentials or
parameters without editing the task itself.

### Log file

Create the log directory before the first run:

    New-Item -ItemType Directory -Path C:\Logs -Force

---

## Quick reference — parameter / argument names

The Python and PowerShell scripts accept the same logical parameters
but with different naming conventions. Python uses --hyphenated-names
and PowerShell uses -PascalCaseNames.

  Python (--name)           PowerShell (-Name)       Required   Notes
  ------------------------  -----------------------  ---------  ----------------------------
  --entra-domain            -EntraDomain             Yes        Entra tenant domain
  --entra-group             -EntraGroup              Yes        Entra security group name
  --entra-client-id         -EntraClientId           No*        * prompted if omitted
  --entra-client-secret     -EntraClientSecret       No*        * prompted if omitted
  --target-type             -TargetType              Yes        "account" or "group"
  --account-number          -AccountNumber           Yes        Ansys account number
  --group-name              -GroupName               No**       ** required if target=group
  --ansys-pat               -AnsysPat                No*        * prompted if omitted
  --dry-run                 -DryRun                  No         preview only, no changes
  --send-email              -SendEmail               No         enable invitation emails
  --preserve-email          -PreserveEmail           No         comma-separated, never removed
  --log-file                -LogFile                 No         path to append log to
  --smtp-relay              -SmtpRelay               No         SMTP gateway hostname/IP
  --smtp-port               -SmtpPort                No         default: 25
  --smtp-from               -SmtpFrom                No         envelope From address
  --log-recipient           -LogRecipient            No         full log email, comma-sep
  --warn-recipient          -WarnRecipient           No         warnings email, comma-sep

Python-only:
  --reset-credentials       (n/a)                    No         clear encrypted cred cache

---

## Cache files

The following files are created in the directory where the script runs.
This directory should be accessible only to the account running the script.

  File                       Script         Contents
  -------------------------  -------------  ----------------------------------------
  .token_cache_py.json       Python only    Ansys access and refresh tokens
                                            (MSAL SerializableTokenCache format)
  .token_cache_ps.json       PowerShell     Ansys access and refresh tokens
                             only           (custom JSON format)
  .credential_cache.json     Python only    AES-256-GCM encrypted Entra client ID,
                                            client secret, and Ansys PAT.
                                            Protected by a master password prompt.
                                            Requires the cryptography pip package.

The Python and PowerShell token caches are not interchangeable. Each
script maintains its own cache and must be run interactively at least
once to populate it before being used in a scheduled context.