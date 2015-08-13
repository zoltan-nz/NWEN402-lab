#!/usr/bin/env bash
sudo apt-get update
sudo apt-get dist-upgrade -y
sudo apt-get install -y language-pack-en mininet python-{pip,dev,eventlet,routes,webob,paramiko,yaml} git curl zsh nginx
sudo /home/vagrant/mininet/util/install.sh
sudo pip install ryu
sudo apt-get autoremove -y
sudo apt-get autoclean -y
sudo rm -rf /var/www/html
sudo ln -fs /vagrant/www /var/www/html