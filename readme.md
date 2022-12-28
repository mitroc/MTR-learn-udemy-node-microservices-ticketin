- If you did not see your server restart after changing the index.ts, update 
  the start script to `ts-node-dev --poll src/index.ts`
- typing `thisisunsafe` in chrome unsafe page overrides the blockade  
- kubernetes **context** change by _google cloud sdk_
  - install SDK, init and configure 
  - to run `gcloud` in bash set up alias `gcloud="gcloud.cmd"`
  - run `gcloud container clusters get-credentials ticketing-dev`
  
- prepare app for Google Cloud:
  - enable `Cloud Build`
  - set up `skaffold.yaml` properly (cloud build etc.)
  - set up deployment for cloud (proper image name)
  - set up `ingress-nginx` (mandatory command and some other stuff from GCE-GKE 
    section of https://kubernetes.github.io/ingress-nginx/deploy/ )
  - use GCE Load Balancer IP address as ticketing.dev (hosts file)



# ingress-nginx
- an API object that manages external access to the services in a cluster 
  (load balancing, ssl termination, virtual hosting)
- https://kubernetes.github.io/ingress-nginx/deploy
- Run `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.5.1/deploy/static/provider/cloud/deploy.yaml`

---
# Steps to run that stuff locally

1. Create node server
2. Create node Dockerfile (Dockerfile)
3. Create kubernetes deployment (k8s/depl.yaml)
4. Create kubernetes ClusterIP Service (k8s/depl.yaml)
5. Create skaffold config (root/skaffold.yaml)
6. Create ingress config (k8s/ingress-srv.yaml)
7. Deploy `ingress-nginx`
8. Run `skaffold dev`
