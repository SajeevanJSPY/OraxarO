# OraxarO

<img src="./assets/oraxaro.png" alt="OraxarO Logo" width="600"/>

**OraXarO** is a visualization and reverse-engineering toolkit for exploring **Oracle Database Internals**
<br>
designed to `inspect`, `decode`, and `visualize` internal database structures such as **processes**, **storages**, and **instance details**
<br>
It provides both a **REPL CLI** and a **web interface** to interactively explore Oracle internals in real-time.

> ⚠️ **Disclaimer:** OraxarO is an educational and research tool. It is not affiliated with, endorsed by, or derived from Oracle Corporation.  
> Do **not** use it on production databases. Always analyze copies of files from a non-running database.


# 🚀 Features

- Inspect internal Oracle processes
- Decode physical storage structures
- View instance and memory details
- Interactive REPL CLI
- Visual web interface for analysis


# Tech Stack

- Runtime: [Bun](https://bun.sh/)
- Language: Typescript


# Development Setup

### 1. Clone the Repository

```bash
    git clone https://github.com/sajeevanjspy/OraxarO.git
    cd OraxarO
```

### 2. Install Dependencies

Make sure you have Bun installed.
If not, install it from [bun.sh](https://bun.sh/)

Then run:
```bash
    bun install
```

### 3. Start the REPL

```bash
    bun run:cli
```

Example session:
```bash
    Welcome to OraxarO REPL
    Type `help` for available commands.

    oraXaro> serve connect
    listening on http://localhost:3000
    running the server

    oraXaro> serve close
    closing the connection http://localhost:3000
    closed the connection

    oraXaro> exit
    Exiting OraxarO REPL
```

# Contributing

Contributions are highly encouraged!
<br>
At this stage, we don’t have a fixed program or rigid direction — we’re open to **new proposals**, **ideas**, and **experiments** to make OraxarO a better and more insightful Oracle reverse-engineering toolkit
<br>
If you have thoughts or prototypes that can enhance OraxarO's capabilities,
<br>
please open a **GitHub issue** or **pull request** — we’d love to **explore it with you**.


## ⚠️ Safety Notes

- Work only on offline copies of datafiles (after shutdown immediate)
- Do not analyze or copy production datafiles
- Educational use only — for understanding Oracle’s internals
