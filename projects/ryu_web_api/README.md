At the moment, launch mininet and ryu manually.


Inside VM:

    ryu-manager --verbose ./projects/simple_switch_13.py
    sudo mn --topo=tree,1,3 --mac --controller=remote --switch ovsk,protocols=OpenFlow13
    ryu-manager ./vendor/ryu/ryu/app/ofctl_rest.py

Outside VM:

    cd ryu_web_client
    ember s --proxy 