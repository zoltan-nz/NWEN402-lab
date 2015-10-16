User Friendly Mininet and Ryu Development Environment
===

# Features

* Latest Ubuntu (15.04)
* VM managed by Vagrant
* Latest Mininet
* Latest Ryu
* Mapped `projects` folder to VM
* Ryu Rest controller running automatically
* Brand New Ryu Web Client

# Setup

* Download and install Virtual Box:
* Download and install Vagrant:
* Fork this project and clone.
* Change directory to be inside the repo.

```
cd NWEN402-lab
```

* Initialize and download submodules (mininet, ryu)

```
git submodules init
git submodules update
```

* In your terminal launch the VM with vagrant. (The first setup will take a couple of minutes.)

```
vagrant up
```

* You can ssh in your VM with `vagrant ssh`
* Web client will automatically run, you can open on: `http://localhost:8080`
