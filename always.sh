#!/usr/bin/env bash
sudo service nginx restart

nohup ryu-manager /home/vagrant/vendor/ryu/ryu/app/ofctl_rest.py &>/dev/null &
# sudo mn --topo=tree,2,3 --mac --controller=remote --switch ovsk,protocols=OpenFlow13 &
