# variables
SEPARATOR = __
APP_ID = vue-demo
PREFIX = sayone-

GIT = $(shell which git)
NPM = $(shell which npm)
TAR     = $(shell which tar)
ESLINT  = ./node_modules/.bin/eslint


BUILD_DIR = build
GIT_BRANCH = $(shell $(GIT) rev-parse --abbrev-ref HEAD)
GIT_SHA  = $(shell $(GIT) rev-parse HEAD)
RELEASE_ID ?= $(GIT_BRANCH)$(SEPARATOR)$(GIT_SHA)

# development
LINT_DIRS = src/
LINT_EXTENSIONS = .js


all: start  


.PHONY: start
start:
	$(NPM) run serve
