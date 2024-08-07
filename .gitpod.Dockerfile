FROM gitpod/workspace-full:latest

USER gitpod

# Install custom tools, runtime, etc. using apt-get
# For example, the command below would install "bastet" - a command line tetris clone:
#
# RUN sudo apt-get -q update && \
#     sudo apt-get install -yq bastet && \
#     sudo rm -rf /var/lib/apt/lists/*
#
# More information: https://www.gitpod.io/docs/config-docker/

RUN bash -c 'VERSION="lts/*" \
    && source $HOME/.nvm/nvm.sh && nvm install --lts \
    && nvm alias default $VERSION && nvm use default'