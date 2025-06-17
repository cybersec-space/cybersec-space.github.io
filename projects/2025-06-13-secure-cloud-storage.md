---
title: Secure Mini Cloud Storage 
description: A multi-layered network service with security hardening
date: 2025-06-13
slug: /secure-Mini-Cloud-storage-daemon
tags:
  - C
  - Security
---

## Overview


## Key Concetps


### DAY 1

- TOCTOU Protection: Used openat() + renameat() to prevent time-of-check-to-time-of-use vulnerabilities
- Memory Safety: calloc() instead of malloc, explicit_bzero() for sensitive data
- Secure Defaults: File descriptors with strict permissions (0600)
- Build Hardening: Security flags in Makefile
- Commit Integrity: GPG-signed commits

### Learn About

- man 2 openat - Understand directory file descriptors
- man 2 renameat - Learn about atomic filesystem operations
- TOCTOU vulnerabilities (CWE-367)
- Git commit signing workflows

### DAY 2

- Path Traversal Protection: Blocked ../ and absolute paths
- Symlink Attack Prevention: Used O_NOFOLLOW flag
- Buffer Overflow Prevention: Strict size validation
- Automated Security Gates: Pre-commit hooks and CI pipeline
- Branch Isolation: Feature branch workflow for safe development
