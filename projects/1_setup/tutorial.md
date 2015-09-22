# Setup

### Playing with Simple Switch

Based on the following presentation: SDN Tutorial - Dean Pemberton - NSRC
http://ecs.victoria.ac.nz/foswiki/pub/Events/SDNWorkshop/VUW_SDNTutorial_with_logos.pdf

Open two console with `vagrant ssh`

Run this in the first console

```
ryu-manager --verbose ./projects/simple_switch_13.py
```

Console log

```
loading app ./projects/simple_switch_13.py
loading app ryu.controller.ofp_handler
instantiating app ./projects/simple_switch_13.py of SimpleSwitch13
instantiating app ryu.controller.ofp_handler of OFPHandler
BRICK SimpleSwitch13
  CONSUMES EventOFPSwitchFeatures
  CONSUMES EventOFPPacketIn
BRICK ofp_event
  PROVIDES EventOFPSwitchFeatures TO {'SimpleSwitch13': set(['config'])}
  PROVIDES EventOFPPacketIn TO {'SimpleSwitch13': set(['main'])}
  CONSUMES EventOFPErrorMsg
  CONSUMES EventOFPHello
  CONSUMES EventOFPEchoRequest
  CONSUMES EventOFPPortDescStatsReply
  CONSUMES EventOFPSwitchFeatures
```

In the other console: start mininet with 3 hosts connected to 1 switch


```
sudo mn --topo=tree,1,3 --mac --controller=remote --switch ovsk,protocols=OpenFlow13
```

Console log

```
*** Creating network
*** Adding controller
*** Adding hosts:
h1 h2 h3
*** Adding switches:
s1
*** Adding links:
(s1, h1) (s1, h2) (s1, h3)
*** Configuring hosts
h1 h2 h3
*** Starting controller
*** Starting 1 switches
s1
*** Starting CLI:
mininet>
```

Ping h1 -> h2

```
mininet> h1 ping h2
PING 10.0.0.2 (10.0.0.2) 56(84) bytes of data.
64 bytes from 10.0.0.2: icmp_seq=1 ttl=64 time=4.34 ms
64 bytes from 10.0.0.2: icmp_seq=2 ttl=64 time=0.145 ms
64 bytes from 10.0.0.2: icmp_seq=3 ttl=64 time=0.051 ms
^C
--- 10.0.0.2 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2005ms
rtt min/avg/max/mdev = 0.051/1.513/4.345/2.002 ms
mininet> dpctl dump-flows -O OpenFlow13
*** s1 ------------------------------------------------------------------------
OFPST_FLOW reply (OF1.3) (xid=0x2):
 cookie=0x0, duration=96.781s, table=0, n_packets=24, n_bytes=1856, priority=0 actions=CONTROLLER:65535
 cookie=0x0, duration=19.664s, table=0, n_packets=5, n_bytes=378, priority=1,in_port=2,dl_dst=00:00:00:00:00:01 actions=output:1
 cookie=0x0, duration=19.663s, table=0, n_packets=4, n_bytes=336, priority=1,in_port=1,dl_dst=00:00:00:00:00:02 actions=output:2
mininet>
```

Increase Network Size


```
➜  ~  sudo mn --topo=tree,1,10 --mac --controller=remote --switch ovsk,protocols=OpenFlow13
*** Creating network
*** Adding controller
*** Adding hosts:
h1 h2 h3 h4 h5 h6 h7 h8 h9 h10
*** Adding switches:
s1
*** Adding links:
(s1, h1) (s1, h2) (s1, h3) (s1, h4) (s1, h5) (s1, h6) (s1, h7) (s1, h8) (s1, h9) (s1, h10)
*** Configuring hosts
h1 h2 h3 h4 h5 h6 h7 h8 h9 h10
*** Starting controller
*** Starting 1 switches
s1
*** Starting CLI:
mininet>
```

Running a high bandwith flow

```
mininet> iperf
*** Iperf: testing TCP bandwidth between h1 and h10
Waiting for iperf to start up...*** Results: ['38.6 Gbits/sec', '38.7 Gbits/sec']
mininet> iperf
*** Iperf: testing TCP bandwidth between h1 and h10
*** Results: ['37.8 Gbits/sec', '37.9 Gbits/sec']
mininet> iperf
*** Iperf: testing TCP bandwidth between h1 and h10
Waiting for iperf to start up...*** Results: ['38.0 Gbits/sec', '38.0 Gbits/sec']
mininet>
```

More info about `dpctl`: https://github.com/CPqD/ofsoftswitch13/wiki/Dpctl-Documentation