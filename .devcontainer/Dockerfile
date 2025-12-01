FROM mcr.microsoft.com/devcontainers/base:ubuntu-24.04

USER vscode

# Install nvm and Node.js LTS
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash \
    && export NVM_DIR="$HOME/.nvm" \
    && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" \
    && nvm install lts/* \
    && nvm use lts/* \
    && nvm alias default lts/*

# Ensure nvm is available in interactive shells
RUN echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc \
    && echo '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"' >> ~/.bashrc \
    && echo 'nvm use default &>/dev/null' >> ~/.bashrc
