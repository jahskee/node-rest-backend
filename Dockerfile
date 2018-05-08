FROM jahskee/fedora-node:base
MAINTAINER jahskee@yahoo.com

ADD ./run.sh /root
RUN chmod 775 /root/run.sh