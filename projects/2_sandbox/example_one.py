#!/usr/bin/python

from mininet.net import Mininet
from mininet.node import Ryu
from mininet.node import Host
from mininet.node import OVSKernelSwitch
from mininet.log import setLogLevel, info
from mininet.node import Node
from mininet.cli import CLI

import time
from daemon import Daemon

from IPython import embed

can_break = False

net = Mininet(topo=None,
              build=False,
              ipBase='10.0.0.0/8')

def myNetwork():
        net.cleanup
        info('*** Adding controller\n')
        c0 = net.addController(name='c0',
                               controller=Ryu,
                               protocol='tcp',
                               port=6633)

        info('*** Add switches\n')
        s1 = net.addSwitch('s1', cls=OVSKernelSwitch)
        s2 = net.addSwitch('s2', cls=OVSKernelSwitch)
        s3 = net.addSwitch('s3', cls=OVSKernelSwitch)

        info('*** Add hosts\n')
        h2 = net.addHost('h2', cls=Host, ip='10.0.0.2', defaultRoute=None)
        h4 = net.addHost('h4', cls=Host, ip='10.0.0.4', defaultRoute=None)
        h6 = net.addHost('h6', cls=Host, ip='10.0.0.6', defaultRoute=None)
        h3 = net.addHost('h3', cls=Host, ip='10.0.0.3', defaultRoute=None)
        h1 = net.addHost('h1', cls=Host, ip='10.0.0.1', defaultRoute=None)
        h5 = net.addHost('h5', cls=Host, ip='10.0.0.5', defaultRoute=None)
        h7 = net.addHost('h7', cls=Host, ip='10.0.0.7', defaultRoute=h5)
        h8 = net.addHost('h7', cls=Host, ip='10.0.0.7', defaultRoute=h5)

        info('*** Add links\n')
        net.addLink(h1, s1)
        net.addLink(h2, s1)
        net.addLink(h3, s1)
        net.addLink(s1, h4)
        net.addLink(s1, h5)
        net.addLink(s1, h6)
        net.addLink(s2, h7)
        net.addLink(s3, h8)

        # embed()

        info('*** Starting network\n')
        net.build()
        info('*** Starting controllers\n')
        for controller in net.controllers:
            controller.start()

        info('*** Starting switches\n')
        net.get('s1').start([c0])
        net.get('s2').start([c0])

        info('*** Post configure switches and hosts\n')

def myNetworkStop():
    info('*** Stop mininet\n')
    net.stop()

class App(Daemon):
    def __init__(self, pidfile):
        super(App, self).__init__(pidfile)

    def run(self):
        setLogLevel('info')
        myNetworkStop()
        myNetwork()
        while True:
            print('Still running...')
            time.sleep(10)
        myNetworkStop()

if __name__ == '__main__':
     setLogLevel('debug')
     mininet_app = App('./mininet.pid')
     mininet_app.run()
