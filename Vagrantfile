Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/vivid32"
  config.vm.hostname = "mininet-vm"

  config.vm.synced_folder "valve/", "/home/vagrant/valve/"
  config.vm.synced_folder "projects/", "/home/vagrant/projects/"
  config.vm.synced_folder "mininet/", "/home/vagrant/mininet/"

  config.ssh.forward_x11 = true
  config.ssh.forward_agent = true

  config.vm.network :forwarded_port, guest: 80, host: 8080
  config.vm.network :forwarded_port, guest: 5000, host: 5050
  config.vm.network :private_network, ip: "10.10.10.10"

  config.vm.provision "shell", path: "provision.sh"

  config.vm.provider 'virtualbox' do |v|
    v.gui = false
  end
end
