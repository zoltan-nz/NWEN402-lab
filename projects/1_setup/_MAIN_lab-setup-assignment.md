Project Setup
=============

As a Computer Science master student, the SDN concept and the development environment was new to me. I wanted to understand more the tools that we have been using to emulate the SDN environment.

I decided to build up a development VM from scratch using Vagrant. Vagrant is a multiplatform tool, a virtual machine which can run independently on all operation system. More about Vagrant: https://www.vagrantup.com/

During the research work, I realized that we needed the following tools:
- Mininet (http://mininet.org)
- OpenVSwitch (http://openvswitch.org/)
- Ryu (http://osrg.github.io/ryu/)
- Valve (https://github.com/openvapour/valve)

I decided to use the latest 32 bit version of Ubuntu. Version 15.04 (vivid32). (Note: 32 bit VMs requires less memory.)

The project has been published on my GitHub page. Installation instruction is in Readme. https://github.com/szines/mininet-valve-ryu
Please feel free to distribute, clone or use it.

Vagrant manages VirtualBox headless VM. Configuration goes in Vagrantfile which stays in the main folder of a project on a host machine. The VM will be built with `vagrant up` command at the first time. It takes a while, however next time it will be quick because the VM will be saved in the project folder in the `.vagrant` subfolder. We can launch the VM with `vagrant up`, relaunch it with `vagrant reload`, shut it down with `vagrant halt` commands. We can SSH in the VM with `vagrant ssh`.

Vagrant configuration file:

```
Vagrant.configure(2) do |config|
 config.vm.box = "ubuntu/vivid32"
 config.vm.hostname = "mininet-vm"

 config.vm.synced_folder "valve/", "/home/vagrant/valve/"
 config.vm.synced_folder "projects/", "/home/vagrant/projects/"

 config.vm.provision "shell", inline: <<-SHELL
     sudo apt-get update
     sudo apt-get dist-upgrade -y
     sudo apt-get install -y language-pack-en mininet \
 		python-{pip,dev,eventlet,routes,webob,paramiko,yaml} git curl zsh
     sudo pip install ryu
     sudo apt-get autoremove -y
     sudo apt-get autoclean -y
 SHELL
end
```

In the latest Ubuntu `mininet` package installs Open VSwitch automatically.

For Lab project, I created a repository on my GitHub.
https://github.com/szines/NWEN402-lab

The initial setup notes saved in the following folder:
https://github.com/szines/NWEN402-lab/tree/master/projects/1_setup

My First experiment is running the `simple_switch_13.py` with ryu controller. This experiment is based on the suggested tutorial-presentation.
SDN Tutorial - Dean Pemberton - NSRC 
http://ecs.victoria.ac.nz/foswiki/pub/Events/SDNWorkshop/VUW_SDNTutorial_with_logos.pdf

`ryu-manager --verbose ./projects/simple_switch_13.py`

Note: This version of Simple Switch 13 is the latest from the ryu github page.

Results saved in tutorial.md

====

In the next sections I experiment with different configurations and answer to the following questions.

- Explain what the following flows are doing
- Why might the rules no longer be using actions=ALL?
- What is the difference when we use 4 switches?

===

### FLAT valve.yaml

Files:
valve.yaml-flat
flat.dump

We use `dpctl dump-flows -O OpenFlow13` command to dump out flows.

We can find more information about dpctl.
https://github.com/CPqD/ofsoftswitch13/wiki/Dpctl-Documentation

> A flow entry primarily contains a set of field=value entries and action entry. The field=value entries are used to identify the incoming packet and the actions tells the bridge with what to do with the matching traffic.
(Source: http://en.community.dell.com/techcenter/networking/w/wiki/3820.openvswitch-openflow-lets-get-started)

#### Flow Rules:

Source: OpenFlow Specification 1.3
https://www.opennetworking.org/images/stories/downloads/sdn-resources/onf-specifications/openflow/openflow-spec-v1.3.0.pdf

- cookie: 
Opaque data value chosen by the controller. May be used by the controller to filter flow statistics, flow modification and flow deletion, not used when processing packets.

- duration:
Duration refers to the amount of time the flow entry, a port, a group, a queue or a meter has been installed in the switch, and must be tracked with second precision.

- table:
A stage of the pipeline, contains flow entries.

- n_packets:
Number of packets

- n_bytes:
Number of bytes

- priority:
Matching precedence of the flow entry

- in_port:
Ingress port number

- dl_src:
Ethernet source address

- dl_dst:
Ethernet destination address

- actions:

An operation that forwards the packet to a port or modifies the packet, such as decrementing the TTL field. Actions may be specified as part of the instruction set associated with a flow entry or in an action bucket associated with a group entry. Actions may be accumulated in the Action Set of the packet or applied immediately to the packet.

```
mininet> dump
<Host h1: h1-eth0:10.0.0.1 pid=2343>
<Host h2: h2-eth0:10.0.0.2 pid=2345>
<Host h3: h3-eth0:10.0.0.3 pid=2347>
<Host h4: h4-eth0:10.0.0.4 pid=2349>
<Host h5: h5-eth0:10.0.0.5 pid=2351>
<Host h6: h6-eth0:10.0.0.6 pid=2353>
<Host h7: h7-eth0:10.0.0.7 pid=2355>
<Host h8: h8-eth0:10.0.0.8 pid=2357>
<Host h9: h9-eth0:10.0.0.9 pid=2359>
<Host h10: h10-eth0:10.0.0.10 pid=2361>
<OVSSwitch s1: lo:127.0.0.1,s1-eth1:None,s1-eth2:None,s1-eth3:None,s1-eth4:None,s1-eth5:None,s1-eth6:None,s1-eth7:None,s1-eth8:None,s1-eth9:None,s1-eth10:None pid=2366>
<RemoteController c0: 127.0.0.1:6633 pid=2336>

mininet> nodes
available nodes are:
c0 h1 h10 h2 h3 h4 h5 h6 h7 h8 h9 s1

mininet> net
h1 h1-eth0:s1-eth1
h2 h2-eth0:s1-eth2
h3 h3-eth0:s1-eth3
h4 h4-eth0:s1-eth4
h5 h5-eth0:s1-eth5
h6 h6-eth0:s1-eth6
h7 h7-eth0:s1-eth7
h8 h8-eth0:s1-eth8
h9 h9-eth0:s1-eth9
h10 h10-eth0:s1-eth10
s1 lo:  s1-eth1:h1-eth0 s1-eth2:h2-eth0 s1-eth3:h3-eth0 s1-eth4:h4-eth0 s1-eth5:h5-eth0 s1-eth6:h6-eth0 s1-eth7:h7-eth0 s1-eth8:h8-eth0 s1-eth9:h9-eth0 s1-eth10:h10-eth0
c0
```

Using the following architecture in valve.yaml


```
---
0000000000000001:
  default:
    type: untagged
    vlans: [10]
```

We can see the following rules in our flow table:

```
 cookie=0xbadc15c0, duration=2.645s, table=0, n_packets=0, n_bytes=0, priority=0 actions=drop
```

I found a great explanation of actions in this page:
http://flowgrammable.org/sdn/openflow/actions/#tab_ofp_1_3_3

In specification: https://www.opennetworking.org/images/stories/downloads/sdn-resources/onf-specifications/openflow/openflow-spec-v1.3.0.pdf#page=49

Drop: discards packet

This is the lowest priority rule. If nothing matches, we just discard that package.

```
 cookie=0xbadc15c0, duration=1.202s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=2,dl_src=00:00:00:00:00:02,dl_dst=ff:ff:ff:ff:ff:ff actions=output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
```

Broadcast rule. If destination is the broadcast MAC address, frame will be forwarded to all port.


```
 cookie=0xbadc15c0, duration=0.723s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=9,dl_src=00:00:00:00:00:09,dl_dst=01:00:00:00:00:00/01:00:00:00:00:00 actions=output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
```

Maches all multicast (including broadcast) Ethernet packets.

Source ovs-ofctl man page.
http://manpages.ubuntu.com/manpages/raring/man8/ovs-ofctl.8.html


```
 cookie=0xbadc15c0, duration=2.644s, table=0, n_packets=5, n_bytes=418, priority=9000,in_port=3 actions=CONTROLLER:65509,output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
```

In this rule, we don't see any source or destination address, a wildcard rule, so if something haven't managed in previous rules, the packet will be sent to controller and other hosts.


```
 cookie=0xbadc15c0, duration=2.644s, table=0, n_packets=0, n_bytes=0, priority=9000,dl_vlan=10 actions=CONTROLLER:65509,pop_vlan,output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
```

In this rule `dl_vlan` represents, that the packet would go to vlan `10`. The packet taged with vlan 10. This rule sends the packet to controller and with `pop_vlan` remove the vlan tag from the packet, and send the packet to all hosts.


####Why might the rules no longer be using actions=ALL?

> ALL: Flood the packet out all OpenFlow interfaces configured for that virtual switch instance except the ingress interface. Source: http://www.juniper.net/techpubs/en_US/junos15.1/topics/reference/general/junos-sdn-openflow-operation.html

Valve create a vlan configuration. We cannot send packages to all host, because they are part of one vlan segment at least. Valve default rules cover the default scenarios.

####After ping

After `h1 ping h2`, we can see two new rules in our flow table:

```
 cookie=0xbadc15c0, duration=55.746s, table=0, n_packets=5, n_bytes=434, priority=9001,in_port=1,dl_src=00:00:00:00:00:01,dl_dst=00:00:00:00:00:02 actions=output:2

 cookie=0xbadc15c0, duration=55.746s, table=0, n_packets=5, n_bytes=434, priority=9001,in_port=2,dl_src=00:00:00:00:00:02,dl_dst=00:00:00:00:00:01 actions=output:1
```

These two rules are with higher priority and connect together Host 1 with Host 2.

Dump file name: `flat-after-ping.dump`

Using the `pingall` command ping all hosts from each host.

Dump file name: `flat-after-pingall.dump`


### VLAN valve.yaml

In the second example, we use the following valve.yaml configuration: `valve.yaml-vlan`

```
---
0000000000000001:
  default:
    type: untagged
    vlans: [10]

  1:
    type: untagged
    vlans: [10]

  2:
    type: untagged
    vlans: [10]

  3:
    type: untagged
    vlans: [20]

  4:
    type: untagged
    vlans: [20]
```

After running the controller and launching mininet, the flow table is dumped in `vlan.dump` file.

We can clearly see in the flow dump, that PORT 3 and 4 can see only each other.

```
 cookie=0xbadc15c0, duration=37.672s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=3,dl_src=00:00:00:00:00:03,dl_dst=ff:ff:ff:ff:ff:ff actions=output:3,output:4
 cookie=0xbadc15c0, duration=37.599s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=4,dl_src=00:00:00:00:00:04,dl_dst=ff:ff:ff:ff:ff:ff actions=output:3,output:4
```

The `default` rule and PORT `1` and PORT `2` belongs to VLAN `10` except PORT `3` and PORT `4`, they belongs to VLAN `20`

```
 cookie=0xbadc15c0, duration=46.716s, table=0, n_packets=0, n_bytes=0, priority=9000,dl_vlan=10 actions=CONTROLLER:65509,pop_vlan,output:1,output:2,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=46.715s, table=0, n_packets=0, n_bytes=0, priority=9000,dl_vlan=20 actions=CONTROLLER:65509,pop_vlan,output:3,output:4
 ```

Above two rules show that `dl_vlan=10` forward packets to controller and PORT 1,2,5,6,7,8,9,10. and VLAN `20` only to PORT 3,4.

Pingall command create a nice table for us, which shows the same.

```
mininet> pingall
*** Ping: testing ping reachability
h1 -> h2 X X h5 h6 h7 h8 h9 h10
h2 -> h1 X X h5 h6 h7 h8 h9 h10
h3 -> X X h4 X X X X X X
h4 -> X X h3 X X X X X X
h5 -> h1 h2 X X h6 h7 h8 h9 h10
h6 -> h1 h2 X X h5 h7 h8 h9 h10
h7 -> h1 h2 X X h5 h6 h8 h9 h10
h8 -> h1 h2 X X h5 h6 h7 h9 h10
h9 -> h1 h2 X X h5 h6 h7 h8 h10
h10 -> h1 h2 X X h5 h6 h7 h8 h9
*** Results: 35% dropped (58/90 received)
```

Above table shows, `h3` and `h4` can ping only each other, and noone else can ping them from other VLAN segment.

Flow dump after `pingall` is saved in `vlan-pingall.dump`


### MULTIPLE valve.yaml

In the last example, we use the following valve.yaml configuration. File: `valve.yaml-multiple`


```
---
all:
  type: untagged
  vlans: [10]

0000000000000001:
  default:
    type: untagged
    vlans: [10]

0000000000000002:
  default:
    type: untagged
    vlans: [10]

0000000000000003:
  default:
    type: untagged
    vlans: [10]

0000000000000004:
  default:
    type: untagged
    vlans: [10]

0000000000000005:
  default:
    type: untagged
    vlans: [10]

0000000000000006:
  default:
    type: untagged
    vlans: [10]

0000000000000007:
  default:
    type: untagged
    vlans: [10]

0000000000000008:
  default:
    type: untagged
    vlans: [10]
```


Our network topology:

```
mininet> dump
<Host h1: h1-eth0:10.0.0.1 pid=6122>
<Host h2: h2-eth0:10.0.0.2 pid=6124>
<Host h3: h3-eth0:10.0.0.3 pid=6126>
<Host h4: h4-eth0:10.0.0.4 pid=6128>
<Host h5: h5-eth0:10.0.0.5 pid=6130>
<Host h6: h6-eth0:10.0.0.6 pid=6132>
<Host h7: h7-eth0:10.0.0.7 pid=6134>
<Host h8: h8-eth0:10.0.0.8 pid=6136>
<OVSSwitch s1: lo:127.0.0.1,s1-eth1:None,s1-eth2:None pid=6141>
<OVSSwitch s2: lo:127.0.0.1,s2-eth1:None,s2-eth2:None,s2-eth3:None pid=6144>
<OVSSwitch s3: lo:127.0.0.1,s3-eth1:None,s3-eth2:None,s3-eth3:None pid=6147>
<OVSSwitch s4: lo:127.0.0.1,s4-eth1:None,s4-eth2:None,s4-eth3:None pid=6150>
<OVSSwitch s5: lo:127.0.0.1,s5-eth1:None,s5-eth2:None,s5-eth3:None pid=6153>
<OVSSwitch s6: lo:127.0.0.1,s6-eth1:None,s6-eth2:None,s6-eth3:None pid=6156>
<OVSSwitch s7: lo:127.0.0.1,s7-eth1:None,s7-eth2:None,s7-eth3:None pid=6159>
<RemoteController c0: 127.0.0.1:6633 pid=6115>
```

Links:

```
mininet> links
s1-eth1<->s2-eth3 (OK OK)
s1-eth2<->s5-eth3 (OK OK)
s2-eth1<->s3-eth3 (OK OK)
s2-eth2<->s4-eth3 (OK OK)
s3-eth1<->h1-eth0 (OK OK)
s3-eth2<->h2-eth0 (OK OK)
s4-eth1<->h3-eth0 (OK OK)
s4-eth2<->h4-eth0 (OK OK)
s5-eth1<->s6-eth3 (OK OK)
s5-eth2<->s7-eth3 (OK OK)
s6-eth1<->h5-eth0 (OK OK)
s6-eth2<->h6-eth0 (OK OK)
s7-eth1<->h7-eth0 (OK OK)
s7-eth2<->h8-eth0 (OK OK)
```

Flow dump saved in `multiple.dump`

Pingall:

```
mininet> pingall
*** Ping: testing ping reachability
h1 -> h2 h3 h4 h5 h6 h7 h8
h2 -> h1 h3 h4 h5 h6 h7 h8
h3 -> h1 h2 h4 h5 h6 h7 h8
h4 -> h1 h2 h3 h5 h6 h7 h8
h5 -> h1 h2 h3 h4 h6 h7 h8
h6 -> h1 h2 h3 h4 h5 h7 h8
h7 -> h1 h2 h3 h4 h5 h6 h8
h8 -> h1 h2 h3 h4 h5 h6 h7
*** Results: 0% dropped (56/56 received)
```

After `pingall` flow dump saved in `multiple-pingall.dump`


