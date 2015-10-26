#!/usr/bin/env bash
sudo adduser vagrant sudo
sudo adduser vagrant root
sudo apt-get update
sudo apt-get dist-upgrade -y
sudo apt-get install -y language-pack-en python-{pip,dev,eventlet,routes,webob,paramiko,yaml} git curl zsh nginx iperf3
# Run mininet install moduls: k) kernel, n) mn_deps, f) of, p) pox, b) cbench, y) ryu, 3) 1.3, x) nox
sudo /home/vagrant/vendor/mininet/util/install.sh -knfpby3x
sudo rm -rf home/vagrant/oflops home/vagrant/openflow home/vagrant/pox home/vagrant/ryu
sudo pip install ryu
sudo apt-get install openvswitch-switch
sudo apt-get autoremove -y
sudo apt-get autoclean -y
sudo rm -rf /etc/nginx
sudo rm -rf /var/www/html
sudo ln -fs /vagrant/projects/etc/nginx /etc/nginx
sudo ln -fs /vagrant/projects/ryu_web_client/dist /var/www/html
sudo service nginx restart
