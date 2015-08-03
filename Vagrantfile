Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/vivid32"
  config.vm.hostname = "mininet-vm"

  config.vm.synced_folder "valve/", "/home/vagrant/valve/"
  config.vm.synced_folder "projects/", "/home/vagrant/projects/"
  config.vm.synced_folder "mininet/", "/home/vagrant/mininet/"

  config.ssh.forward_x11 = true
  config.ssh.forward_agent = true

  config.vm.provision "shell", inline: <<-SHELL
      sudo apt-get update
      sudo apt-get dist-upgrade -y
      sudo apt-get install -y language-pack-en mininet python-{pip,dev,eventlet,routes,webob,paramiko,yaml} git curl zsh
      sudo pip install ryu
      sudo apt-get autoremove -y
      sudo apt-get autoclean -y
  SHELL
end
