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
    && source $HOME/.nvm/nvm.sh && nvm install $VERSION \
    && nvm use $VERSION && nvm alias default $VERSION \
    && npm install -g npm@latest'

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix