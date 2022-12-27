- If you did not see your server restart after changing the index.ts, update 
  the start script to `ts-node-dev --poll src/index.ts`
- typing `thisisunsafe` in chrome unsafe page overrides the blockade  

# ingress-nginx
- an API object that manages external access to the services in a cluster 
  (load balancing, ssl termination, virtual hosting)
- https://kubernetes.github.io/ingress-nginx/deploy
- Run `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.5.1/deploy/static/provider/cloud/deploy.yaml`
- 


---
# Steps to run that stuff

1. Create node server
2. Create node Dockerfile (Dockerfile)
3. Create kubernetes deployment (k8s/depl.yaml)
4. Create kubernetes ClusterIP Service (k8s/depl.yaml)
5. Create skaffold config (root/skaffold.yaml)
6. Create ingress config (k8s/ingress-srv.yaml)
7. Deploy `ingress-nginx`
8. Run `skaffold dev`
