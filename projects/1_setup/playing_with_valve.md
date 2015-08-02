## Playing with Valve

1. Stop `ryu-manager` with `Ctrl-C`
2. Quit from mininet environment
3. Change directory to ~/valve

### Flat

```
# valve.yaml-flat
---
0000000000000001:
  default:
    type: untagged
    vlans: [10]
```

Rename above file to `valve.yaml` and run `ryu-manager`.

In the other console run mininet.

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
mininet> dpctl dump-flows -O OpenFlow13
*** s1 ------------------------------------------------------------------------
OFPST_FLOW reply (OF1.3) (xid=0x2):
 cookie=0xbadc15c0, duration=86.804s, table=0, n_packets=0, n_bytes=0, priority=0 actions=drop
 cookie=0xbadc15c0, duration=76.888s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=2,dl_src=00:00:00:00:00:02,dl_dst=ff:ff:ff:ff:ff:ff actions=output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=77.833s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=8,dl_src=00:00:00:00:00:08,dl_dst=ff:ff:ff:ff:ff:ff actions=output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=76.884s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=10,dl_src=00:00:00:00:00:0a,dl_dst=ff:ff:ff:ff:ff:ff actions=output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=77.243s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=6,dl_src=00:00:00:00:00:06,dl_dst=ff:ff:ff:ff:ff:ff actions=output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=77.371s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=1,dl_src=00:00:00:00:00:01,dl_dst=ff:ff:ff:ff:ff:ff actions=output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=77.568s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=5,dl_src=00:00:00:00:00:05,dl_dst=ff:ff:ff:ff:ff:ff actions=output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=77.323s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=7,dl_src=00:00:00:00:00:07,dl_dst=ff:ff:ff:ff:ff:ff actions=output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=77.090s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=9,dl_src=00:00:00:00:00:09,dl_dst=ff:ff:ff:ff:ff:ff actions=output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=77.682s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=3,dl_src=00:00:00:00:00:03,dl_dst=ff:ff:ff:ff:ff:ff actions=output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=77.144s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=4,dl_src=00:00:00:00:00:04,dl_dst=ff:ff:ff:ff:ff:ff actions=output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=77.090s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=9,dl_src=00:00:00:00:00:09,dl_dst=01:00:00:00:00:00/01:00:00:00:00:00 actions=output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=77.243s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=6,dl_src=00:00:00:00:00:06,dl_dst=01:00:00:00:00:00/01:00:00:00:00:00 actions=output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=77.682s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=3,dl_src=00:00:00:00:00:03,dl_dst=01:00:00:00:00:00/01:00:00:00:00:00 actions=output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=77.144s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=4,dl_src=00:00:00:00:00:04,dl_dst=01:00:00:00:00:00/01:00:00:00:00:00 actions=output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=77.323s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=7,dl_src=00:00:00:00:00:07,dl_dst=01:00:00:00:00:00/01:00:00:00:00:00 actions=output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=77.833s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=8,dl_src=00:00:00:00:00:08,dl_dst=01:00:00:00:00:00/01:00:00:00:00:00 actions=output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=77.568s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=5,dl_src=00:00:00:00:00:05,dl_dst=01:00:00:00:00:00/01:00:00:00:00:00 actions=output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=76.888s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=2,dl_src=00:00:00:00:00:02,dl_dst=01:00:00:00:00:00/01:00:00:00:00:00 actions=output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=77.370s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=1,dl_src=00:00:00:00:00:01,dl_dst=01:00:00:00:00:00/01:00:00:00:00:00 actions=output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=76.883s, table=0, n_packets=0, n_bytes=0, priority=9000,in_port=10,dl_src=00:00:00:00:00:0a,dl_dst=01:00:00:00:00:00/01:00:00:00:00:00 actions=output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=86.803s, table=0, n_packets=7, n_bytes=558, priority=9000,in_port=3 actions=CONTROLLER:65509,output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=86.803s, table=0, n_packets=7, n_bytes=558, priority=9000,in_port=7 actions=CONTROLLER:65509,output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=86.802s, table=0, n_packets=6, n_bytes=480, priority=9000,in_port=8 actions=CONTROLLER:65509,output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=86.803s, table=0, n_packets=7, n_bytes=558, priority=9000,in_port=1 actions=CONTROLLER:65509,output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=86.802s, table=0, n_packets=7, n_bytes=558, priority=9000,in_port=9 actions=CONTROLLER:65509,output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=86.802s, table=0, n_packets=7, n_bytes=558, priority=9000,in_port=10 actions=CONTROLLER:65509,output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=86.803s, table=0, n_packets=7, n_bytes=558, priority=9000,in_port=5 actions=CONTROLLER:65509,output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=86.803s, table=0, n_packets=7, n_bytes=558, priority=9000,in_port=6 actions=CONTROLLER:65509,output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=86.803s, table=0, n_packets=7, n_bytes=558, priority=9000,in_port=2 actions=CONTROLLER:65509,output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=86.803s, table=0, n_packets=7, n_bytes=558, priority=9000,in_port=4 actions=CONTROLLER:65509,output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
 cookie=0xbadc15c0, duration=86.803s, table=0, n_packets=0, n_bytes=0, priority=9000,dl_vlan=10 actions=CONTROLLER:65509,pop_vlan,output:1,output:2,output:3,output:4,output:5,output:6,output:7,output:8,output:9,output:10
mininet>
```

What is `dpctl`?
More info: https://github.com/CPqD/ofsoftswitch13/wiki/Dpctl-Documentation