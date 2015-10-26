At the moment, launch mininet and ryu manually.
Possible improvement could be to implement on web interface a remote controller for launching mininet, ryu-manager.

Inside VM:

    ryu-manager ./vendor/ryu/ryu/app/ofctl_rest.py
    sudo mn --topo=tree,2,3 --mac --controller=remote --switch ovsk,protocols=OpenFlow13

Outside VM:

    cd ryu_web_client
    ember s --proxy
